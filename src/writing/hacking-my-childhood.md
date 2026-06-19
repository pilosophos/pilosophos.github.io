---
title: Hacking my childhood
description: Computer hacks I did as a kid to use the computer more
tags: [nonfiction]
published: 2026-06-18
---
# Hacking my childhood
Before high school, my time in front of a computer was heavily regulated. If I wanted to use a computer, I'd either have to go to the public or school library, or I'd have to ask my parents if I could use the family computer. All these had a time limit, and/or restrictions on what programs you were allowed to run. I didn't like that.

What happens when you get a nerdy, bored, smartphone-less kid in front of a computer and tell him that he's not allowed to do something?

## Crashing the library catalog
An older boy at the public library actually taught this to me, when all the PCs still ran Windows XP.

What's normally supposed to happen is this: To use a PC in the library, you have to sign in to a pice of software named *Library Catalog* using your library card number. This will open a menu of programs you can run like *Internet Explorer* and *Microsoft Word,* which replaces the Start Menu. It also starts a countdown timer, which logs you out after 1 hour of use. If you used up that hour, you'd have to wait until the next day to use a computer at the library again.

This hack crashes Library Catalog so the coundown timer goes away, and you can use the computer as long as you like.

1. Log in to Library Catalog as you would normally.
1. Click *Internet Explorer* over and over again to launch IE tons of times. The computer will start lagging.
1. Disconnect the ethernet from the back of the computer.
1. Rapidly click on the Library Catalog menu window to trigger the `This program is not responding` dialog.
1. Click `End now` to forcibly quit Library Catalog.
1. Wait a couple minutes, then reconnect the ethernet.
1. Enjoy unlimited internet browsing, as long as you keep at least one IE window open.
1. When you're done, reboot the computer with the power button.

I tried this again when all the PCs got upgraded, and even though they kept using Library Catalog, it no longer worked as I couldn't get it to crash. My bet is that it relies on the computer being underpowered, so launching lots of resource-hungry IE windows starves Library Catalog of RAM. Then if you interact with it, Windows detects it's hanging, and lets you stop it along with its countdown timer.

Waiting before you reconnect the ethernet is also necessary, otherwise the PC reboots. I think what's happening is there's actually a watchdog server in the library that's connected to all the PCs to make sure Library Catalog is running. If you reconnect ethernet too quickly, the server connects to the PC, realizes Library Catalog crashed, and reboots it. If you *wait*, it probably tries to reconnect a few times, fails, and then gives up.

One time when I had been using the PC this way for about three hours, one of the librarians shuffled over to me and told me that the PC "wasn't connected to the network" and had to reboot the computer. I had been using the internet just fine, so this "network" is probably all the computers connected to the watchdog.

## WordPad as an exploit vector
In addition to the software called *Library Catalog,* there were also PCs that were designated *Library Catalog Computers* that, confusingly, did not run Library Catalog. Instead, these were computers that ran a specialized, locked-down browser that would refuse to load web pages outside of the library's own domain name.

You also didn't have to log in to use these computers, and so there was no countdown. They expected that no sane person would want to browse the library catalog for more than 15 minutes or so. (This was before you could watch movies from the library's website.)

Curiously, this locked down browser also had a button in the toolbar to open [WordPad](https://en.wikipedia.org/wiki/WordPad), a rich text editor. I discovered a way to use this to browse the whole internet by exploiting this feature.

Note that by this time, the computers all ran Windows 7. WordPad no longer comes with current versions of Windows, so this probably no longer works if they've updated.

1. Open WordPad.
1. In the top ribbon, click `Insert object`.
1. Insert a new Microsoft Word document.
1. Double click the new object in your document, to open Word.
1. Type anything into Word, right click it, and select `Search with Bing`.
1. Enjoy unlimited internet browsing in your new Internet Explorer window.

The whole process is pretty self-explanatory, really. I think the purpose of the WordPad button is so that you can jot down which shelf the book you're looking for is in, then print out. Printing at the library usually costs a few cents per page from the PCs, so I should have checked if I could print from there for free as well.

## Running Halo with Powershell
At school, all the computers were connected to a shared network drive. An absolute champ put Halo CE and a few other games on this drive, and kids would run impromptu LAN parties in the computer labs. The teachers caught onto this, and a new [Group Policy](https://en.wikipedia.org/wiki/Group_Policy) was added to prevent you from running `exe` files, effectively putting a stop to it.

Until I came along.

1. Open PowerShell.
1. Run `Start-Process <path_to_HaloCE.exe> -Verb runAs <your_username>`
1. Play Halo.

That is all.

It turns out the Group Policy only stopped you from starting `exe` files from Windows Explorer, including the Start Menu and the Desktop. If you start it from some other existing process, including PowerShell, it would work. In fact, if 7zip was installed, you could run Halo from 7zip File Manager. CMD was blocked, but if it were enabled, I bet you could run it from there too.

## The moral of the story
Most of these hacks probably no longer work where I tried them, but there's a whole world of under-secured computers out there to try them on. Securing computers is hard, *really* hard, and a bored kid with lots of time on their hands is going to do whatever they can to not be bored. They click buttons, open programs, and generally do weird things that other people don't. IT has to block *every* path to playing Halo. The bored kid only has to find *one.*