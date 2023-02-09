# ui
 This is the UI of the employee Full Stack system

 LEARNINGS IN ABSTRACT !!!!

ARROW FUNCTIONS,
Ex1:

 Arrow Fucntions in Java Script

 function sum(a,b){
    return a + b
 }

 let sum2 = (a,b) => a + b


In normal function it already creates a variable named sum but in arrow functions we have to create it manually.(sum2 as we no longer have the function keyword)
Anything after the arrow is asuumed to be returned.


Ex2:

function isPositive(number){
    return number >=0
}

let isPositive2 = (number) => number >=0
When we have a single parameter we can get rid of the parenthesis.

let isPositive2 = number => number >=0

Ex3:

function randomNumber(){
    return Math.random
}

let randomNumber2 = () => Math.random

This is how we write an arrow function with zero arguments.(Empty parenthesis)

Ex4:

Here we are passing a function into an another function.

document.addEventListner('click' , function(){
    console.log('Click')
})

document.addEventListner('click' , () => console.log('Click') )

Here we dont have to assign the function to a variable as we have it already inside an another function (document. _)

IF you get this fck all...!!

class Person{
    constructor(name){
        this.name = name
    }



printNameArrow(){
    setTimeout(()=> console.log('Arrow: '+ this.name),100)
}

printNameFunction(){
    setTimeout(function(){
        console.log('Function: '+ this.name)}, 100)
    }

}


let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.log)

//here what happens is in the normal function this.name is redifined in the global scope.
// but in the arrow function it isn't redefined.




JAVA TIPS !!!!
ADDITIONAL => Every time we call an object it calls/creates the constructor automatically.When we want to perform an operation always do it inside a method.!!
"This" keyword always refers to the object. 
















