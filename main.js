// import { countries} from "./countries.js";
// import { webtechs } from "./web_techs.js";

// console.log(countries);
// console.log(webtechs);

// var element;
// element = document.all;
// console.log(element);

// element = document.all[2];
// console.log(element);

// element = document.title;
// console.log(element);


// element = document.body;
// console.log(element);


// element = document.links;
// console.log(element);

// var elemente = document.getElementById('header')
// console.log(elemente);

// querySelector

// var a = document.querySelector("#header")
// console.log(a);

// var a = document.querySelector(".list")
// console.log(a);

// var a = document.querySelector('h1')
// console.log(a)

// var a = document.querySelectorAll('h1');
// a[2].className =  'div';
// a[1].id = 'vd';

// SET ATTRIBUTE

// var a = document.querySelectorAll('h1');
// a[3].setAttribute('class','div')
// a[3].setAttribute('id','dvs')

// Adding class using classList
// titles[3].classList.add('title', 'header-title')

// Removing class using remove
// titles[3].classList.remove('title', 'header-title')

// var a = document.querySelectorAll('h1')
// a[1].textContent = 'divyesh';

//      Adding style
// var titles = document.querySelectorAll('h2');
// titles.forEach((title,i)=>{
//     title.style.fontSize = '25px';
//     if(i%2==0){
//         title.style.color = "green";
//     }
//     else{
//         title.style.color = "red";
//     }
// })



// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

// var fir = document.querySelector('p');
// console.log(fir);

//  SET ID OF 'P' TAG

// var a = document.querySelectorAll('p');
// a[0].setAttribute('id','first');
// a[1].id = 'second';
// console.log(a);


// Get each of the the paragraph using document.querySelector('#id') and by their id

// var pa1 = document.querySelector('#first'); 
// var pa2 = document.querySelector('#second');
// console.log(pa1,pa2); 

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

// var nodeList = document.querySelectorAll('p');
// console.log(nodeList);

// Loop through the nodeList and get the text content of each paragraph

// var nodeList = document.querySelectorAll('p')
// for(var i=0;i<nodeList.length;i++){
//     var text = nodeList[i].textContent
//     console.log(text);
// }


// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// var set_text = document.querySelectorAll('p');
// set_text[3].textContent = 'Fourth Paragraph';
// console.log(set_text[3]);

// Set id and class attribute for all the paragraphs using different attribute setting methods

// var set_attri = document.querySelectorAll('p')
// set_attri[0].id = 'first_id';
// set_attri[0].className = 'first_class';
// set_attri[1].setAttribute('class','second_class');
// set_attri[1].setAttribute('id','second_id');
// set_attri[2].classList.add('second_class','third_class')
// console.log(set_attri);


// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// var change_style = document.querySelectorAll('p');
// change_style[0].style.color = 'red';
// change_style[0].style.fontFamily = 'Serif';
// change_style[1].style.color = 'white';
// change_style[1].style.background = 'black';
// change_style[2].style.border = '20px';
// change_style[3].style.fontSize = '50px';
// console.log(change_style[0].innerHTML);  

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// var get_par = document.querySelectorAll('p');
// for(var i=0;i<get_par.length;i++){
//     if(i%2==0){
//         get_par[i].style.color = 'red';
//     }else{
//         get_par[i].style.color = 'green';
//     }
// }


// var add_ele = document.createElement('h6');
// add_ele.setAttribute('class','fifth_class');
// add_ele.textContent = 'hello world.'
// add_ele.style.color = 'red';
// console.log(add_ele);

// Appending child to a parent element
// var a;
// for(var i=0;i<3;i++){
//     a = document.createElement('h1');
//     a.className = 'ff';
//     a.textContent = i;
//     document.body.append(a);
// }


// Appending child to a parent element
// var lists = `
// <li>30DaysOfPython Challenge Done</li>
//         <li>30DaysOfJavaScript Challenge Ongoing</li>
//         <li>30DaysOfReact Challenge Coming</li>
//         <li>30DaysOfFullStack Challenge Coming</li>
//         <li>30DaysOfDataAnalysis Challenge Coming</li>
//         <li>30DaysOfReactNative Challenge Coming</li>
//         <li>30DaysOfMachineLearning Challenge Coming</li>`
        
// var a = document.querySelector('ul')
// a.innerHTML = lists;
// console.log(a);

// Removing a child element from a parent node

// var ul = document.querySelector('ul');
// var li = document.querySelectorAll('li')
// for(var list of li){
//     ul.removeChild(list)
// }


//                              Event Listeners

// Click
// var touch = document.querySelector('button');
// touch.addEventListener('click',function(){
//     document.write('Button Clicked');
// })

// mouseenter
// var touch = document.querySelector('button');
// touch.addEventListener('mouseenter',function(){
//     document.write('Button Clicked');
// })

// dblclick
// var touch = document.querySelector('button');
// touch.addEventListener('dblclick',function(){
//     document.write('Button Clicked');
// })

// mouseleave
// var touch = document.querySelector('button');
// touch.addEventListener('mouseleave',function(){
//     document.write('Button Clicked');
// })

// mousemove
// var touch = document.querySelector('button');
// touch.addEventListener('mousemove',function(){
//     document.write('Button Clicked');
// })

// input
// var touch = document.querySelector('button');
// touch.addEventListener('input',function(){
//     document.write('Button Clicked');
// })

// blur
// var touch = document.getElementById('g');
// touch.addEventListener('blur',function(){
//     document.write('Button Clicked');
// })
