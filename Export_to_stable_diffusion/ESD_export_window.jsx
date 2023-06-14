/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ExportToStableDiffusion","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Export to Stable Diffusion","preferredSize":[300,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-7":{"id":7,"type":"EditText","parentId":63,"style":{"enabled":true,"varName":"OutputLocation","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Output Location","justify":"left","preferredSize":[352,0],"alignment":"fill","helpTip":null}},"item-8":{"id":8,"type":"Button","parentId":74,"style":{"enabled":true,"varName":"ExportSequence","text":"Sequence","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export the entire sequence."}},"item-9":{"id":9,"type":"StaticText","parentId":43,"style":{"enabled":true,"varName":"ExplanationText","creationProps":{},"softWrap":true,"text":"Export the active/selected composition to the specified location, as well as a batch file to pass to the dream.py command which will include your keyframed strength and scale values.","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":22,"style":{"enabled":true,"varName":"ESRGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-15":{"id":15,"type":"Slider","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_Strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-16":{"id":16,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingFactorPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Upscaling Factor","preferredSize":[null,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-17":{"id":17,"type":"Panel","parentId":22,"style":{"enabled":true,"varName":"UpscalingStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":5,"alignChildren":["left","top"],"alignment":"fill"}},"item-18":{"id":18,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale4x","text":"4x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":false}},"item-19":{"id":19,"type":"RadioButton","parentId":16,"style":{"enabled":true,"varName":"Upscale2x","text":"2x","preferredSize":[150,0],"alignment":null,"helpTip":null,"checked":true}},"item-21":{"id":21,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"","preferredSize":[450,0],"margins":10,"alignment":"fill","selection":71},"collapsed":true},"item-22":{"id":22,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"UpscalingTab","text":"Upscaling","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-23":{"id":23,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"FaceRestTab","text":"Face Restoration","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-24":{"id":24,"type":"Checkbox","parentId":23,"style":{"enabled":true,"varName":"GFPGAN_enable","text":"Enable","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-25":{"id":25,"type":"Slider","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strength","preferredSize":[367,0],"alignment":"fill","helpTip":null}},"item-26":{"id":26,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":"FaceRestStrengthPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Strength","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-27":{"id":27,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"MiscTab","text":"Misc","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-28":{"id":28,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Save_Original","text":"Save Original","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-29":{"id":29,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"ESRGAN_StrengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"GFPGAN_strengthText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"75","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Button","parentId":63,"style":{"enabled":true,"varName":"BrowseButton","text":"Browse…","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"SeedTab","text":"Seed","orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-33":{"id":33,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":"RecentSeeds","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[152,0],"alignment":"fill","selection":0,"helpTip":null}},"item-34":{"id":34,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"RecentSeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Recent Seeds","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-35":{"id":35,"type":"EditText","parentId":36,"style":{"enabled":true,"varName":"SeedText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1111111111","justify":"left","preferredSize":[286,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"Panel","parentId":32,"style":{"enabled":true,"varName":"SeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Seed","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-37":{"id":37,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-38":{"id":38,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":"percentsign","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-43":{"id":43,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"ExportPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"fill"}},"item-44":{"id":44,"type":"Button","parentId":74,"style":{"enabled":true,"varName":"ExportCurrentFrame","text":"Current Frame","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Export only the current frame.\\nTo test settings or to generate a still image."}},"item-46":{"id":46,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"SeedGenerate","text":"Generate","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-56":{"id":56,"type":"DropDownList","parentId":58,"style":{"enabled":true,"varName":"SamplerMenu","text":"DropDownList","listItems":"ddim,\nk_dpm_2_a,\nk_dpm_2,\nk_dpmpp_2_a, k_dpmpp_2,\nk_euler_a,\nk_euler,\nk_heun,\nk_lms,\nplms,\npndm","preferredSize":[0,0],"alignment":null,"selection":6,"helpTip":null}},"item-57":{"id":57,"type":"Checkbox","parentId":27,"style":{"enabled":true,"varName":"Seamless","text":"Seamless","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-58":{"id":58,"type":"Panel","parentId":27,"style":{"enabled":true,"varName":"SamplerPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Sampler","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-62":{"id":62,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"omitImagePathButton","text":"Omit","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-63":{"id":63,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"outputLocationGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-64":{"id":64,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"includeImagePathButton","text":"Include","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-67":{"id":67,"type":"RadioButton","parentId":68,"style":{"enabled":true,"varName":"specifiedImagePathButton","text":"Specified","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-68":{"id":68,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"pathRadioButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-69":{"id":69,"type":"Group","parentId":71,"style":{"enabled":true,"varName":"examplePathGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-70":{"id":70,"type":"EditText","parentId":69,"style":{"enabled":true,"varName":"specifiedImagePath","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Please specify image path","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-71":{"id":71,"type":"Tab","parentId":21,"style":{"enabled":true,"varName":"outputLocationTab","text":"Location","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-72":{"id":72,"type":"Panel","parentId":69,"style":{"enabled":true,"varName":"samplePathPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Example Paths","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-73":{"id":73,"type":"StaticText","parentId":72,"style":{"enabled":true,"varName":"samplePaths","creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"Sample Path","justify":"left","preferredSize":[0,100],"alignment":"fill","helpTip":null}},"item-74":{"id":74,"type":"Group","parentId":43,"style":{"enabled":true,"varName":"exportButtonsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-75":{"id":75,"type":"Checkbox","parentId":74,"style":{"enabled":true,"varName":"StartRenderCheckbox","text":"Start Render","preferredSize":[0,0],"alignment":"fill","helpTip":null,"checked":true}},"item-85":{"id":85,"type":"Checkbox","parentId":74,"style":{"enabled":true,"varName":"HasAlphaCheckbox","text":"Has Alpha","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-86":{"id":86,"type":"Image","parentId":0,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,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Y0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAABdFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEwLTI1VDExOjI4OjQyLTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMC0yNVQxMjo0MjozNS0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMC0yNVQxMjo0MjozNS0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQ0YzA2MTgtOTZiZi00OWQxLTllZWYtMDFiMzM3YzE1MzhiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTgyODhiMzQtMzM1Ni0yOTQ2LTkwM2UtNWQyYjgxY2I2YjM1IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGZjZWM5Y2YtNDNkMi00ODUxLWEwOWQtOWIzM2Y3Y2FjOTk1Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZmNlYzljZi00M2QyLTQ4NTEtYTA5ZC05YjMzZjdjYWM5OTUiIHN0RXZ0OndoZW49IjIwMjItMTAtMjVUMTE6Mjg6NDItMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZDRjMDYxOC05NmJmLTQ5ZDEtOWVlZi0wMWIzMzdjMTUzOGIiIHN0RXZ0OndoZW49IjIwMjItMTAtMjVUMTI6NDI6MzUtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pht0+zAAAA6YSURBVFjD7ZlndFVV2sf/p5ebe5ObG0IIJCEkQEIqxDChG7CQUFII9R1AQZzYGLGPzDugiAOKFAdfOioqKihEpImACKiQEDC9h4RASEgvt5dnPhACUXR0rfn2utc666xzzv497exn72efwxAR/mj/3cb+EYI/gvpHUP+/Nv7gvi8G2jmWH9Q/uCIsKtT2e+DTZ7J07Wby4ASuLSE+pu33sCcvZqsX8wvCHZ0m7QDfflUzkidX/FY2KytbzskvCmtqaTUYehuaooZE5scODbP+FvabU6cNBYVF4Q67kwscNLg4KWFC7e8N2tFv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"],"alignment":"right","helpTip":null}}},"order":[0,86,21,71,63,7,31,68,64,62,67,69,70,72,73,22,10,16,19,18,17,15,29,37,23,24,26,25,30,38,27,28,57,58,56,32,36,35,46,34,33,43,9,74,44,8,75,85],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":71}
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

var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00U%00%00%00%15%08%06%00%00%007%C2%AD%C2%A26%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%0AKiCCPsRGB%20IEC61966-2.1%00%00H%C3%87%C2%9DSgTS%C3%A9%16%3D%C3%B7%C3%9E%C3%B4BK%C2%88%C2%80%C2%94KoR%15%08%20RB%C2%8B%C2%80%14%C2%91%26*!%09%10J%C2%88!%C2%A1%C3%99%15Q%C3%81%11EE%04%1B%C3%88%C2%A0%C2%88%03%C2%8E%C2%8E%C2%80%C2%8C%15Q%2C%0C%C2%8A%0A%C3%98%07%C3%A4!%C2%A2%C2%8E%C2%83%C2%A3%C2%88%C2%8A%C3%8A%C3%BB%C3%A1%7B%C2%A3k%C3%96%C2%BC%C3%B7%C3%A6%C3%8D%C3%BE%C2%B5%C3%97%3E%C3%A7%C2%AC%C3%B3%C2%9D%C2%B3%C3%8F%07%C3%80%08%0C%C2%96H3Q5%C2%80%0C%C2%A9B%1E%11%C3%A0%C2%83%C3%87%C3%84%C3%86%C3%A1%C3%A4.%40%C2%81%0A%24p%00%10%08%C2%B3d!s%C3%BD%23%01%00%C3%B8~%3C%3C%2B%22%C3%80%07%C2%BE%00%01x%C3%93%0B%08%00%C3%80M%C2%9B%C3%800%1C%C2%87%C3%BF%0F%C3%AAB%C2%99%5C%01%C2%80%C2%84%01%C3%80t%C2%918K%08%C2%80%14%00%40z%C2%8EB%C2%A6%00%40F%01%C2%80%C2%9D%C2%98%26S%00%C2%A0%04%00%60%C3%8Bcb%C3%A3%00P-%00%60'%7F%C3%A6%C3%93%00%C2%80%C2%9D%C3%B8%C2%99%7B%01%00%5B%C2%94!%15%01%C2%A0%C2%91%00%20%13e%C2%88D%00h%3B%00%C2%AC%C3%8FV%C2%8AE%00X0%00%14fK%C3%849%00%C3%98-%000IWfH%00%C2%B0%C2%B7%00%C3%80%C3%8E%10%0B%C2%B2%00%08%0C%000Q%C2%88%C2%85)%00%04%7B%00%60%C3%88%23%23x%00%C2%84%C2%99%00%14F%C3%B2W%3C%C3%B1%2B%C2%AE%10%C3%A7*%00%00x%C2%99%C2%B2%3C%C2%B9%249E%C2%81%5B%08-q%07WW.%1E(%C3%8EI%17%2B%146a%02a%C2%9A%40.%C3%82y%C2%99%192%C2%814%0F%C3%A0%C3%B3%C3%8C%00%00%C2%A0%C2%91%15%11%C3%A0%C2%83%C3%B3%C3%BDx%C3%8E%0E%C2%AE%C3%8E%C3%8E6%C2%8E%C2%B6%0E_-%C3%AA%C2%BF%06%C3%BF%22bb%C3%A3%C3%BE%C3%A5%C3%8F%C2%ABp%40%00%00%C3%A1t~%C3%91%C3%BE%2C%2F%C2%B3%1A%C2%80%3B%06%C2%80m%C3%BE%C2%A2%25%C3%AE%04h%5E%0B%C2%A0u%C3%B7%C2%8Bf%C2%B2%0F%40%C2%B5%00%C2%A0%C3%A9%C3%9AW%C3%B3p%C3%B8~%3C%3CE%C2%A1%C2%90%C2%B9%C3%99%C3%99%C3%A5%C3%A4%C3%A4%C3%98J%C3%84B%5Ba%C3%8AW%7D%C3%BEg%C3%82_%C3%80W%C3%BDl%C3%B9~%3C%C3%BC%C3%B7%C3%B5%C3%A0%C2%BE%C3%A2%24%C2%812%5D%C2%81G%04%C3%B8%C3%A0%C3%82%C3%8C%C3%B4L%C2%A5%1C%C3%8F%C2%92%09%C2%84b%C3%9C%C3%A6%C2%8FG%C3%BC%C2%B7%0B%C3%BF%C3%BC%1D%C3%93%22%C3%84Ib%C2%B9X*%14%C3%A3Q%12q%C2%8ED%C2%9A%C2%8C%C3%B32%C2%A5%22%C2%89B%C2%92)%C3%85%25%C3%92%C3%BFd%C3%A2%C3%9F%2C%C3%BB%03%3E%C3%9F5%00%C2%B0j%3E%01%7B%C2%91-%C2%A8%5Dc%03%C3%B6K'%10Xt%C3%80%C3%A2%C3%B7%00%00%C3%B2%C2%BBo%C3%81%C3%94(%08%03%C2%80h%C2%83%C3%A1%C3%8Fw%C3%BF%C3%AF%3F%C3%BDG%C2%A0%25%00%C2%80fI%C2%92q%00%00%5ED%24.T%C3%8A%C2%B3%3F%C3%87%08%00%00D%C2%A0%C2%81*%C2%B0A%1B%C3%B4%C3%81%18%2C%C3%80%06%1C%C3%81%05%C3%9C%C3%81%0B%C3%BC%606%C2%84B%24%C3%84%C3%82B%10B%0Ad%C2%80%1Cr%60)%C2%AC%C2%82B(%C2%86%C3%8D%C2%B0%1D*%60%2F%C3%94%40%1D4%C3%80Qh%C2%86%C2%93p%0E.%C3%82U%C2%B8%0E%3Dp%0F%C3%BAa%08%C2%9E%C3%81(%C2%BC%C2%81%09%04A%C3%88%08%13a!%C3%9A%C2%88%01b%C2%8AX%23%C2%8E%08%17%C2%99%C2%85%C3%B8!%C3%81H%04%12%C2%8B%24%20%C3%89%C2%88%14Q%22K%C2%915H1R%C2%8AT%20UH%1D%C3%B2%3Dr%029%C2%87%5CF%C2%BA%C2%91%3B%C3%88%002%C2%82%C3%BC%C2%86%C2%BCG1%C2%94%C2%81%C2%B2Q%3D%C3%94%0C%C2%B5C%C2%B9%C2%A87%1A%C2%84F%C2%A2%0B%C3%90dt1%C2%9A%C2%8F%16%C2%A0%C2%9B%C3%90r%C2%B4%1A%3D%C2%8C6%C2%A1%C3%A7%C3%90%C2%ABh%0F%C3%9A%C2%8F%3EC%C3%870%C3%80%C3%A8%18%073%C3%84l0.%C3%86%C3%83B%C2%B18%2C%09%C2%93c%C3%8B%C2%B1%22%C2%AC%0C%C2%AB%C3%86%1A%C2%B0V%C2%AC%03%C2%BB%C2%89%C3%B5c%C3%8F%C2%B1w%04%12%C2%81E%C3%80%096%04wB%20a%1EAHXLXN%C3%98H%C2%A8%20%1C%244%11%C3%9A%097%09%03%C2%84Q%C3%82'%22%C2%93%C2%A8K%C2%B4%26%C2%BA%11%C3%B9%C3%84%18b21%C2%87XH%2C%23%C3%96%12%C2%8F%13%2F%10%7B%C2%88C%C3%847%24%12%C2%89C2'%C2%B9%C2%90%02I%C2%B1%C2%A4T%C3%92%12%C3%92F%C3%92nR%23%C3%A9%2C%C2%A9%C2%9B4H%1A%23%C2%93%C3%89%C3%9Adk%C2%B2%079%C2%94%2C%20%2B%C3%88%C2%85%C3%A4%C2%9D%C3%A4%C3%83%C3%A43%C3%A4%1B%C3%A4!%C3%B2%5B%0A%C2%9Db%40q%C2%A4%C3%B8S%C3%A2(R%C3%8AjJ%19%C3%A5%10%C3%A54%C3%A5%06e%C2%982AU%C2%A3%C2%9AR%C3%9D%C2%A8%C2%A1T%115%C2%8FZB%C2%AD%C2%A1%C2%B6R%C2%AFQ%C2%87%C2%A8%134u%C2%9A9%C3%8D%C2%83%16IK%C2%A5%C2%AD%C2%A2%C2%95%C3%93%1Ah%17h%C3%B7i%C2%AF%C3%A8t%C2%BA%11%C3%9D%C2%95%1EN%C2%97%C3%90W%C3%92%C3%8B%C3%A9G%C3%A8%C2%97%C3%A8%03%C3%B4w%0C%0D%C2%86%15%C2%83%C3%87%C2%88g(%19%C2%9B%18%07%18g%19w%18%C2%AF%C2%98L%C2%A6%19%C3%93%C2%8B%19%C3%87T071%C3%AB%C2%98%C3%A7%C2%99%0F%C2%99oUX*%C2%B6*%7C%15%C2%91%C3%8A%0A%C2%95J%C2%95%26%C2%95%1B*%2FT%C2%A9%C2%AA%C2%A6%C2%AA%C3%9E%C2%AA%0BU%C3%B3U%C3%8BT%C2%8F%C2%A9%5ES%7D%C2%AEFU3S%C3%A3%C2%A9%09%C3%94%C2%96%C2%ABU%C2%AA%C2%9DP%C3%ABS%1BSg%C2%A9%3B%C2%A8%C2%87%C2%AAg%C2%A8oT%3F%C2%A4~Y%C3%BD%C2%89%06Y%C3%83L%C3%83OC%C2%A4Q%C2%A0%C2%B1_%C3%A3%C2%BC%C3%86%20%0Bc%19%C2%B3x%2C!k%0D%C2%AB%C2%86u%C2%815%C3%84%26%C2%B1%C3%8D%C3%99%7Cv*%C2%BB%C2%98%C3%BD%1D%C2%BB%C2%8B%3D%C2%AA%C2%A9%C2%A19C3J3W%C2%B3R%C3%B3%C2%94f%3F%07%C3%A3%C2%98q%C3%B8%C2%9CtN%09%C3%A7(%C2%A7%C2%97%C3%B3~%C2%8A%C3%9E%14%C3%AF)%C3%A2)%1B%C2%A64L%C2%B91e%5Ck%C2%AA%C2%96%C2%97%C2%96X%C2%ABH%C2%ABQ%C2%ABG%C3%AB%C2%BD6%C2%AE%C3%AD%C2%A7%C2%9D%C2%A6%C2%BDE%C2%BBY%C3%BB%C2%81%0EA%C3%87J'%5C'Gg%C2%8F%C3%8E%05%C2%9D%C3%A7S%C3%99S%C3%9D%C2%A7%0A%C2%A7%16M%3D%3A%C3%B5%C2%AE.%C2%AAk%C2%A5%1B%C2%A1%C2%BBDw%C2%BFn%C2%A7%C3%AE%C2%98%C2%9E%C2%BE%5E%C2%80%C2%9ELo%C2%A7%C3%9Ey%C2%BD%C3%A7%C3%BA%1C%7D%2F%C3%BDT%C3%BDm%C3%BA%C2%A7%C3%B5G%0CX%06%C2%B3%0C%24%06%C3%9B%0C%C3%8E%18%3C%C3%855qo%3C%1D%2F%C3%87%C3%9B%C3%B1QC%5D%C3%83%40C%C2%A5a%C2%95a%C2%97%C3%A1%C2%84%C2%91%C2%B9%C3%91%3C%C2%A3%C3%95F%C2%8DF%0F%C2%8Ci%C3%86%5C%C3%A3%24%C3%A3m%C3%86m%C3%86%C2%A3%26%06%26!%26KM%C3%AAM%C3%AE%C2%9ARM%C2%B9%C2%A6)%C2%A6%3BL%3BL%C3%87%C3%8D%C3%8C%C3%8D%C2%A2%C3%8D%C3%96%C2%995%C2%9B%3D1%C3%972%C3%A7%C2%9B%C3%A7%C2%9B%C3%97%C2%9B%C3%9F%C2%B7%60ZxZ%2C%C2%B6%C2%A8%C2%B6%C2%B8eI%C2%B2%C3%A4Z%C2%A6Y%C3%AE%C2%B6%C2%BCn%C2%85Z9Y%C2%A5XUZ%5D%C2%B3F%C2%AD%C2%9D%C2%AD%25%C3%96%C2%BB%C2%AD%C2%BB%C2%A7%11%C2%A7%C2%B9N%C2%93N%C2%AB%C2%9E%C3%96g%C3%83%C2%B0%C3%B1%C2%B6%C3%89%C2%B6%C2%A9%C2%B7%19%C2%B0%C3%A5%C3%98%06%C3%9B%C2%AE%C2%B6m%C2%B6%7Dagb%17g%C2%B7%C3%85%C2%AE%C3%83%C3%AE%C2%93%C2%BD%C2%93%7D%C2%BA%7D%C2%8D%C3%BD%3D%07%0D%C2%87%C3%99%0E%C2%AB%1DZ%1D~s%C2%B4r%14%3AV%3A%C3%9E%C2%9A%C3%8E%C2%9C%C3%AE%3F%7D%C3%85%C3%B4%C2%96%C3%A9%2FgX%C3%8F%10%C3%8F%C3%983%C3%A3%C2%B6%13%C3%8B)%C3%84i%C2%9DS%C2%9B%C3%93Gg%17g%C2%B9s%C2%83%C3%B3%C2%88%C2%8B%C2%89K%C2%82%C3%8B.%C2%97%3E.%C2%9B%1B%C3%86%C3%9D%C3%88%C2%BD%C3%A4Jt%C3%B5q%5D%C3%A1z%C3%92%C3%B5%C2%9D%C2%9B%C2%B3%C2%9B%C3%82%C3%AD%C2%A8%C3%9B%C2%AF%C3%AE6%C3%AEi%C3%AE%C2%87%C3%9C%C2%9F%C3%8C4%C2%9F)%C2%9EY3s%C3%90%C3%83%C3%88C%C3%A0Q%C3%A5%C3%91%3F%0B%C2%9F%C2%950k%C3%9F%C2%AC~OCO%C2%81g%C2%B5%C3%A7%23%2Fc%2F%C2%91W%C2%AD%C3%97%C2%B0%C2%B7%C2%A5w%C2%AA%C3%B7a%C3%AF%17%3E%C3%B6%3Er%C2%9F%C3%A3%3E%C3%A3%3C7%C3%9E2%C3%9EY_%C3%8C7%C3%80%C2%B7%C3%88%C2%B7%C3%8BO%C3%83o%C2%9E_%C2%85%C3%9FC%7F%23%C3%BFd%C3%BFz%C3%BF%C3%91%00%C2%A7%C2%80%25%01g%03%C2%89%C2%81A%C2%81%5B%02%C3%BB%C3%B8z%7C!%C2%BF%C2%8E%3F%3A%C3%9Be%C3%B6%C2%B2%C3%99%C3%ADA%C2%8C%C2%A0%C2%B9A%15A%C2%8F%C2%82%C2%AD%C2%82%C3%A5%C3%81%C2%AD!h%C3%88%C3%AC%C2%90%C2%AD!%C3%B7%C3%A7%C2%98%C3%8E%C2%91%C3%8Ei%0E%C2%85P~%C3%A8%C3%96%C3%90%07a%C3%A6a%C2%8B%C3%83~%0C'%C2%85%C2%87%C2%85W%C2%86%3F%C2%8Ep%C2%88X%1A%C3%911%C2%975w%C3%91%C3%9CCs%C3%9FD%C3%BAD%C2%96D%C3%9E%C2%9Bg1O9%C2%AF-J5*%3E%C2%AA.j%3C%C3%9A7%C2%BA4%C2%BA%3F%C3%86.fY%C3%8C%C3%95X%C2%9DXIlK%1C9.*%C2%AE6nl%C2%BE%C3%9F%C3%BC%C3%AD%C3%B3%C2%87%C3%A2%C2%9D%C3%A2%0B%C3%A3%7B%17%C2%98%2F%C3%88%5Dpy%C2%A1%C3%8E%C3%82%C3%B4%C2%85%C2%A7%16%C2%A9.%12%2C%3A%C2%96%40L%C2%88N8%C2%94%C3%B0A%10*%C2%A8%16%C2%8C%25%C3%B2%13w%25%C2%8E%0Ay%C3%82%1D%C3%82g%22%2F%C3%916%C3%91%C2%88%C3%98C%5C*%1EN%C3%B2H*Mz%C2%92%C3%AC%C2%91%C2%BC5y%24%C3%853%C2%A5%2C%C3%A5%C2%B9%C2%84'%C2%A9%C2%90%C2%BCL%0DL%C3%9D%C2%9B%3A%C2%9E%16%C2%9Av%20m2%3D%3A%C2%BD1%C2%83%C2%92%C2%91%C2%90qB%C2%AA!M%C2%93%C2%B6g%C3%AAg%C3%A6fv%C3%8B%C2%ACe%C2%85%C2%B2%C3%BE%C3%85n%C2%8B%C2%B7%2F%1E%C2%95%07%C3%89k%C2%B3%C2%90%C2%AC%05Y-%0A%C2%B6B%C2%A6%C3%A8TZ(%C3%97*%07%C2%B2geWf%C2%BF%C3%8D%C2%89%C3%8A9%C2%96%C2%AB%C2%9E%2B%C3%8D%C3%AD%C3%8C%C2%B3%C3%8A%C3%9B%C2%907%C2%9C%C3%AF%C2%9F%C3%BF%C3%AD%12%C3%82%12%C3%A1%C2%92%C2%B6%C2%A5%C2%86KW-%1DX%C3%A6%C2%BD%C2%ACj9%C2%B2%3Cqy%C3%9B%0A%C3%A3%15%05%2B%C2%86V%06%C2%AC%3C%C2%B8%C2%8A%C2%B6*m%C3%95O%C2%AB%C3%ADW%C2%97%C2%AE~%C2%BD%26zMk%C2%81%5E%C3%81%C3%8A%C2%82%C3%81%C2%B5%01k%C3%AB%0BU%0A%C3%A5%C2%85%7D%C3%AB%C3%9C%C3%97%C3%AD%5DOX%2FY%C3%9F%C2%B5a%C3%BA%C2%86%C2%9D%1B%3E%15%C2%89%C2%8A%C2%AE%14%C3%9B%17%C2%97%15%7F%C3%98(%C3%9Cx%C3%A5%1B%C2%87o%C3%8A%C2%BF%C2%99%C3%9C%C2%94%C2%B4%C2%A9%C2%AB%C3%84%C2%B9d%C3%8Ff%C3%92f%C3%A9%C3%A6%C3%9E-%C2%9E%5B%0E%C2%96%C2%AA%C2%97%C3%A6%C2%97%0En%0D%C3%99%C3%9A%C2%B4%0D%C3%9FV%C2%B4%C3%AD%C3%B5%C3%B6E%C3%9B%2F%C2%97%C3%8D(%C3%9B%C2%BB%C2%83%C2%B6C%C2%B9%C2%A3%C2%BF%3C%C2%B8%C2%BCe%C2%A7%C3%89%C3%8E%C3%8D%3B%3FT%C2%A4T%C3%B4T%C3%BAT6%C3%AE%C3%92%C3%9D%C2%B5a%C3%97%C3%B8n%C3%91%C3%AE%1B%7B%C2%BC%C3%B64%C3%AC%C3%95%C3%9B%5B%C2%BC%C3%B7%C3%BD%3E%C3%89%C2%BE%C3%9BU%01UM%C3%95f%C3%95e%C3%BBI%C3%BB%C2%B3%C3%B7%3F%C2%AE%C2%89%C2%AA%C3%A9%C3%B8%C2%96%C3%BBm%5D%C2%ADNmq%C3%AD%C3%87%03%C3%92%03%C3%BD%07%23%0E%C2%B6%C3%97%C2%B9%C3%94%C3%95%1D%C3%92%3DTR%C2%8F%C3%96%2B%C3%ABG%0E%C3%87%1F%C2%BE%C3%BE%C2%9D%C3%AFw-%0D6%0DU%C2%8D%C2%9C%C3%86%C3%A2%23pDy%C3%A4%C3%A9%C3%B7%09%C3%9F%C3%B7%1E%0D%3A%C3%9Av%C2%8C%7B%C2%AC%C3%A1%07%C3%93%1Fv%1Dg%1D%2FjB%C2%9A%C3%B2%C2%9AF%C2%9BS%C2%9A%C3%BB%5Bb%5B%C2%BAO%C3%8C%3E%C3%91%C3%96%C3%AA%C3%9Ez%C3%BCG%C3%9B%1F%0F%C2%9C4%3CYyJ%C3%B3T%C3%89i%C3%9A%C3%A9%C2%82%C3%93%C2%93g%C3%B2%C3%8F%C2%8C%C2%9D%C2%95%C2%9D%7D~.%C3%B9%C3%9C%60%C3%9B%C2%A2%C2%B6%7B%C3%A7c%C3%8E%C3%9Fj%0Fo%C3%AF%C2%BA%10t%C3%A1%C3%92E%C3%BF%C2%8B%C3%A7%3B%C2%BC%3B%C3%8E%5C%C3%B2%C2%B8t%C3%B2%C2%B2%C3%9B%C3%A5%13W%C2%B8W%C2%9A%C2%AF%3A_m%C3%AAt%C3%AA%3C%C3%BE%C2%93%C3%93O%C3%87%C2%BB%C2%9C%C2%BB%C2%9A%C2%AE%C2%B9%5Ck%C2%B9%C3%AEz%C2%BD%C2%B5%7Bf%C3%B7%C3%A9%1B%C2%9E7%C3%8E%C3%9D%C3%B4%C2%BDy%C3%B1%16%C3%BF%C3%96%C3%95%C2%9E9%3D%C3%9D%C2%BD%C3%B3zo%C3%B7%C3%85%C3%B7%C3%B5%C3%9F%16%C3%9D~r'%C3%BD%C3%8E%C3%8B%C2%BB%C3%99w'%C3%AE%C2%AD%C2%BCO%C2%BC_%C3%B4%40%C3%ADA%C3%99C%C3%9D%C2%87%C3%95%3F%5B%C3%BE%C3%9C%C3%98%C3%AF%C3%9C%7Fj%C3%80w%C2%A0%C3%B3%C3%91%C3%9CG%C3%B7%06%C2%85%C2%83%C3%8F%C3%BE%C2%91%C3%B5%C2%8F%0FC%05%C2%8F%C2%99%C2%8F%C3%8B%C2%86%0D%C2%86%C3%AB%C2%9E8%3E99%C3%A2%3Fr%C3%BD%C3%A9%C3%BC%C2%A7C%C3%8Fd%C3%8F%26%C2%9E%17%C3%BE%C2%A2%C3%BE%C3%8B%C2%AE%17%16%2F~%C3%B8%C3%95%C3%AB%C3%97%C3%8E%C3%91%C2%98%C3%91%C2%A1%C2%97%C3%B2%C2%97%C2%93%C2%BFm%7C%C2%A5%C3%BD%C3%AA%C3%80%C3%AB%19%C2%AF%C3%9B%C3%86%C3%82%C3%86%1E%C2%BE%C3%89x31%5E%C3%B4V%C3%BB%C3%AD%C3%81w%C3%9Cw%1D%C3%AF%C2%A3%C3%9F%0FO%C3%A4%7C%20%7F(%C3%BFh%C3%B9%C2%B1%C3%B5S%C3%90%C2%A7%C3%BB%C2%93%19%C2%93%C2%93%C3%BF%04%03%C2%98%C3%B3%C3%BC%3C%C3%9E%C2%A1%25%00%00%00%20cHRM%00%00z%26%00%00%C2%80%C2%84%00%00%C3%BA%00%00%00%C2%80%C3%A8%00%00u0%00%00%C3%AA%60%00%00%3A%C2%98%00%00%17p%C2%9C%C2%BAQ%3C%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%05%C3%91iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%207.2-c000%2079.1b65a79b4%2C%202022%2F06%2F13-22%3A01%3A01%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2023.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-10-25T11%3A28%3A42-07%3A00%22%20xmp%3AModifyDate%3D%222022-10-25T12%3A42%3A35-07%3A00%22%20xmp%3AMetadataDate%3D%222022-10-25T12%3A42%3A35-07%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3Aed4c0618-96bf-49d1-9eef-01b337c1538b%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Aa8288b34-3356-2946-903e-5d2b81cb6b35%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A8fcec9cf-43d2-4851-a09d-9b33f7cac995%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A8fcec9cf-43d2-4851-a09d-9b33f7cac995%22%20stEvt%3Awhen%3D%222022-10-25T11%3A28%3A42-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2023.5%20(Macintosh)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3Aed4c0618-96bf-49d1-9eef-01b337c1538b%22%20stEvt%3Awhen%3D%222022-10-25T12%3A42%3A35-07%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2023.5%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1Bt%C3%BB0%00%00%0E%C2%98IDATX%C3%83%C3%AD%C2%99gtUU%C3%9A%C3%87%C3%BF%C2%A7%C2%97%C2%9B%7B%C2%93%C2%9B%1BB%08%24!%24%40B*%C3%840%C2%A1%1B%C2%B0%C2%90PR%08%C3%B5%1D%40A%C2%9C%C3%98%18%C2%B1%C2%8F%C3%8C%3B%C2%A0%C2%88%03%C2%8A%14%07_%3A***(D%C2%A4%C2%89%C2%80%08%C2%A8%C2%90%100%C2%BD%C2%87%C2%84%40HH%2F%C2%B7%C2%97g%3E%10%02Qtt%C2%AD%C3%B9%C3%B6%C2%BA%C3%97%3A%C3%AB%C2%ACs%C3%8E%C3%BE%3D%C3%AD%C3%ACg%C3%AFg%C2%9F%C3%83%10%11%C3%BEh%C3%BF%C3%9D%C3%86%C3%BE%11%C2%82%3F%C2%82%C3%BAGP%C3%BF%C2%BF6%C3%BE%C3%A0%C2%BE%2F%06%C3%9A9%C2%96%1F%C3%94%3F%C2%B8%22%2C*%C3%94%C3%B6%7B%C3%A0%C3%93g%C2%B2t%C3%ADf%C3%B2%C3%A0%04%C2%AE-!%3E%C2%A6%C3%AD%C3%B7%C2%B0'%2Ff%C2%AB%17%C3%B3%0B%C3%82%1D%C2%9D%26%C3%AD%00%C3%9F~U3%C2%92'W%C3%BCV6%2B%2B%5B%C3%8E%C3%89%2F%0Akji5%18z%1B%C2%9A%C2%A2%C2%86D%C3%A6%C3%87%0E%0D%C2%B3%C3%BE%16%C3%B6%C2%9BS%C2%A7%0D%05%C2%85E%C3%A1%0E%C2%BB%C2%93%0B%1C4%C2%B88)aB%C3%AD%C3%AF%0D%C3%9A%C3%91oO%7B%C3%A6%15%14E%C2%93%C3%9D%C2%A9%0C%08%0C%2CL%C2%9B%C2%9Ap%C2%B9G%C2%87%C3%A5%C3%80%C3%B5%3E%00A%C2%90%C2%8D%1B%C2%9EZ%C3%BA4%11%C3%A1%3F%1D%C2%9F%C3%AD%C3%9B%15%3B(%7C%C3%B0y%C2%B8y%C3%9B%C2%81%00%02%C3%9C%C3%88%2B0%3Cse%C3%86wa%C3%BF%C2%89%C3%BD%C2%B1%C2%BAR%3C%C3%B8P%C3%8A%C3%BA%C3%8F%04%C3%966%06%20t%1D%1E%3E%7D%C3%8B%C2%B7%7C%C2%B0g%C3%84%C2%AF%C2%B1%C3%A5W%C2%AB%C2%84%C3%94%C3%94%C3%84w%18%C2%9E%C2%B3%C3%A1%0E%16%2Co%C2%9F%C3%B1%C3%B0%23%C3%8B%7F%C2%8D%C3%8D%2B.t%1F%3Dn%C3%A4%C3%9E%1E%1C%40%C3%BDB%C3%82%C3%8Em%C3%B9%C3%A8p%C3%B8o%C3%B1%7B%C3%BF%C3%BE%C2%8Fc%C3%8F%C3%86E%C2%9D%C3%99%04P%C2%9F%3Bd%18z%C3%BB%C2%96%C3%AF%C3%BA%60O%C3%9C%C2%AD~8%05%C3%94%3E%C3%9C%C3%B50%04%C2%A0%C3%A6%C3%84%C3%B9%C3%9B%7FMpF%C3%86%C2%AE%C2%91%C3%BA%C2%AE%C3%BE%0C%C3%83%10%C3%A3%2B%12d%C2%86%00P%10%04Z%C3%BB%C3%8F%03%09%C2%BF%C3%84%C3%96%14ez%C3%86%C3%B4%C3%B5%C2%AA%C2%8C%02%C2%A8L%02e%3F~%0F%C2%AD%18%11M%C2%91w%18%C2%B8~%C3%B3%C3%8E%C2%A4_%C3%A2%C3%A3%C3%AF%099%05%C2%808%C2%80%C2%A62%C2%A0'%18%C2%96%C3%92%01b%C2%BB%C3%98a%C2%A3%C3%86%1D%C2%BD%1BW%5CY%26%0F%C3%B6%C3%B7.%C3%A9%0Ef%C2%80%0F%C3%B9%C2%8F%C3%B7%C2%A1P%C2%A5%C3%AB%C2%9AW%C3%A9%C3%AD%5D_%24%C3%BD%C2%9A%C3%9Fs%C3%93%C2%9FX%0A%C2%80%C3%92%01%C3%8A%C2%8A%C3%B7%C2%A0%C3%94%C2%BD%2Bi%C3%AC%C3%A8i%C3%B4%C3%80%1D%C2%B6o%C3%9B%C2%B9%C3%BB~%22%02%C2%B6%3C%C3%AA_%C3%BB%C3%BE%C2%8B%11t%C3%BF%C2%BCa%C2%A4%05%C3%A8%C2%A4%04%C3%AA%C3%98%7Bx%C3%B5%C3%9D%04%C2%97%7C%7Dt%C3%90j%C2%A0%23%06%C2%A0yQ%C2%A0%C3%B4E%5E4r%C3%A3%08%C3%B2%5Dq%1F%C3%85%C3%85%C3%BA%C3%929%C2%80%C3%9E%C3%84%60%C3%BB%C2%AA%C3%9DM%03%C3%AE%C3%86%7F2*%C3%B4%24%00Z%04PQ0h%C3%83%C3%85%05d1f%C3%91%C3%A5%C2%B1%3Cq%5D%C2%86%C3%A9%C2%B4%C2%BA%C2%86KY%3F%C3%AA%7F%C3%8A~13y%5B%2C%40S%C3%9C8%C3%9A%1D%C2%A4%C3%90G%C2%A1%C2%A0%C3%83%1B%C2%87%13%C2%AD%C2%8B%C2%A5%C2%87%C2%B8%C3%9B%C2%8E%C3%8D%7F%C3%A4%C3%91%C2%9F%C3%99%C2%BE%3Ey%C3%BC%5E%004%00%C2%A0M%3AP%C3%9C%C3%BC%08%1A%C2%9B%C3%BB7%C2%9A%C3%BD%C3%84%C3%B8%C3%9B%C2%A3VT%C3%AC%19%C3%87%C3%8E%0C%C2%BC%C2%9B%C3%9D%2BV%C2%AE%C2%9A%0B%C2%80d%C2%80%C3%B6%C3%88%C2%A0u%2F%C2%83%1E%C2%A6%3Cr%C3%98%C3%8B%C3%A9%C3%86%C2%BD%20%C3%B7.%19%5E%C3%9E%3E5%17s%C2%8B%14%C3%88%C2%A1%C3%9AZ%5D%C2%8C%1B%C3%BDii%12-%3F%C3%BC%1A5%C3%AC%C3%B5%26%C3%938%3F%3A%C3%B7%C3%96%C3%B1%C2%89%3F%15%C3%9E%C2%B6%24%C3%A4%5C%C3%BD%03%C2%A0%C3%8F%C2%9F%C3%A3(e%3AO~%C3%A1%2C%C3%B5%C3%AF%05%1A%C3%B2%60%00%25%C2%BD%12%40%C3%99%C2%9B%13%C2%88%16D%C3%91%C2%BA%C3%A8u%C3%BB%7F%C3%8A%5EX%C3%B6l%C3%BA%C2%93%00%C3%BD%03%C2%A0%C2%AD%C3%81%1C%C2%8D%08%04%C3%B9x%1Ah%C3%9A%C3%A3%0F%10Q%04%C2%9DY)u%3B%C2%B8%C3%B8%C3%89%C2%A7%7B%C2%A4r%C3%A5%C3%B1%C2%AD%13%1AG%C2%82Zb%40'%C3%87%C3%88%C2%94%16(%C2%90%C3%8E%0F%C3%A43%C3%82%C2%9B6%1C%09%25*%C3%B4%C2%A1d%2F%C2%BE%C2%8B%C3%A7%C3%AC_%C2%9F%C3%B8%26%C3%A0%16%C2%9B%C2%BBy%C3%AD%C3%84g%00Z%0FP%C2%96%00z%C3%95%C2%97%C2%A1%C3%A0%10%C2%89%C3%A4%C2%98%C2%81%C2%A4%C2%BE%C2%BA%C2%8C%C3%B0%C2%BF%C2%9F%C2%91%C2%A2%C2%8E%26%00%147~%C3%B2%C3%A7%3F%C2%B3%C3%BBB%1E%0F%C2%83w%C2%B5%04%C3%90N%1Dh%C3%99%C2%83%22%C3%B9%C2%87%C2%B2%144%20%C2%90%C2%9E%7De%18%11i%C3%A9%C3%BB%C2%BF%C3%9F~%C2%A9%2F%C2%BC%C2%BC%C3%AC1%00%C2%A8%C2%BDu%C2%A3%C3%B7%C3%AC%14%3A%C2%9D%C3%B5%0C%C3%91%17z%C2%BA%C2%B4%C3%A2%C2%A5%1E%0A%C2%8CGV%25%C3%91%19%C2%91%C2%88%22h%C3%92%C2%B4%C2%9E%C3%B3%12%00%C2%82%02%0A%5E%C3%BA%20%C2%B9.%1D%26%C3%BA%C3%A4%1F%C2%94%C2%BD%C3%A3%C3%92%C3%AC%1E%C3%93%C3%86%C2%98%C3%98%23%C3%BB%01Z%22%C2%81%20%C3%B7d%C2%83F%C2%BA%11%C3%95%05%C3%90%C3%A2I%C2%BD%09%00%0D%C2%8D%C2%89%3A%7D'%C3%9Bzz%C3%82%C2%87d%04%5Dz%C2%8E%C3%BB%C2%B9%5E%C2%806%7C%C3%A0Eu_%C2%85t%C2%8F%C3%B6%C3%A7%5E%7C%C2%A5%7Bm%C2%A8%C3%9D0%C3%AB%C3%AF%C3%87%00%3A%05%C2%86%C3%BA3%200%3D%C3%99%C3%A0%C2%9C%13%C3%A4%C2%B7%C2%A7%C2%89%00%7F%02%40%19%07%C2%BE%0A%C2%BAS%C3%B7%3F__%C2%9B%06%C2%80%C2%96%014A%05A%C3%AC%C3%89%0F%C2%89%17%C2%88%1A%07%C3%93%C3%821%06%02%40%C3%A1%C3%91%C2%91%C2%A7z%04%15%00-%7F%23%C2%91('%C2%81%C3%AARC%3B%7F%C3%98q%C2%B8%C3%97-%C3%A1%C2%85%2F%C2%A9%C2%B9D%C2%B3%C3%A8F%C3%8D%C2%9FI%C2%BD%C2%8Bc%00%08%11%0Cm%C3%8A%3EM%C3%B4%C2%8F%C3%87%C2%A8z%C3%BA%C2%94%C3%9D%C2%B7%C3%98%C3%BA%C2%A2%C2%93%3Ce%C3%A9%C2%AEv%C2%8C%05%0D%C3%BC%05v%C3%96c%C3%BD%C3%A9Rf*i%25%10%14%C3%9Et%C3%A2%C3%A4%11%C3%AF%5B%C2%BC%C2%BD%3A%C2%BA%C2%8C(%C2%98%C2%96%C3%9F%C3%87%C3%9C%5D%C2%AF%00%C2%BAp.%C2%886-V%09%00M%C2%98%3A%C2%B3%3BSl%C3%A6Io%C3%92%5E%C3%90%C2%BF~A%2F%1B%C3%A6G%C3%A9WJ(y%C3%AAl%02%40%2F%2F%7Bm%C3%BE%C2%9DA%C3%BD%C3%AB%C2%9C%C3%B4%C3%A5U%12%C3%A8%C2%88%C3%97%2F%C3%B8%0C%C3%90%C3%8A%C3%97FR%C3%81%C3%B1T%02%40Z_%C2%BF%C3%9A%1Eu%C2%AA%C3%86%0D%C2%B8%18r%06%C3%91%C2%B3%C2%BEF%C3%B3%C2%BE%22%C3%8D%20%C2%BE%7ChqY%25Z%C3%91%0A%C2%B9BcB%C3%93W%C3%A8%C3%95%2F%13%C3%BE%03zV%C2%B9%1C%C3%87%40%05%20%C3%B7%C2%8F%C3%84ce9%C2%88zu%13%2C%C2%85%C2%97%7D%C3%AC%00j%1A%C3%AB%C3%8006'%22%15%C2%87%C3%9BD%60%C3%A4O%C3%8A%13E%C2%91%00(%C2%A8%C2%AA%C2%AA%C3%82%C3%A9%C2%BC%0C%C2%98%C2%AC%00%C3%8C.%C2%99%C2%B1%C2%99%C3%A5%C3%8B%C3%A5%C2%97Qw%C3%B2%C2%A4%C2%96%C3%8E%C2%96%7B%01%12%06%C2%84%C2%BA%C3%9D%06%C2%99%C2%9B'%C2%99g%01%3B%C2%83%C3%B3%C2%A5%C3%95(bnVU%C2%B6%C3%8E%06%16%00%C2%9C%C3%96%1B0%5D%20%19%16%60%C3%92(%40%C3%BCIq%C3%8E%03p%C2%95%C3%96%C3%80%C3%93R%09%C3%9E%C2%A3%03%00%C3%A0%C2%B4%19%C2%B9%C3%BA%C2%BAZ%C2%94%C2%96%14%03%00%C2%AC%C2%A2j.%C2%B4%02Ce%09%02%C2%B8%C2%9B%C3%BC%C3%8D%13t%C2%8A%06%C2%80%C2%8C%C2%92%C3%A6%C3%AFq%C2%B4%C3%B8%2B%00%C2%80%C3%888%C2%9Dl%C3%BC%04%03%10%7C%C2%B3%C3%93%C3%B4%C3%B7%C3%BDq%C3%A3%C2%BC%C2%88%C2%9C%22%07%C2%BE%C3%91%C3%82%C3%A2%19%1CTHv%0B%2CD%08%C2%9C%C2%93%C2%BA%C2%A3%C3%B0%C2%BE%16%18%0Fu%C3%A2%C3%9C%C2%B6%11%C2%98%3A%C2%A3%17%02%C2%A6%C2%B8Cxd%3C%C2%9C%3A%03%10%C3%AC%01%C3%9B%C3%8A%C3%95%C3%80%C3%BAO%C2%91%0B%C2%A02lp%C2%85%C3%8D%C3%9E%09%C2%B2%1A%C3%91%C3%8B%C3%90%C2%8B%C3%8A%C3%92z7d%7F%0E%C2%BCw%0F0s%C2%B0709%02%C3%AA%C2%BC%C2%89%20U%0F%C3%80%C2%8C%C3%88(%0E%19%C2%BB%01'%C2%80%C2%80%C3%BE%C2%BE%25c%C3%A3%C3%AF%C2%BDbw%C2%9A!%C3%9D%3B%C2%B4%C2%83%2C1G%3B%1F*%C3%80%C3%9C%11%03%C3%B1%C3%81%0B%23%C3%A17%C2%A1%2F%0Cizh%26%08%C2%B08%5C%18%3D%C2%95Ey%23%C3%B0%C3%B6%06'%00%20..%C3%AA%7B%C2%9B%C3%99%02%C2%92x%5C%C3%BBR%C3%93%C3%B6%C3%B1%5C%20%C2%B0%C2%AF%C2%82k%C2%B3%C3%BC%11%3A*%0C%C3%BCS%C2%A3%20%C2%8C%0C%C2%84%03%C2%80%C3%9F%C2%9F%C3%83%C2%B0%7B%C3%83v%7C%C2%B6%C3%AB%20%00%20%262%C3%A6%C2%A2%C3%83%C3%A1%00%C3%93%C3%B5%C3%96%C3%A2%26%C2%8D9%C2%B3%1A%40%C3%AFF%05%17%C2%86%C2%84%03%C2%83%C3%BC%C3%A0%C3%BA%C3%8Bx%C3%B4%C2%9D%1E%07%C2%A7%C3%99%01%C2%83%C2%8F%03%C3%A1%C3%81%2C%C3%9Ez%C3%95%08%00%C2%88%0E%1F%C3%B0%3D%C3%A8%C3%87%C2%B4%C3%9AC%1D%C3%8F%C3%90%C2%92%C3%B2)%C2%94%C2%B0.%C2%A8%7BH%C2%BF%C2%B1%7C%C3%A9_%2FWW%C3%A1b%C3%A6Yd%15%C3%A4%C3%80YyD%C2%B3V%C2%83%C2%86%24h%C3%A8%C2%9B%60_%C2%A2u%C3%83%C2%89n%C2%AC%C2%A3%C3%A5%C2%99%C2%BBI(%2C!%C2%BE%C2%B9%C2%81%C3%B0%C2%97%C3%85%04%C2%804%02%C3%8C%C2%99%17N%C3%B5%C3%89%C3%8F%C3%BB%0E%C2%A5ygQ%7D%C2%AD%0C%1BRgl%C2%9D%06P%5B%C2%ACB%C2%A6Yqt%C2%A2%C3%A0%04%C2%8D%C3%8F8K%0B%C2%9E%C2%99H%C3%9Bw%C2%82%C2%9E%7DN%C3%9F%C2%AD%C3%BB%C3%B1%C3%B4E%C3%8Bo%C3%94%5D%C3%81%C2%A5%C2%9C%1F%C2%90S%C2%99%C2%87%C3%ACw7%C2%8F%5D%08%C3%90%5BJ%00%C3%95%C2%8C%1EHt%C3%A8I*%C3%AA%C3%98I%C2%A1%C3%AF%25R%C3%82%C3%873i%C3%A3%C3%B1%10%1A%1Cr%3B%1D%C3%8F%C2%9E%C3%BDzpa%5E%1E*%C2%9B%C2%AE%C2%A3%C3%B1%C3%98%C2%A6%C3%88T%C2%806%02%C3%94%C3%A0%C2%A7P%C3%87%C2%81%C3%97iM%5D%0E%C2%8D%5E%C3%B10%C2%AD%C3%BDt2%25o%C2%B8%C2%97%C2%80%C2%9B%C3%93Jx%C3%A4%C3%90%0B%0E%22%C2%94%14%17%C2%A2%C2%B2%C2%AC%0C%C2%95%C2%97K%C2%91_P%C2%8C9%C2%A1%C3%83%C2%B2%C3%9E%02%C2%A8%C3%9A%7F%08%1DY%C3%B5%2F%C2%9A%C2%9D%C3%A3%C2%A0%05%C3%AF%C3%BC%40%C2%AF%C2%BD%12K%1Bw%C3%B9%C3%93%C2%9C%C2%94%C3%9B%C2%B6oX%C2%BF%22%C2%8D%C3%B922%C2%A0%C3%B6%C3%94%00%C3%AF%3E%C3%9BZ%C2%AF%C2%A1%C3%BD%C3%9BZ%C2%80%00%C2%BD%C2%BBz%C3%A3%C3%80%C2%B1%13A%0A%C2%83N%C2%89%C3%A3%C3%90r%C2%A3%01%C2%9B%C3%9E%3F%C3%88%1A%C3%B3%C2%B2%C2%BF--%C3%88%1C%5D%0D%16%7F%C2%82%0B%7F%7B0%15v%16H%C3%B7Vp%C3%B5z%23p%C3%ACf%0A%C2%A4%C3%8D%C2%9C%C2%B6%C3%B3%C2%AD5k%16%C2%B667B%00%C3%B0%C3%BCk%C2%9B%C3%B9f%C2%93qG%C3%9E%C2%A1OfD%C2%80%C2%93E%C2%B80%C3%93%2F%08u%23%12Q%C3%8C%C2%9D%C2%86d%C3%8FC%C3%86A%C2%A0%C3%83%C3%A2%C2%84%20%C2%8A%1D%C2%87%C2%8E%1C%1Ah0%C3%A8%C3%ABu%C2%A2%C2%84%C2%B7%C3%97ma*%3A%C3%8Dq%C3%B9G%0En3%C2%B7%C3%96%C2%87q%00%C2%9E%C3%A7%25L%18v%0F%3E%18%C3%90%07g%C3%95%2Bh%C3%BA%C2%AE%0C%C3%A5%25-%00%C2%80%C2%94%C3%A9)%C2%BB%C2%B6l%C3%9E2%C2%BF%C2%B1%C2%BE%1E%0Du%C3%8DX%C2%B5c%C2%BF%C2%94%7D*%23%C2%93%C2%B9V%15%C3%89%03%18%0F%01I%23%C2%A3q%22%C3%90%C2%8A%7C%C2%AE%1D%C2%85%C2%87%1B%C3%90%C3%94xs%C2%94%C2%BD%C2%B1nmJjrr%06Y-%60%19%0E-%C3%8D%1DX%C2%B3%C3%B1C%C2%B6%C2%AA%C2%BE%C3%BA%C2%B3s%C3%87%C3%B7%C2%A7%C3%B8%01%18%0E%05%C2%89%C3%B1%0F%C3%A1%C2%92%C3%8E%C2%89V%C3%AEs%5C%C2%AFw%C3%A1%C3%84w%C2%AD%00%08%C3%911a%3F%C2%9E9u~%C3%A8%C3%8F%16*U%C2%AB%C3%96%7C%C2%B8%C3%A7%23%C3%BF%C2%A2%C2%BC%5C%14%C3%A4%C3%BE%C2%88%C2%AC%C3%B3%C3%9Fc%C3%96%C3%ACG%C3%9C%13%C2%A6%C3%8E%C2%8C%C2%8F%18y%C3%9F%25%C2%8D%C3%96%C2%B3%C2%AC%7B%17%24jH%C3%87%2B%3D%26%C3%AD%C2%A1%C3%83c%C2%8E%C2%B7%C2%B4%C2%B6%207%2F%07%C3%85%25EH%C2%9B%C3%B7%C2%A4G%7CbZ%C3%9C%C3%90Q%C3%B1%C2%99%C3%AE%C3%9E%C2%BE%C3%B5%00%1C%00Hd%18%C3%B2%15%C2%A4%1E%C2%AC%C2%A4%C3%8AM%7B%C3%B6%C3%AF%C2%89*%2B.CYi%09%C3%8Eg%C3%BE%C2%80%C2%B8%C2%B1%0F%06%C2%8C%C2%BB%7F%C3%B2%C3%81%C2%80%C2%81%C3%A1%C3%97YN%C2%B8%C3%92%C2%AD%C2%9Ba(Hv%23%C2%86%C2%B9%C2%BDx%C2%8D%C2%BB%C3%BF%C3%9E%7D%C3%8D%C2%AD-%C3%88%2F%C3%88C~A%3E%C2%86%C2%8FO%C3%B5%1F%C2%978ck%C3%80%C2%A0%C2%88k%2C%2F%C2%96w%C3%AF%C2%808%C2%9E%C3%B4%1C%C3%9FC%C3%B7%C2%8BK%C2%9F%7F%C2%B8%C2%B1%C2%A1%11%C2%A5%C2%A5%C2%A5(%2F%2BEan.%C3%A6%2FzZ%C2%9E%C2%90%C2%98%14%1C%3B%26%C3%BE%C2%BC%C2%9B%C3%9E%C2%BB%5B%C2%B7%C2%9E%C3%A3H%C3%87%C2%B2%3D%C2%AB%C2%80%C3%B0%C2%90%C2%9C%C2%92%C2%B2B1%3F%C2%B7%10%2C%C3%8B%C2%B2%0C%00%07%C3%87%C3%B3%C3%B5Q%C3%83%C3%AE9%C2%9Cq%C3%A0%C3%A0%C3%A0%40%C3%9F~W%3A-f8%080%C2%9A%C3%8Dhjk%C3%ACo6u%24%C3%B0V%23%C3%A7e%C3%B0%C3%92%C2%BB%C3%AB%3D%C2%AFs%C2%A2t%C2%A3%C3%95f4%C2%B5%3B%C3%8C.%00.%C2%8E%C3%A3%C2%AE%C3%8C%C3%BC%C2%9F9K%C3%B6%C3%AE%C3%9Es_AA%3E%00%06f%C2%A3%09%1D-%C3%97%C3%BB%C2%B3N%C3%AB%24%C3%96n%C2%B1%C2%BB%C3%ABt%C2%9C%C2%BEW%C2%9F%1B%C2%A2%C2%AA%C2%B9%C3%AE%60%C3%B9%C3%86Z%C2%BB%C3%95%0E%00%2C%C3%8B%C2%B6D%C3%87%C3%86%7C%C3%BA%C3%A5%C2%A1%03%7D%C2%83%03%C2%82sL6%2B%C2%9CN%17V%C2%AD%C3%B9%C2%BF%10%C2%AD%22%C3%86%C3%99LFN%159%C2%A7w%C3%AF%3E%C2%B2%C3%AC%C2%A6%C2%ADc%05%C2%B1%C2%B1%C2%95%C3%88%5Ca%C3%A9t%12%C2%91C%C3%92%C2%A8yO%3D%C3%BB%C3%8C%C2%A4%1D%C2%9Bv%C2%A4V%C2%94%C2%97%C2%82%01%C2%83WVo%C3%AC'%C2%93%C3%91%C3%9F%C3%96%C3%9E%C2%A8S%04%C3%96%C2%A9%C3%B7%C3%B4%C3%AA%C2%A5%C3%91z%C3%94%09%C2%92%5C%C3%9F%C3%ACr%C2%B5%C2%B78%1D%04%C3%80%C2%A9%C3%B7%C3%AAun%C3%B5%C2%BA5!%0B%C3%A6-x%C3%B7Z%5D-%C2%88%C2%BD%C2%B9%C2%93%C2%B0%C3%9A%C3%AD%C2%A8%C2%AB%C2%AB%0A%C2%86%C3%93%3E%C3%8Bi2%C2%B9y%C2%BAk%C2%B5%1EzC%C2%9D%20%C3%8B%C3%B5%C2%AD%C2%84%C3%96v%C2%97%C3%8B%0E%C2%808%C2%8E%C2%BB6)y%C3%8A%C2%AAcGND%19%3B%C2%AD6%C3%B0%00%1F%19%1E%5D%25%C2%88BN%C3%AF%3E%C3%9E%C3%BB%C2%A6OK%C3%9A*2%0CDY%01%C3%87%0A%20%02%3E%C3%BCx%C2%9F%C2%96%07iy%C2%81%C2%B7X%25%C2%B1B%C3%AF%C3%A9nR%14%C2%A1%C2%9F%C3%8B%C3%A1%C2%80%0B%C2%A8fXjs7%C3%A8s%23%C2%A2%23%C2%97%24OL4556BU%C3%9C%C3%80%C2%80%05%C3%8B%C2%B2P%05%C2%96%C3%AF%C2%B09%2BeY%1E%C3%A2%C3%A5%C3%A9%C3%A9rSd%1F%C2%BBY%C3%A7A%203%C2%91%C2%ABF%C2%92%C3%85%C3%9A%C3%90%C2%88%C3%907%C3%A6LO%3B-s%22X%5E%04%C3%8F%09%60%18%16%22%07%00.%C2%93%C2%A2%C2%8A%C3%95N%C2%97%1B%C3%8F%C3%B1%C2%8C%C3%81%C3%8DM%C3%A9%07b%C3%AC%04%C2%AAbX%C2%A6%C2%BDw%1F%C3%AF%C3%8C%C3%B4E%0B%17%C3%B7%C3%A9%C3%AD%C2%8B%C3%8E%C3%8EN%C3%88%C2%B2%06%3C%2B%40f%1C%C3%A0y%C2%88%3C'4%C3%99%C3%9D%C3%942%C2%8E%C3%B5%C3%B6%C2%B6%C2%9A-%3E.%C2%A7%C2%83%01%C2%A8%C2%91%15%C3%98%C3%82%C2%BE%C3%BE%C3%BD%C2%BEM_%C2%B8%C3%A0%25%C2%83%C3%81%00%C2%93%C3%99%0AY%C3%91%C2%80%01%03%C2%BB%C3%95%06%22%178%C2%97KO%C2%80K%C2%94%C2%84%C2%ABz%C2%BD%C2%BBE%C2%A3%C3%88%5Ev%C2%9BUe%18%C2%B6%19%0C%C2%95%C2%A9Z%C2%B5%222%3A%C3%B2%C3%89%C2%B4%C3%A4%C2%94%C2%A6%2B%C3%97j%C2%A0%C3%93%C2%BA%C2%83eX%C3%B0%C3%BD%C3%BD%03%C3%9E%C3%91%C2%B8)%C2%99%C2%B3%C2%A6%C2%A7%C2%96J%1A%15%C2%AA%C3%AA%06I%C2%94a%C2%B3Y%C3%A0%C2%B09%C2%B0%60%C3%AE%C3%AC%C2%8EM%C3%9BvT%C2%9B%C3%8D%C3%A6%C3%A3%2C%C3%8F%C2%B6%C2%99%C2%8Db%C2%A4MQ%C2%8C%3C%C3%8F%C2%B9d%C2%8D%7CAV%C2%94%C2%93s%C3%A7%C3%8C%C3%B9Z%12%04hu%C3%AE%C2%90e%15%2C%C3%8B%C3%82n3%C2%83%05%03O%2F%C3%8F%0A%5E%10L%1AU5%C2%9B%C2%8C%C2%9D%C3%83-%22%1F%C3%A2%C3%92%C2%B9%19dI%C2%BA%22%C3%89%C3%A2%C3%91~~%7D%C3%B7%C2%A4%24%C2%A5t%C3%B0%3C%07IR%C3%81%C2%B3%1C%C2%9C%0E%1BlV%3B%0C%5E%C3%BAR%C2%86%25%C2%A7%C3%9DfsH%C2%BC%10'%0BB%C2%B8S%C3%A3%C3%A6%C3%A0E%C2%BEMV%C2%94%C3%B3%C2%B2%C2%AA%1CX8w%5E%C2%A6(%09PU%15%3C%2F%C2%82%C2%81%0B%16%C2%AB%09%2F%2CY%7C%C3%B5%C3%B55o*6%C2%AB%C3%AD%C2%80%24%C3%B2%C3%97%C2%8D%C2%A21%C3%8A%C2%AE%C2%B1Z8%C2%9E%C2%B7)%C2%AA%C3%BC%C2%AD%C2%AA%C3%91%7C%C2%9E%C2%BE%C3%A8%C3%91lA%C3%A4%C2%A0%C2%AA%1A%08%C2%9C%08r9a%C2%B2%18%01%C2%A7%1D%1C%C3%8B%C3%81%C3%93%C3%A0Yc4%C2%9A%C3%8E%08%C2%A2%60%C2%B2%18%C2%95H%C2%8B%C3%85%C3%AC%C3%8B%C2%B2%C2%ACVQ%C3%A5BI%C2%96%0E%2F%5C%C2%B0%60%C2%BF%24%C2%8A%C2%90d%19%22%2F%C3%82%C3%A5t%C3%81j3%C2%839%C3%B3%C3%8D)%00%0E0%0C%0B%C2%86%C3%A3!%C2%88%02X%C2%86%C2%81%C3%83a%07%03%06%0C%C3%83%C3%81j%C2%B7%C3%A1%C3%93%3D%C3%BB%C3%98%C3%B6%C3%B6%C2%B6%00%C2%96eu%2C%C3%8B%C2%98%24Y%C2%BA2%C3%B1%C2%81%07%C2%AC%C2%B2(A%C2%90Dp%1C%0BA%14!%0A%02%00%17%C2%88%5C%10x%09%0C%18%18-Fl%C3%9F%C3%B6%C2%9E%C2%8F%C3%85b6%C2%88%C2%A2%C2%A8cY%C2%B6f%C3%AA%C3%94%C3%89WeY%C2%81%24%C3%8B%60Y%C2%A6%C2%8B%C2%97%C3%802%0C%18%C2%B8%C3%80r%1CxN%C2%80%C3%93%C3%AE%C3%80%C3%96%C3%AD%3B4m%C3%ADm%01%C2%82%20%C3%AA%19%C2%86iQT%C2%A5b%C3%92%C3%84%04%C2%AB%2C%C3%8B%10D%1E%1C%C3%87A%C2%94D%08%C2%9C%00'9%C3%80%C2%82%C2%81%20%C3%8Ap%3A%C2%9D%C3%98%C2%BE%7D%07%C3%9F%C3%92%C3%922%C2%88%C3%A39%0F%06L%C2%A7%C2%A2*%15IS%C2%A6%1A%25E%C2%86%24%C2%8A%609%06%C2%82%20%C2%80c9%10%C2%B9n~_%C3%A9%C3%8A%14%C2%AB%C3%8D%0A%C2%A3%C3%89%C2%84%C3%B7%C3%9E%C3%9D%C3%95%C3%97%C3%A1%C2%B0%7B%C3%B0%C2%82%C3%80%0B%C2%BCP%3Derb%C2%AB%24%C3%89%10D%01%02%2F%C2%80%179%C2%B0%1C%07%C2%86%18%C2%B0%2C%0F%C3%A6%C2%8F%7FT%C3%BF%C3%BD%C3%B6o%C3%91C%C2%90ggA%16%C2%9E%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image1 = ExportToStableDiffusion.add("image", undefined, File.decode(image1_imgString), {name: "image1"}); 
    image1.alignment = ["right","top"]; 

// TPANEL1
// =======
var tpanel1 = ExportToStableDiffusion.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
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

var SamplerMenu_array = ["ddim","k_dpm_2_a","k_dpm_2","k_dpmpp_2_a","k_dpmpp_2","k_euler_a","k_euler","k_heun","k_lms","plms","pndm"]; 
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
    RecentSeeds.preferredSize.width = 152; 
    RecentSeeds.alignment = ["fill","top"]; 

// EXPORTPANEL
// ===========
var ExportPanel = ExportToStableDiffusion.add("panel", undefined, undefined, {name: "ExportPanel"}); 
    ExportPanel.text = "Export"; 
    ExportPanel.orientation = "row"; 
    ExportPanel.alignChildren = ["right","center"]; 
    ExportPanel.spacing = 10; 
    ExportPanel.margins = 10; 
    ExportPanel.alignment = ["fill","top"]; 

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
    StartRenderCheckbox.alignment = ["fill","center"]; 

var HasAlphaCheckbox = exportButtonsGroup.add("checkbox", undefined, undefined, {name: "HasAlphaCheckbox"}); 
    HasAlphaCheckbox.text = "Has Alpha"; 
    HasAlphaCheckbox.alignment = ["fill","center"]; 

//layout over - now for functions and logic


//FIRST - some quick setup of UI elements:
specifiedImagePath.hide();

//show the last saved output folder location if we've got one
if ( app.settings.haveSetting("ESD", "outputFolder") ) { 
    OutputLocation.text = app.settings.getSetting("ESD", "outputFolder");

}

getPathPreference();

var showPaths = examplePaths();
samplePaths.text = showPaths;
initializeSeedMenu();

getESRGanGFPGanMiscSettings();

//include all the main functions
//@include "../Export_to_stable_diffusion/ESD_export_functions.jsx"

ExportToStableDiffusion.show();

