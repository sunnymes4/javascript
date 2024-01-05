/*
    Creating Immuatable objects
    Object.freeze() and Object.seal()

    todo -- Difference between Freeze and Seal:
    ! -- Freeze
            ! object cannot be modified in anyway
            ! Like cannot add, delete or modify existing properties
    ! -- Seal
            ! Object can be modified externaly
            ! Like modifying existing properties
            ! But adding or removing any property is not possible
*/ 

// Mutable objects

const obj = {
    a: 22,
    b: 3,
    c: 20
}

obj.d = 'Added new property';
obj.a = 2;
delete obj.b;

console.log(obj, '---- Mutable object ----'); // ! output would be - {a:2, c:20, d:'Added new property'}

// Immuatable objects with freeze

const obj1 = {
    a: 10,
    b: 20,
    c: 30,
}

Object.freeze(obj1);

obj1.d = 'Added new property';
obj1.a = 2;
delete obj1.b;

console.log(obj1, '---- Freeze object ----'); // ! output would be - {a:10, b:20, c:30} no changes in original object

// Immuatable objects with seal

const obj2 = {
    a: 10,
    b: 20,
    c: 30,
}

Object.seal(obj2);

obj2.d = 'Added new property';
obj2.a = 2;
delete obj2.b;

console.log(obj2, '---- Seal object ----'); // ! output would be - {a:2, b:20, c:30} Modifying existing properties


/*

    todo -- Destructuring in javascript - why to use?
    1. To Save your amount of keystrokes.
    2. It becomes easier to reference nested keys in Objects.
    3. Using the concept of destructuring namespacing(key names),
        you can work smart and save alot of time to yourself if there is any key changes from backend.

*/

const arr = [1,2, 4, 5, 6, 7, 100];
const [a, b, c, ...e] = arr;

console.log(a,b,c,e) // ! -- output -- 1,2,4,[5,6,7,100];

const obj = {
    name: 'Sunny',
    age: 32,
    company: 'EY',
    job: 'Developer',
    address: {
        city: 'Bangalore',
        pincode: 000000,
        phone: 12345,
    }
}

const {address} = obj;
console.log(address) // ! -- output -- { city: 'Bangalore', pincode: 000000, phone: 12345}

// suppose there 1000 instances of this phone being used in multiple places
// and someone from backend team decides to change `phone` property to mobileNo.
// then by just changing it at one place would do the work.
// ! Namespacing
const {address: {phone: tel}} = obj;
console.log(tel) // ! -- output -- 12345