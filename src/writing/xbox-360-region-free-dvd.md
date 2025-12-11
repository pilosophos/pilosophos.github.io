---
title: "Xbox 360 region-free DVD playback with RGH/JTAG"
description: "A simple guide to unlocking region-free DVD playback on the Xbox 360, provided you already have RGH/JTAG"
tags: [nonfiction, xbox360]
---
# Xbox 360 region-free DVD playback with RGH/JTAG
Even with an RGH or JTAG'd Xbox 360, your console will likely be unable to play
DVDs from a different region unless its NAND has been patched to allow it. This
guide describes how to patch your console's NAND to play DVDs of any region.

<div class="marginal-note not-prose mb-5 xl:pt-25">

<nav>
    <h2 class="font-display border-b pb-1 mb-1">Jump to...</h2>
    <ol class="list-disc ps-5 flex flex-col">
        <li><a href="#prerequisites" class="link">Prerequisites</a></li>
        <li><a href="#risks" class="link">Risks</a></li>
        <li><a href="#dumping-your-nand" class="link">Dumping your NAND</a></li>
        <li><a href="#obtaining-your-cpu-key" class="link">Obtaining your CPU key</a></li>
        <li><a href="#creating-a-region-free-nand" class="link">Creating a region-free NAND</a></li>
        <li><a href="#flashing-the-region-free-nand" class="link">Flashing the region-free NAND</a></li>
    </ol>
</nav>

</div>

## Prerequisites
* You **must** already have an [RGH or JTAG'd](https://consolemods.org/wiki/Xbox_360:Getting_Started) Xbox 360, which is a hardware mod.
* You need a way to transfer files to/from the Xbox 360. You can use either:
  * A FAT32 formatted USB drive *or*
  * [Xbox 360 Neighborhood](https://consolemods.org/wiki/Xbox_360:Xbox_360_Neighborhood)

## Risks
* This procedure involves rewriting the console's NAND, which is required for it
to boot. Writing a bad NAND will brick your Xbox 360.

## Dumping your NAND
1. Extract [Simple 360 NAND Flasher](https://consolemods.org/wiki/File:Simple_360_NAND_Flasher.7z) and transfer the files to your Xbox 360.
2. On the Xbox, run `Default.xex` to start Simple 360 NAND Flasher
3. Press `X` to dump the NAND with rawdump
4. In the same directory as `Default.xex`, you will see a new file called `flashdmp.bin`. Transfer this to your PC.

## Obtaining your CPU key

<div class="relative">

  <aside class="marginal-note">

  If you like to live dangerously, you can skip NAND verification and get your CPU key in Dashlaunch. Press `LB` to reach the `Miscellaneous` menu, select `System Info`, and you'll see the CPU key.

  </aside>

1. On your PC, extract and run [X360 NAND Dump Checker](https://consolemods.org/wiki/File:X360_NAND_Dump_Checker_GUI_v1.0.rar).
    * Bad blocks are normal, as long as `"NAND Verified as OK!"` appears at the end. If it does not, you may need to start again from step 1.
2. Press `Check NAND` and select `flashdmp.bin`.
3. In the same directory as `flashdmp.bin`, you will see a new file called `cpukey.txt` containing your CPU key.

</div>


## Creating a region-free NAND
1. Extract and run [J-Runner with Extras](https://github.com/Octal450/J-Runner-with-Extras/releases).
2. Click `Load Source` and select `flashdmp.bin`.
3. If the CPU key is not already filled in, paste in the CPU key from `cpukey.txt`.
4. In the top menu, select `Nand → SMC Config Editor`.
5. In the SMC Config Editor, click `Edit Config` at the bottom.
6. Change the `DVD Region` dropdown to `FREE`.
7. Click `Save Config` and close the config editor.
8. Verify that the `XeBuild` section in the top right matches for your console. <span class="muted">*Incorrect values could result in a bad NAND that bricks your console!*</span>
9. Click the `Create XeBuild` button.

## Flashing the region-free NAND
1. By default, J-Runner creates a new directory named after your console's serial number, which will contain `updflash.bin`. Copy this to the same directory as Simple 360 Nand Flasher's `Default.xex` on the Xbox.
2. On the Xbox, run `Default.xex` to start Simple 360 NAND Flasher.
3. Press `A` to flash the NAND with Rawflash.
4. Wait for the process to finish and for the console to turn off.
    * If the console shows a red ring, do not panic. You may simply have to turn the console off and on again.
5. You will now be able to play out-of-region DVDs.