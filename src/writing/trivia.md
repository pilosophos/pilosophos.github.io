---
title: Trivia
description: An unsorted collection of miscellaneous trivia
tags: [nonfiction]
---

# Trivia
This is an unsorted collection of miscellaneous trivia that I come across.
Originally, these trivia items were written down in my notebook. It's harder for
me to quickly draw pictures for a webpage, so trivia with pictures might get
left out.

## Autonomous System Numbers (ASNs)
Assigned to ranges of IP addresses controlled by an organization that
are ISP agnostic. You can tell different ISPs to use your IP addresses using
your ASN and the BGP protocol.

## Cistercian numerals
Early 13th C. numbers written in a single glyph, where
lines' positions on a central staff determines its place value.
Encodes numbers from 1-9999.

## Kmonad
A software keyboard remapping tool.

## Dashes
* En-dashes are for ranges, relations, and scores.
* Em-dashes are for pauses or where a period is too strong.

## Formula E
Electric car version of Formula 1. Fans vote before a race who gets an extra
jolt of electricity for a ¿few seconds at the start of the race?

## NASCAR
Originates from moonshiners with modified cars for faster smuggling. After
prohibition, races were frequently held at Daytona Beach. Originally raced with
actual stock (bought from manufacturer) cars with modifications.

## Electromagnetic resonance (EMR)
Graphics tablets with a grid of wires behind the display transmit EM waves via
induction to the coil in the pen for electrical energy. The coil is used again
to transmit data back.

## Brazilian Jiu Jitsu
Evolved from Judo practitioners in Brazil.

UFC was originally organized after video demonstrations of BJJ practitioners
defeating practitioners of other martial arts. The Gracie family of Gracie Jiu
Jitsu wished to promote BJJ to a wider audience by accepting challenges in the
UFC.

## Kendo
To score points, you must shout the area of the body you wish to attack first,
such as "men" (head).

## Immersed tube/tunnel
Tunnel building technique for tunneling across water.

Tunnel segments are prefabricated, floated to their destination, sunk, and 
linked together.

## Refrigeration loop
* Condenser (hot side): coolant condenses into liquid, heat energy released.
* Evaporator (cold side): coolant expands into gas, heat energy absorbed.
* Under low pressure, the boiling point of the coolant is lowered.

## Tsugaru election 津軽選挙
In Aomori Prefecture, electoral fraud was so openly prevalent that candidates
would bribe voters by going door-to-door handing out money, asking voters to
verbally ask election officials to write the name of the candidate for them on
the ballot, and handing them onigiri filled with cash.

## Merge algorithm
Have two sorted arrays and two pointers. Advance whatever pointer has the smaller
of the two and put the value in the merged array.

## Areal features
Features of a language that exist in languages within a geographic area that have
spread due to language contact.

## Feature transmission
Most language features that are structural like syntax and morphology are spread
from parent to child. Language contact tends to only spread lexical and
phonological features.

## Wasps
Wasps cannot fly well under 10 C but can keep active below freezing.

## Monad
* A monad is a container type that implements a flatMap method and contains
one or more values
    * `[1,2,3].flatMap(x => return [x*2])`
        * Returns `[2,3,6]`
    * `[1,2,3].flatMap(x => return [x, x])`
        * Returns `[1,1,2,2,3,3]`
    * `[1,2,3].flatMap(x => return [])`
        * Returns `[]`
* Monadic functions accept monads and return monads
* Monadic functions can be chained together

## CBOR
A non-human-readable serialization format

## Protobuf
A serialization format where the client and server need to know the schema
beforehand. Non-human-readable.

## Unification Church "Moonies"
Korean new religious movement that encourages followers to donate large sums.
Sun Myung Moon believes he is the second coming of Christ. The UC has a lot of
influence with the Japanese LDP, which led to the assassination of Shinzo Abe
in 2022, who was killed with an improvised gun.

## SRAM
Static RAM.
* Uses flip-flops to store bits
* Data persists as long as power is on
* More expensive than DRAM which needs to be refreshed every second or so

## Incompatibilism
The idea that free will is incompatible with determinism. Compatibilism is the
inverse.

## Kombucha
Black tea fermented by a culture of certain bacterias and yeasts.

## Splatbooks
Name derives from the asterisk (*), or splat. World of Darkness supplement books
were called things like *clanbooks, traditionbooks, thingbooks*, which were
collectively known as *\*books* on Usenet.

## Stockfish
Originally a classical chess-playing algorithm, it was augmented with a neural
network in 2020, and in 2023 is now entirely a neural network.

The classical algorithm works by looking at the tree of possible game states
starting from the current state. Each state gets a score (in centipawns):

- If during some state it is the computer's turn, then the score is the max of
the child states' scores (it wants to make a move that benefits itself).
- If it is the opponent's turn, then the score is the min of the child states'
scores (the opponent wants to make a move that hurts the computer).

Then the algorithm will make the move that maximizes the score. This algorithm
is called Minimax.

### Alpha-beta pruning
Because the tree can get really big, to make it faster, Alpha-beta pruning stops
evaluation (prunes parts of the tree) when it encounters a move that's proven to
be worse than another move that's already been evaluated.

## Asynchronous Transfer Mode (ATM)
ATM is a data-link layer protocol (like Ethernet or I<sup>2</sup>C) mainly used
for creating WANs. First, to connect to another client, a virtual circuit is
created specifying the route that the data should take along the network.
Then all the data packets, which are all 53 bytes, are routed through this
circuit.

Unlike Ethernet, you can guarantee an ATM connection's Quality of Service, such
as its data rate and maximum delay. ATM is used in DSL networks.

## Tea
Black, white, green, oolong, and pu-erh tea all come from the same plant species, the tea tree *(Camellia sinensis)*. The difference between them is the level of oxidization achieved when processing them, with white tea being the least oxidized and black tea the most oxidized.

## Pinky
Pinky is a really small scripting language designed to be easy to implement by
people learning to write compilers and interpreters. ([source](https://pinky-lang.org/))

## Calibri used to detect forgery
In the wake of the Panama Papers, the former Prime Minister of Pakistan Nawaz Sharif
was under investigation for tax evasion. He produced documents purportedly dated 2006.
The documents were typeset in Calibri, a font created in 2004 and available in beta
versions of Windows Vista and Microsoft Office 2007, before both became widely
available in 2007. ([source](https://arstechnica.com/tech-policy/2017/07/not-for-the-first-time-microsofts-fonts-have-caught-out-forgers/))