---
title: 'B78XH: Full Sail'
date: '2022-09-21'
authors:
   - 'Yoshi'
category: 'Update'
metaImage: '/img/fullsail.jpg'
metaAlt: 'Heavy Division'
---

## Overview

It's now been a year and a half since the Heavy Division project was founded, and Sim Update 10 has just released.

Starting as a solo project with a desire to improve upon the default Asobo 787-10, our team has grown into a staff of 6 with 4 currently on the development team, 1 developer trainee, and 1 media trainee.

As the project continues to grow we will need additional staff, including type-rated 787 pilots.

If you'd like to help, please ping an admin on our discord or email us at [contact@hdsimulations.com](contact@hdsimulations.com)

---

### Systems

**Status**: Begun

We've just entered the planning phase for our custom fuel system, which will be our first. Over the past few months we've been working on transitioning most of the B78XH to a C++ framework compiled to Web Assembly (WASM).

What this means for the average user is that you can expect much better performance going forward and fewer fps drops. 

With the decryption of previously locked configuration files, we now have a foundation to build upon in regard to the systems, which will be implemented within this framework.

We plan on moving to the electrical system afterwards, which is a core component of the Dreamliner, so if you're interested in helping us create this, please reach out.

### FMGC

**Status**: In Progress

Currently in late development. Comi, the founder of the project, has been hard at work overhauling the displays to the new C++ framework. This update is scheduled as an experimental release for SU10, and will include new features such as a functioning first officer CDU and more accurate display coloring.

### VNAV (Descent profile, ToC, ToD, etc.)

**Status**: Developers Needed

In early stage development. Some workarounds in the past were required to implement a basic VNAV with descent functionality.

In the aircraft's current state

With the flight model unlocked we can now fine-tune the autopilot logic, but will need more developers to work on this area.

### 3D Model

**Status**: Developers Needed

Currently, in early development. The current state of our aircraft is entirely dependent on Asobo for a 3D model. In theory, we now have access to everything needed to make a functioning standalone plane, with in depth software and custom renderers, but we need more hands on deck to help with the 3D model for the B789H project, our very own 787-9 built on the framework of the B78XH. 

In particular, we need people who are familiar with UV texturing, 3d modelling, and animations. 

### Fly-by-wire logic

**Status**: Developers Needed

The current implementation of fly-by-wire on the 787 is based on a one-size-fits-all approach Asobo has taken, so the fly-by-wire found on for example the F-18 is the same as the 787. However, we would like to take a shot at fine-tuning our very own custom fly-by-wire logic. This will be implemented in C++.

### Debugging/Troubleshooting

Whilst the B78XH remains a perfectly VATSIM capable plane, we need more hands on deck to address the current range of known issues affecting users. 

### Additional Projects needing help

- Heavy Division API (Typescript/NestJS)
- Discord Bot (Typescript)
- Documentation

If any of these projects interest you, please feel free to fill out our [application form](https://forms.gle/Z9A7rtF4FuywMjeQA) and indicate the areas you'd like to work on.
