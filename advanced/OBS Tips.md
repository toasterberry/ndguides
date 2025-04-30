---
label: OBS Tips
layout: page
order: -20
icon: play
---

# OBS Tips

Here's some tips for making your OBS recordings/streams look good with ND games.

## Displaying the Game

When using a display capture to capture the older games in full screen, you'll notice you get a small box at the top left corner with a thick white border around it. You can stretch it up easily but it'll look blurry and still have the white border.

Left click your display capture, hold CTRL and press E. To get rid of the white borders, enter "2" in the left, right, top, and bottom crop values.

To get it to scale properly, change "Bounding Box Top" to "Scale to inner bounds". You can change "Alignment in Bounding Box" to Center Left or Center Right depending on your preference, and where you'd like any other elements. This applies to any of the games.

If you'd like to make the image clearer, right click your Display Capture, hover over "Scale Filtering", and choose one. "Area" looks clean and sharp, but some may not like the harsh pixels. "Bicubic" is sharper than default and smoother than Area, but can add gross artifacts.

## Audio Capture

If you're recording your runs, there might be times you want to have other audio playing on your computer that you might not want in your recordings. To isolate your game's audio, right click in the "Sources" window, hover over "Add", and add "Application Audio Capture". Double click it, and select your game. You can now mute your desktop audio and only have the audio from your game, allowing you to listen to music, talk to someone, or anything else. Make sure it's working each time you begin recording a run you care about. It's been known to unpredictably not capture audio, with re-selecting the game fixing it.

If you'd like, you can have more control by managing this with audio tracks. Click "Settings", "Output", "Recording", and here you can add more audio tracks. These allow you to record a video with several isolated audio tracks that you can record different things to. Select how many you want, apply, and close the settings. Click the 3 dots of anything in the audio mixer, then "Advanced Audio Properties". This is where you can assign what audio sources get recorded to what tracks. If you don't have a use for this, you don't really need to set it up. You can just manage mixing everything on 1 track.

## Livesplit

The default size of the Livesplit timer isn't tall enough to fill most screens, and many will stretch it in OBS to fit. A better solution is to resize the livesplit window to reach the top and bottom of your display by dragging the bottom right corner, making it look much clearer in OBS.
