// EXAMINE THE DOCUMNET OBJECT
// console.dir(document); show all properties of document
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// text.Content remove and replace the text content of the specific note and all its decendants by the new text
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = 'Goodbye';
// innerText targerts style while textContent is general
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3> Hello </h3>';
// innerHTML put the elment inside the DOM
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'Bold';
// items[1].style.color = 'blue';
// for (var i = 0; i < items.length; i++)
//   items[i].style.backgroundColor = ("#f4f4f4");

// GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'Bold';
// li[1].style.color = 'Blue';
// li[1].style.backgroundColor = " lightgrey ";
// for (var i = 0; i < li.length; i++)
//   li[i].style.background = '#f4f4f4';

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type=submit]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'violet';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.backgroundColor = 'grey';

//QUERY SELECTORALL//
//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++)
//   odd[i].style.backgroundColor = 'lightgrey';

// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < even.length; i++)
//   even[i].style.color = 'violet';

//var even = document.querySelectorAll('li:nth-child(even)');
//for (var i = 0; i < even.length; i++)
// even[i].style.backgroundColor = 'lightblue';//

//TRAVESING THE DOM//
var itemlist = document.querySelector('#items'); //parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentNode.parentNode.parentNode);

// console.log(itemlist.parentElement);  //parentElement
// itemlist.parentElement.style.backgroundColor = 'lightgreen';
// console.log(itemlist.parentElement.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);

//most of the case parentNode and parentElement can used as the same.

//childNodes
//console.log(itemlist.childNodes);
//in childNodes line break counts as text
//console.log(itemlist.children);
// console.log(itemlist.children[2]);
// itemlist.children[2].style.backgroundColor = 'yellow';
// itemlist.children[2].style.color = 'red';
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'lightblue';
// itemlist.children[1].style.color = 'darkviolet';

//firstChild
//console.log(itemlist.firstChild);

//firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'I love you';
// itemlist.firstElementChild.style.color = 'red';

//lastChild
//console.log(itemlist.lastChild);

//lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = '3 Options';
// itemlist.lastElementChild.style.fontweight = 'Bold';
// itemlist.lastElementChild.style.color = "darkgrey";





























































