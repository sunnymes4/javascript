
// Data
// - DOM
// - References
// > of Result
const result = document.querySelector('#result');

// > of Input
const inputVal = document.querySelector('#inputVal');

// > of Plus/Minus/Reset
const plus = document.querySelector('.item button:first-child');

const minus = document.querySelector('.item button:nth-child(2)');

const reset = document.querySelector('.item button:last-child');



// JS In-Memory
// > count

let count = 0;
let valueEntered = 1;


// Methods

function addListner() {
    inputVal.addEventListener('change', (e) => {
        valueEntered = Number(e.target.value);
    });

    plus.addEventListener('click', () => {
        increment();
    });

    minus.addEventListener('click', () => {
        decrement();
        
    });

    reset.addEventListener('click', () => {
        resetAll();
    });

}

function increment() {
    count += valueEntered;
    showResult();
}

function decrement() {
    count -= valueEntered;
    showResult();
}

function resetAll() {
    count = 0;
    showResult();
}

function showResult() {
    result.innerHTML = count;
}

addListner();