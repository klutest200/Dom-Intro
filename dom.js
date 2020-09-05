// const collectionItems = document.getElementsByClassName('item');
// const Nodeitems = document.querySelectorAll('.item');
// // Everything inside our DOM is a Node
// console.log(collectionItems);
// console.log(Nodeitems);

// const nodeItem = document.querySelector('#list');
// console.log(nodeItem.childNodes);// Give the nodeList of all nodes
// console.log(nodeItem.children); //Gives the HTMLCollection of element type nodes

//using for loop to iterate over
// for(let i=0;i<Nodeitems.length;i++){
//     console.log(Nodeitems[i]);
// }
// for(item of Nodeitems){
//     console.log(item);
// }
// for(item of collectionItems){
//     console.log(item);
// }
// Nodeitems.forEach(function(item){
//     console.log(item)
// })



// //Adding Item 3
// const collectionItems = document.getElementsByClassName('item');
// const parentItem = document.getElementById('list');
// const numItems = document.getElementsByClassName('numItems')[0];
// // const Nodeitems = document.querySelectorAll('.item');
// console.log(collectionItems);
// //To add a new item;
// /*
//     1 Create a new item
//     2 Add class(es) to it
//     3 Add text to it
//     4 Add the item to parent.
// */
// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 3';
// parentItem.appendChild(newItem);
// // console.log(numItems);
// numItems.innerText = collectionItems.length;


//Adding item using query selector
//Adding Item 3
// const collectionItems = document.querySelectorAll('.item');
const parentItem = document.querySelector('#list');
const collectionItems = parentItem.children; //Returns HTMLCollection
const numItems = document.querySelector('.numItems');
// console.log(collectionItems,parentItem,numItems);
//To add a new item;
/*
    1 Create a new item
    2 Add class(es) to it
    3 Add text to it
    4 Add the item to parent.
*/
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';
parentItem.appendChild(newItem);

const anotherItem = document.createElement('li');
anotherItem.classList.add('item');
anotherItem.innerText = "Item 4";
parentItem.appendChild(anotherItem);
console.log(collectionItems);
numItems.innerText = collectionItems.length; // It doesn't get updated if we use query selector;
//Query selector is static

console.log(numItems);