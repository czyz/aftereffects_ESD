//SECOND - our event listeners
ClearSavedPreferences.onClick = function() {
    deleteSavedPreferences();
}

function deleteSavedPreferences() {
    app.preferences.deletePref("Settings_ESD","includeImagePathButton");
    app.preferences.deletePref("Settings_ESD","omitImagePathButton");
    app.preferences.deletePref("Settings_ESD","specifiedImagePathButton");
    app.preferences.deletePref("Settings_ESD","specifiedImagePath");
    app.preferences.deletePref("Settings_ESD", "outputFolder"); //save the new output location
    app.preferences.deletePref("Settings_ESD", "recentSeeds");

    app.preferences.deletePref("Settings_ESD","ESRGAN_enable");
    app.preferences.deletePref("Settings_ESD","Upscale2x");
    app.preferences.deletePref("Settings_ESD","Upscale4x");
    app.preferences.deletePref("Settings_ESD","ESRGAN_Strength");

    app.preferences.deletePref("Settings_ESD","GFPGAN_enable");
    app.preferences.deletePref("Settings_ESD","GFPGAN_strength");
    
    app.preferences.deletePref("Settings_ESD","Save_Original");
    app.preferences.deletePref("Settings_ESD","Seamless");
    app.preferences.deletePref("Settings_ESD","SamplerMenu");

    app.preferences.deletePref("Settings_ESD","StartRenderCheckbox");

    app.preferences.saveToDisk();
}

ShowPromptLayers.onClick = function() {

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    Show_prompt_text_layers(PromptLayers);


}

HidePromptLayers.onClick = function() {

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    Hide_prompt_text_layers(PromptLayers);

    
}

ReorderPrompts.onClick = function() {

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    reorderESD_prompt_text_layers(PromptLayers);

}

AddMLSettings.onClick = function() {
    app.beginUndoGroup("Add ML Settings Layer");

    var comp = app.project.activeItem;

    if (comp == null || !(comp instanceof CompItem)){ 
        alert("Please establish a comp as the active item and run the script again");
        throw '';
    } 

    var MLSettingsLayer = comp.layers.addSolid([.8,.8,1], 'ML_settings', comp.width, comp.height, 1);
    MLSettingsLayer.adjustmentLayer = true;

    var slider3 = MLSettingsLayer.Effects.addProperty("ADBE Slider Control"); 
    // slider.property(1).setValueAtTime(0, 0.5); //setting a keyframe so hitting the 'u' key in the timeline will display this value
    slider3.property(1).setValue(0.5); //for no keyframes
    slider3.name = "Image_Strength";

    var slider2 = MLSettingsLayer.Effects.addProperty("ADBE Slider Control");
    slider2.property(1).setValue(10); 
    slider2.name = "cfg_scale";
    
    var slider1 = MLSettingsLayer.Effects.addProperty("ADBE Slider Control");
    slider1.property(1).setValue(50);
    slider1.name = "steps";

    var slider4 = MLSettingsLayer.Effects.addProperty("ADBE Slider Control");
    slider1.property(1).setValue(1.0);
    slider1.name = "inpainting_strength";


    app.endUndoGroup();
}

