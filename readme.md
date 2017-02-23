<h1>Class vs Protototypical Inheritance</h1>

Although we learned about creating classes, I realized now that they don't technically exist! Instead, we are using a constructor funtion with the ES6 keyword Class- the *javascript workaround*. So, class inheritance is technically implemented on top of prototypcal inheritance. The class inheritance connects the child constructor prototype to it's parent and adds the super constructor. 

Prototypical inheritance on the other hand is more obvious and right in front of your eyes. A prototype is an instance of an object,and inherits directly from another object. 

These are two ways in which different tyes of objects share their code. If done wrong, it can cause major issues down the line! A few of the issues are:

* Inflexible hierarchy problems
    * All evolving hierarchies will eventually be wrong for a new class
* Duplication by necessity problem
    * New use cases are forced into a class that doesn't necessarily fit, insead of of adapting to the existing code
* Gorilla/banana problem
    * What you wanted was a banana, but what you got was a gorilla holding a banana.... and the entire jungle!

The solution to this, is to favor object composition over class inheritance. Not **ALL** inheritance, just class. There are three types of 

Three Types of Prototypal Inheritance

1. Concatenative inheritance
2. Prototype delegation
3. Functional inheritance


<!--Codepen links-->
http://codepen.io/nathancarpenter/pen/JWPVPq?editors=0010
http://codepen.io/nathancarpenter/pen/gmYyMg?editors=0010

