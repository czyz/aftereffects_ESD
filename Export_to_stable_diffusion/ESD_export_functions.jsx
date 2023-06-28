//set output location
BrowseButton.onClick = function() {
    
    var outputFolder = Folder.selectDialog("Choose output folder:");

    OutputLocation.text = outputFolder.fsName;
    samplePaths.text = examplePaths();  

    if ( (OutputLocation.text) && (OutputLocation.text != "Output Location") ){
        app.settings.saveSetting("ESD", "outputFolder", OutputLocation.text); //save the new output location
        app.preferences.saveToDisk();
    }
}

includeImagePathButton.onClick = function() {
    specifiedImagePath.hide();
    var showPaths = examplePaths();
    samplePaths.text = showPaths;
    savePathPreference();
}

omitImagePathButton.onClick = function() {
    specifiedImagePath.hide();
    samplePaths.text = examplePaths();  
    savePathPreference();
}

specifiedImagePathButton.onClick = function() {
    specifiedImagePath.show();
    samplePaths.text = examplePaths();  
    savePathPreference();
}

specifiedImagePath.onChange = function() {
    samplePaths.text = examplePaths();  
    savePathPreference();
}

OutputLocation.onChanging = function() {
    samplePaths.text = examplePaths();  
}

//hide upscaling settings if disabled
ESRGAN_enable.onClick = function() {
    if (ESRGAN_enable.value == true) {
        UpscalingFactorPanel.show();
        UpscalingStrengthPanel.show();
    } else {
        UpscalingFactorPanel.hide();
        UpscalingStrengthPanel.hide();
    }
}

//hide face restoration settings if disabled
GFPGAN_enable.onClick = function() {
    if (GFPGAN_enable.value == true) {
        FaceRestStrengthPanel.show();
    } else {
        FaceRestStrengthPanel.hide();
    }
}

//set slider to text value
ESRGAN_Strength.onChanging = function() {
    ESRGAN_StrengthText.text = 
    ESRGAN_Strength.value.toFixed();
}

//set text to slider value
ESRGAN_StrengthText.onChanging = function() {
    ESRGAN_Strength.value = 
    Number (ESRGAN_StrengthText.text);
}

//set text to slider value
GFPGAN_strength.onChanging = function() {
    GFPGAN_strengthText.text = 
    GFPGAN_strength.value.toFixed();
}

//set slider to text value
GFPGAN_strengthText.onChanging = function() {
        GFPGAN_strength.value = 
    Number (GFPGAN_strengthText.text);
}

ExportSequence.onClick = function() { 
    
    exportImageSequence(); 
    ExportToStableDiffusion.close();

}

ExportCurrentFrame.onClick = function() { 
    
    exportImageSequence(true);
    //need to find out why the window isn't closing after this.
    ExportToStableDiffusion.close();

}

SeedGenerate.onClick = function() { 
    generateSeed(); 
    saveSeed();

}

SeedText.onChange = function () {
    saveSeed();
}

//THIRD - primarily non-UI-update/listener functions. This is where most everything gets done.
function initializeSeedMenu() {
    if ( app.settings.haveSetting("ESD", "recentSeeds") ) {
        var savedSeedsString = app.settings.getSetting("ESD", "recentSeeds");
    } else {
        var savedSeedsString = ""; //it's the first seed to save
    }
    
    //update the Recent Seeds dropdown menu
    var RecentSeeds_array = savedSeedsString.split(','); 
    RecentSeeds.removeAll();
    for (var i = 0; i < RecentSeeds_array.length ; i++) {
        RecentSeeds.add("item",RecentSeeds_array[i]);
    }
    RecentSeeds.selection = 0;
}

function generateSeed() {
    var maxSeedValue = Math.pow(2, 32) -1; //max seed value as per numpy (4294967295)
    var SeedValue = generateRandomNumber() * maxSeedValue; 
    SeedText.text = Math.floor(SeedValue);
}

