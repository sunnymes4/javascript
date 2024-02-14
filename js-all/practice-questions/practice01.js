// Question 1

console.log('Question 1', x1) // reference error - the variable is not declared anywhere.

//Question 2

y1 = 1;
console.log('Question 2', y1); // 1 - line 9 will be hoisted to top and then very next line 7 will execute and assign 1 and console.
var y1;

//Question 3

console.log('Question 3',a1); // undefined - only var declaration moves(hoisted) to top and 
var a1 = 10;    // initialization or value assignment remains at same place.


//Question 4

y2 = 1;
console.log('Question 4', y2); // reference error - let never get hoisted it stays in temproral dead zone.
let y2;

// Question 5

console.log('Question 5', b1); // reference error - let never get hoisted it stays in temproral dead zone.
let b1 = 1;

// Question 6

console.log('Question 6', b2); // reference error - its a global variable but its not hoisted, hoisting only happens with var keyword.
b2 = 1;

// Question 7

console.log('Question 7', sum); // undefined - same thing as mentioned earlier, var gets hoisted but assignment remains at same place.
var sum = function(a,b) {
    return a+b
}

// Question 8

console.log('Question 8', total); // reference error - let never get hoisted it stays in temproral dead zone.
let total = function(a,b) {
    return a+b
}

// Question 9

console.log('Question 9', sum1(1,2)); // 3 - because var and named functions gets hoisted, and in this case there no seperate declaration
function sum1(a,b) {                 // for function everything gets hoisted to the top.
    return a+b
}


// Question 10:

function example1() {
    if(true) {
        var aa = 10;
        let bb = 20;
    }

    console.log('Question 10: ', aa); // 10 - because var is functional scope and it get hoisted on top inside function.
    console.log('Question 10: ', bb); // reference error - let is blocked scope since it will not be accessible outside if block.
}
example1()


// Question 11:

var cc = 20;
function example2() {
    if(true) {
        cc = 10;
    }

    console.log('Question 11: ', cc); // 10 - it will search for the variable in function scope and not found then will go in global scope.
}

console.log('Question 11: ', cc); // 10 - and it will update the global variable with 10 at line 74

example2()


// Question 12:

function parent() {

    var dd = 20;

    function child1() {
        console.log('Question 12: A ', dd); // undefined - dd on 97 gets hoisted at function level but not assigned so undefined.

        function child2() {
            console.log('Question 12: B ', dd); // 10 - dd will be assigned with 10 when child1 execution complete, so by the time child2
        }                                       // will access it, it will have value inside it.

        var dd = 10;

        child2()
    }
    child1();

    console.log('Question 12: C ', dd); // 20 - it will access the parent level variable.
}

parent()

// Question 13

function parent1() {

    var ee = 20;

    function child1() {
        console.log('Question 13: A ', ee); // undefined - dd on 97 gets hoisted at function level but not assigned so undefined.

        function child2() {
            console.log('Question 13: B ', ee); // 10 - dd will be assigned with 10 when child1 execution complete, so by the time child2
            var ee = 30;                        // will access it, it will have value inside it.
        }

        ee = 10;

        child2()
    }
    child1();

    console.log('Question 13: C ', ee); // 20 - it will access the parent level variable.
}

parent1();


// Question 14 - Clouser function

// todo -- What is a closure JavaScript?
//! A closure is the combination of a function bundled together (enclosed) with references to its 
//! surrounding state (the lexical environment). In other words,
//! a closure gives you access to an outer function's scope from an inner function.

function clouserFn() {
    var a = 0;

    return function() {
        a = a+1;
        return a;
    }
}

// so you can see creating multiple references giving fresh output for each refernce. and incrementing 
// so our value of var a will be updating everytime there is a change in inner function

let ref01 = clouserFn();
ref01(); // 1 -- this is just calling inner function so a = 0 will not be called everytime.
ref01(); // 2

let ref02 = clouserFn();
ref02(); // 1
ref02(); // 2





