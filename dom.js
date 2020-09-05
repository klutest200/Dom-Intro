//DOM is object oriented representation of the HTML

// To change the title;

const headers = document.getElementsByTagName('h2');
console.log(headers); // Container looking like an array;

// By class name
const list = document.getElementsByClassName('item');
console.log(list);

//By ID
const button = document.getElementById('submit');
console.log(button);

//Query Selector
const headers1 = document.querySelector('h2');
console.log(headers1);
const nodeList = document.querySelectorAll('.item');
console.log(nodeList);

const listAnchor = document.querySelector('#list');
console.log(listAnchor);

const listAnchors = document.querySelectorAll('#list a');
console.log(listAnchors);