function exportImageSequence(singleFrame) {

    app.settings.saveSetting("ESD","StartRenderCheckbox",StartRenderCheckbox.value);
    saveESRGanSettings();
    saveGFPGanSettings();
    saveMiscSettings();

    var output_modules = getOutputModuleTemplateNames();
    var number_of_output_modules = output_modules.length;
    var png_output_modules_installed = false;

    for (var i=1; i<=number_of_output_modules; i++){
        if ( "PNG with alpha" == (output_modules[i]) || "PNG sequence" == output_modules[i]) { 

            png_output_modules_installed = true;

        }
        i++;
    }

    if (png_output_modules_installed == false) {
        alert("Please install the PNG sequence output modules.");
        return;
    } 

    if (OutputLocation.text == "Output Location") {
        alert("Please set an output location.");
        return;
    } else {

        var comp = app.project.activeItem;

        var current_frame = app.project.activeItem.time / app.project.activeItem.frameDuration;
        var origWorkStartFrame = app.project.activeItem.workAreaStart / app.project.activeItem.frameDuration;
        var origWorkDurationFrames = app.project.activeItem.workAreaDuration / app.project.activeItem.frameDuration;

        var startFrameNumber = app.project.activeItem.displayStartFrame;


//set the comp duration to start and end on the current frame if we're exporting a single frame
        if (!singleFrame) {
            //exporting multiple frames.
            workStartFrame = origWorkStartFrame;
            workDurationFrames = origWorkDurationFrames;
        } else {
            //exporting single frames.
            workStartFrame = current_frame;
            startFrameNumber = current_frame + startFrameNumber;
            workDurationFrames = 1;
        }
                
        var PromptLayers = new Array();
        var orderedPromptLayers = new Array();
        var PromptLayers = getESD_prompt_text_layers(comp.layers);        

        // Now we have a multidimensional array that looks like
        // 0: 1, ESD_prompt_03,next to a ball\n,0.33, 1, true
        // 1: 2, ESD_prompt_02,on the beach,0.33, 2, true
        //the first item in each array is the comp layer number of that ESD_prompt. 
        //The 4th item is the comp layer number after reordering. 5th is whether the layer is activeAtTime

        var promptLayersWarning = "none";

        if (PromptLayers.length < 1) {
            promptLayersWarning = "No prompt text layers found in composition.";
        } else { //There are prompt text layers but are there any that are visible?
            for (var m=0; m<PromptLayers.length; m++) {
                if (PromptLayers[m][5]) {
                    promptLayersWarning = "none";
                } else {
                    promptLayersWarning = "No *visible* prompt text layers in composition.";
                }
            }
        }

        if (promptLayersWarning != "none") {
            alert(promptLayersWarning);
        } else {
            orderedPromptLayers = reorderESD_prompt_text_layers(PromptLayers); //reorder the PromptLayers
        }

        var MLSettings_layer_check = getML_settings_layer(comp.layers);
        if (MLSettings_layer_check.length < 3) {
            alert("Comp has no proper ML_settings layer. Please create one."); //Either we have no ML Settings layer or it doesn't contain all 3 settings
            throw("ML_settings layer required");
            return;
        }

        if (!canWriteFiles()) {
            alert("Can't write files, please check settings.");
            return;
        } else {
            //create subdirectory at output location if needed. If it already exists, create one with an incremented number at its end.
            //        path: OutputLocationPanel
            var f = new Folder(OutputLocation.text+"/"+comp.name);
            if (!f.exists) {
                f.create();
            } else {
                var filenumber = 0;
                while (f.exists) {
                    f = new Folder(OutputLocation.text+"/"+comp.name+"_"+filenumber);
                    filenumber++;
                }
                f.create();
            }


            var ESDBatchFile = new File(f.toString() + "/"+comp.name+".txt");


                ESDBatchFile.encoding = "utf-8";
                ESDBatchFile.open("a");
        }

        // format of a line in the text file
        // a man:0.25 wearing a pineapple hat:0.50 next to a duck:0.25 -I path/to/your/file.png --strength=0.5 -U 2 .75 -G 0.5 -S 1111111111 --save_orig
        
        //iterate through frames from start to end and get keyframe values and prompts and whatnot
        
        for (var i=workStartFrame; i < (workStartFrame + workDurationFrames); i++) { //crawling through the comp frame by frame
            var writeLine = "";
            var prompts_string="";
            app.project.activeItem.time = i*app.project.activeItem.frameDuration;
            var PromptLayers = getESD_prompt_text_layers(comp.layers);
            var currentMLSettings = getML_settings_layer(comp.layers);
            for (var j=0; j < PromptLayers.length; j++) {
                if (PromptLayers[j][5]) { //Layer is active at this time
                    prompts_string = prompts_string + PromptLayers[j][2];                           //prompt text
                    prompts_string = prompts_string + ":" + PromptLayers[j][3].toFixed(2) + " ";    //prompt weight                   
                }

            }
            if (singleFrame) {
                var fileFrameNumber = i + startFrameNumber - workStartFrame - 1;
            } else {
                var fileFrameNumber = i + startFrameNumber; //need to figure out the conditions under which this needs to be startFrameNumber - 1
            }
            var fileAndPath = fileWithPath(f.toString(),comp.name + "_" + ("00000" + fileFrameNumber).slice(-5) + ".png"); //will change this to use padStart once I can get that working.

            //padStart isn't supported by Extendscript, ah well. So this doesn't work, hence the slice hack above            var testPad = 'argh'.padStart(10,"0"); 

            writeLine = prompts_string;
            
            // writeLine += " -I \"" + comp.name + "_" + ("00000" + i).slice(-5) + ".png\""; //will change this to use padStart once I can get that working.
            writeLine += " -I \"" + decodeURI(fileAndPath) + "\""; 

            writeLine += " --strength=" + Number(currentMLSettings[0]).toFixed(2);
            writeLine += " --cfg_scale=" + Number(currentMLSettings[1]).toFixed(2);
            writeLine += " --steps=" + Math.floor(Number(currentMLSettings[2]));

            if (HasAlphaCheckbox.value) {
                writeLine += " --inpaint_replace " + Number(currentMLSettings[3]).toFixed(2);
            }

            if (ESRGAN_enable.value == true) {
                writeLine += " -U " + (Upscale2x.enabled ? 2 : 4) + " " + ESRGAN_StrengthText.text;
            }

            if (GFPGAN_enable.value == true) {
                writeLine += " -G " + GFPGAN_strengthText.text;
            }

            writeLine += " -S " + SeedText.text;

            writeLine += Save_Original.value ? " --save_orig" : "";

            writeLine += Seamless.value ? " --seamless" : "";

            writeLine += " --sampler " + SamplerMenu.selection.text;

            // writeLine += " --outdir " + f.toString() + "/output/"+comp.name+" ;

            writeLine = writeLine.replace(/ +/g, ' '); //replaces multiple spaces with a single space just to sanitize


            ESDBatchFile.writeln (writeLine);

        }

        ESDBatchFile.close();
        //reset comp playhead to original 
        app.project.activeItem.time = origWorkStartFrame * app.project.activeItem.frameDuration;

        //Hide prompt layers
        var PromptLayers = getESD_prompt_text_layers(comp.layers);
        Hide_prompt_text_layers(PromptLayers);


        var queued = app.project.renderQueue.items.add(comp);
        var module = queued.outputModule(1);

        //set the output module. 
        //TODO: test to make sure user has installed output modules

        if (HasAlphaCheckbox.value) {
            module.applyTemplate("PNG with alpha");
        } else {
            module.applyTemplate("PNG sequence");
        }

        if (singleFrame) {
            if (! ((queued.timeSpanStart == 0) && ((workStartFrame * app.project.activeItem.frameDuration) == 0 )) ) {
                queued.timeSpanStart = workStartFrame * app.project.activeItem.frameDuration;
            }    
        }

        // queued.timeSpanStart = startFrameNumber * app.project.activeItem.frameDuration; 
        queued.timeSpanDuration = workDurationFrames * app.project.activeItem.frameDuration;

        // module.file = File(OutputLocationPanel.OutputLocation.text+"/"+comp.name+"_[#####].png");
        module.file = File(f.toString()+"/"+comp.name+"_[#####].png");


        if (StartRenderCheckbox.value) {
            app.project.renderQueue.render();
        }

        comp.openInViewer();
        Show_prompt_text_layers(PromptLayers);

    }
}

