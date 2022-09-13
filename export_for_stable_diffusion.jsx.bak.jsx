

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ExportToStableDiffusion","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Export to Stable Diffusion","preferredSize":[300,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-6":{"id":6,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"OutputLocationPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Output Location","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-7":{"id":7,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"OutputLocation","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Output Location","justify":"left","preferredSize":[357,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Button","parentId":45,"style":{"enabled":true,"varName":"ExportSequence","text":"Sequence","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export the entire sequence."}},"item-9":{"id":9,"type":"StaticText","parentId":43,"style":{"enabled":true,"varName":"ExplanationText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Export the active/selected composition to the specified location, as well as a batch file to pass to the dream.py command which will include your keyframed strength and scale values.","justify":"left","preferredSize":[307,0],"alignment":"fill","helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":22,"style":{"enabled":true,"varName":"ESRGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-15":{"id":15,"type":"Slider","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_Strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-16":{"id":16,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingFactorPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Upscaling Factor","preferredSize":[null,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-17":{"id":17,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":5,"alignChildren":["left","top"],"alignment":"fill"}},"item-18":{"id":18,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":null,"text":"4x","preferredSize":[150,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":null,"text":"2x","preferredSize":[150,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"","preferredSize":[450,0],"margins":10,"alignment":null,"selection":27}},"item-22":{"id":22,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"UpscalingTab","text":"Upscaling","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-23":{"id":23,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"FaceRestTab","text":"Face Restoration","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-24":{"id":24,"type":"Checkbox","parentId":23,"style":{"enabled":true,"varName":"GFPGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-25":{"id":25,"type":"Slider","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-26":{"id":26,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":"FaceRestStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-27":{"id":27,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SaveOrigTab","text":"Save Original","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-28":{"id":28,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Save_Original","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-29":{"id":29,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_StrengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Button","parentId":6,"style":{"enabled":true,"varName":"BrowseButton","text":"Browse…","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SeedTab","text":"Seed","orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-33":{"id":33,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":"RecentSeeds","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-34":{"id":34,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"RecentSeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Recent Seeds","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-35":{"id":35,"type":"EditText","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1111111111","justify":"left","preferredSize":[286,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"SeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Seed","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-37":{"id":37,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-38":{"id":38,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-43":{"id":43,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"ExportPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Panel","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-44":{"id":44,"type":"Button","parentId":45,"style":{"enabled":true,"varName":"ExportCurrentFrame","text":"Current Frame","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export only the current frame.\\nTo test settings or to generate a still image."}},"item-45":{"id":45,"type":"Panel","parentId":43,"style":{"enabled":true,"varName":"ExportButtonsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-46":{"id":46,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"SeedGenerate","text":"Generate","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}}},"order":[0,6,7,31,21,22,10,16,19,18,17,15,29,37,23,24,26,25,30,38,27,28,32,36,35,46,34,33,43,9,45,44,8],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":6}
*/ 

// EXPORTTOSTABLEDIFFUSION
// =======================
var ExportToStableDiffusion = new Window("dialog"); 
    ExportToStableDiffusion.text = "Export to Stable Diffusion"; 
    ExportToStableDiffusion.preferredSize.width = 300; 
    ExportToStableDiffusion.orientation = "column"; 
    ExportToStableDiffusion.alignChildren = ["center","top"]; 
    ExportToStableDiffusion.spacing = 10; 
    ExportToStableDiffusion.margins = 16; 

// OutputLocationPanel
// ======
var OutputLocationPanel = ExportToStableDiffusion.add("panel", undefined, undefined, {name: "OutputLocationPanel"}); 
    OutputLocationPanel.text = "Output Location"; 
    OutputLocationPanel.orientation = "row"; 
    OutputLocationPanel.alignChildren = ["left","top"]; 
    OutputLocationPanel.spacing = 10; 
    OutputLocationPanel.margins = 10; 
    OutputLocationPanel.alignment = ["fill","top"]; 

var OutputLocation = OutputLocationPanel.add('edittext {properties: {name: "OutputLocation"}}'); 
    OutputLocation.text = "Output Location"; 
    OutputLocation.preferredSize.width = 357; 

var BrowseButton = OutputLocationPanel.add("button", undefined, undefined, {name: "BrowseButton"}); 
    BrowseButton.text = "Browse…"; 

// TPANEL1
// =======
var tpanel1 = ExportToStableDiffusion.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 450; 
    tpanel1.margins = 0; 

// UpscalingTab
// ====
var UpscalingTab = tpanel1.add("tab", undefined, undefined, {name: "UpscalingTab"}); 
    UpscalingTab.text = "Upscaling"; 
    UpscalingTab.orientation = "column"; 
    UpscalingTab.alignChildren = ["left","top"]; 
    UpscalingTab.spacing = 10; 
    UpscalingTab.margins = 10; 

var ESRGAN_enable = UpscalingTab.add("checkbox", undefined, undefined, {name: "ESRGAN_enable"}); 
    ESRGAN_enable.text = "Enable"; 
    ESRGAN_enable.value = true;

// UpscalingFactorPanel
// ======
var UpscalingFactorPanel = UpscalingTab.add("panel", undefined, undefined, {name: "UpscalingFactorPanel"}); 
    UpscalingFactorPanel.text = "Upscaling Factor"; 
    UpscalingFactorPanel.orientation = "column"; 
    UpscalingFactorPanel.alignChildren = ["left","top"]; 
    UpscalingFactorPanel.spacing = 10; 
    UpscalingFactorPanel.margins = 10; 
    UpscalingFactorPanel.alignment = ["fill","top"]; 

var radiobutton1 = UpscalingFactorPanel.add("radiobutton", undefined, undefined, {name: "radiobutton1"}); 
    radiobutton1.text = "2x"; 
    radiobutton1.preferredSize.width = 150; 
    radiobutton1.value = true;

var radiobutton2 = UpscalingFactorPanel.add("radiobutton", undefined, undefined, {name: "radiobutton2"}); 
    radiobutton2.text = "4x"; 
    radiobutton2.preferredSize.width = 150; 

// UpscalingStrengthPanel
// ======
var UpscalingStrengthPanel = UpscalingTab.add("panel", undefined, undefined, {name: "UpscalingStrengthPanel"}); 
    UpscalingStrengthPanel.text = "Strength"; 
    UpscalingStrengthPanel.orientation = "row"; 
    UpscalingStrengthPanel.alignChildren = ["left","top"]; 
    UpscalingStrengthPanel.spacing = 5; 
    UpscalingStrengthPanel.margins = 10; 
    UpscalingStrengthPanel.alignment = ["fill","top"]; 

var ESRGAN_Strength = UpscalingStrengthPanel.add("slider", undefined, undefined, undefined, undefined, {name: "ESRGAN_Strength"}); 
    ESRGAN_Strength.minvalue = 0; 
    ESRGAN_Strength.maxvalue = 100; 
    ESRGAN_Strength.value = 75; 
    ESRGAN_Strength.preferredSize.width = 367; 
    ESRGAN_Strength.alignment = ["left","fill"]; 

var ESRGAN_StrengthText = UpscalingStrengthPanel.add('edittext {justify: "right", properties: {name: "ESRGAN_StrengthText"}}'); 
    ESRGAN_StrengthText.characters = 3;
    ESRGAN_StrengthText.text = "50"; 

var percentsign = UpscalingStrengthPanel.add("statictext", undefined, undefined, {name: "percentsign"}); 
    percentsign.text = "%"; 
    percentsign.alignment = ["left","fill"]; 

// FaceRestTab
// ====
var FaceRestTab = tpanel1.add("tab", undefined, undefined, {name: "FaceRestTab"}); 
    FaceRestTab.text = "Face Restoration"; 
    FaceRestTab.orientation = "column"; 
    FaceRestTab.alignChildren = ["left","top"]; 
    FaceRestTab.spacing = 10; 
    FaceRestTab.margins = 10; 

var GFPGAN_enable = FaceRestTab.add("checkbox", undefined, undefined, {name: "GFPGAN_enable"}); 
    GFPGAN_enable.text = "Enable"; 
    GFPGAN_enable.value = true;

// FaceRestStrengthPanel
// ======
var FaceRestStrengthPanel = FaceRestTab.add("panel", undefined, undefined, {name: "FaceRestStrengthPanel"}); 
    FaceRestStrengthPanel.text = "Strength"; 
    FaceRestStrengthPanel.orientation = "row"; 
    FaceRestStrengthPanel.alignChildren = ["left","top"]; 
    FaceRestStrengthPanel.spacing = 10; 
    FaceRestStrengthPanel.margins = 10; 
    FaceRestStrengthPanel.alignment = ["fill","top"]; 

var GFPGAN_Strength = FaceRestStrengthPanel.add("slider", undefined, undefined, undefined, undefined, {name: "GFPGAN_Strength"}); 
    GFPGAN_Strength.minvalue = 0; 
    GFPGAN_Strength.maxvalue = 100; 
    GFPGAN_Strength.value = 50; 
    GFPGAN_Strength.preferredSize.width = 367; 
    GFPGAN_Strength.alignment = ["left","fill"]; 

var GFPGAN_StrengthText = FaceRestStrengthPanel.add('edittext {justify: "right", properties: {name: "GFPGAN_StrengthText"}}'); 
    GFPGAN_StrengthText.text = "50"; 
    GFPGAN_StrengthText.characters = 3;

var percentsign1 = FaceRestStrengthPanel.add("statictext", undefined, undefined, {name: "percentsign1"}); 
    percentsign1.text = "%"; 
    percentsign1.alignment = ["left","fill"]; 

// SaveOrigTab
// ====
var SaveOrigTab = tpanel1.add("tab", undefined, undefined, {name: "SaveOrigTab"}); 
    SaveOrigTab.text = "Save Original"; 
    SaveOrigTab.orientation = "column"; 
    SaveOrigTab.alignChildren = ["left","top"]; 
    SaveOrigTab.spacing = 10; 
    SaveOrigTab.margins = 10; 

var Save_Original = SaveOrigTab.add("checkbox", undefined, undefined, {name: "Save_Original"}); 
    Save_Original.text = "Enable"; 

// SeedTab
// ====
var SeedTab = tpanel1.add("tab", undefined, undefined, {name: "SeedTab"}); 
    SeedTab.text = "Seed"; 
    SeedTab.orientation = "row"; 
    SeedTab.alignChildren = ["left","top"]; 
    SeedTab.spacing = 10; 
    SeedTab.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = UpscalingTab; 

// SeedPanel
// ======
var SeedPanel = SeedTab.add("panel", undefined, undefined, {name: "SeedPanel"}); 
    SeedPanel.text = "Seed"; 
    SeedPanel.orientation = "column"; 
    SeedPanel.alignChildren = ["left","top"]; 
    SeedPanel.spacing = 10; 
    SeedPanel.margins = 10; 

var SeedText = SeedPanel.add('edittext {properties: {name: "SeedText"}}'); 
    SeedText.text = "1111111111"; 
    SeedText.preferredSize.width = 286; 

var SeedGenerate = SeedPanel.add("button", undefined, undefined, {name: "SeedGenerate"}); 
    SeedGenerate.text = "Generate"; 
    SeedGenerate.alignment = ["center","top"]; 

// RecentSeedPanel
// ======
var RecentSeedPanel = SeedTab.add("panel", undefined, undefined, {name: "RecentSeedPanel"}); 
    RecentSeedPanel.text = "Recent Seeds"; 
    RecentSeedPanel.orientation = "column"; 
    RecentSeedPanel.alignChildren = ["left","top"]; 
    RecentSeedPanel.spacing = 10; 
    RecentSeedPanel.margins = 10; 

var RecentSeeds_array = ["Item 1","-","Item 2"]; 
var RecentSeeds = RecentSeedPanel.add("dropdownlist", undefined, undefined, {name: "RecentSeeds", items: RecentSeeds_array}); 
    RecentSeeds.selection = 0; 
    RecentSeeds.alignment = ["fill","top"]; 

// ExportPanel
// ======
var ExportPanel = ExportToStableDiffusion.add("panel", undefined, undefined, {name: "ExportPanel"}); 
    ExportPanel.text = "Panel"; 
    ExportPanel.orientation = "row"; 
    ExportPanel.alignChildren = ["left","top"]; 
    ExportPanel.spacing = 10; 
    ExportPanel.margins = 10; 
    ExportPanel.alignment = ["fill","top"]; 

var ExplanationText = ExportPanel.add("group"); 
    ExplanationText.preferredSize.width = 307; 
    ExplanationText.orientation = "column"; 
    ExplanationText.alignChildren = ["left","center"]; 
    ExplanationText.spacing = 0; 
    ExplanationText.alignment = ["left","fill"]; 

    ExplanationText.add("statictext", undefined, "Export the active/selected composition to the", {name: "ExplanationText"}); 
    ExplanationText.add("statictext", undefined, "specified location, as well as a batch file to pass", {name: "ExplanationText"}); 
    ExplanationText.add("statictext", undefined, "to the dream.py command which will include", {name: "ExplanationText"}); 
    ExplanationText.add("statictext", undefined, "your keyframed strength and scale values.", {name: "ExplanationText"}); 
    ExplanationText.preferredSize.width = 307; 

// ExportButtonsPanel
// ======
var ExportButtonsPanel = ExportPanel.add("panel", undefined, undefined, {name: "ExportButtonsPanel"}); 
    ExportButtonsPanel.text = "Export"; 
    ExportButtonsPanel.orientation = "column"; 
    ExportButtonsPanel.alignChildren = ["left","top"]; 
    ExportButtonsPanel.spacing = 10; 
    ExportButtonsPanel.margins = 10; 

var ExportCurrentFrame = ExportButtonsPanel.add("button", undefined, undefined, {name: "ExportCurrentFrame"}); 
    ExportCurrentFrame.helpTip = "Export only the current frame.\nTo test settings or to generate a still image."; 
    ExportCurrentFrame.text = "Current Frame"; 
    ExportCurrentFrame.alignment = ["fill","top"]; 

var ExportSequence = ExportButtonsPanel.add("button", undefined, undefined, {name: "ExportSequence"}); 
    ExportSequence.helpTip = "Export the entire sequence."; 
    ExportSequence.text = "Sequence"; 
    ExportSequence.alignment = ["fill","top"]; 


//layout over - now for the functions and logic
//set output location
OutputLocationPanel.BrowseButton.onClick = function() {
    var outputFolder = Folder.selectDialog("Choose output folder:");
    OutputLocationPanel.OutputLocation.text = outputFolder.fsName;
}

//hide upscaling settings if disabled
ExportToStableDiffusion.tpanel1.UpscalingTab.ESRGAN_enable.onClick = function() {
    if (ExportToStableDiffusion.tpanel1.UpscalingTab.ESRGAN_enable.value == true) {
        ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingFactorPanel.show();
        ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.show();
    } else {
        ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingFactorPanel.hide();
        ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.hide();
    }
}

//hide face restoration settings if disabled
ExportToStableDiffusion.tpanel1.FaceRestTab.GFPGAN_enable.onClick = function() {
    if (ExportToStableDiffusion.tpanel1.FaceRestTab.GFPGAN_enable.value == true) {
        ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.show();
    } else {
        ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.hide();
    }
}

function exportImageSequence() {
    if (OutputLocationPanel.OutputLocation.text == "Output Location") {
        alert("Please set an output location.");
    } else {
        var comp = app.project.activeItem;
        var queued = app.project.renderQueue.items.add(comp);
        var module = queued.outputModule(1);

        //set the output module. 
        //TODO: add output module to users' settings
        module.applyTemplate("PNG sequence");

        //create subdirectory at output location if needed. If it already exists, create one with an incremented number at its end.
        var f = new Folder(OutputLocationPanel.OutputLocation.text+"/"+comp.name);
        if (!f.exists) {
            f.create();
        } else {
            var filenumber = 0;
            while (f.exists) {
                f = new Folder(OutputLocationPanel.OutputLocation.text+"/"+comp.name+"_"+filenumber);
                filenumber++;
            }
            f.create();
        }

        // module.file = File(OutputLocationPanel.OutputLocation.text+"/"+comp.name+"_[#####].png");
        module.file = File(f.toString()+"/"+comp.name+"_[#####].png");

        // app.project.renderQueue.render();

        //CompItem.workAreaStart
        //The time when the Composition work area begins, in seconds.

        //CompItem.workAreaDuration
        //The duration of the work area in seconds. This is the difference of the start-point and end-point times of the Composition work area.

        //app.project.activeItem.frameDuration
        //use to get frame numbers from those other vars

        


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

    //TODO!!! I think the way to reorder these layers is to select them in order, cut, and paste.
    //hmm, works manually but can't find a way for extendscript to do the clipboard actions.

    // Let's reorder the active comp layers based on the order of our now ordered array. We'll walk through
    // our ordered array (which is an array of arrays), and use the comp layer numbers that are the first element of each array.
  
//    alert("moving: " + app.project.activeItem.layer(OrderedPromptLayerArray[0][4]).name + " to beginning");
   app.project.activeItem.layer(OrderedPromptLayerArray[0][4]).moveToBeginning();

    //if this moves that layer above other ESD_Prompt layers, their layer index number just went up by 1, need to change that value for them

   for (var i=1; i< OrderedPromptLayerArray.length; i++) {
    //    alert("moving: " + app.project.activeItem.layer(OrderedPromptLayerArray[i][4]).name + " after " + app.project.activeItem.layer(i).name);
       app.project.activeItem.layer(OrderedPromptLayerArray[i][4]).moveAfter(app.project.activeItem.layer(i));
        //if this moves that layer above other ESD_Prompt layers, their layer index number just went up by 1, need to change that value for them
   }
    
//    for (var i=0; i< OrderedPromptLayerArray.length; i++) {
//        app.project.activeItem.layer(OrderedPromptLayerArray[i][0]).selected = true;
        //if this moves that layer above other ESD_Prompt layers, their layer index number just went up by 1, need to change that value for them
//    }
    

    return OrderedPromptLayerArray; // returning our ordered prompt layer array

}

function getESD_prompt_text_layers(CompLayers) {
    var num_layers = CompLayers.length;
    var ESDPromptLayers = new Array();
    var j=0;
    var prompt_text;
    for (var i=1; i<=num_layers; i++){
        if ( /^ESD_prompt.+/.test(CompLayers[i].name) ) { //find the layers whose name starts with ESD_prompt, those are ours
            prompt_text = CompLayers[i].property(2).property(1).value.text;
            prompt_text = prompt_text.replace(/[\r\n]+/g, ' '); //replace all newlines with spaces
            prompt_text = prompt_text.replace(/ +/g, ' '); //replaces multiple spaces with a single space
            ESDPromptLayers[j] = new Array(i, 
                                            CompLayers[i].name, 
                                            prompt_text, 
                                            CompLayers[i].effect("prompt_strength").property(1).value,
                                            i); //added this last element to represent the actual layer number for this element in the comp
                                            // we'll change this as we re-order this list to represent where to find each layer within the comp
                                            // for when we re-order the actual layers.
            // ESDPromptLayers[j] = CompLayers[i];
            j++;
        }
    }
    return ESDPromptLayers;
}

function exportFrame() {
    if (OutputLocationPanel.OutputLocation.text == "Output Location") {
        alert("Please set an output location.");
    } else {
        var comp = app.project.activeItem;
        
        // alert(app.project.activeItem.time);
        var current_frame = app.project.activeItem.time / app.project.activeItem.frameDuration;
        
        var PromptLayers = new Array();
        var orderedPromptLayers = new Array();
        var PromptLayers = getESD_prompt_text_layers(comp.layers);
        

        // Now we have a multidimensional array that looks like
        // 0: 1, ESD_prompt_03,next to a ball\n,0.33
        // 1: 2, ESD_prompt_02,on the beach,0.33
        // 2: 3, ESD_prompt_01,a tree,0.33
        //the first item in each array is the comp layer number of that ESD_prompt.

        if (PromptLayers.length < 1) {
            alert("No prompt text found in composition.");
        } else {
            orderedPromptLayers = reorderESD_prompt_text_layers(PromptLayers); //reorder the PromptLayers
        }

        // qItem.timeSpanStart=
        // qItem.timeSpanDuration=qItem.comp.frameDuration; // One frame long


        // var queued = app.project.renderQueue.items.add(comp);
        // var module = queued.outputModule(1);
        // module.applyTemplate("PNG sequence");

        // module.file = File(OutputLocationPanel.OutputLocation.text+"/"+comp.name);
        // app.project.renderQueue.render();
    }
    ExportToStableDiffusion.ExportPanel.ExportButtonsPanel.ExportCurrentFrame.active = false; //shouldn't have to do this
}

function generateSeed() {
    var SeedValue = generateRandomNumber() * 10000000000;
    ExportToStableDiffusion.tpanel1.SeedTab.SeedPanel.SeedText.text = Math.floor(SeedValue);
    //TODO: push latest seed onto list of Recent Seeds
}

ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_Strength.onChanging = function() {
    ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_StrengthText.text = 
    ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_Strength.value.toFixed();
}

ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_StrengthText.onChanging = function() {
    ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_Strength.value = 
    Number (ExportToStableDiffusion.tpanel1.UpscalingTab.UpscalingStrengthPanel.ESRGAN_StrengthText.text);
}

//set text to slider value
ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_Strength.onChanging = function() {
    ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_StrengthText.text = 
    ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_Strength.value.toFixed();
}

//set slider to text value
ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_StrengthText.onChanging = function() {
        ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_Strength.value = 
    Number (ExportToStableDiffusion.tpanel1.FaceRestTab.FaceRestStrengthPanel.GFPGAN_StrengthText.text);
}



ExportToStableDiffusion.ExportPanel.ExportButtonsPanel.ExportSequence.onClick = function() { exportImageSequence(); };

ExportToStableDiffusion.ExportPanel.ExportButtonsPanel.ExportCurrentFrame.onClick = function() { exportFrame(); };
// ExportToStableDiffusion.ExportPanel.ExportButtonsPanel.ExportCurrentFrame.active = false; //shouldn't have to do this

// format of a line in the text file
// a man:0.25 wearing a pineapple hat:0.50 next to a duck:0.25 -I path/to/your/file.png --strength=0.5 -U 2 .75 -G 0.5 -S 1111111111 --save_orig

ExportToStableDiffusion.tpanel1.SeedTab.SeedPanel.SeedGenerate.onClick = function() { generateSeed(); };


ExportToStableDiffusion.show();




