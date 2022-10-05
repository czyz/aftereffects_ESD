<h1 align='center'><b>Export to Stable Diffusion: a ScriptUI plugin for Adobe After Effects</b></h1>

<!-- An Adobe After Effects ScriptUI plugin for generating both image sequences and prompt files for Stable Diffusion, using the InvokeAI "dream.py" script. -->

<p align="center">
<img src="docs/images/2.jpg"/>
</p>

This After Effects plugin aims to turn Adobe After Effects into a versatile tool for creating image sequences and accompanying prompt batch files to be processed by [InvokeAI](https://github.com/invoke-ai/InvokeAI/blob/main/README.md)'s dream.py script. 

<br>

<img align="right" src="docs/images/lincoln_test.gif"/>

# **Table of Contents**

* [Why?](#why)
* [Installation](#installation)
* [How To Use](#how-to-use)
  * [Set Up Composition](#set-up-composition)
  * [Export Image Sequence and Prompt File](#export-image-sequence-and-prompt-file)
  * [Use the Prompt File in InvokeAI](#use-the-prompt-file-in-invokeai)
  * [Create Show-and-tell Composition](#create-show-and-tell-composition)
* [Key Features](#key-features)
* [Changelog](#latest-changes)
* [Contributing](#contributing)
* [Support](#support)
* [Thanks](#thanks)
* [TODO](#todo)

<br>

# **Why?**

Widespread access to quality text-to-image and image-to-image machine learning models is a new phenomenon, and it's difficult to predict what kinds of inputs we'll all be passing to the model in a year or two. Versatile tools serving as middleware to feed prompts and images to the machine learning models are great for exploration. 

After Effects is a compositing application that can export PNG sequences and also features a **very** extensive toolset for keyframing changes in values over time and/or scripting values in Javascript. This plugin is meant to add functions that help patch the output of After Effect's user-friendly tools into InvokeAI, which then feeds commands to Stable Diffusion. Ultimately the plugin is meant to aid in the use of InvokeAI for the exploration of the use of image and prompt batch sequences for animation or even single-image settings exploration. 

Here's an incomplete list of ideas to which this script might be of use:

- Tossing image sequences at the model just to see what comes back
- Using video to puppeteer AI-generated characters (e.g. President Lincoln above)
- Experimenting with one text prompt and a single still image as input, but keyframe a single variable to generate hundreds or thousands of variations while determining the best Image Strength, cfg_scale, or steps for generating a particular image
- Generate image sequences of animated solid shapes or text to send to the model
- Please experiment or speculate and add to this list.

<br>

# **Installation**

<!-- <div style="float: right;margin-left:1em"> -->
<!-- no more divs, switching to old-school deprecated html to do these right-aligned images with text wrap. -->
<img align="right" hspace=10 src="docs/images/templates_outputmodule2.jpg" />

- This script depends on a specifically-named PNG Sequence output module, which can be found in "additional_files/PNG sequence output modules.aom". To install this output module:
<br clear=all><img align="right" hspace=10  src="docs/images/Load_output_module3.jpg" />
  - Open After Effects's Output Modules window by clicking the menubar menu: Edit > Templates > Output Modules.<br> 
  - At the lower-left corner of that window is a 'Save All...' button, and next to that is a 'Load...' button. Click 'Load...'.<br>
  - Navigate to select the aforementioned output module file, and hit the 'Open' button.

<br>

<img align="right" hspace="10" src="docs/images/install_script.jpg" />

- Install the script (optional)<br>
  - In After Effects's menubar, click 'File > Scripts > Install Script File...'. Navigate to and select the script 'export_for_stable_diffusion.jsx', click the 'Select' button, and next time you launch After Effects the script will be easily accessible in the 'File > Scripts' menu.<br>
  - Or you can always just run the script on-demand by choosing 'File > Scripts > Run Script File...' from the After Effects menubar.

<br>



# **How To Use**
<p align="center">
<img src="docs/images/example_simple_comp.jpg"/><br>
A simple composition with one prompt and an animated Image_Strength value.
</p>
<br clear=all>

<!-- <div style="float: right;margin-left:1em"> -->
<img align="right" hspace="5" src="docs/images/4.jpg" />

<!-- footnote method borrowed from https://stackoverflow.com/a/32119820/20037038 -->
## Set up Composition
1. Create an After Effects composition that's of the size you'd like Stable Diffusion to generate. Your comp's dimensions (and ultimately your image sequence's dimensions) will serve the same function as the -W and -H arguments to the InvokeAI prompt. Both the width and height dimensions will need to be divisible by 48, and you'll find that Stable Diffusion will run out of VRAM if the images you request from it are beyond some limit.  For reference, 448 x 768, 704 x 512, and 576 x 640 all work on a RTX 3080Ti in full-precision. Set the composition's start frame to 0<sup id="a1">[1](#myfootnote1)</sup>.

2. Get your video all set up the way you like it. It could be an phone video, a still photo, a black solid with an animated circle bouncing in front of it, etc.

3. Run the export_for_stable_diffusion.jsx script to bring up the UI.

4. Click the "+ML_Settings Layer" button to add a layer with controls for Image_Strength, cfg_scale, and steps. The controls are all sliders that can be found in the 'Effects' controls for that new layer. For the accepted ranges of these values, please see the InvokeAI documentation.

<br clear=all><img align="right" hspace="5" src="docs/images/6.jpg" />

5. Click the "+Prompt Layer" button as many times as you like to generate your prompt text layers. You can optionally enter your prompt text before pressing the button, as a streamlining measure, but you can always just edit the text later as you see fit. The prompt_strength value can be set (use values from 0 to 1) via the control in the Effects section of each prompt text layer.

6. Hit the esc key to get out of the modal plugin window<sup id="a2">[2](#myfootnote2)</sup> so that you can go keyframe and edit your prompt text, weights, and other settings in the Timeline. 



## Export Image Sequence and Prompt File
7. After the timeline is just how you like it, run the script again. Go to the UI's output tab.

8. Choose the output location and how the image locations should be represented in the prompt file (paths omitted, included, or replaced by user-specified text). 

9. Take a look at all the other Output options and set them as needed. More information on their effects can be found in InvokeAI's documentation.

10. In the Export section of the Output tab, hit the Sequence button. 

The script will then do the following: 

- It will create a directory at the output location, named after the Composition. 
- If such a directory already exists, it will skip over that directory and create a directory named after the composition with a digit at the end of the name. 
- Then it will step through every frame of the comp and will write to the text file a series of prompts, one for each frame, listing the input image and path, prompts, and other specified options, in the syntax expected by InvokeAI. 
- After that it will add the comp to the render queue, set it to output to that new output location folder, set it to use the PNG Sequence output module, and will start the render.<sup id="a3">[3](#myfootnote3)</sup>

Now you have an image sequence and a prompt file. If you chose your prompt options well, the images in that prompt file will have paths that lead Stable Diffusion to the images in your image sequence. 

## Use the Prompt File in InvokeAI
11. Go to the command line at the point at which you usually run InvokeAI's dream.py script, but instead of entering the interactive prompt version, it can be run like so:

  ```
  (ldm) ~/stable-diffusion$ python scripts/dream.py --full_precision --outdir "output_directory_location" --from_file "the_prompt_file_you_just_generated.txt"
  ```

Sit back and watch as image after image is generated. 

Please note that for non-animated or test purposes, the "Current Frame" button can be substituted for the "Sequence" button in step #10 above, and it will generate a single image and a related single-line prompt text file.

## Create Show-and-tell Composition
Before the next step you may need to rename all of the images generated by step #10. <sup id="a4">[4](#myfootnote4)</sup> After that you can go ahead with the following:

12. Import into After Effects the image sequence that was created by Stable Diffusion as a result of step #10. 

13. Double-check that After Effects has assigned the imported image sequence the correct frame rate.<sup id="a5">[5](#myfootnote5)</sup>

14. Click to select the original composition, followed by the image sequence you imported in step #11. The order of selection is important.

15. Run the 'export_for_stable_diffusion.jsx' script.

16. Click the "Setup" tab.

17. "Click the "Make Show and Tell Comp" button.

18. Hit the 'esc' key.

The Show and Tell composition has now been generated. You may want to also do the following:

19. Open up the show and tell composition and adjust the position and appearance of layers within it. 

20. The original composition's text prompts are visible but redundant in a Show and Tell composition. Open up the nested, original composition, and move its prompt text layers to the bottom of its stack, or change their opacity such that they are not visible over the image. Because the show and tell comp tests to see whether these prompts are active at the current time in order to determine whether to display them, they will unfortunately disappear from view completely if you hide their layer using the eyeball icon, so other methods such as moving them below a color solid layer or making them transparent are functional workarounds.

The Show and Tell Composition expressions have been written to expect the original comp to always be on the second layer from the bottom of the stack. This makes it very easy to reuse customized show and tell composition layouts. If you select the original comp within a show and tell comp and then hold down the option or alt key as you drag a different original comp over it, it will be replaced within the show and tell comp and the prompt text displays will update to show the text contents and strength values of the prompt text layers it contains. 

<br>

# **Key Features**

### Keyframeable Prompt Layers
Using this plugin one can set up a composition with any number of prompt layers, and with the ability to keyframe the prompt strengths for each layer. For example 3 prompt layers could be keyframed over time such that the generated unicorn progressively becomes less "coated in glitter" and more "burnt to ash":

```
a rainbow unicorn:0.33 coated in glitter:0.62 burnt to ash:0.05
a rainbow unicorn:0.33 coated in glitter:0.57 burnt to ash:0.10
a rainbow unicorn:0.33 coated in glitter:0.52 burnt to ash:0.15
...
a rainbow unicorn:0.33 burnt to ash:0.66
```

That's a nice simple-sounding example<sup id="a6">[6](#myfootnote6)</sup>, and one can easily imagine how to keyframe those weights over time. But if the results aren't quite right, one can then duplicate their comp and change the prompts and keyframing until the desired result has been achieved. 

<p align="center">
<img src="docs/images/Unicorn_result2.jpg"/>
</p>

*a keen observer may note that the prompt weights on this frame don't add up to 100%. Normalization of prompt weights at each frame would be an easy thing to add –however this isn't immediately necessary as this feature already exists within InvokeAI. These weights were normalized, it just happened outside of After Effects.*
<p><br>

<img align=right src="docs/images/show_and_tell4.jpg"/>

### Keyframeable Strength and Scale
The "Image_Strength", "cfg_scale", and "steps" sliders on the "ML_settings" layer can be used to keyframe these parameters over the course of an image sequence.

<br>

### Easy "Show and Tell" Composition creation
Select a Composition and an image sequence, hit the "Make show and tell comp" button, and a new composition will be created that places both of these elements side-by-side and features on-screen text showing the prompt text and the weight values of each of its phrases, as well as other settings. Still frames from a couple of these "Show and Tell" compositions can be seen in this document.

<br>

### Other features
- Generate or specify seed values
- Re-use recent seed values
- Control of ESRGan (Upscaling) factor and strength
- Control of GFPGan (Face Restoration) factor and strength
- Specify sampler
- Adjust how image paths are written within the prompt file
- Automatically saves user-specified settings and seed history
- Clear user-specified settings and seed history

<br>

# Latest Changes

- v1.00 (05 October 2022)
  - first release.

<br>

# Contributing

If you would like to contribute bug fixes, features, documentation, or do any other coding on this project, **please** do so. Please make any pull requests against the "development" branch so that cutting-edge changes can be tested on that branch and not the "main" branch. If you need information on how to contribute to GitHub projects, here's a [Getting Started Guide](https://opensource.com/article/19/7/create-pull-request-github).

<br>

# Support

For support,
please use this repository's GitHub Issues tracking service. 

<br>

If you make anything cool with this script. please send me a link, I'd love to see.

<br>

# Thanks
Special thanks to Lincoln D. Stein for making the InvokeAI script and making it easier for us muggles (speaking for myself) to manage to install and run local instances of Stable Diffusion on macOS, Windows, and Linux –and with an easy to use interactive prompt. Thanks to all the contributors of that project for adding features and making it hum. Thanks to Stability AI for taking an inevitable step that appeared to many to be wildly irresponsible and unleashing an open-source machine-learning model of this quality on the world.

<br>

# ToDo

- Support the creation of alpha matte image sequences alongside the main image sequence, and prompt files that reference these matte sequences, for use with img_2_img inpainting.<sup id="a7">[7](#myfootnote7)</sup>
- Fast automated generation of "current frame" results, for quick and seamless iterating.
- Detect Composition resolutions that are incompatible with Stable Diffusion (i.e. don't have dimensions divisible by 48). Suggest compatible resolutions, possibly including suggestions based on available VRAM(?)
- Allow the user to specify the seed value as a slider Effect control within the "ML_Settings" layer, and use that if it exists (to allow users to use more than a single static seed value if desired)
- Submit pull request to InvokeAI for reordering image filenames so that the seed is at the beginning of the filename and the sequential numbers are at the end, so they function as image sequences in tools that expect standard frame numbers at the end of filenames.
- Submit pull request to InvokeAI for an option, similar to to the "prompt_as_dir" argument, to output images into a folder named after a prompt file's name, to aid in image sequence organization.


<br><br>
–––––––––––

<b id="myfootnote1">1</b> &nbsp; If your composition doesn't start on frame 0 (or start timecode 00:00:00:00), an error warning appears when the user tries to export the sequence, saying:
```
After Effects warning: timeSpanStart of O seconds will cause render to have frames
outside of range defined by comp displayStartTime (3.53) and end of comp duration
(7.43). Render will succeed, but may have blank frames.
``` 
I think it's [this same error](https://aenhancers.com/viewtopic.php?t=1878), and it may be an easy fix. [↩](#a1)

<b id="myfootnote2">2</b> &nbsp; It could be very nice to move the buttons that are used in composition creation and organization into a docked ScriptUI panel, and have it launch the modal UI for outputs. If someone skilled at ExtendScript wants to try and make this script into a dockable panel rather than a modal panel, that would remove the need for exiting its UI. There seem to be some bugs that arise when the panel is non-modal, and it resists debugging in that form, so for now it's a modal window.[↩](#a2)

<b id="myfootnote3">3</b> &nbsp; This function assumes there are no other active unrendered items in the render queue. This might not be a safe assumption and some tests and contingencies might need to be built into the logic.[↩](#a3)


<b id="myfootnote4">4</b> &nbsp; If InvokeAI appends the seed value to each image filename, as After Effects will only recognize that it is an image sequence if the image numbers at the end of the filename are consequential. One possible way to do this is via the renaming tool of your choice using a regular expression to turn filenames like these: 
  ```
  000001.1111111111.png
  000002.1111111111.png
  000003.1111111111.png
  ```
into these:
  ```
  000001.png
  000002.png
  000003.png
  ```
There are many ways to do a batch renaming, one possible way from a bash shell:
```
for i in $(ls *.png); do
  mv $i $(echo $i | sed -E 's/([^.]+)\.(.+)/\1.png/g'
  done
```
[↩](#a4)

<b id="myfootnote5">5</b> &nbsp; If After Effects has assigned the image sequence the wrong frame rate:
- Right-click the image sequence in After Effects and choose "Interpret Footage > Main" from the popup contextual menu. 
- Change the value in the "Assume this frame rate" field to the correct frame rate.
- Hit the "OK" button.

If you'd like to change the default frame rate that After Effects assumes when it imports image sequences, you can change that setting in "Preferences > Import > Sequence Footage".[↩](#a5)

<img align="right" hspace="10" src="docs/images/ESD_apply_mask.jpg"/>

<b id="myfootnote6">6</b> &nbsp; Lines in the generated prompt file will be much longer than this example because they will include not only the prompts but also the path and filename of the images, the Image_strength value, scaling values, etc.[↩](#a6)


<b id="myfootnote7">7</b> &nbsp; Proposed method: User would create a hidden layer in the project named "ESD_mask". This layer would serve as the alpha channel for the project. Typically the user might create this layer by duplicating and then selecting the source footage in their composition and doing a command-shift-C (or ctrl-shift-C on Windows) to nest tha footage within a composition within the composition. Then they could open up that nested comp and work within it to mask or otherwise create areas of alpha for inpainting. 

Upon export, if an ESD_mask layer exists, and the user has checked the "matte sequence" checkbox, the script would do the normal export, then (if it was not already present) would add an adjustment layer called "ESD_apply_mask" above the source footage. On this adjustment layer would be a "Set Channels" effect, with "Set Alpha" set to use the ESD_mask layer for alpha, with "Effects & Masks" accounted for. 

This would make it simple to turn the alpha on and off so that when it came time to do the PNG export, the script would render out an image sequence with 'matte' in the name, with the adjustment layer enabled. Then it would render out the normal image sequence with the normal naming scheme with the adjustment layer disabled. 

Unfortunately After Effects doesn't seem to export alpha in the manner needed for Stable Diffusion, so more exploration needs to be done. Or maybe Stable Diffusion can be altered to accept standard grayscale matte sequences rather than requiring image sequences with an alpha channel that includes color information even for fully transparent pixels.[↩](#a7)