function getOutputModuleTemplateNames()
//taken from a comment by A. Cobb at https://community.adobe.com/t5/after-effects-discussions/how-to-list-output-module-templates/td-p/4127207
{
  var currentOMName;
  var OMStringsPrefSection = "Output Module Spec Strings Section v28";
  var OMStringsKeyPrefix = "Output Module Spec Strings Name ";
  var hiddenPrefixRE = /_HIDDEN/;
  var OMList = new Array();

  for(var i = 0; app.preferences.havePref(OMStringsPrefSection, OMStringsKeyPrefix+i, PREFType.PREF_Type_MACHINE_INDEPENDENT_OUTPUT); i++)
  {
    currentOMName = app.preferences.getPrefAsString(OMStringsPrefSection, OMStringsKeyPrefix+i, PREFType.PREF_Type_MACHINE_INDEPENDENT_OUTPUT);
    if(currentOMName.match(hiddenPrefixRE)==null) OMList.push(currentOMName);
  }
  return OMList;
}


function canWriteFiles() {
    //from a comment by Tomas Sinkunas at https://community.adobe.com/t5/after-effects-discussions/how-can-i-check-whether-if-quot-allow-scripts-to-write-files-and-access-network-quot-is-enable-using/m-p/10869640
	var appVersion, commandID, scriptName, tabName;

	appVersion = parseFloat(app.version);

	commandID = 2359;
	tabName = 'General';
	if (appVersion >= 16.1) {
		commandID = 3131;
		tabName = 'Scripting & Expressions';
	}

	if (isSecurityPrefSet()) return true;

	scriptName = (script && script.name) ? script.name : 'Script';
	alert(message = scriptName + ' requires access to write files.\n' +
		'Go to the "' + tabName + '" panel of the application preferences and make sure ' +
		'"Allow Scripts to Write Files and Access Network" is checked.');

	app.executeCommand(commandID);

	return isSecurityPrefSet();

	function isSecurityPrefSet() {
		return app.preferences.getPrefAsLong(
			'Main Pref Section',
			'Pref_SCRIPTING_FILE_NETWORK_SECURITY'
		) === 1;
	}
}

