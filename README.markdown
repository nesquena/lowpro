Low Pro - Unobtrusive Scripting Extensions to Prototype
-------------------------------------------------------

Authors: Dan Webb, Brian Landau  
Project Home: http://github.com/brianjlandau/lowpro  
Git: git://github.com/brianjlandau/lowpro.git  
Licence: MIT

Low Pro is a small JavaScript library built as an extension to Prototype that makes unobtrusive DOM scripting much easier.  Here's a rundown of the functionality:

* Prettier DOM Builder that wraps Prototype's new Element
* Event.onReady() - add callbacks that execute as soon as the DOM is ready (now delegates to prototypes built in support for backward compatibility).
* Event.addBehavior() - add behaviors to elements declaratively using CSS selectors.
* Behavior object binding - If you prefer a more OO approach to behaviors Behavior.create() will create a behavior class that you can bind to elements.

Compatible with Prototype 1.6  
Tested in: Firefox 1.5 (PC/Mac), Safari 2, IE 6+, Opera 9 (PC/Mac)


Updates
-------------------------

(by Nathan Esquenazi)

This is a fork of lowpro which fixes a number of issues such as Remote.Form not accepting an image submit button. In addition, fixes LowPro to remove all JSLint warnings for better compression and packing. Also, adds a 'confirm' option to remote behaviors which requires a user to confirm before an action takes place. Various other edge case fixes.

Acknowledgments / Credits
-------------------------

This library is based on the work of many great JavaScript programmers:

Justin Palmer: event:Selectors which is the basis for addBehavior.

Cheers!
