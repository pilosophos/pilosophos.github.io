---
title: 'Thoughts on the v1 MNT Pocket Reform'
description: It's a neat little device.
tags: [nonfiction, soapbox, unpublished]
published: 2026-04-17
---
# Thoughts on the v1 MNT Pocket Reform

Since the release of the Apple iPhone, we've all seen the trend of portable tech
getting thinner and thinner, all the while losing the removable batteries,
headphone jacks, and physical buttons along the way. Everything that gave the
MP3 players and feature phones of yesteryear any identity has now been replaced
by indistinct glass slabs. Even laptop design has started becoming trite and
emotionless: Apple releases the silver slab over and over, and the Copilot button
on PCs is yet another reminder that our humanity is slipping away day by day.

Now imagine you're a hardware hacker. You see this bleak world of soulless
consumer electronics whose design ethos can be summarized into a blank stare,
and you decide that, *screw the rules,* you're going to make your own laptop with
blackjack and hookers. So you raid the storerooms of Adafruit and Digikey, and
using some good ol' fashioned hacker ingenuity, pack all the cool shit you've always
wanted into a vaguely laptop-shaped box with some screws. Oh, and you're German.
Don't forget that you're German.

What you end up with is the MNT Pocket Reform, a durable yet small and light
CNC-milled aluminum box with a 7-inch screen, an RGB mechanical keyboard,
a trackball mouse, a quad-core ARM processor, and a RasPi 2040 for a system
controller. The whole laptop can be taken apart with a single Philips-head
screwdriver, every component can be replaced and upgraded, and all the firmware
is fully open source. If you dedicate the time to it, you can add an I2C Qwiic
sensor and modify the firmware to use it in Linux. And yes, this laptop not only
comes with Linux, it comes *only* in Linux.

## Getting and repairing my Pocket Reform

My v1 MNT Pocket Reform originally belonged to ~vilmibm on tilde.town. The design
ethos spoke to him, and fuelled by a hatred of smartphones that causes him to
compulsively buy small laptops, he pre-ordered it when it was still being funded
on Crowdsupply. However, one man can only use so many small laptops at a time,
and so it mostly sat around gathering dust for over a year, during which time it
had seemingly lost the ability to turn on. He announced that he'd give it away
to anyone who could power it up and give it a good home, and that someone happens
to be me.

It turns out that many early-production Pocket Reforms shipped with a problematic
charge board. You charge the laptop with a USB-C Power Delivery adapter (in my
case, a Nintendo Switch charger) and, when it's working properly, you power it
on with a key combination on the keyboard. When it's *not* working properly, it
will still charge... for a while. But after leaving it plugged in overnight,
you'll wake up in the morning wondering what smells of magic smoke. That's the
charging board.

Luckily, the machine was still within its 2-year warrantee and after a
replacement request to MNT support, I received a new charging board after
several weeks. As advertised, repairs are incredibly easy. You just unscrew the
bottom cover, disconnect the damaged board, and swap in the new one. In a
perfect world, this is how simple all electronics repairs ought to be.

## How it feels to use

