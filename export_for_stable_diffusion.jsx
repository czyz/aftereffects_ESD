
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ExportToStableDiffusion","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Export to Stable Diffusion","preferredSize":[300,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-7":{"id":7,"type":"EditText","parentId":63,"style":{"enabled":true,"varName":"OutputLocation","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Output Location","justify":"left","preferredSize":[352,0],"alignment":"fill","helpTip":null}},"item-8":{"id":8,"type":"Button","parentId":74,"style":{"enabled":true,"varName":"ExportSequence","text":"Sequence","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export the entire sequence."}},"item-9":{"id":9,"type":"StaticText","parentId":43,"style":{"enabled":true,"varName":"ExplanationText","creationProps":{},"softWrap":true,"text":"Export the active/selected composition to the specified location, as well as a batch file to pass to the dream.py command which will include your keyframed strength and scale values.","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":22,"style":{"enabled":true,"varName":"ESRGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-15":{"id":15,"type":"Slider","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_Strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-16":{"id":16,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingFactorPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Upscaling Factor","preferredSize":[null,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-17":{"id":17,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":5,"alignChildren":["left","top"],"alignment":"fill"}},"item-18":{"id":18,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale4x","text":"4x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":false}},"item-19":{"id":19,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale2x","text":"2x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":true}},"item-21":{"id":21,"type":"TabbedPanel","parentId":49,"style":{"enabled":true,"varName":"","preferredSize":[450,0],"margins":10,"alignment":"fill","selection":71}},"item-22":{"id":22,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"UpscalingTab","text":"Upscaling","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-23":{"id":23,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"FaceRestTab","text":"Face Restoration","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-24":{"id":24,"type":"Checkbox","parentId":23,"style":{"enabled":true,"varName":"GFPGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-25":{"id":25,"type":"Slider","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-26":{"id":26,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":"FaceRestStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-27":{"id":27,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"MiscTab","text":"Misc","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-28":{"id":28,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Save_Original","text":"Save Original","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-29":{"id":29,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_StrengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Button","parentId":63,"style":{"enabled":true,"varName":"BrowseButton","text":"Browse…","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SeedTab","text":"Seed","orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-33":{"id":33,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":"RecentSeeds","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-34":{"id":34,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"RecentSeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Recent Seeds","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-35":{"id":35,"type":"EditText","parentId":36,"style":{"enabled":true,"varName":"SeedText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1111111111","justify":"left","preferredSize":[286,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"SeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Seed","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-37":{"id":37,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-38":{"id":38,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-43":{"id":43,"type":"Panel","parentId":49,"style":{"enabled":true,"varName":"ExportPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"right"}},"item-44":{"id":44,"type":"Button","parentId":74,"style":{"enabled":true,"varName":"ExportCurrentFrame","text":"Current Frame","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export only the current frame.\\nTo test settings or to generate a still image."}},"item-46":{"id":46,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"SeedGenerate","text":"Generate","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-47":{"id":47,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"mainPanel","preferredSize":[0,0],"margins":10,"alignment":null,"selection":49}},"item-48":{"id":48,"type":"Tab","parentId":47,"style":{"enabled":true,"varName":"SetupTab","text":"Setup","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-49":{"id":49,"type":"Tab","parentId":47,"style":{"enabled":true,"varName":"OutputTab","text":"Output","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-50":{"id":50,"type":"Panel","parentId":48,"style":{"enabled":true,"varName":"AddCtrl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"First!","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-51":{"id":51,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"InitialSetup","text":"Initial Setup","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-52":{"id":52,"type":"Button","parentId":53,"style":{"enabled":true,"varName":"AddPrompt","text":"+ Prompt Layer","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-53":{"id":53,"type":"Panel","parentId":48,"style":{"enabled":true,"varName":"PromptLayerManage","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Prompt Layer Management","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-54":{"id":54,"type":"Button","parentId":53,"style":{"enabled":true,"varName":"ReorderPrompts","text":"Reorder Prompt Layers","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-55":{"id":55,"type":"Button","parentId":59,"style":{"enabled":true,"varName":"ShowPromptLayers","text":"Show","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-56":{"id":56,"type":"DropDownList","parentId":58,"style":{"enabled":true,"varName":"SamplerMenu","text":"DropDownList","listItems":"ddim,\nk_dpm_2_a,\nk_dpm_2,\nk_euler_a,\nk_euler,\nk_heun,\nk_lms,\nplms","preferredSize":[0,0],"alignment":null,"selection":6,"helpTip":null}},"item-57":{"id":57,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Seamless","text":"Seamless","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-58":{"id":58,"type":"Panel","parentId":27,"style":{"enabled":true,"varName":"SamplerPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sampler","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-59":{"id":59,"type":"Panel","parentId":53,"style":{"enabled":true,"varName":"PromptLayerVisibility","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Prompt Layer Visibility","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-60":{"id":60,"type":"Button","parentId":59,"style":{"enabled":true,"varName":"HidePromptLayers","text":"Hide","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-61":{"id":61,"type":"Button","parentId":48,"style":{"enabled":true,"varName":"MakeExplainComp","text":"Make Explain Comp","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-62":{"id":62,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"omitImagePathButton","text":"Omit","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-63":{"id":63,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"outputLocationGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-64":{"id":64,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"includeImagePathButton","text":"Include","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-67":{"id":67,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"specifiedImagePathButton","text":"Specified","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-68":{"id":68,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"pathRadioButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-69":{"id":69,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"examplePathGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-70":{"id":70,"type":"EditText","parentId":69,"style":{"enabled":true,"varName":"specifiedImagePath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Please specify image path","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-71":{"id":71,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"outputLocationTab","text":"Location","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-72":{"id":72,"type":"Panel","parentId":69,"style":{"enabled":true,"varName":"samplePathPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Example Paths","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-73":{"id":73,"type":"StaticText","parentId":72,"style":{"enabled":true,"varName":"samplePaths","creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"Sample Path","justify":"left","preferredSize":[0,100],"alignment":"fill","helpTip":null}},"item-74":{"id":74,"type":"Group","parentId":43,"style":{"enabled":true,"varName":"exportButtonsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-75":{"id":75,"type":"Checkbox","parentId":74,"style":{"enabled":true,"varName":"StartRenderCheckbox","text":"Start Render","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-76":{"id":76,"type":"Button","parentId":78,"style":{"enabled":true,"varName":"ClearSavedPreferences","text":"Clear Saved Preferences","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-77":{"id":77,"type":"Divider","parentId":78,"style":{"enabled":true,"varName":null}},"item-78":{"id":78,"type":"Group","parentId":48,"style":{"enabled":true,"varName":null,"preferredSize":[0,100],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","bottom"],"alignment":"fill"}}},"order":[0,47,49,21,71,63,7,31,68,64,62,67,69,70,72,73,22,10,16,19,18,17,15,29,37,23,24,26,25,30,38,27,28,57,58,56,32,36,35,46,34,33,43,9,74,44,8,75,48,50,51,53,52,54,59,55,60,61,78,77,76],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":71}
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

// TPANEL1
// =======
var tpanel1 = OutputTab.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 450; 
    tpanel1.margins = 0; 
    tpanel1.alignment = ["fill","top"]; 

// OUTPUTLOCATIONTAB
// =================
var outputLocationTab = tpanel1.add("tab", undefined, undefined, {name: "outputLocationTab"}); 
    outputLocationTab.text = "Location"; 
    outputLocationTab.orientation = "column"; 
    outputLocationTab.alignChildren = ["left","top"]; 
    outputLocationTab.spacing = 10; 
    outputLocationTab.margins = 10; 

// OUTPUTLOCATIONGROUP
// ===================
var outputLocationGroup = outputLocationTab.add("group", undefined, {name: "outputLocationGroup"}); 
    outputLocationGroup.orientation = "row"; 
    outputLocationGroup.alignChildren = ["left","center"]; 
    outputLocationGroup.spacing = 10; 
    outputLocationGroup.margins = 0; 
    outputLocationGroup.alignment = ["fill","top"]; 

var OutputLocation = outputLocationGroup.add('edittext {properties: {name: "OutputLocation"}}'); 
    OutputLocation.text = "Output Location"; 
    OutputLocation.preferredSize.width = 352; 
    OutputLocation.alignment = ["left","fill"]; 

var BrowseButton = outputLocationGroup.add("button", undefined, undefined, {name: "BrowseButton"}); 
    BrowseButton.text = "Browse…"; 

// PATHRADIOBUTTONGROUP
// ====================
var pathRadioButtonGroup = outputLocationTab.add("group", undefined, {name: "pathRadioButtonGroup"}); 
    pathRadioButtonGroup.orientation = "row"; 
    pathRadioButtonGroup.alignChildren = ["left","center"]; 
    pathRadioButtonGroup.spacing = 10; 
    pathRadioButtonGroup.margins = 0; 
    pathRadioButtonGroup.alignment = ["fill","top"]; 

var includeImagePathButton = pathRadioButtonGroup.add("radiobutton", undefined, undefined, {name: "includeImagePathButton"}); 
    includeImagePathButton.text = "Include"; 
    includeImagePathButton.value = true; 

var omitImagePathButton = pathRadioButtonGroup.add("radiobutton", undefined, undefined, {name: "omitImagePathButton"}); 
    omitImagePathButton.text = "Omit"; 

var specifiedImagePathButton = pathRadioButtonGroup.add("radiobutton", undefined, undefined, {name: "specifiedImagePathButton"}); 
    specifiedImagePathButton.text = "Specified"; 

// EXAMPLEPATHGROUP
// ================
var examplePathGroup = outputLocationTab.add("group", undefined, {name: "examplePathGroup"}); 
    examplePathGroup.orientation = "column"; 
    examplePathGroup.alignChildren = ["left","center"]; 
    examplePathGroup.spacing = 10; 
    examplePathGroup.margins = 0; 
    examplePathGroup.alignment = ["fill","top"]; 

var specifiedImagePath = examplePathGroup.add('edittext {properties: {name: "specifiedImagePath"}}'); 
    specifiedImagePath.text = "Please specify image path"; 
    specifiedImagePath.alignment = ["fill","center"]; 

// SAMPLEPATHPANEL
// ===============
var samplePathPanel = examplePathGroup.add("panel", undefined, undefined, {name: "samplePathPanel"}); 
    samplePathPanel.text = "Example Paths"; 
    samplePathPanel.orientation = "column"; 
    samplePathPanel.alignChildren = ["left","top"]; 
    samplePathPanel.spacing = 10; 
    samplePathPanel.margins = 10; 
    samplePathPanel.alignment = ["fill","center"]; 

var samplePaths = samplePathPanel.add("statictext", undefined, undefined, {name: "samplePaths", multiline: true}); 
    samplePaths.text = "Sample Path"; 
    samplePaths.preferredSize.height = 100; 
    samplePaths.alignment = ["fill","top"]; 

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
    ESRGAN_Strength.value = 50; 
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
    GFPGAN_strength.value = 50; 
    GFPGAN_strength.preferredSize.width = 367; 
    GFPGAN_strength.alignment = ["left","fill"]; 

var GFPGAN_strengthText = FaceRestStrengthPanel.add('edittext {properties: {name: "GFPGAN_strengthText"}}'); 
    GFPGAN_strengthText.text = "75"; 

var percentsign1 = FaceRestStrengthPanel.add("statictext", undefined, undefined, {name: "percentsign1"}); 
    percentsign1.text = "%"; 
    percentsign1.alignment = ["left","fill"]; 

// MISCTAB
// =======
var MiscTab = tpanel1.add("tab", undefined, undefined, {name: "MiscTab"}); 
    MiscTab.text = "Misc"; 
    MiscTab.orientation = "column"; 
    MiscTab.alignChildren = ["left","top"]; 
    MiscTab.spacing = 10; 
    MiscTab.margins = 10; 

var Save_Original = MiscTab.add("checkbox", undefined, undefined, {name: "Save_Original"}); 
    Save_Original.text = "Save Original"; 

var Seamless = MiscTab.add("checkbox", undefined, undefined, {name: "Seamless"}); 
    Seamless.text = "Seamless"; 

// SAMPLERPANEL
// ============
var SamplerPanel = MiscTab.add("panel", undefined, undefined, {name: "SamplerPanel"}); 
    SamplerPanel.text = "Sampler"; 
    SamplerPanel.orientation = "column"; 
    SamplerPanel.alignChildren = ["left","top"]; 
    SamplerPanel.spacing = 10; 
    SamplerPanel.margins = 10; 

var SamplerMenu_array = ["ddim","k_dpm_2_a","k_dpm_2","k_euler_a","k_euler","k_heun","k_lms","plms"]; 
var SamplerMenu = SamplerPanel.add("dropdownlist", undefined, undefined, {name: "SamplerMenu", items: SamplerMenu_array}); 
    SamplerMenu.selection = 6; 

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
tpanel1.selection = outputLocationTab; 

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
    ExportPanel.text = "Export"; 
    ExportPanel.orientation = "row"; 
    ExportPanel.alignChildren = ["right","center"]; 
    ExportPanel.spacing = 10; 
    ExportPanel.margins = 10; 
    ExportPanel.alignment = ["right","top"]; 

var ExplanationText = ExportPanel.add("group", undefined , {name: "ExplanationText"}); 
    ExplanationText.getText = function() { var t=[]; for ( var n=0; n<ExplanationText.children.length; n++ ) { var text = ExplanationText.children[n].text || ''; if ( text === '' ) text = ' '; t.push( text ); } return t.join('\n'); }; 
    ExplanationText.orientation = "column"; 
    ExplanationText.alignChildren = ["left","center"]; 
    ExplanationText.spacing = 0; 
    ExplanationText.alignment = ["right","fill"]; 

    ExplanationText.add("statictext", undefined, "Export the active/selected composition to the"); 
    ExplanationText.add("statictext", undefined, "specified location, as well as a batch file to"); 
    ExplanationText.add("statictext", undefined, "pass to the dream.py command which will"); 
    ExplanationText.add("statictext", undefined, "include your keyframed strength and scale"); 
    ExplanationText.add("statictext", undefined, "values."); 

// EXPORTBUTTONSGROUP
// ==================
var exportButtonsGroup = ExportPanel.add("group", undefined, {name: "exportButtonsGroup"}); 
    exportButtonsGroup.orientation = "column"; 
    exportButtonsGroup.alignChildren = ["center","center"]; 
    exportButtonsGroup.spacing = 10; 
    exportButtonsGroup.margins = 0; 

var ExportCurrentFrame = exportButtonsGroup.add("button", undefined, undefined, {name: "ExportCurrentFrame"}); 
    ExportCurrentFrame.helpTip = "Export only the current frame.\nTo test settings or to generate a still image."; 
    ExportCurrentFrame.text = "Current Frame"; 
    ExportCurrentFrame.alignment = ["fill","center"]; 

var ExportSequence = exportButtonsGroup.add("button", undefined, undefined, {name: "ExportSequence"}); 
    ExportSequence.helpTip = "Export the entire sequence."; 
    ExportSequence.text = "Sequence"; 
    ExportSequence.alignment = ["fill","center"]; 

var StartRenderCheckbox = exportButtonsGroup.add("checkbox", undefined, undefined, {name: "StartRenderCheckbox"}); 
    StartRenderCheckbox.text = "Start Render"; 
    StartRenderCheckbox.value = true; 

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
    AddPrompt.text = "+ Prompt Layer"; 
    AddPrompt.alignment = ["fill","top"]; 

var ReorderPrompts = PromptLayerManage.add("button", undefined, undefined, {name: "ReorderPrompts"}); 
    ReorderPrompts.text = "Reorder Prompt Layers"; 
    ReorderPrompts.alignment = ["fill","top"]; 

// PROMPTLAYERVISIBILITY
// =====================
var PromptLayerVisibility = PromptLayerManage.add("panel", undefined, undefined, {name: "PromptLayerVisibility"}); 
    PromptLayerVisibility.text = "Prompt Layer Visibility"; 
    PromptLayerVisibility.orientation = "column"; 
    PromptLayerVisibility.alignChildren = ["left","top"]; 
    PromptLayerVisibility.spacing = 10; 
    PromptLayerVisibility.margins = 10; 

var ShowPromptLayers = PromptLayerVisibility.add("button", undefined, undefined, {name: "ShowPromptLayers"}); 
    ShowPromptLayers.text = "Show"; 
    ShowPromptLayers.alignment = ["fill","top"]; 

var HidePromptLayers = PromptLayerVisibility.add("button", undefined, undefined, {name: "HidePromptLayers"}); 
    HidePromptLayers.text = "Hide"; 
    HidePromptLayers.alignment = ["fill","top"]; 

// SETUPTAB
// ========
var MakeExplainComp = SetupTab.add("button", undefined, undefined, {name: "MakeExplainComp"}); 
    MakeExplainComp.text = "Make Explain Comp"; 

// GROUP1
// ======
var group1 = SetupTab.add("group", undefined, {name: "group1"}); 
    group1.preferredSize.height = 100; 
    group1.orientation = "column"; 
    group1.alignChildren = ["center","bottom"]; 
    group1.spacing = 10; 
    group1.margins = 0; 
    group1.alignment = ["fill","top"]; 

var divider1 = group1.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var ClearSavedPreferences = group1.add("button", undefined, undefined, {name: "ClearSavedPreferences"}); 
    ClearSavedPreferences.text = "Clear Saved Preferences"; 
    ClearSavedPreferences.alignment = ["center","bottom"]; 

// ExportToStableDiffusion.show();


//layout over - now for the functions and logic

specifiedImagePath.hide();

//show the last saved output folder location if we've got one
if ( app.settings.haveSetting("ESD", "outputFolder") ) { 
    OutputLocation.text = app.settings.getSetting("ESD", "outputFolder");

}

getPathPreference();

var showPaths = examplePaths();
samplePaths.text = showPaths;
initializeSeedMenu();

ClearSavedPreferences.onClick = function() {
    deleteSavedPreferences();
}

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
    app.beginUndoGroup("Export ESD Sequence");
    
    exportImageSequence(); 

    app.endUndoGroup();
    

}

ExportCurrentFrame.onClick = function() { 
    app.beginUndoGroup("Export ESD Frame");
    
    exportImageSequence(true);

    app.endUndoGroup();
    

}

ShowPromptLayers.onClick = function() {
    app.beginUndoGroup("Show Prompts");

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    Show_prompt_text_layers(PromptLayers);

    app.endUndoGroup();

}

HidePromptLayers.onClick = function() {
    app.beginUndoGroup("Hide Prompts");

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    Hide_prompt_text_layers(PromptLayers);

    app.endUndoGroup();
    
}

ReorderPrompts.onClick = function() {
    app.beginUndoGroup("Reorder Prompts");

    var PromptLayers = getESD_prompt_text_layers(app.project.activeItem.layers);
    reorderESD_prompt_text_layers(PromptLayers);

    app.endUndoGroup();
}


AddPrompt.onClick = function() {
app.beginUndoGroup("Add ESD Prompt");

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

    PromptDocument.text = 'prompt text goes here';
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
        //Selected items were not Footage and Comp in that order
        badSelection = true;
    }
    if (badSelection) {
        alert("Please select a resulting image sequence\nand the Composition that set its prompts,\nin that order.");
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
        'comp(thisComp.layer(thisComp.numLayers -1).name).layer("ML_settings").effect("steps")("Slider") + " steps"';
        MLSettingsSourceTextProperties.setValue(MLSettingsDocument);

        MLSettingsDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
        MLSettingsDocument.fillColor = [0.4384, 0.9572, 0.9566];
        var textRect = MLSettingsText.sourceRectAtTime(0,false);
        MLSettingsText.anchorPoint.setValue([textRect.left, textRect.top,0]);
        MLSettingsText.property("Position").setValue([infoLeftEdge,currentTextYPosition]);
        MLSettingsSourceTextProperties.setValue(MLSettingsDocument);

        currentTextYPosition += textRect.height + (3*infoMargin);
        
        // add pct_01, disp_prompt1, and more pct and disp text layers as needed
        var PromptLayers = getESD_prompt_text_layers(promptCompItem.layers);
        for (var j=0; j < PromptLayers.length; j++) {

                var PromptDisplayTextLayer = showComp.layers.addBoxText([infoRightEdge-infoLeftEdge, infoBottomEdge - (infoTopEdge + currentTextYPosition)]);
                var PromptSourceTextProperties = PromptDisplayTextLayer.property("ADBE Text Properties").property("ADBE Text Document");
                var PromptDisplayDocument = PromptSourceTextProperties.value;
                PromptDisplayDocument.fontSize = 28;
                PromptDisplayTextLayer.property("Source Text").expression = 'Math.floor(comp(thisComp.layer(thisComp.numLayers -1).name).layer("' + 
                PromptLayers[j][1] + '").effect("prompt_strength")("Slider") * 100) + "%   " + ' + 
                'comp(thisComp.layer(thisComp.numLayers -1).name).layer("' + PromptLayers[j][1] + '").text.sourceText';
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

SeedGenerate.onClick = function() { 
    generateSeed(); 
    saveSeed();

}

SeedText.onChange = function () {
    saveSeed();
}

function deleteSavedPreferences() {
    app.preferences.deletePref("Settings_ESD","includeImagePathButton");
    app.preferences.deletePref("Settings_ESD","omitImagePathButton");
    app.preferences.deletePref("Settings_ESD","specifiedImagePathButton");
    app.preferences.deletePref("Settings_ESD","specifiedImagePath");
    app.preferences.deletePref("Settings_ESD", "outputFolder"); //save the new output location
    app.preferences.deletePref("Settings_ESD", "recentSeeds");
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
    var SeedValue = generateRandomNumber() * 10000000000;
    SeedText.text = Math.floor(SeedValue);
}

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
        
        //var ImageStrength = getML_settings_layer(comp.layers);
        

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
            var currentMLSettings = getML_settings_layer(comp.layers);
            for (var j=0; j < PromptLayers.length; j++) {
                if (PromptLayers[j][5]) { //Layer is active at this time
                    prompts_string = prompts_string + PromptLayers[j][2];                           //prompt text
                    prompts_string = prompts_string + ":" + PromptLayers[j][3].toFixed(2) + " ";    //prompt weight                   
                }

            }
            var fileAndPath = fileWithPath(f.toString(),comp.name + "_" + ("00000" + i).slice(-5) + ".png"); //will change this to use padStart once I can get that working.

            //this should work! ah well            var testPad = 'argh'.padStart(10,"0"); 
            //writeLine = prompts_string + "-I \"" + f.toString() + "/" + comp.name + "_" + i.toString().padStart(5,'0') + ".png\"";



            writeLine = prompts_string;
            


            // writeLine += " -I \"" + comp.name + "_" + ("00000" + i).slice(-5) + ".png\""; //will change this to use padStart once I can get that working.
            writeLine += " -I \"" + fileAndPath + "\""; 

            writeLine += " --strength=" + Number(currentMLSettings[0]).toFixed(2);
            writeLine += " --cfg_scale=" + Number(currentMLSettings[1]).toFixed(2);
            writeLine += " --steps=" + Math.floor(Number(currentMLSettings[2]));

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
        //TODO: add output module to users' settings
        module.applyTemplate("PNG sequence");

        queued.timeSpanStart = workStartFrame * app.project.activeItem.frameDuration;
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
    // var ML_settings = new Array();
    var j=0;
    var currentTime = app.project.activeItem.time;
    for (var i=1; i<=num_layers; i++){
        if ( /^ML_setting.+/.test(CompLayers[i].name) ) { //find the layer whose name starts with ML_settings
            Image_strength = CompLayers[i].property("Effects").property("Image_Strength").property("Slider").valueAtTime(currentTime, true);
            CFG_Scale = CompLayers[i].property("Effects").property("cfg_scale").property("Slider").valueAtTime(currentTime, true);
            Steps = CompLayers[i].property("Effects").property("steps").property("Slider").valueAtTime(currentTime, true);
            break; //there should be only one ML_settings layer, so might as well stop iterating through layers once we've found it
            j++;
        }
    }

    (Image_strength == 300) ? 0.75 : Image_strength;
    (CFG_Scale == 300) ? 7.50 : CFG_Scale;
    (Steps == 300) ? 50 : Steps;

    ML_settings = [Image_strength, CFG_Scale, Steps];

    // if (Image_strength == 300) {
    //     Image_strength = 0.75;
    // }

    // return Image_strength;
    return ML_settings;
}

function examplePaths() {

    //Creates the example file paths shown in a TextView in the UI

    var comp = app.project.activeItem;
    var examplePath="";

    if (OutputLocation.text == "Output Location") {
        return ("Please set an output location.");
    }

    for (var i=1; i < 3; i++) {
        var f = new Folder(OutputLocation.text+"/"+comp.name);
        // examplePath += f.toString() + "/" + comp.name + "_" + ("00000" + i).slice(-5) + ".png\n";
        examplePath += fileWithPath(f.toString(),comp.name + "_" + ("00000" + i).slice(-5) + ".png\n");
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

//based on Tomas Sinkunas's comment at https://community.adobe.com/t5/after-effects-discussions/automatic-color-change-for-specific-words/m-p/9875932
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



ExportToStableDiffusion.show();
