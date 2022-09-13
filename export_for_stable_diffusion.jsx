

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ExportToStableDiffusion","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Export to Stable Diffusion","preferredSize":[300,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-6":{"id":6,"type":"Panel","parentId":49,"style":{"enabled":true,"varName":"OutputLocationPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Output Location","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-7":{"id":7,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"OutputLocation","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Output Location","justify":"left","preferredSize":[357,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Button","parentId":45,"style":{"enabled":true,"varName":"ExportSequence","text":"Sequence","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export the entire sequence."}},"item-9":{"id":9,"type":"StaticText","parentId":43,"style":{"enabled":true,"varName":"ExplanationText","creationProps":{},"softWrap":true,"text":"Export the active/selected composition to the specified location, as well as a batch file to pass to the dream.py command which will include your keyframed strength and scale values.","justify":"left","preferredSize":[307,0],"alignment":"fill","helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":22,"style":{"enabled":true,"varName":"ESRGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-15":{"id":15,"type":"Slider","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_Strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-16":{"id":16,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingFactorPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Upscaling Factor","preferredSize":[null,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-17":{"id":17,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":5,"alignChildren":["left","top"],"alignment":"fill"}},"item-18":{"id":18,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale4x","text":"4x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":false}},"item-19":{"id":19,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale2x","text":"2x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":true}},"item-21":{"id":21,"type":"TabbedPanel","parentId":49,"style":{"enabled":true,"varName":"","preferredSize":[450,0],"margins":10,"alignment":null,"selection":22}},"item-22":{"id":22,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"UpscalingTab","text":"Upscaling","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-23":{"id":23,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"FaceRestTab","text":"Face Restoration","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-24":{"id":24,"type":"Checkbox","parentId":23,"style":{"enabled":true,"varName":"GFPGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-25":{"id":25,"type":"Slider","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-26":{"id":26,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":"FaceRestStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-27":{"id":27,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SaveOrigTab","text":"Save Original","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-28":{"id":28,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Save_Original","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-29":{"id":29,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_StrengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Button","parentId":6,"style":{"enabled":true,"varName":"BrowseButton","text":"Browse…","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SeedTab","text":"Seed","orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-33":{"id":33,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":"RecentSeeds","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-34":{"id":34,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"RecentSeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Recent Seeds","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-35":{"id":35,"type":"EditText","parentId":36,"style":{"enabled":true,"varName":"SeedText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1111111111","justify":"left","preferredSize":[286,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"SeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Seed","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-37":{"id":37,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-38":{"id":38,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-43":{"id":43,"type":"Panel","parentId":49,"style":{"enabled":true,"varName":"ExportPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Panel","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-44":{"id":44,"type":"Button","parentId":45,"style":{"enabled":true,"varName":"ExportCurrentFrame","text":"Current Frame","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export only the current frame.\\nTo test settings or to generate a still image."}},"item-45":{"id":45,"type":"Panel","parentId":43,"style":{"enabled":true,"varName":"ExportButtonsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-46":{"id":46,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"SeedGenerate","text":"Generate","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-47":{"id":47,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"mainPanel","preferredSize":[0,0],"margins":10,"alignment":null,"selection":49}},"item-48":{"id":48,"type":"Tab","parentId":47,"style":{"enabled":true,"varName":"SetupTab","text":"Setup","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-49":{"id":49,"type":"Tab","parentId":47,"style":{"enabled":true,"varName":"OutputTab","text":"Output","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-50":{"id":50,"type":"Panel","parentId":48,"style":{"enabled":true,"varName":"AddCtrl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"First!","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-51":{"id":51,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"InitialSetup","text":"Initial Setup","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-52":{"id":52,"type":"Button","parentId":53,"style":{"enabled":true,"varName":"AddPrompt","text":"+ Prompt TXT","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-53":{"id":53,"type":"Panel","parentId":48,"style":{"enabled":true,"varName":"PromptLayerManage","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Prompt Layer Management","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-54":{"id":54,"type":"Button","parentId":53,"style":{"enabled":true,"varName":"ReorderPrompts","text":"Reorder Prompt Layers","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-55":{"id":55,"type":"Button","parentId":53,"style":{"enabled":true,"varName":"HideShowPromptLayers","text":"Hide/Show Prompt Layers","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}}},"order":[0,47,49,6,7,31,21,22,10,16,19,18,17,15,29,37,23,24,26,25,30,38,27,28,32,36,35,46,34,33,43,9,45,44,8,48,50,51,53,52,54,55],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":22}
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

// MAINPANEL
// =========
var mainPanel = ExportToStableDiffusion.add("tabbedpanel", undefined, undefined, {name: "mainPanel"}); 
    mainPanel.alignChildren = "fill"; 
    mainPanel.preferredSize.width = 498.141; 
    mainPanel.margins = 0; 

// OUTPUTTAB
// =========
var OutputTab = mainPanel.add("tab", undefined, undefined, {name: "OutputTab"}); 
    OutputTab.text = "Output"; 
    OutputTab.orientation = "column"; 
    OutputTab.alignChildren = ["left","top"]; 
    OutputTab.spacing = 10; 
    OutputTab.margins = 10; 

// OUTPUTLOCATIONPANEL
// ===================
var OutputLocationPanel = OutputTab.add("panel", undefined, undefined, {name: "OutputLocationPanel"}); 
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
var tpanel1 = OutputTab.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 450; 
    tpanel1.margins = 0; 

// UPSCALINGTAB
// ============
var UpscalingTab = tpanel1.add("tab", undefined, undefined, {name: "UpscalingTab"}); 
    UpscalingTab.text = "Upscaling"; 
    UpscalingTab.orientation = "column"; 
    UpscalingTab.alignChildren = ["left","top"]; 
    UpscalingTab.spacing = 10; 
    UpscalingTab.margins = 10; 

var ESRGAN_enable = UpscalingTab.add("checkbox", undefined, undefined, {name: "ESRGAN_enable"}); 
    ESRGAN_enable.text = "Enable"; 
    ESRGAN_enable.value = true; 

// UPSCALINGFACTORPANEL
// ====================
var UpscalingFactorPanel = UpscalingTab.add("panel", undefined, undefined, {name: "UpscalingFactorPanel"}); 
    UpscalingFactorPanel.text = "Upscaling Factor"; 
    UpscalingFactorPanel.orientation = "column"; 
    UpscalingFactorPanel.alignChildren = ["left","top"]; 
    UpscalingFactorPanel.spacing = 10; 
    UpscalingFactorPanel.margins = 10; 
    UpscalingFactorPanel.alignment = ["fill","top"]; 

var Upscale2x = UpscalingFactorPanel.add("radiobutton", undefined, undefined, {name: "Upscale2x"}); 
    Upscale2x.text = "2x"; 
    Upscale2x.value = true; 
    Upscale2x.preferredSize.width = 150; 

var Upscale4x = UpscalingFactorPanel.add("radiobutton", undefined, undefined, {name: "Upscale4x"}); 
    Upscale4x.text = "4x"; 
    Upscale4x.preferredSize.width = 150; 

// UPSCALINGSTRENGTHPANEL
// ======================
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
    ESRGAN_StrengthText.text = "75"; 

var percentsign = UpscalingStrengthPanel.add("statictext", undefined, undefined, {name: "percentsign"}); 
    percentsign.text = "%"; 
    percentsign.alignment = ["left","fill"]; 

// FACERESTTAB
// ===========
var FaceRestTab = tpanel1.add("tab", undefined, undefined, {name: "FaceRestTab"}); 
    FaceRestTab.text = "Face Restoration"; 
    FaceRestTab.orientation = "column"; 
    FaceRestTab.alignChildren = ["left","top"]; 
    FaceRestTab.spacing = 10; 
    FaceRestTab.margins = 10; 

var GFPGAN_enable = FaceRestTab.add("checkbox", undefined, undefined, {name: "GFPGAN_enable"}); 
    GFPGAN_enable.text = "Enable"; 
    GFPGAN_enable.value = true; 

// FACERESTSTRENGTHPANEL
// =====================
var FaceRestStrengthPanel = FaceRestTab.add("panel", undefined, undefined, {name: "FaceRestStrengthPanel"}); 
    FaceRestStrengthPanel.text = "Strength"; 
    FaceRestStrengthPanel.orientation = "row"; 
    FaceRestStrengthPanel.alignChildren = ["left","top"]; 
    FaceRestStrengthPanel.spacing = 10; 
    FaceRestStrengthPanel.margins = 10; 
    FaceRestStrengthPanel.alignment = ["fill","top"]; 

var GFPGAN_strength = FaceRestStrengthPanel.add("slider", undefined, undefined, undefined, undefined, {name: "GFPGAN_strength"}); 
    GFPGAN_strength.minvalue = 0; 
    GFPGAN_strength.maxvalue = 100; 
    GFPGAN_strength.value = 75; 
    GFPGAN_strength.preferredSize.width = 367; 
    GFPGAN_strength.alignment = ["left","fill"]; 

var GFPGAN_strengthText = FaceRestStrengthPanel.add('edittext {properties: {name: "GFPGAN_strengthText"}}'); 
    GFPGAN_strengthText.text = "75"; 

var percentsign1 = FaceRestStrengthPanel.add("statictext", undefined, undefined, {name: "percentsign1"}); 
    percentsign1.text = "%"; 
    percentsign1.alignment = ["left","fill"]; 

// SAVEORIGTAB
// ===========
var SaveOrigTab = tpanel1.add("tab", undefined, undefined, {name: "SaveOrigTab"}); 
    SaveOrigTab.text = "Save Original"; 
    SaveOrigTab.orientation = "column"; 
    SaveOrigTab.alignChildren = ["left","top"]; 
    SaveOrigTab.spacing = 10; 
    SaveOrigTab.margins = 10; 

var Save_Original = SaveOrigTab.add("checkbox", undefined, undefined, {name: "Save_Original"}); 
    Save_Original.text = "Enable"; 

// SEEDTAB
// =======
var SeedTab = tpanel1.add("tab", undefined, undefined, {name: "SeedTab"}); 
    SeedTab.text = "Seed"; 
    SeedTab.orientation = "row"; 
    SeedTab.alignChildren = ["left","top"]; 
    SeedTab.spacing = 10; 
    SeedTab.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = UpscalingTab; 

// SEEDPANEL
// =========
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

// RECENTSEEDPANEL
// ===============
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

// EXPORTPANEL
// ===========
var ExportPanel = OutputTab.add("panel", undefined, undefined, {name: "ExportPanel"}); 
    ExportPanel.text = "Panel"; 
    ExportPanel.orientation = "row"; 
    ExportPanel.alignChildren = ["left","top"]; 
    ExportPanel.spacing = 10; 
    ExportPanel.margins = 10; 
    ExportPanel.alignment = ["fill","top"]; 

var ExplanationText = ExportPanel.add("group", undefined , {name: "ExplanationText"}); 
    ExplanationText.getText = function() { var t=[]; for ( var n=0; n<ExplanationText.children.length; n++ ) { var text = ExplanationText.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
    ExplanationText.preferredSize.width = 307; 
    ExplanationText.orientation = "column"; 
    ExplanationText.alignChildren = ["left","center"]; 
    ExplanationText.spacing = 0; 
    ExplanationText.alignment = ["left","fill"]; 

    ExplanationText.add("statictext", undefined, "Export the active/selected composition to the"); 
    ExplanationText.add("statictext", undefined, "specified location, as well as a batch file to pass"); 
    ExplanationText.add("statictext", undefined, "to the dream.py command which will include"); 
    ExplanationText.add("statictext", undefined, "your keyframed strength and scale values."); 
    ExplanationText.preferredSize.width = 307; 

// EXPORTBUTTONSPANEL
// ==================
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

// SETUPTAB
// ========
var SetupTab = mainPanel.add("tab", undefined, undefined, {name: "SetupTab"}); 
    SetupTab.text = "Setup"; 
    SetupTab.orientation = "column"; 
    SetupTab.alignChildren = ["left","top"]; 
    SetupTab.spacing = 10; 
    SetupTab.margins = 10; 

// MAINPANEL
// =========
mainPanel.selection = OutputTab; 

// ADDCTRL
// =======
var AddCtrl = SetupTab.add("panel", undefined, undefined, {name: "AddCtrl"}); 
    AddCtrl.text = "First!"; 
    AddCtrl.orientation = "column"; 
    AddCtrl.alignChildren = ["left","top"]; 
    AddCtrl.spacing = 10; 
    AddCtrl.margins = 10; 
    AddCtrl.alignment = ["left","top"]; 

var InitialSetup = AddCtrl.add("button", undefined, undefined, {name: "InitialSetup"}); 
    InitialSetup.text = "Initial Setup"; 
    InitialSetup.alignment = ["fill","top"]; 

// PROMPTLAYERMANAGE
// =================
var PromptLayerManage = SetupTab.add("panel", undefined, undefined, {name: "PromptLayerManage"}); 
    PromptLayerManage.text = "Prompt Layer Management"; 
    PromptLayerManage.orientation = "column"; 
    PromptLayerManage.alignChildren = ["left","top"]; 
    PromptLayerManage.spacing = 10; 
    PromptLayerManage.margins = 10; 

var AddPrompt = PromptLayerManage.add("button", undefined, undefined, {name: "AddPrompt"}); 
    AddPrompt.text = "+ Prompt TXT"; 
    AddPrompt.alignment = ["fill","top"]; 

var ReorderPrompts = PromptLayerManage.add("button", undefined, undefined, {name: "ReorderPrompts"}); 
    ReorderPrompts.text = "Reorder Prompt Layers"; 
    ReorderPrompts.alignment = ["fill","top"]; 

var HideShowPromptLayers = PromptLayerManage.add("button", undefined, undefined, {name: "HideShowPromptLayers"}); 
    HideShowPromptLayers.text = "Hide/Show Prompt Layers"; 
    HideShowPromptLayers.alignment = ["fill","top"]; 




//layout over - now for the functions and logic
//set output location

//items path: ExportToStableDiffusion.mainPanel.OutputTab.OutputLocationPanel
BrowseButton.onClick = function() {
    var outputFolder = Folder.selectDialog("Choose output folder:");
    OutputLocation.text = outputFolder.fsName;
}


//hide upscaling settings if disabled
//items path: ExportToStableDiffusion.mainPanel.OutputTab.tpanel1.UpscalingTab
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
//items path: ExportToStableDiffusion.mainPanel.OutputTab.tpanel1.FaceRestTab
GFPGAN_enable.onClick = function() {
    if (GFPGAN_enable.value == true) {
        FaceRestStrengthPanel.show();
    } else {
        FaceRestStrengthPanel.hide();
    }
}

function exportImageSequence(singleFrame) {
    if (OutputLocation.text == "Output Location") {
        alert("Please set an output location.");
    } else {

        var comp = app.project.activeItem;
        // alert(app.project.activeItem.time);

        var current_frame = app.project.activeItem.time / app.project.activeItem.frameDuration;
        var origWorkStartFrame = app.project.activeItem.workAreaStart / app.project.activeItem.frameDuration;
        var origWorkDurationFrames = app.project.activeItem.workAreaDuration / app.project.activeItem.frameDuration;


//set the comp duration to start and end on the current frame if we're exporting a single frame
        if (!singleFrame) {
            //alert("doing multiple frames.");
            workStartFrame = origWorkStartFrame;
            workDurationFrames = origWorkDurationFrames;
        } else {
            //alert("doing single frames.");
            workStartFrame = current_frame;
            workDurationFrames = 1;
        }
                
        var PromptLayers = new Array();
        var orderedPromptLayers = new Array();
        var PromptLayers = getESD_prompt_text_layers(comp.layers);
        Hide_prompt_text_layers(PromptLayers);

        var ImageStrength = getImage_strength_layer(comp.layers);
        

        // Now we have a multidimensional array that looks like
        // 0: 1, ESD_prompt_03,next to a ball\n,0.33, 1
        // 1: 2, ESD_prompt_02,on the beach,0.33, 2
        //the first item in each array is the comp layer number of that ESD_prompt. The last item is the comp layer number after reordering

        if (PromptLayers.length < 1) {
            alert("No prompt text found in composition.");
        } else {
            orderedPromptLayers = reorderESD_prompt_text_layers(PromptLayers); //reorder the PromptLayers
        }

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

        if (!canWriteFiles()) {
            alert("Can't write files, please check settings.");
        } else {
            ESDBatchFile.encoding = "utf-8";
            ESDBatchFile.open("a");
        }

        // format of a line in the text file
        // a man:0.25 wearing a pineapple hat:0.50 next to a duck:0.25 -I path/to/your/file.png --strength=0.5 -U 2 .75 -G 0.5 -S 1111111111 --save_orig
        
        //iterate through frames from start to end and get keyframe values and prompts and whatnot
        
        for (var i=workStartFrame; i < workDurationFrames; i++) { //crawling through the comp frame by frame
            var writeLine = "";
            var prompts_string="";
            app.project.activeItem.time = i*app.project.activeItem.frameDuration;
            var PromptLayers = getESD_prompt_text_layers(comp.layers);
            for (var j=0; j < PromptLayers.length; j++) {
                prompts_string = prompts_string + PromptLayers[j][2];
                prompts_string = prompts_string + ":" + PromptLayers[j][3].toFixed(2) + " ";                 
            }
            //this should work! ah well            var testPad = 'argh'.padStart(10,"0"); 
            //writeLine = prompts_string + "-I " + f.toString() + "/" + comp.name + "_" + i.toString().padStart(5,'0') + ".png";



            writeLine = prompts_string + "-I " + comp.name + "_" + ("00000" + i).slice(-5) + ".png"; //will change this to use padStart once I can get that working.
            writeLine += " --strength=" + ImageStrength.toFixed(2);

            if (ESRGAN_enable.value == true) {
                writeLine += " -U " + (Upscale2x.enabled ? 2 : 4) + " " + ESRGAN_StrengthText.text;
            }

            if (GFPGAN_enable.value == true) {
                writeLine += " -G " + GFPGAN_strengthText.text;
            }

            writeLine += " -S " + SeedText.text;

            writeLine += Save_Original.value ? " --save_orig" : "";

            writeLine = writeLine.replace(/ +/g, ' '); //replaces multiple spaces with a single space just to sanitize


            ESDBatchFile.writeln (writeLine);

        }

        ESDBatchFile.close();
        //reset comp playhead to original 
        app.project.activeItem.time = origWorkStartFrame * app.project.activeItem.frameDuration;


        var queued = app.project.renderQueue.items.add(comp);
        var module = queued.outputModule(1);

        //set the output module. 
        //TODO: add output module to users' settings
        module.applyTemplate("PNG sequence");

        queued.timeSpanStart = workStartFrame * app.project.activeItem.frameDuration;
        queued.timeSpanDuration = workDurationFrames * app.project.activeItem.frameDuration;

        // module.file = File(OutputLocationPanel.OutputLocation.text+"/"+comp.name+"_[#####].png");
        module.file = File(f.toString()+"/"+comp.name+"_[#####].png");



        // app.project.renderQueue.render();
    }
}

function canWriteFiles() { //from a comment by Tomas Sinkunas at https://community.adobe.com/t5/after-effects-discussions/create-a-txt-file-in-extendscript/m-p/9645024
    if (isSecurityPrefSet()) return true;
    alert(script.name + " requires access to write files.\n" +
        "Go to the \"General\" panel of the application preferences and make sure " +
        "\"Allow Scripts to Write Files and Access Network\" is checked.");
    app.executeCommand(2359);
    return isSecurityPrefSet();
    function isSecurityPrefSet() {
        return app.preferences.getPrefAsLong(
            "Main Pref Section",
            "Pref_SCRIPTING_FILE_NETWORK_SECURITY"
        ) === 1;
    }
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
    var currentTime = app.project.activeItem.time;
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
                                            CompLayers[i].effect("prompt_strength").property(1).valueAtTime(currentTime, true),
                                            i); //added this last element to represent the actual layer number for this element in the comp
                                            // we'll change this as we re-order this list to represent where to find each layer within the comp
                                            // for when we re-order the actual layers.
            // ESDPromptLayers[j] = CompLayers[i];
            j++;
        }
    }
    return ESDPromptLayers;
}

function getImage_strength_layer(CompLayers) {
    var num_layers = CompLayers.length;
    var Image_strength = 300; //setting it out of range so we can test later that it's been reset to a value read from the layer
    var j=0;
    var currentTime = app.project.activeItem.time;
    for (var i=1; i<=num_layers; i++){
        if ( /^ML_strength.+/.test(CompLayers[i].name) ) { //find the layers whose name starts with ESD_prompt, those are ours
            Image_strength = CompLayers[i].property(2).property(1).value.text;
            break; //there should be only one ML_strength layer, so might as well stop iterating through layers once we've found it
            j++;
        }
    }
    if (Image_strength == 300) {
        Image_strength = 0.75;
    }
    return Image_strength;
}

function generateSeed() {
    var SeedValue = generateRandomNumber() * 10000000000;
    SeedText.text = Math.floor(SeedValue);
    //TODO: push latest seed onto list of Recent Seeds
}

ESRGAN_Strength.onChanging = function() {
    ESRGAN_StrengthText.text = 
    ESRGAN_Strength.value.toFixed();
}

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

ExportSequence.onClick = function() { exportImageSequence(); };

ExportCurrentFrame.onClick = function() { 
    exportImageSequence(true);

};


SeedGenerate.onClick = function() { generateSeed(); };






ExportToStableDiffusion.show();