function examplePaths() {

    //Creates the example file paths shown in a TextView in the UI

    var comp = app.project.activeItem;
    var examplePath="";

    if (OutputLocation.text == "Output Location") {
        return ("Please set an output location.");
    }

    if (comp) {
        for (var i=1; i < 3; i++) {
            var f = new Folder(OutputLocation.text+"/"+comp.name);
            // examplePath += f.toString() + "/" + comp.name + "_" + ("00000" + i).slice(-5) + ".png\n";
            examplePath += fileWithPath(f.toString(),comp.name + "_" + ("00000" + i).slice(-5) + ".png\n");
            examplePath = decodeURI(examplePath);
        }
    } else {
        examplePath="Need to have a single comp selected\nin order to generate a path\nthat includes the comp name.";
    }
    return examplePath;
}

function fileWithPath(filepath, filename) {
    if (includeImagePathButton.value) {
        return (filepath + "/" + filename);
    }
    if (omitImagePathButton.value) {
        return (filename);
    }
    if (specifiedImagePathButton.value) {

        var imageDir = filepath.match(/.+\/(.+)\/?/); //This is meant to return the assigned image folder created during export

        if (specifiedImagePath.text.indexOf("\:") > -1) { //If the path contains a colon, we're considering it to be a Windows path
            separator = "\\"; //it's a windows path, separators are backslashes
        } else {
            separator = "\/"; //it's not windows, separators are forward-slashes
        }
        return(specifiedImagePath.text.replace(/'\\'/g, '\\\\') + imageDir[1] + separator + filename);
    }
}

//A bunch of functions for saving and retrieving saved settings

function saveSeed() {

    maxSavedSeeds = 15;

    if ( app.settings.haveSetting("ESD", "recentSeeds") ) {
        var savedSeedsString = app.settings.getSetting("ESD", "recentSeeds");
    } else {
        var savedSeedsString = ""; //it's the first seed to save
    }
    
    //update the Recent Seeds dropdown menu
    var RecentSeeds_array = savedSeedsString.split(','); 
    RecentSeeds.removeAll();
    for (var i = 0; i < RecentSeeds_array.length ; i++) {
        RecentSeeds.add("item",RecentSeeds_array[i]);
    }
    RecentSeeds.selection = 0;

    RecentSeeds_array.unshift(SeedText.text); //add new seed to head of the array

    //trim recent seeds array to maxSavedSeeds
    RecentSeeds_array.length = maxSavedSeeds;

    savedSeedsString = RecentSeeds_array.join(',');

    app.settings.saveSetting("ESD", "recentSeeds", savedSeedsString);
    app.preferences.saveToDisk();

}