AddPrompt.onClick = function() {
app.beginUndoGroup("Add ESD Prompt");

//TODO add support for PromptTextField

    var comp = app.project.activeItem;

    if (comp == null || !(comp instanceof CompItem)){ 
        alert("Please establish a comp as the active item and run the script again");
        throw '';
    } 

    var PromptLayers = getESD_prompt_text_layers(comp.layers);
    var numPromptLayers = PromptLayers.length;
    var lastBoxYPosition = 0;

    var newPromptNumber=1; //Let's iterate through all the current prompt numbers and set newPromptNumber to one past the highest number in the set
    for (var i=0; i < numPromptLayers; i++) {
        var ESDPromptNumber = Number(PromptLayers[i][1].match(/^ESD_prompt_(\d+)/)[1]);
        if (ESDPromptNumber >= newPromptNumber) {
            newPromptNumber = ESDPromptNumber + 1;
            var lastPromptRect = app.project.activeItem.layer(PromptLayers[i][4]).sourceRectAtTime(0,false);
            lastBoxYPosition = app.project.activeItem.layer(PromptLayers[i][4]).position.value[1];
        }
    }

    //unfortunately padStart isn't part of extendscript's javascript interpreter yet. 
    //So slice here is a workaround that will fail on numbers larger than 2 digits.
    var newPromptLayerName = "ESD_prompt_" + ("00" + newPromptNumber).slice(-2); 

    var promptMargin = 20;
    var promptFontSize = 30;
    var currentTextYPosition = promptMargin;
    var currentTextXPosition = promptMargin;

    if (newPromptNumber != 1) {
        currentTextYPosition = lastBoxYPosition + lastPromptRect.height + promptMargin;
    }

    var PromptText = comp.layers.addBoxText([comp.width - (2*promptMargin), promptFontSize*3]);
    PromptText.name = newPromptLayerName;
    var PromptSourceTextProperties = PromptText.property("ADBE Text Properties").property("ADBE Text Document");
    var PromptDocument = PromptSourceTextProperties.value;
    PromptDocument.fontSize = 30;

    //Optionally the user can enter the prompt text before hitting the add prompt button, and we'll use that text.
    //This might save a bit of effort on the part of the user, as they won't have to go clicking in the comp to select and edit the text.
    if (PromptTextField.text.length > 0) {
        PromptDocument.text = PromptTextField.text;
        PromptTextField.text = ""; //clear the text field for the next round
    } else {
        PromptDocument.text = 'prompt text goes here';
    }
    PromptSourceTextProperties.setValue(PromptDocument);

    PromptDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
    PromptDocument.fillColor = [1, 0.754, 0.0181];
    var textRect = PromptText.sourceRectAtTime(0,false);
    PromptText.anchorPoint.setValue([textRect.left, textRect.top,0]);
    PromptText.property("Position").setValue([currentTextXPosition,currentTextYPosition]);
    PromptSourceTextProperties.setValue(PromptDocument);

    var slider = PromptText.Effects.addProperty("ADBE Slider Control"); 
    slider.property(1).setValueAtTime(0, 1); //setting a keyframe so hitting the 'u' key in the timeline will display this value
    // slider.property(1).setValue(1); //for no keyframes
    slider.name = "prompt_strength";



app.endUndoGroup();



                                                                                 

}

