---
title: Your Memories
description: An art piece I made for a film festival.
tags: [nonfiction, unpublished]
published: 2026-10-11
---
# Your Memories
*tl;dr Your Memories is a social computing experiment.*

We used to be so excited about the internet, as a society. A revolutionary new
way to connect with your friends, and even find new ones. You could hop on to a
forum about something you loved, talk to your heart's content, and over time
you'd start to recognize the profile pictures and usernames you talked with the
most. Maybe you never met them. But you knew there was a person on the other
side.

We've now forgotten the humanity and community that the internet once gave us.
It's not our fault. Humanity and community don't make much revenue, so the tech
companies that dominate the web have moved on to things like TikTok and ChatGPT.
There are no friends to be made there, only money.

*Your Memories* is an experiment in bringing back that sense of community through
computing. I programmed it entirely by hand, without LLMs, with a setup at the Key
Peninsula International Film Festival in mind. As people showed up to the
festival, they could come up to the computer and log one of their precious memories.
As they're projected onto the big screen, one by one, attendees could catch
glimpses of what the people around them cherish most. And by showing phrases
instead of words, it invites them to put themselves in their neighbors' shoes and
*imagine* that memory for themselves.

# Physical setup info
Ideally, you would set up two computers: a *Projector Computer*, and a
*Guestbook Computer* with a keyboard and mouse that people will actually use.

As the name implies, the Projector Computer will project people's memories onto
the wall, and should be connected to a projector displaying the
[projector webpage](https://pilosophos.com/memories/projector). Set the browser
to full screen, so only the webpage shows and nothing else (so no taskbars,
browser tabs, and other distractors).

The Guestbook Computer is where the public will add their memory to be projected.
It is so named because if you set it up at the entrance to your event, it can
act as a sort of guestbook that attendees sign.

The Guestbook Computer itself should display the [memory creator webpage](https://pilosophos.com/memories)
using a browser in Kiosk Mode, so that people cannot navigate off the page. For
[Firefox](https://support.mozilla.org/en-US/kb/firefox-enterprise-kiosk-mode),
this needs to be done through the command prompt or terminal, by running the
command:

```
firefox --kiosk --private-window https://pilosophos.com/memories/projector
```

The Guestbook and Projector computers are separate comptuers for a similar reason:
you don't want people to accidentally move the mouse cursor to the projector,
disrupting the projection and confusing the user who's trying to add a memory.

# License
*Your Memories* is licensed to the public under a Creative Commons
[Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/)
license. This means you can share *Your Memories* and display it at events, as
long as you credit `Pilosophos` and are doing so for non-commercial purposes.

You can even make copies and derivatives of it, so long as it meets those
requirements and uses the same license.