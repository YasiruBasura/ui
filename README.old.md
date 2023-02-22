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
"This" keyword always refers to the object. Reffering to an instance variable. 


To make a variable in js we use,
 let variable_name =document.getelementbyid(" ")

We use id s to address single elements. If there are multiple elements with same sort of things we use classes.


<body>
<h2 id=title>"this is an id" </h2>

            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>


if there are multiple tags with the same id the first will be shown when called.
In css to adress the id s we call the address selecter,
    #title{ }
TO classes we simply use,
    .box{

    }



    <style>
p.hometown { 
  background: yellow;
}
</style>
</head>
<body>

<h1>Demo of the .class selector</h1>

<p>My name is Donald.</p>
<p class="hometown">I live in Ducksburg.</p>

<p>My name is Dolly.</p>
<p class="hometown">I also live in Ducksburg.</p>


To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element.
To create a variable with local scope, declare it inside the selector that is going to use it.

ex:

:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}

-----------------------------------------------------
:: before {}   tag in CSS
this is used to print sth before a specified tag

<head>
<style>
p::before {
  content: "Read this -";
}
</style>
</head>
<body>

<h1>Demo of the ::before selector</h1>

<p>My name is Donald</p>
<p>I live in Ducksburg</p>

</body>
</html>

here the output will be like ,

Read this - My name is Donald
Read this - I live in Ducksburg

::after{} tag inserts infront likewise

----------------------------------------
Selecters in CSS

<style>
* {
  text-align: center;
  color: blue;
}
</style>

Here because of the * selecter the styles will be applied to all the elements below the tag.


In CSS we can use brder, padding,width and height to create boxes. But inbuilt ,

             box-sizing: border-box;
                                will do the job.


Ex:

<style> 
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
  box-sizing: border-box;
}

.div2 {
  width: 300px;
  height: 100px;  
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
box-sizing: border-box;

 }
</style>
</head>
<body>

<h1>With box-sizing</h1>

<div class="div1">Both divs are the same size now!</div>
<br>
<div class="div2">Hooray!</div>

</body>


--------------------------------------------------------------------

"const" in java script refers to constant variable

{Try} , {Catch} , and {Finally} statements in javascript.(Eror handling in javascript)



