MakeExplainComp.onClick = function() {
    app.beginUndoGroup("Make Explain Comp");

        
    var badSelection = false;
    if (app['project']['selection'].length == 2) {
        if (app['project']['selection']['0'].typeName == 'Footage') {
            var footageItem = app['project']['selection']['0'];
        } else {
            //first selected item was not footage
            badSelection = true;
        }
        if (app['project']['selection']['1'].typeName == 'Composition') {
            var promptCompItem = app['project']['selection']['1'];
        } else {
            //second selected item was not Comp
            badSelection = true;
        }
    } else {
        //Selected items were not Comp and then Footage in that order
        badSelection = true;
    }
    if (badSelection) {
        alert("Please select a composition and its resulting image sequence,\nin that order.");
    } else {
        //OK we've got the components footageItem and promptCompItem, let's make a Comp
        var newCompWidth = (footageItem.width + promptCompItem.width);
        var showCompName = footageItem.name + "_show";
        var showComp = app.project.items.addComp(showCompName, newCompWidth, footageItem.height, 1, 
                                                                footageItem.duration, footageItem.frameRate);
        showComp.layers.addSolid([0,0,0], "Black bg", newCompWidth, footageItem.height, 1, footageItem.duration);

        var promptCompLayer = showComp.layers.add(promptCompItem);
        promptCompLayer.property("position").setValue([newCompWidth - (promptCompItem.width/2), footageItem.height - (promptCompItem.height/2), 0]);
        var footageItemLayer = showComp.layers.add(footageItem);
        footageItemLayer.property("position").setValue([(footageItem.width/2),(footageItem.height/2),0]);

        //Get the bounds of the blank area of the comp, if it exists
        var infoMargin = 10;
        var infoRightEdge = newCompWidth - infoMargin; 
        var infoLeftEdge = newCompWidth - promptCompItem.width + infoMargin;
        var infoBottomEdge = footageItem.height - promptCompItem.height - infoMargin;
        var infoTopEdge = 0 + infoMargin;
        
        var currentTextYPosition = infoTopEdge;

        var MLSettingsText = showComp.layers.addBoxText([infoRightEdge-infoLeftEdge, infoBottomEdge - infoTopEdge]);
        var MLSettingsSourceTextProperties = MLSettingsText.property("ADBE Text Properties").property("ADBE Text Document");
        var MLSettingsDocument = MLSettingsSourceTextProperties.value;
        MLSettingsDocument.fontSize = 30;

        MLSettingsText.property("Source Text").expression = 'Math.floor(comp(thisComp.layer(thisComp.numLayers -1).name).layer("ML_settings").effect("Image_Strength")("Slider") * 100) ' + 
        '+ "% Image Strength" + "\\n" + ' + '\n' +
        'Number(comp(thisComp.layer(thisComp.numLayers -1).name).layer("ML_settings").effect("cfg_scale")("Slider")).toFixed(2) + " cfg_scale\\n" + ' + '\n' +
        'comp(thisComp.layer(thisComp.numLayers -1).name).layer("ML_settings").effect("steps")("Slider") + " steps\\n" + ' + '\n' + 
        'Math.floor(comp(thisComp.layer(thisComp.numLayers -1).name).layer("ML_settings").effect("inpainting_strength")("Slider") * 100) ' + 
        '+ "% Inpainting Strength"';
        MLSettingsSourceTextProperties.setValue(MLSettingsDocument);

        MLSettingsDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
        MLSettingsDocument.fillColor = [0.4384, 0.9572, 0.9566];
        MLSettingsText.name = "ML_Settings_display";
        var textRect = MLSettingsText.sourceRectAtTime(0,false);
        MLSettingsText.anchorPoint.setValue([textRect.left, textRect.top,0]);
        MLSettingsText.property("Position").setValue([infoLeftEdge,currentTextYPosition]);
        MLSettingsSourceTextProperties.setValue(MLSettingsDocument);

        currentTextYPosition += textRect.height + (3*infoMargin);
        
        // add pct_01, disp_prompt1, and more pct and disp text layers as needed
        var PromptLayers = getESD_prompt_text_layers(promptCompItem.layers);
        for (var j=0; j < PromptLayers.length; j++) {

 //               var PromptDisplayTextLayer = showComp.layers.addBoxText([infoRightEdge-infoLeftEdge, infoBottomEdge - (infoTopEdge + currentTextYPosition)]);
 //               This seemed like a good idea at the time -- making the bottom edge of the prompt text box line up with the bottom of the text info area above the 
 //               Result image sequence, but in practice it turns out when there are many prompts this just makes addBoxText complain and fail when it's told to have a height
 //               less than zero. Ah well. An arbitrary text height it is.

                var PromptDisplayTextLayer = showComp.layers.addBoxText([infoRightEdge-infoLeftEdge, 600]);


                PromptDisplayTextLayer.name = "prompt_" + (j+1);
                var PromptSourceTextProperties = PromptDisplayTextLayer.property("ADBE Text Properties").property("ADBE Text Document");
                var PromptDisplayDocument = PromptSourceTextProperties.value;
                PromptDisplayDocument.fontSize = 28;
                PromptDisplayTextLayer.property("Source Text").expression = 'if ( comp(thisComp.layer(thisComp.numLayers -1).name).layer("' + 
                PromptLayers[j][1] + '").active ) { Math.floor(comp(thisComp.layer(thisComp.numLayers -1).name).layer("' + 
                PromptLayers[j][1] + '").effect("prompt_strength")("Slider") * 100) + "%   " + ' + 
                'comp(thisComp.layer(thisComp.numLayers -1).name).layer("' + PromptLayers[j][1] + '").text.sourceText }';
                PromptSourceTextProperties.setValue(PromptDisplayDocument);

                var textRect = PromptDisplayTextLayer.sourceRectAtTime(0,false);

                PromptDisplayDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                PromptDisplayDocument.fillColor = [1, 0.754, 0.0181];
                PromptDisplayTextLayer.anchorPoint.setValue([textRect.left, textRect.top,0]);
                PromptDisplayTextLayer.property("Position").setValue([infoLeftEdge,currentTextYPosition]);
                PromptSourceTextProperties.setValue(PromptDisplayDocument);


                addColoriserFirstWord(PromptDisplayTextLayer, [0,1,0]);

                currentTextYPosition += textRect.height + (2*infoMargin);

        }


    }

    app.endUndoGroup();
    

}

