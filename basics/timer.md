---
label: Timer
layout: page
order: -30
icon: stopwatch
---

# Timer

The on-screen timer is a staple in speedrunning videos and live streams. Though not required, it gives you a good idea of your performance throughout. Although you can use any kind of timer, [LiveSplit](https://livesplit.org/) is the go-to. It's very customizable and has support for autosplitters. It may seem intimidating to setup, but it's very straight forward.

## Basic Setup

Head to https://livesplit.org/ and download LiveSplit. Navigate to the newly downloaded file, right click it, click "Extract all", then "Extract". You'll now have a folder that contains the program. You can put this anywhere you like. In the folder, double click "LiveSplit" to open it. A small black window will pop up. This is LiveSplit at its core, but it's easy to make it look much better.

![](/images/timer/LiveSplitNew.avif)

First, let's go over basic settings. Right click the black window, and click "Settings". You can adjust the hotkeys for everything as you like. Try to find some keys you won't naturally use, and won't accidentally press. Common choices are numpad or Insert/Home/End keys. 

Afterwards, enable "Global Hotkeys", and click OK.

## Splits

Your timer is still really short and doesn't do much besides starting and stopping. Let's fix that. Right click the timer, then click "Edit Splits". Here you can set the game and category you're running. Immediately you'll see LiveSplit take shape.

image

Now let's fill up that empty space. A "split" is a point you can add in your timer to represent some kind of event from the game, often things like reaching an area, or completing a puzzle. Similar to a "lap" in a race. This breaks your run up into smaller segments so you can track your performance throughout different portions of the game. They can also be used to see a best theoretical time using your best times for each split. To add splits, click the "Insert Above/Below" button on the left. You can name them anything you want, they don't have to match anything. You can add as many or as few as you like. Your last split in this list will be treated as your end split.

image

## Autosplitters

Autosplitters automate your timer for you. This allows you to focus on the game instead of timing keyboard presses to control your timer. While still in the "Edit Splits" menu, if an autosplitter is available for the game set, you'll see an "Activate" button. After clicking it, click the "Settings" button next to it. These control which parts of the game will automatically split for you. Start/stop is already automatic at this point. 

It's important to note that the automatic splits simply press your split hotkey when it sees you're at a certain part of the game. This means you have to ensure the amount of splits you have match the split checkboxes you ticked in the settings. If you wanted to split at 3 unique points in game, you'd enable 3 of the corresponding checkboxes, add 3 uniquely named splits, plus your ending split.

image

Autosplitters should work seamlessly once they're activated. They can detect when the game is open/closed, and should start once you select a difficulty. If you're having trouble with an autosplitter, see "Autosplitter Troubleshooting" at the bottom of this page.

## Layout

The layout controls how your timer looks. With all other menus closed, right click the timer, and click "Edit Layout". Here you'll see elements of your layout. The game title, your splits, the timer, and "Previous Segment" by default. You can click the + icon on the left to add new elements. A popular one is "Sum of Best" under "Information", which shows your theoretical best possible time based on your historical best split times. You can configure each of these by double clicking them, or remove one by clicking it, and then clicking the - on the left.

To change the look of the general layout, click "Layout Settings" at the bottom left. You can change the colors, font, add a background, and more. You can spend some time experimenting with the layout to make it your own, or just keep it simple. 

You can also adjust the size of the window by hovering over the edges and corners of the main timer window. Having it larger will make it look clearer in your recordings.

Just like that, you have a fully setup and fancy looking timer! Save your layout and splits by right clicking the main timer window. You can use the same layout across multiple games, or make new ones, but splits are game and category specific. If you need to change game/category, right click the timer, click "Close Splits", and edit the splits from scratch like before.

## Extra Tips

Here's some unorganized information you may find useful:
- The number at the top right is your attempts. 
- 

## Autosplitter FAQ

==- It isn't working
Typically this is because the autosplitter lacks compatibility with your version. Many autosplitters were made only with access to the disc versions, and steam versions usually won't immediately work them. You can get support for other versions added by joining the Nancy Drew Speedrunning Discord server and asking about it in the game's appropriate channel.
==- It only partially works
Partial functionality usually happens when you accidentally have two autosplitters at once, such as one from the splits menu, and one from a local file added with the layout menu. Disable/remove the extra one. If you're still experiencing inconsistency, ask about it in the Nancy Drew Speedrunning Discord server.
==- How do I use an .asl file?
Right click your timer, click "Edit Layout", click the + at the top left, hover over "control", click "Scriptable Auto Splitter" to add it to the list. Double click it in the list, click "Browse" and find the .asl you downloaded. Configuration now is the same as before.
==- What is auto reset?
Auto reset will automatically reset your timer for you at the difficulty select screen under certain circumstances. This is useful if you're resetting a lot at the start of a run. It won't activate if you already completed a run and haven't manually reset your timer, or if you got a new best split.
==-
