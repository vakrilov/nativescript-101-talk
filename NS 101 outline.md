# Intro



## First Demo
    - In Playground
    - In angular
    - Show markup - basic components
        - ?? maybe show an *ngFor with list
    - CSS styling 
        - use some basic styles for the views we just added
        - explain about the theme that comes out of the box. Switch the theme.
        - ??? Animations


# How It Works
     - architecture slide and explain different levels of abstraction

 
## Angular:
    - Bootstrap custom platform which is packed with NativeScript Renderer instead of the default browser renderer which works with DOM. NS Renderer produces NativeScript Views instead (which are native blah blah). This a major difference compared to Ionic which also runs on top of Angular.

    - Navigation: Because there is no browser we have our own implementations of some of the Angular abstractions around history/location and also the whole navigation stack is integrated with NS. Native Navigation - ex. Back button in android and the native NavigationBar in IOS. Native transitions and animations.

    - Animations: We also have implemented part of the Angular's cool APIs about animations. All animations done with ns-angular are translated to actual native animations (many fast, much slick).

    - Angular provide a complete application framework. Have a slide listing the most notable features of angular 

    - If you already know angular - there will be only a few new thing you will have to learn. You can reuse most of your knowledge and skills. Templates tags will be different (coming up next). More details about that. You *don't* want to heave the same UI for desktop and Mobile (slide with a site that looks ugly on mobile). 

## Cross-Platform-Modules

    - The main problem we want to solve is having a single codebase that works for IOS and Android. 

    - Non-UI - FS, HTTP, Colors, Resources, Local Storage etc. 

    - UI - Whole view hierarchy abstraction

    - Navigation

    - CSS 
    
    - "Why u no have <div>" - Explain why we did not choose to "emulate" browser tags. 

    - 


## Native API Access
    - 
    - 
    - Metadata and native Method invocation.
    - Zero day support - it comes out-of-the-box because of the build process
    - You have access to any 3rd party libraries you already have.



Morse Code app

1. Translate - from text to morse (events and data-binding)
2. Help - show morse alphabet with different layouts + scroll or list.

3. Play message - Hardware - flash & vibrate
4. Animations when playing 
5. ?? Add side-drawer 


3. ?? Decode signals