function savePathPreference() {
    app.settings.saveSetting("ESD","includeImagePathButton", includeImagePathButton.value);
    app.settings.saveSetting("ESD","omitImagePathButton", omitImagePathButton.value);
    app.settings.saveSetting("ESD","specifiedImagePathButton", specifiedImagePathButton.value);
    app.settings.saveSetting("ESD","specifiedImagePath", specifiedImagePath.text);
    app.preferences.saveToDisk();

}

function getPathPreference() {
    if ( app.settings.haveSetting("ESD", "includeImagePathButton") ) { 
        includeImagePathButton.value = ( app.settings.getSetting("ESD", "includeImagePathButton") === "true" );
    }
    if ( app.settings.haveSetting("ESD", "omitImagePathButton") ) { 
        omitImagePathButton.value = ( app.settings.getSetting("ESD", "omitImagePathButton") === "true" );
    }
    if ( app.settings.haveSetting("ESD", "specifiedImagePathButton") ) { 
        specifiedImagePathButton.value = ( app.settings.getSetting("ESD", "specifiedImagePathButton") === "true" );
        if (( app.settings.getSetting("ESD", "specifiedImagePathButton") === "true" )) { specifiedImagePath.show(); }
    }

    if ( app.settings.haveSetting("ESD", "specifiedImagePath") ) { 
        specifiedImagePath.text = app.settings.getSetting("ESD", "specifiedImagePath");
    }


}

function saveESRGanSettings() {
    app.settings.saveSetting("ESD","ESRGAN_enable",ESRGAN_enable.value);
    app.settings.saveSetting("ESD","Upscale2x",Upscale2x.value);
    app.settings.saveSetting("ESD","Upscale4x",Upscale4x.value);
    app.settings.saveSetting("ESD","ESRGAN_Strength",ESRGAN_Strength.value);
    app.preferences.saveToDisk();
}

function saveGFPGanSettings() {
    app.settings.saveSetting("ESD","GFPGAN_enable",GFPGAN_enable.value);
    app.settings.saveSetting("ESD","GFPGAN_strength",GFPGAN_strength.value);
    app.preferences.saveToDisk();
}

function saveMiscSettings() {
    app.settings.saveSetting("ESD","Save_Original",Save_Original.value);
    app.settings.saveSetting("ESD","Seamless",Seamless.value);
    app.settings.saveSetting("ESD","SamplerMenu",SamplerMenu.selection);
    app.preferences.saveToDisk();
}

function getESRGanGFPGanMiscSettings() {

    if ( app.settings.haveSetting("ESD", "ESRGAN_enable") ) { ESRGAN_enable.value = ( app.settings.getSetting("ESD","ESRGAN_enable") === "true" ); }
    if ( app.settings.haveSetting("ESD", "Upscale2x") ) { Upscale2x.value = ( app.settings.getSetting("ESD","Upscale2x") === "true" ); }
    if ( app.settings.haveSetting("ESD", "Upscale4x") ) { Upscale4x.value = ( app.settings.getSetting("ESD","Upscale4x") === "true" ); }
    if ( app.settings.haveSetting("ESD", "ESRGAN_Strength") ) { ESRGAN_Strength.value = app.settings.getSetting("ESD", "ESRGAN_Strength"); }

    if ( app.settings.haveSetting("ESD", "GFPGAN_enable") ) { GFPGAN_enable.value = ( app.settings.getSetting("ESD","GFPGAN_enable") === "true" ); }
    if ( app.settings.haveSetting("ESD", "GFPGAN_strength") ) { GFPGAN_strength.value = app.settings.getSetting("ESD", "GFPGAN_strength"); }

    if ( app.settings.haveSetting("ESD", "Save_Original") ) { Save_Original.value = ( app.settings.getSetting("ESD","Save_Original") === "true" ); }
    if ( app.settings.haveSetting("ESD", "Seamless") ) { Seamless.value = ( app.settings.getSetting("ESD","Seamless") === "true" ); }
    if ( app.settings.haveSetting("ESD", "SamplerMenu") ) { SamplerMenu.selection = app.settings.getSetting("ESD", "SamplerMenu"); }

    if ( app.settings.haveSetting("ESD", "StartRenderCheckbox") ) { StartRenderCheckbox.value = ( app.settings.getSetting("ESD","StartRenderCheckbox") === "true" ); }

    //run these to update the strength text field values
    ESRGAN_StrengthText.text = ESRGAN_Strength.value.toFixed();
    GFPGAN_strengthText.text = GFPGAN_strength.value.toFixed();
}


