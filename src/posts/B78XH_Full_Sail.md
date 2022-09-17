---
title: 'B78XH: Full Sail'
date: '2022-09-21'
authors:
   - 'Yoshi'
category: 'UPDATE'
metaImage: '/img/landing.png'
metaAlt: 'Heavy Division'
---

## Overview

We're coming up on the release of SU10, and it's been a year and a half since the Heavy Division project was founded.

Starting as a solo project with a desire to improve upon the default Asobo 787-10, our team has grown into a staff of 6 with 4 currently on the development team, and 1 additional developer trainee.

As the project continues to grow we will need additional staff, including type-rated 787 pilots. if you'd like to help please ping an admin on our discord or email us at contact@hdsimulations.com.

---

### Systems

**Status**: Begun

We've just entered the planning phase our custom fuel system, which will be our first. Over the past few months we've been working on transitioning most of the B78XH to a C++ framework compiled to Web Assembly (WASM).

What this means for the average user is that you can expect much better performance going forward, and with the decryption of previously locked configuration files, we now have a foundation to build upon in regard to the systems, which will be implemented within this framework.

### FMGC

**Status**: In Progress

Currently in late development. Comi, the founder of the project, has been hard at work overhauling the displays to the new C++ framework. This update is scheduled as an experimental release for SU10, and will include new features such as a functioning first officer CDU and more accurate display coloring.

### VNAV (Descent profile, ToC, ToD, etc.)

**Status**: Developers Needed

Currently in the early stages of development. Loosely based on WT’s CJ4 VNAV, but will support all A320-specific VNAV functionality, including REPRESSURIZATION, IDLE, and GEOMETRIC segments, as well as all applicable pseudo-waypoints (T/C, T/D, SPD LIM, DECEL, and path intercept icons on ND). The main blocking issue we have at the moment is lack of VPATH law in custom AP/ATHR. We currently need a developer with Matlab/Simulink experience to work on this (controls and systems experience is a plus).


### 3D Model

**Status**: Developers Needed

Currently, in early development. The current state of our aircraft is entirely dependent on Asobo for a 3D model. In theory, we now have access to everything needed to make a functioning standalone plane, with in depth software and custom renderers, but we need 
more hands on deck to help with the 3D model for the B789H project, our very own 787-9 built on the framework of the B78XH. In particular, we need people who are familiar with UV texturing, 3d modelling, and animations. 

### Custom AP/ATHR

**Status**: Developers Needed

One of our most prominent developers and the chief architect of our excellent custom fly-by-wire and autopilot systems, Andreas, has taken a step back from the project after several hard months of working on it. We are looking for any developers with experience using Matlab/Simulink, basic SimConnect familiarity, and (not required but recommended) some experience with controls/systems. Please reach out if you are able to work on this.

### Fly-by-wire logic

**Status**: Developers Needed

### Pneumatic/Bleed System

**Status**: Developers Needed

We currently do not have any developers working on this, so if you are interested, please reach out to us. It will also be coded in Rust.

### Additional Systems In Progress

- Pressurization System
- ADIRS & GPS System
- FWS/FWC (Flight Warning System)

