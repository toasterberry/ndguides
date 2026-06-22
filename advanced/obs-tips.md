# OBS Tips

Here's some tips for making your OBS recordings/streams look good with ND games.

## Displaying the Game

When using a display capture to capture the older games in full screen, you'll notice you get a small box at the top left corner with a thick white border around it. You can stretch it up easily in OBS, but it'll look blurry and still have the white border.

Left click your display capture, hold CTRL and press E. To get rid of the white borders, enter "2" in the left, right, top, and bottom crop values.

To get it to scale properly, change "Bounding Box Top" to "Scale to inner bounds". You can change "Alignment in Bounding Box" to Center Left or Center Right depending on your preference, and where you'd like any other elements. This applies to any of the games.

If you'd like to make the image clearer, right click your Display Capture, hover over "Scale Filtering", and choose one. "Area" looks clean and sharp, but some may not like the harsh pixels. "Bicubic" is sharper than default and smoother than Area, but can add gross artifacts.

## Audio Capture

If you're recording your runs, there might be times you want to have other audio playing on your computer that you might not want in your recordings. In OBS, you can add an "Application Audio Capture" to capture the sound straight out of a specific application. We can use this to only grab the game audio.

Unfortunately the one built in to OBS right now is buggy and sucks, reopening the game unpredictably causes it to no longer capture audio, which can render the recording of your run invalid as audio is needed. Because of that, I use [this plugin](https://github.com/bozbez/win-capture-audio) ([direct installer link](https://github.com/bozbez/win-capture-audio/releases/download/v2.2.3-beta/win-capture-audio-2.2.3-beta-setup.exe)) which in my experience does not break in that way, and is also more convenient by allowing multiple applications to be added, so you can add it for all the games you run and never have to think about swapping which application it's set to.

To add it, right click in the "Sources" window, hover over "Add", and add specifically "Application Audio Output Capture". Then double click it in your sources, and select your game. You can now mute your desktop audio and only have the audio from your game, allowing you to listen to music, talk to someone, or anything else without it being heard in the recording. Make sure to test it our carefully before doing any serious runs.

If you'd like, you can have more control by utilizing multiple audio tracks. Click "Settings", "Output", "Recording", and here you can add more audio tracks. These allow you to record a video with several isolated audio tracks that you can record different things to. Select how many you want, apply, and close the settings. Right click the top bar of the "Audio Mixer" section, then click "Advanced Audio Properties". This is where you can assign what audio sources get recorded to what tracks. If you're streaming and recording, you can do a setup like the game goes to track 1, and your mic to track 2, making it easy to have only the gameplay audio, and then you have your mic audio separated if you want to do something with it later. If you don't have a use for this, you don't need to set it up. You can just manage mixing everything on 1 track.

## LiveSplit

The default size of the LiveSplit timer isn't tall enough to fill most screens, and many will stretch the capture of it in OBS to fit. A better solution is to resize the LiveSplit window to reach the top and bottom of your display by dragging the bottom right corner, making it look much clearer in OBS. If you already changed its size in OBS, right click it, hover over "Transform", and click "Reset Transform".
