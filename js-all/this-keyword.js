// All about this keyword in JavaScript
// Arrow functions - Where they are defined.
// Normal functions - How they are invoked.

// In Normal functions which are in global window `this` keyword also points to window object.



function sayHello() {
    console.log(this, '******* points to window object 01 *******')
    function hello() {
        console.log(this, '******* points to window object 02 *******')
    }
    hello();
}
sayHello();

/*

In Object - an object having method as normal function have their own scope, so they point to the same object.
******* Methods as normal functions have their own `this` keyword. **********
and they got invoked as obj.fn() with object invocation;
And if Object having method as ARROW FUNCTION points to Global Object.


*/

const obj = {
    a: 1,
    b: 2,
    fn: function() { // method with normal function
        console.log(this, '******* points to the same object 03 *******') 
    },
    fn2: () => { // method with arrow function
        console.log(this, '******* points to global window object 04 ********')
    }
}

obj.fn();
obj.fn2();


/*

Arraw functions dosen't have there own `this`.
So they borrow it from others like in following case from its lexical scope. // IMPORTANT

*/

const obj2 = {
    fn: function() {
        const fn2 = () => {
            console.log(this, '******* points to same object 05 ********')
        }
        fn2();
    },
}

obj2.fn();


// Ex 01 - normal fn() -> arrow fn1() -> arrow fn2(console.log(this)) // output - object
// answer - normal fn(this) - obj -> arrow fn1(this) borrows from above - obj -> arrow fn2(this) borrows from above too - obj.
