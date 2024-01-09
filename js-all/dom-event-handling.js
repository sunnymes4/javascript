/*
    todo -- DOM - Document Object Model --
    A Data structure which resembles like a Tree/Graph
    And our Browser is Build on C++.
    So HTML, CSS comes from the server which Browser dosen't understand, so it converts into a format which C++(browser) can understand.
    So browser creates an Object representation of HTML, CSS to understand which is called OBJECT MODEL.
    Because OBJECT is a data structure C++ can understand.

    HTML Node = DOM API's.
    HTML converts to - DOM.
    CSS converts to - CSSOM.
    and DOM + CSSOM = Render Tree.

    todo -- Deffination --
    DOM is a Object represntation of HTML Document which resembels like a Tree.
    And this DOM object created by the Browser has alot of methods/functions inside of it,
    which are called as DOM API's and which empowers the HTML and give some interactive fetures to HTML Nodes inside the web page.
*/

const box = document.getElementById('box');
const para = document.getElementsByTagName('p');

const q = document.querySelector('#box > p');
const btn2 = document.querySelector('.btn');

btn2.addEventListener('click', () => {
    q.style.backgroundColor = 'orange';
    q.style.color = 'white';
    q.style.fontSize = '20px';
    box.style.backgroundColor = 'Green';
})

/*
    todo -- Events and Event Handling
    !Callback functions
    JS Functions are first class functions
    First class functions can take another function as an argument and return it.
*/
function sayHello() {
    console.log('Hi am a callback function');
}

const x = (a) => {
    return a;
}

x(sayHello());

// todo -- event to adding elements
const addEle = document.querySelector('.addEleBtn');
const list = document.querySelector('ul');
let count = 0;
addEle.addEventListener('click', () => {
    count++;
    const item = document.createElement('li');
    item.textContent = `List item ${count}`;

    list.appendChild(item);
});

// todo -- event to hide/show element
const toggleBtn = document.querySelector('.toggleBtn');
const heading = document.querySelector('.toggle > div > h2');

toggleBtn.addEventListener('click', () => {
    heading.classList.toggle('hide');
})

// todo -- innerHTML

// todo -- event to remove element
const removeBtn = document.querySelector('.removeBtn');
const heading1 = document.querySelector('.remove > div');
removeBtn.addEventListener('click', () => {
    heading1.removeChild(heading1.firstElementChild);
    heading1.childNodes.entries(item => item.style.color = 'red');
})