LaunchExportWindow.onClick = function() {
//launch the output window
//@include "Export_to_stable_diffusion/ESD_export_window.jsx"
}

function Hide_prompt_text_layers(ESDPromptLayers) {

    var num_ESDPromptLayers = ESDPromptLayers.length;

    for (var i=0; i < num_ESDPromptLayers; i++) {
        app.project.activeItem.layer(ESDPromptLayers[i][4]).enabled = false;
    }
}

function Show_prompt_text_layers(ESDPromptLayers) {

    var num_ESDPromptLayers = ESDPromptLayers.length;

    for (var i=0; i < num_ESDPromptLayers; i++) {
        app.project.activeItem.layer(ESDPromptLayers[i][4]).enabled = true;
    }
}

function reorderESD_prompt_text_layers(ESDPromptLayers) {

    var num_ESDPromptLayers = ESDPromptLayers.length;
    var OrderedPromptLayerArray = [];
    //Comp.layer(1);

    //let's get our ESDPromptLayers in order within the OrderedPromptLayerArray.
    OrderedPromptLayerArray[0] = ESDPromptLayers[0];
    var matched;
    for (var i=1; i < num_ESDPromptLayers; i++) {
        var ESDPromptNumber = ESDPromptLayers[i][1].match(/^ESD_prompt_(\d+)/)[1];
        matched = false;
        for (var j = 0; j < OrderedPromptLayerArray.length; j++) {
            var OrderedArrayItemPromptNumber = OrderedPromptLayerArray[j][1].match(/^ESD_prompt_(\d+)/)[1];
            if (ESDPromptNumber < OrderedArrayItemPromptNumber) {
                if ( !matched ) {
                    OrderedPromptLayerArray.splice(j, 0, ESDPromptLayers[i]);
                    matched = true;
                }
                /*If the layer we just spliced upward in the stack was a on a lower track than the rest and has been moved upward, move all subsequenct prompts down one*/
                if ( ESDPromptLayers[i][4] > ESDPromptLayers[j][4] ) { 
                    ESDPromptLayers[j][4]++;
                }
                // break;
            }
        }
        if (!matched)
        OrderedPromptLayerArray[OrderedPromptLayerArray.length] = ESDPromptLayers[i];
    }


    // Let's reorder the active comp layers based on the order of our now ordered array. We'll walk through
    // our ordered array (which is an array of arrays), and use the comp layer numbers that are the first element of each array.

   app.project.activeItem.layer(OrderedPromptLayerArray[0][4]).moveToBeginning();

    //if this moves that layer above other ESD_Prompt layers, their layer index number within the comp just went up by 1, need to change that value for them
   for (var i=1; i< OrderedPromptLayerArray.length; i++) {
       app.project.activeItem.layer(OrderedPromptLayerArray[i][4]).moveAfter(app.project.activeItem.layer(i));
   }

    return OrderedPromptLayerArray; // returning our ordered prompt layer array

}

