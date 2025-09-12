---
title: Xbox 360 development tools
description: What you need to get started with Xbox 360 homebrew development
tags: [nonfiction]
---
# Xbox 360 development tools
<p class="lead font-display !text-xl">What you need to get started with Xbox 360 homebrew development</p>

<div class="marginal-note not-prose mb-5 xl:pt-25">

<nav>
    <h2 class="font-display border-b pb-1 mb-1">Jump to...</h2>
    <ol class="list-disc ps-5 flex flex-col">
        <li><a href="#summary" class="link">Summary</a></li>
        <li><a href="#proprietary-software" class="link">Developing with proprietary software</a></li>
        <ol class="list-disc ps-8 flex flex-col">
          <li><a href="#vs2010" class="link">Visual Studio 2010 (required)</a></li>
          <li><a href="#xbox-360-sdk" class="link">Xbox 360 SDK (required)</a></li>
          <li><a href="#gfwl" class="link">Games for Windows Live</a></li>
          <li><a href="#xnags" class="link">XNA Game Studio 4.0 Refresh</a></li>
          <li><a href="#xna-extensions" class="link">XNA 4.0 Extensions</a></li>
        </ol>
        <li><a href="#open-source-software" class="link">Developing with open-source software</a></li>
    </ol>
</nav>

</div>

## Summary
Most people are advised to download the Xbox 360 SDK, which will also require Visual Studio 2010, to write homebrew in C++. To use C# with XNA, you should also install XNA Game Studio 4.0 Refresh and XNA 4.0 Extensions, which requires Games for Windows Live.

Alternatively, a fully open-source C/C++ stack is possible using LibXenon, but the compiled executables are not recognized by Aurora/FreestyleDash and requires booting into Xell to run.

<div class="relative">

  This article explains how to install each of these things and in what order.
  
  <aside class="marginal-note">
  
  I list the MD5/SHA256 hashes of trustworthy installers, but **I don't provide links to the Xbox 360 SDK or XNA 4.0 Extensions** because I'm not authorized to redistribute proprietary software that was never supposed to be publicly available.
  
  </aside>

</div>

**This article is up to date as of Christmas 2023.**

## Developing with proprietary software <a name="proprietary-software"></a>

