---
label: RNG Manipulation
order: -10
icon: lock
---

# RNG Manipulation

Randomness can be your worst enemy in speedrunning. It can cause you to lose a run purely because of a factor that is out of your control. But what if you could control it?

In Nancy Drew games 1-32?, randomness is based on your computer's clock. This means if your computer's clock were to hypothetically freeze, every random event would now have a predictable outcome. This means you could set your computer's clock to a certain time to manipulate the outcome of random events in your favor. However, changing your computer's clock is a pain, especially if you want to do something like use the internet between runs.

# RunAsDate

This is where RunAsDate comes into play. It allows us to run a program with a specific time and date. With this, we can easily set what time and date we want, and quickly reopen the game at that set time. 

Head to [this site](https://www.nirsoft.net/utils/run_as_date.html), scroll down just above the languages, and click "Download RunAsDate" (Not x64). Go to your downloads folder, right click the newly downloaded file, click "Extract All", and "Extract". RunAsDate will now be in its own folder, and you can put it anywhere you like.

Using RunAsDate differs depending on what version of the game you're using. If you're using the disc or a Her digital download, continue to the Her Versions below. If you have the Steam versions, skip to [Steam Versions](/advanced/rng-manip.md/#steam-versions).

## Her Versions

Open the RunAsDate program, which is the icon with the calendar and not a yellow question mark. At the top right of the window, click "Browse...". Navigate to the game you want to use it with. If you have a shortcut to the game on your desktop, you can right click it and click "Open file location" to open the folder it's installed to. You can copy the address at the top and paste it into the RunAsDate window where you're selecting the game, and press enter to bring you right to it. Double click the game file to select it. Continue to the [Configuration](/advanced/rng-manip.md/#configuration) section

## Steam Versions

Navigate to your Steam installation. If you don't know where it is, right click the desktop shortcut, and click "Open file location". You can also use the search bar to search for "Steam" and do the same thing. If you install your games to a different drive or location, navigate there instead. Enter the "steamapps" folder, then "common", then the folder of the game you're running.

You should see the game's files. Take note of the name of the game application file, it should have a unique icon. Create a new folder named whatever, and move everything inside of it. Staying in the original game's folder (not the newly made one), move or copy the RunAsDate program alone here. Rename it to whatever the game application file you moved was named, often "Game" or a shortened version of the game's name.

Open Steam, launch the game as you normally would, and you should see the RunAsDate window. Click the "Browse..." button at the top right, and navigate to the newly made folder you moved your game's files into. Select the game application.

## Configuration

Next, untick "Move the time forward according to the real time", then tick "Immediate Mode". The time and date you set is your "seed". Using RAD at all makes random events predictable, but changing the time and date affects what outcome they have. Routes may have seeds included, but you can also find your own or ask community members for some.

If you're not getting the same results with someone else's seed, try setting it forward or back an hour at a time a few hours each way, possibly more if you're not in North America. Time zones and time changes seem to affect the seeds.