function getESD_prompt_text_layers(CompLayers) {
    var num_layers = CompLayers.length;
    var ESDPromptLayers = new Array();
    var j=0;
    var prompt_text=" ";

    //TODO: test that this test still works when using this function to generate prompt files
    if (app.project.activeItem) { //if there's no active item (i.e. we're running this to generate an explain comp) set current time to 0
        var currentTime = app.project.activeItem.time;
    } else {
        currentTime = 0;
    }

    for (var i=1; i<=num_layers; i++){
        if ( /^ESD_prompt.+/.test(CompLayers[i].name) ) { //find the layers whose name starts with ESD_prompt, those are ours
            prompt_text = CompLayers[i].property(2).property(1).value.text;
            //sanitizing the text
            prompt_text = prompt_text.replace(/[\r\n]+/g, ' '); //replace all newlines with spaces
            prompt_text = prompt_text.replace(/ +/g, ' '); //replaces multiple spaces with a single space
            prompt_text = prompt_text.replace(/^ /g, ''); //remove starting space 
            prompt_text = prompt_text.replace(/ $/g, ''); //remove ending space 

            ESDPromptLayers[j] = new Array(i,
                                            CompLayers[i].name,
                                            prompt_text, 
                                            (CompLayers[i].effect("prompt_strength") == null) ? "" : CompLayers[i].effect("prompt_strength").property(1).valueAtTime(currentTime, true),
                                            i,                                          
                                            CompLayers[i].activeAtTime(currentTime)     
                                            );  //added 4th element to represent the actual layer number for this element in the comp
                                                //added 5th elemen t to store whether the layer is active at the current time
            // ESDPromptLayers[j] = CompLayers[i];
            j++;
        }
    }
    return ESDPromptLayers;
}

function getML_settings_layer(CompLayers) {
    var num_layers = CompLayers.length;
    var CFG_Scale = 300;      //setting it out of range so we can test later that it's been reset to a value read from the layer
    var Steps = 300;          //setting it out of range so we can test later that it's been reset to a value read from the layer
    var Image_strength = 300; //setting it out of range so we can test later that it's been reset to a value read from the layer
    var inpainting_strength = 300; //setting it out of range so we can test later that it's been reset to a value read from the layer
    // var ML_settings = new Array();
    var j=0;
    var currentTime = app.project.activeItem.time;
    for (var i=1; i<=num_layers; i++){
        if ( /^ML_setting.+/.test(CompLayers[i].name) ) { //find the layer whose name starts with ML_settings
            Image_strength = CompLayers[i].property("Effects").property("Image_Strength").property("Slider").valueAtTime(currentTime, true);
            CFG_Scale = CompLayers[i].property("Effects").property("cfg_scale").property("Slider").valueAtTime(currentTime, true);
            Steps = CompLayers[i].property("Effects").property("steps").property("Slider").valueAtTime(currentTime, true);
            inpainting_strength = CompLayers[i].property("Effects").property("inpainting_strength").property("Slider").valueAtTime(currentTime, true);
            break; //there should be only one ML_settings layer, so might as well stop iterating through layers once we've found it
            j++;
        }
    }

    (Image_strength == 300) ? 0.75 : Image_strength;
    (CFG_Scale == 300) ? 7.50 : CFG_Scale;
    (Steps == 300) ? 50 : Steps;
    (inpainting_strength == 300) ? 1.0 : inpainting_strength;

    ML_settings = [Image_strength, CFG_Scale, Steps, inpainting_strength];

    // if (Image_strength == 300) {
    //     Image_strength = 0.75;
    // }

    // return Image_strength;
    return ML_settings;
}

//based on Tomas Sinkunas's comment at https://community.adobe.com/t5/after-effects-discussions/automatic-color-change-for-specific-words/m-p/9875932
//This function will colorize the first word of a text object
function addColoriserFirstWord(textLayer, color) {
    var grpTextAnimators = textLayer.property("ADBE Text Properties").property(4);
    var grpTextAnimator = grpTextAnimators.addProperty("ADBE Text Animator");
    grpTextAnimator.name = 'Colorize First Word';
    var textSelector = grpTextAnimator.property(1).addProperty("ADBE Text Selector");
    textSelector.property(7).property("ADBE Text Range Units").setValue(2); //set units to Index
    textSelector.property(7).property("ADBE Text Range Type2").setValue(3); //set units to index based on 'words'

    textSelector.property("ADBE Text Index Start").expression = 0;
    textSelector.property("ADBE Text Index End").expression = 1;
    var fillPropertyGreen = grpTextAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Fill Color");
    fillPropertyGreen.setValue(color);
}