<div class="relative">

  This article assumes you are running Windows 10.
  
  
  <aside class="marginal-note">
  
  Linux has not been tested, since [VS2010 refuses to compile anything on Wine](https://appdb.winehq.org/objectManager.php?sClass=version&iId=20359). In theory if you can install the Xbox SDK and get some version of `msbuild` to detect it, you could use a different code editor and just compile with `msbuild`.
  
  </aside>

</div>

### 1. Visual Studio 2010 (required) <a name="vs2010"></a>
The Xbox 360 SDK will not install unless you have VS2010. You can install later versions of Visual Studio *after* you install 2010. [VS2015 is known to work](https://www.se7ensins.com/forums/threads/xbox-360-development-environment-with-win10-pc.1711249/post-13559791) according to a user on Se7enSins.

You can download VS2010 Ultimate for free directly from Microsoft at [my.visualstudio.com](https://my.visualstudio.com/). Log into <span class="muted">(or create)</span> your Microsoft account and click the "Downloads" tab. Search for "Visual Studio Ultimate 2010" and click download. Mount the `.iso` file and install it.

<div class="text-base">

> Filename: `en_visual_studio_2010_ultimate_x86_dvd_509116.iso`  
> md5: `1c7436f7289263abf712a70287d75c02`  
> sha256: `602926c864fa1ddc087fefb1ed952216da4122d4db774050d8e9373d3e4bff98`

</div>


### 2. Xbox 360 SDK (required) <a name="xbox-360-sdk"></a>
Xbox 360 SDK version 21256.3 <span class="muted">(afaik)</span> is the latest version. This is widely used in the homebrew community and is easily found with a quick Google search. <span class="muted">This will also install [Xbox 360 Neighborhood](https://consolemods.org/wiki/Xbox_360:Xbox_360_Neighborhood), which will let you copy files over to your Xbox via a LAN connection.</span>

If you only plan to develop in C/C++, you can stop installing stuff after this.

<div class="text-base">

> Filename: `XBOX360_SDK_21256.3.exe`  
> md5: `b329b79db2804e2989688bffbaf49691`  
> sha256: `efec946c7b4436d53a6c41bb6bcff8373387ec97557e92f0ef672c85eadc4bc7`  

</div>

#### Creating and compiling an Xbox 360 game with C++
1. Start VS2010 and open the Create Project window with `File → New Project`.
2. Click `Visual C++ → Xbox 360 Project`.
3. Enter a project name and path at the bottom and click `Ok`. <span class="muted">This opens the Xbox 360 Application Wizard.</span>
4. Click `Next`, then `Finish` at the Application Settings screen. <span class="muted">This opens the code for a new game in the main window.</span>
    * <span class="muted">You can check `☑ Empty project` and get a basic DirectX 9 spinning triangle demo instead of the default [Dolphin demo](https://www.youtube.com/watch?v=MECBJqBkY0U)</span>
5. On the toolbar near the top, click the dropdown that says `Debug` and change it to `Release_LTCG`. <span class="muted">This changes the build config to compile a single runnable `.xex` file that is runnable from an Xbox 360.</span>
6. Click `Build → Build solution` from the top menu bar.
7. Copy `[project_path]\[project_name]\Release_LTCG\[project_name].xex` to your Xbox 360 <span class="muted">(via USB or Xbox 360 Neighborhood)</span>.
8. Run the `.xex` file on your Xbox 360. You will see either a dolphin or a spinning rainbow-colored triangle on a success.

### 3. Games for Windows Live <a name="gfwl"></a>
If you want to program in C# with XNA, you need to install Games for Windows Live (GfWLive) if your version of Windows doesn't have it preinstalled <span class="muted">(e.g. if you use Windows 8+)</span>, otherwise XNA Game Studio will not install. It can be downloaded from [microsoft.com](http://go.microsoft.com/fwlink/?LinkID=201134) or [xboxlive.com](http://download.gfwl.xboxlive.com/content/gfwl-public/redists/production/gfwlivesetup.exe).

<div class="text-base">

> filename: `gfwlivesetup.exe`  
> md5: `0e20d50b6ad6229520911b203deeef36`  
> sha256: `c8582a16f4647365e0be04826442a77de257b9bb26bac610fc1fb74319a2548b`

</div>

If you encounter a network error during installation, **before you close the installer** do the following:
1. Navigate to `%LOCALAPPDATA%\Microsoft\GFWLive\Downloads`. There will be two installer files here. <span class="muted">If there aren't any, you closed the GFWLive installer prematurely and you need to get back to the network error screen.</span>
2. Run both installers in any order.
3. Close the GFWLive installer and GFWLive should be installed.

### 4. XNA Game Studio 4.0 Refresh <a name="xnags"></a>
XNA Game Studio (XNAGS) 4.0 Refresh is the last version of XNAGS and can be downloaded from [microsoft.com](https://www.microsoft.com/en-us/download/details.aspx?id=27599).

<div class="text-base">

> Filename: `XNAGS40_setup.exe`  
> md5: `1980210d04a80865ab2dca9f92a65695`  
> sha256sum: `e905f67edefb228ebb58277f8d24e1ec3460ead5d0ab57bd544246cb4465154b`

</div>


<div class="relative">

  Installing XNAGS is technically enough to write a C# Xbox 360 game, but this will compile to a `.ccgame` file which cannot be run on an Xbox 360 directly.

  <aside class="marginal-note">
  
  Normally, an indie game dev only had access to XNAGS and VS2010 and needed to sign up for the now defunct XNA Creator's Club and deploy it via a [convoluted process that requires you to always be online](https://courses.washington.edu/css490/2010.Spring/XNAReference/EthanCrawford_FreeCreatorsClubMembershipInstructions.html). Since we want our homebrew to be available offline, we should install XNA 4.0 Extensions.
  
  </aside>
</div>

### 5. XNA 4.0 Extensions <a name="xna-extensions"></a>
XNA 4.0 Extensions allows us to compile C# games into `.xex` files that can be run from Aurora or FreestyleDash. Installing this will add `XNA Game Studio 4.0 XDK Extensions` to the Visual C# section of the New Project menu in VS2010. I can't provide a download link, and unfortunately this is less well known in the homebrew community.

<div class="text-base">

> Filename: `xdk-xna-extensions.msi`  
> md5: `d55fc409100ce97d0d9791a9d896a0c9`  
> sha256: `ba80a0518062dbf649df7e2775f0dba59d2e85c0e576523585346da9b5227786`

</div>

#### Creating and compiling an Xbox 360 game with C#
1. Start VS2010 and open the Create Project window with `File → New Project`.
2. Click `Visual C# → XNA Game Studio 4.0 XDK Extensions → XBLA Game Title (XDK)`.
3. Enter a project name and path at the bottom and click `Ok`. <span class="muted">This opens the code for a new game in the main window.</span>
4. In the Solution Explorer, open `LiveFiles\Title.gameconfig`.
5. Replace the title ID of `titleId="0x00000000"` in the `<GameConfigProject ...>` tag to any other 8-digit hexidecimal number <span class="muted">(e.g. `0x12345678`)</span>.
    * <span class="muted">You should choose a title ID that's not used by any existing Xbox titles by checking a title database like [XboxDB](https://xboxdb.altervista.org/browse).</span>
6. Click `Cancel` on the `Connect to Team Project` dialog. <span class="muted">(Unless you *really* want to use TFS for version control, but why would you?)</span>
7. On the toolbar near the top, click the dropdown that says `Debug` and change it to the `Release` build config.
8. Click `Build → Build solution` from the top menu bar.
9. Copy **the entire contents** of `[project_path]\[project_name]\[project_name]\bin\XDK\Release\` to a new folder in your Xbox 360 <span class="muted">(via USB or Xbox 360 Neighborhood)</span>.
    * <span class="muted">Since LTCG isn't available for C#, your homebrew's resources are **not** compiled into a single `.xex`, so the other files are necessary for it to run.</span>
10. Run `default.xex` on your Xbox 360. Your screen should turn a solid light blue <span class="muted">(specifically cornflower blue)</span> on a success.

## Developing with open source software <a name="open-source-software"></a>
See <a href="https://free60.org/Development/LibXenon/">https://free60.org/Development/LibXenon/</a> for instructions.

I haven't actually tried this because my interest kinda dropped off after I made a homebrew the "normal" way, but the instructions on there look approachable enough.