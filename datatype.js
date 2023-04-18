// DATA TYPE
// let name = "divyesh";
// console.log(typeof(name));

// let roll_no = 10;
// console.log(typeof(roll_no));

// let a = 10;
// let b = 10;
// console.log(a==b);

// let study;
// console.log(study);

// let c = null;
// console.log(c);


// ARRAY
// let nums = [1, 2, 3]
// console.log(nums);
// nums[0] = 10
// console.log(nums);


// OBJECT 
// let userOne = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }
// console.log(userOne);

// userOne['name'] = "jay";
// console.log(userOne);

// userOne[0] = "divyesh";
// console.log(userOne);
   


// let age = 35
// age = 36
// const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
// gravity = 5.21
// let mass = 72         // mass in Kilogram
// const PI = 3.14       // pi a geometrical constant

// More Examples
// const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
// const bodyTemp = 37      // oC average human body temperature, which is a constant

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


//  Math Object
// const PI = 3.99
// console.log(PI);
// console.log(Math.round(PI));
// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));
// console.log(Math.max(1,2,-7,9));
// console.log(Math.min(1,2,-7,9));

// const random = Math.floor(Math.random()*10);
// console.log(random);

// console.log(Math.abs(-20));
// console.log(Math.sqrt(16));
// console.log(Math.pow(4,2));

// console.log(Math.E);
// console.log(Math.sin(90));
// console.log(Math.cos(0));


// Strings

// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// console.log(space,firstName,lastName,country,city,language,job,quote,quotWithBackTick);


// String Concatenation

// let fname = 'Divyesh';
// let lname = 'Dabhi';
// console.log(fname+' '+lname);

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)

// let info = 'heklo njhbds js jkn \'hbgb\' smndjsbn.'
// console.log(info);
// console.log('In every programming language it starts with \"Hello, World!\"', info)

// Template Literals (Template Strings)

// let fname = "Divyesh";
// let age = 23;
// console.log(`hello my name is ${fname} and my age is ${age}.`);


// STRING METHOD

let fname = 'divyesh';
// console.log(fname.length);
// console.log(fname[6]);
// console.log(fname[6]);

// console.log(fname.toUpperCase());
// console.log(fname.toLowerCase());

// console.log(fname.substring(0,3));
// console.log(fname.substring(3));
// console.log(fname.substring(2,4));

// let fullname = 'divyesh dabhi "gs bcsdc kjuchsd" ,gbjhsv'
// console.log(fullname);
// console.log(fullname.split(' '));
// console.log(fullname.split());
// console.log(fullname.split(','));
// console.log(fullname.split(''));

// let string = '   30 Days Of JavaScript   '
// console.log(string);
// console.log(string.trim());

// console.log(fname.includes('div'));
// console.log(fname.includes('divf'));

// console.log(fname.replace('div','dvs'));
// console.log(fname.replace('d','lf'));

// charAt()     // Takes index and it returns the value at that index

// console.log(fname.charAt(6));
// console.log(fname.charAt(5));

// console.log(fname.charCodeAt(1));

// console.log(fname.indexOf('i'));
// console.log(fname.indexOf('z'));

// console.log(fname.concat(' '+'dabhi.'));

// let sub = fname.substring(0,3);
// console.log(sub);
// console.log(sub.startsWith('i'));

// console.log(sub.endsWith('v'));
// console.log(sub.endsWith('d'));


// let searching = 'divyesh dabhi how are you.';
// console.log(searching.search('da'));

// let string = 'love is blind.'
// console.log(string.match('love'));

// console.log(fname.repeat(2));


//  TYPE CASTING

// let a = '10';
// console.log(typeof(a));
// a = Number(a);
// console.log(typeof(a));


// let fullname = 'divyesh dabhi "gs bcsdc kjuchsd" ,gbjhsv'



// console.log(fullname.substr(4,3));

// var s = "JavaScript";
// var st = s.substr(4);
// console.log(st);

// var s = "JavaScript";
// var st = s.substring(2,4);
// console.log(st);


// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

// let sli = '30 Days Of JavaScript.'
// console.log(sli.substring(3,7));

// Check if the string contains a word Script using includes() method

// let che = '30 Days Of JavaScript.'
// console.log(che.includes('Script'));

// Split the string into an array using split() method

// let ar = '30 Days Of JavaScript.'
// console.log(ar.split());

// Split the string 30 Days Of JavaScript at the space using split() method.

// let sp = '30 Days Of JavaScript.'
// console.log(sp.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// var c = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(c.split(','));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

// var a = '30 Days Of JavaScript.';
// console.log(a.replace('30 Days Of JavaScript.','30 Days Of python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

// var as = '30 Days Of JavaScript';
// console.log(as.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

// var as = '30 Days Of JavaScript';
// console.log(as.charCodeAt('j'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

// var a = '30 Days Of JavaScript.'
// console.log(a.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// var a = '30 Days Of JavaScript.';
// console.log(a.lastIndexOf('a'));


// Use indexOf to find the position of the first occurrence of the word because in the,
// following sentence:'You cannot end a sentence with because because because is a conjunction'

// var a = 'You cannot end a sentence with because because because is a conjunction';
// console.log(a.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the,
// following sentence:'You cannot end a sentence with because because because is a conjunction'

// var a = 'You cannot end a sentence with because because because is a conjunction';
// console.log(a.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the,
// following sentence:'You cannot end a sentence with because because because is a conjunction'

// var a = 'You cannot end a sentence with because because because is a conjunction';
// console.log(a.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

// var a =  ' 30 Days Of JavaScript ';
// console.log(a.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// var a = '30 Days Of JavaScript';
// console.log(a.startsWith('3'));
// console.log(a.endsWith('t'));

// Use match() method to find all the a’s in 30 Days Of JavaScript
// var a = '30 Days Of JavaScript';
// console.log(a.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

// var a = '30 Days of';
// console.log(a.concat("JavaScript"));

// Use repeat() method to print 30 Days Of JavaScript 2 times

// var a = "30 Days Of JavaScript";
// console.log(a.repeat(2));

// var a = 'The quote' +  " 'There is no exercise better for the heart than reaching down and lifting people up.' " + 'by John Holmes teaches us to help one another.'
// console.log(a);

// Check if 'on' is found in both python and jargon
// var a = 'python and jargon';
// console.log(a.includes('on'));

// Generate a random number between 0 and 100 inclusively.

// var otp = Math.floor(Math.random()*101);
// console.log(otp);

// Generate a random number between 50 and 100 inclusively.

// var otp = Math.floor(Math.random()*41+60);
// console.log(otp);

// Generate a random number between 0 and 255 inclusively.

// var otp = Math.floor(Math.random()*255);
// console.log(otp)

// Access the 'JavaScript' string characters using a random number.

// var s = 'JavaScript';
// var indexno = Math.floor(Math.random()*10);
// console.log(s[indexno]);

// Use console.log() and escape characters to print the following pattern.

// console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// var a = 'You cannot end a sentence with because because because is a conjunction';
// console.log(a.indexOf('because'));
// console.log(a.lastIndexOf('because'));
// console.log(a.substr(31,23));

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// var a = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// var count = a.match(/love/gi).length;
// console.log(count);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// var a = 'You cannot end a sentence with because because because is a conjunction';
// var count = a.match(/because/gi).length;
// console.log(count);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// console.log(sentence.replace(/[^a-zA-Z ]/g,''));

// Calculate the total annual income of the person by extracting the numbers from the following text.
//  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// var earn = 5000;
// var bonus = 10000;
// var course = 15000;

// annual = ((earn+course)*12)+ bonus;
// console.log(annual);

// var x = 2**2;
// var y = 1;
// x+=y
// console.log(x);

// var a = 125;
// var b = (a<126?"true":"false");
// console.log(b);

// window.alert("hello");

// var a = window.prompt("enter your name");
// document.write(a);

// var b = window.confirm('are you agree.')
// document.write(b);

// const now = new Date()
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());

// const allSeconds = Date.now() //
// console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// const timeInSeconds = new Date().getTime()
// console.log(timeInSeconds);
// console.log(allSeconds == timeInSeconds) // true

// console.log(!(4 === '4'));

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// var a = window.prompt('enter height');
// var b = window.prompt('enter base');
// var triangle = window.prompt();
// document.write(`area of traiangle,${a}*${b}*${triangle} = ${a*b*triangle}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// var a = Number(window.prompt('enter side a'));
// var b = Number(window.prompt('enter side b'));
// var c = Number(window.prompt('enter side c'));
// var perimeter = a + b + c;
// document.write(`The perimeter of the triangle is ${perimeter}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// var length = Number(window.prompt('enter a length'));
// var width = Number(window.prompt('enter a width'));
// var area = length*width;
// document.write(`area of rectangle ${area}`);    
// var perimeter = 2*(length+width);
// document.write(`perimeter of area ${perimeter}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// var radius = Number(window.prompt('enter circle radius'));
// const pi = Math.PI;
// var circle_area = pi*radius*radius;
// document.write(`area of a circle ${circle_area}`);
// var circumference_circle = 2*pi*radius;
// document.write(`circumference of a circle ${circumference_circle}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// var x_intercept = 4;
// var y_intercept = (2*x_intercept) - 2;
// document.write(`x_intercept is a ${x_intercept} and y_intercept ${y_intercept}`);


// If the length of your name is greater than 7 say, your name is long else say your name is short.

// var fullname = "di";
// var output = (fullname.length>7? 'your name is long':'your name is short');
// console.log(output);


// var fullname = "divyesh";
// var familyname = "dabhi";
// var output = (fullname.length>familyname.length? `Your first name ${fullname} is longer than your family name ${familyname}` : 'your name is short');
// console.log(output);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// var birthyear = Number(window.prompt("enter your birth year"));
// var now = new Date()
// var year = now.getFullYear();
// var age = year - birthyear;
// var allow_drive = 18-age;
// var drive = (age>=18?`You are ${age}. You are old enough to drive` :`You are ${age}. You will be allowed to drive after ${allow_drive} years.`);
// document.write(drive);


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// var age = Number(window.prompt('enter your age.'));
// var se = age*365*24*60*60;
// document.write(se);


// YYYY-MM-DD HH:mm

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${year}/${month}/${date} ${hours}:${minutes}`) // 4/1/2020 0:56
// const now = new Date();
// const date = now.getDate();
// var e = Number(date);
// var hour = now.getHours();
// console.log(hour);
// var q = (e.toString().length==1? `0${e}`:`${e}`);
// console.log(q);


//  DAY == 4 IF,ELSE

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// var age = Number(window.prompt('Enter your age'));
// leftage = 18 - age;
// if (age >=18){
//     document.write('You are old enough to drive');
// }else{
//     document.write(`You are left with ${leftage} years to drive.`);
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
// var yourage = Number(prompt("Enter your age"));
// var myage = 22;
// var older = yourage - myage;
// var smaller = myage- yourage;
// if (myage < yourage){
//     document.write(`You are ${older} years older than me.`);
// }else{
//     document.write(`You are ${smaller} years smaller than me.`);
// }


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// var a = 2;
// var b = 6;
// if(a > b){
//     console.log('a is greater than b');
// }else{
//     console.log('a is less than b');
// }

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or odd using JavaScript?

// var num = Number(prompt('enter your number'));
// if(num%2==0){
//     document.write('even number');
// }else{
//     document.write('odd number');
// }

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let marks = Number(prompt("Enter your marks"));
// switch(true){
//     case (marks>=90 && marks<=100):
//         document.write('Your grade is A.');
//         break;
//     case (marks>=70 && marks<=89):
//         document.write('Your grade is B.');
//         break;
//     case (marks>=60 && marks<=69):
//         document.write('Your grade is C.');
//         break;
//     case (marks>=50 && marks<=59):
//         document.write('Your grade is D.');
//         break;
//     case (marks>=00 && marks<=49):
//         document.write('Your grade is F.');
//         break;
// }


// Check if a day is weekend day or a working day. Your script will take day as an input.

// var day1 = prompt("enter day ")
// var day = day1.toLowerCase();
// switch(day){
//     case 'monday':
//         document.write("Today is working day.");
//         break;
//     case 'tuesday':
//         document.write("Today is working day.");
//         break;
//     case 'wenesday':
//         document.write("Today is working day.");
//         break;
//     case 'thrusday':
//         document.write("Today is working day.");
//         break;
//     case 'friday':
//         document.write("Today is working day.");
//         break;
//     case 'saturday':
//         document.write("Today is working day.");
//         break;
//     case 'sunday':
//         document.write("Today is holiday.");
//         break;
// }

//================================    Arrays

// const arr = Array()
// console.log(arr);

// const arr = []
// console.log(arr);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)


//                  Array with different value
// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)


// var fullname = 'divyeshdabhi';
// console.log(fullname.split(''));

// var fullname = 'divyesh dabhi';
// console.log(fullname.split(' '));

// var fullname = 'divyesh,dabhi';
// console.log(fullname.split(','));


//                        Accessing array items using index
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// console.log(fruits[3]);

// var fruits1 = ['banana', 'orange', 'mango', 'lemon']
// var a = fruits1.length-1;
// console.log(fruits1[a]);


//                        Modifying array element

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits[0] = 'cherray';
// console.log(fruits);

//                          Methods to manipulate array



// Array Constructor
// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]

//                  Creating static values with fill
// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]

// concat
// var firstList = [1, 2, 3]
// var secondList = [4, 5, 6]
// console.log(firstList.concat(secondList));

// const fruits = ['banana', 'orange', 'mango', 'lemon']                
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// console.log(fruits.concat(vegetables));

//                  Length

// var numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length);


//        Getting index an element in arr array indexof()

// var numbers = [1, 2, 3, 4, 5]
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(4));


//                Check an element if it exist in an array.

// var fruits = ['banana', 'orange', 'mango', 'lemon']
// var index = fruits.indexOf('banana');
// if(index === -1){
//     console.log('This fruit does not exist in the array')  
//  } else {
//      console.log('This fruit does exist in the array')
//  }

// var fruits = ['banana', 'orange', 'mango', 'lemon']
// console.log(fruits.includes('banana'));


//                                       Getting last index of an element in array

// var numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// console.log(numbers.lastIndexOf(2));


//                                  check array datatype

// var numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// console.log(Array.isArray(numbers));

// var numbers = 100
// console.log(Array.isArray(numbers));

//               Converting array to string

// var numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString());


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString());

// var numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// var webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// console.log(webTechs.join(' # '));

//                          splice

// var numbers = [1, 2, 3, 4, 5]
// var b = numbers.splice()
// console.log(b)  

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,2)
// console.log(numbers)


// var numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers)

// var numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3,0,10);
// console.log(numbers);


//          ARRAY PUSH METHOD
// var arr  = ['item1', 'item2','item3']
// arr.push('item4');
// console.log(arr);

// //          ARRAY unshift METHOD
// var arr  = ['item1', 'item2','item3']
// arr.unshift('item0')
// console.log(arr);

// //          ARRAY pop and shift METHOD
// var arr  = ['item1', 'item2','item3']
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// //          ARRAY reverse METHOD
// var arr  = ['item1', 'item2','item3']
// arr.reverse();
// console.log(arr);

// //          ARRAY sort METHOD
// var arr  = ['item1', 'item4','item3']
// arr.sort();
// console.log(arr);

//              Array  of array

// var frontend = ['HTML', 'CSS', 'JS', 'React', 'Redux',['Node','Express', ['MongoDB']]]
// console.log(frontend[5][2]);

//                                         Array Exercise

// var countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// var webtechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']


// 1    Declare an empty array;
// var a = []
// var b = Array();
// var c = new Array()
// console.log(a,b,c);


// 2    Declare an array with more than 5 number of elements
// var a = Array(8)

// 3    Find the length of your array
// var a = Array(8)
// console.log(a.length);

// 4    Get the first item, the middle item and the last item of the array
// var webtechs = ['HTML','CSS','JavaScript','React','dvs','Redux','Node','MongoDB']
// var lastindex = webtechs.length - 1;
// console.log(webtechs[0]);
// console.log(webtechs[lastindex]);

// if(webtechs.length%2!=0){
//     var a = (webtechs.length-1)/2;
//     console.log(`middle item is ${webtechs[a]}`);
// }else{
//     var a = (webtechs.length)/2;
//     var b = Math.floor(((webtechs.length)-1)/2);
//     console.log(webtechs[a],webtechs[b]);
// }

//5  Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// var multi = [1,"dvs",10.21,['a','b','c'],{name:'divyesh'}]
// console.log(multi.length);

//6  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

//7   Print the array using console.log()
// console.log(itcompanies);

// 8    Print the number of companies in the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log('number of company is',itcompanies.length);

// 9    Print the first company, middle and last company
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// if(itcompanies.length%2!=0){
//     var a = (itcompanies.length-1)/2;
//     console.log(`middle item is ${itcompanies[a]}`);
// }

// 10  Print out each company
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itcompanies[0]);
// console.log(itcompanies[1]);
// console.log(itcompanies[2]);
// console.log(itcompanies[3]);
// console.log(itcompanies[4]);
// console.log(itcompanies[5]);
// console.log(itcompanies[6]);

//11     Change each company name to uppercase one by one and print them out
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// var itCompanies1 = (itcompanies.join().toUpperCase()).split(',')
// console.log(itCompanies1);


//12     Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.push('are big IT companies.');
// var sentence = itcompanies.join()
// console.log(sentence);

// 13  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// var company = prompt('enter company name');
// if(itcompanies.includes(company)){
//     document.write(company);
// }else{
//     document.write('not found')
// }

// 14  Filter out companies which have more than one 'o' without the filter method
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','OOracle','Amazon']
// for(var i=0;i<itcompanies.length;i++){
//     var n = itcompanies[i]
//     if(n.includes('o') && n.match(/o/gi).length>1 ){
//         console.log(itcompanies[i]);
//     }
// }


//15     Sort the array using sort() method
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.sort()
// console.log(itcompanies);

// 16   Reverse the array using reverse() method
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.reverse()
// console.log(itcompanies);

// 17   Slice out the first 3 companies from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itcompanies.slice(0,3));

// 18   Slice out the last 3 companies from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itcompanies.slice(-3));

// 19  Slice out the middle IT company or companies from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itcompanies.slice(2,5));

// 20  Remove the first IT company from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.shift()
// console.log(itcompanies);

//21  Remove the middle IT company or companies from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon','ll']
// if(itcompanies.length%2!=0){
//     var a = (itcompanies.length-1)/2
//     itcompanies.splice(a,1)
//     console.log(itcompanies);
// }else{
//     var a = (itcompanies.length-1)/2
//     itcompanies.splice(a,2)
//     console.log(itcompanies);
// }


// 22   Remove the last IT company from the array
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.pop()
// console.log(itcompanies);


// 23   Remove all IT companies
// var itcompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itcompanies.splice(0,)
// console.log(itcompanies);


// 2-------------------------

// 1     Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.
// js and store the webTechs array in to this file. Access both file in main.js file



// 2     First remove all the punctuations and change the string to array and count the number of words in the array
// var a = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.split(' ').length
// console.log(a);

// 3    In the following shopping cart add, remove, edit items
// var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift("Meat")

// add Sugar at the end of you shopping cart if it has not been already added
// var check = shoppingCart.includes("Sugar");
// if(check!=true){
//     shoppingCart.push("Sugar");
//     console.log(shoppingCart);
// }else{
//     console.log('already in cart');
// }

// remove 'Honey' if you are allergic to honey
// var re = shoppingCart.includes("Honey");
// if (re==true){
//     var ina = shoppingCart.indexOf('Honey')
//     shoppingCart.splice(ina,1)
//     console.log(shoppingCart);
// }

// modify Tea to 'Green Tea'
// if (shoppingCart.includes('Tea')){
//     var modi = shoppingCart.indexOf('Tea');
//     shoppingCart[modi]="Green Tea";
//     console.log(shoppingCart);
// }


// 4   In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// var countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// if (countries.includes('Ethiopia')){
//     console.log('Ethiopia');
// }else{
//     countries.push('Ethiopia')
//     console.log(countries);
// }

// 6    Concatenate the following two variables and store it in a fullStack variable.
// var frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// var backEnd = ['Node','Express', 'MongoDB']

// var fullStack = frontEnd.concat(backEnd)
// console.log(fullStack);


// ----------Exercise: Level 3

// 1 The following is an array of 10 students ages:
// var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// var s = ages.sort()
// var max = s.length-1
// console.log('max value is',s[max],'and min value is',s[0]);

// Find the median age(one middle item or two middle items divided by two)
// var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// var a = (ages.length-1)/2;
// var b =  Math.floor(a)
// var c =  Math.ceil(a)
// var median = (ages[b]+ages[c])/2;
// console.log(median);

// Find the average age(all items divided by number of items)
// var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// var total = 0;
// for(var i=0;i<ages.length;i++){
//     total+=ages[i];
// }
// console.log(total/ages.length);




// ---------------------LOOP
// var a = 2;
// for(let i = 1; i < 11; i++){
//     console.log(`${a} * ${i} = ${a * i}`)
// }

// var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// var ca = []
// for(var i=0;i<countries.length;i++){
//     ca.push(countries[i].toUpperCase())
// }
// console.log(ca);

//      while loop
// var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// var i = 0;
//  while(i<countries.length){
//     console.log(countries[i]);
//     i++;
// }

//      do while loop
// var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// var i=0;
// do{
//     console.log(countries[i]);
//     i++
// }while(i<countries.length)


//      for of loop
// var numbers = [1, 2, 3, 4, 5]
// for(var num of numbers){
//     console.log(num);
// }
// var numbers = [1, 2, 3, 4, 5]
// for(var num of numbers){
//     console.log(num*num);
// }

// var numbers = [1, 2, 3, 4, 5]
// var sum = 0;
// for(var num of numbers){
//     console.log(sum+=num);
// }

// var numbers = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// for(var num of numbers){
//     console.log(num[0]);
// }

//      BREAK

// for(var i=0;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }
//      continue
// for(var i=0;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }


// var a = 18;
// for(var i =1;i<=10;i++){
//     console.log(`${a} * ${i} = ${a*i}`);
// }

// for(var i=0;i<=10;i++){
//     // var a = i;
//     var b = i^2;
//     // var c = i^3;
//     console.log(`${b}`);
// }


// Use for loop to iterate from 0 to 100 and print only even numbers
// var even = []
// for(var i=0;i<101;i++){
//     if(i%2==0){
//         even.push(i)
//     }
// }
// console.log(even);

// Use for loop to iterate from 0 to 100 and print only odd numbers
// var odd = []
// for(var i=0;i<101;i++){
//     if(i%2!=0){
//         odd.push(i)
//     }
// }
// console.log(odd);

// Use for loop to iterate from 0 to 100 and print the sum of all numbe
// sum=0;
// for(var i=0;i<101;i++){
//     sum +=i;
// }
// console.log(sum);


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// sum=0;
// for(var i=0;i<101;i++){
//     if(i%2!=0){
//         sum +=i;
//     }
// }
// console.log(sum);


//          FUNCTION

// function print(){
//     console.log('hello');
// }
// print()

// Function without a parameter and return
// function add(){
//     var a = 5;
//     var b = 4;
//     var c = a * b;
//     console.log(c);
// }
// add()

// function printfullname(){
//     var fname = 'divyesh';
//     var lname = 'dabhi';
//     var fullname = fname + ' ' + lname;
//     console.log(fullname);
// }
// printfullname();

// function addnumber(){
//     var a = 10;
//     var b = 20;
//     var c = a + b;
//     return c;
// }
// console.log(addnumber());

//      Function with a parameter

// function printname(a){
//     return a;
// }
// console.log(printname('divyesh'))

    // function addnumber(a,b,c){
    //     return a+b+c;
    // }
    // console.log(addnumber(1,2,3));


// num=[1,2,3,4,5,6]
// function add(arr){
//     sum=0;
//     for(var i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     return sum;
// }
// console.log(add(num));

// Function with unlimited number of parameters
// function sumallnumber(){
//     console.log(arguments);
// }
// sumallnumber(1,2,3,4,5,6,7,8)

// Unlimited number of parameters in arrow function
// var a = (a,b)=>{
//     return a + b;
// }
// console.log(a(2,3));

// var b = (...args)=>{
//     console.log(args);
// }
// b(1,2,6,7,8,9);

// Self Invoking Functions

// var n = (function(n){return n*n})
// (10)
// console.log(n);


// function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
// }
  
// console.log(greetings())
// console.log(greetings('Asabeneh'))


//local and global

// a = 10;
// b = 5;
// function add(){
//     console.log(a+b);
// }
// add()

// let a = 10; //global variable
// let b = 5;  //global variable
// function add(){
//     let c = 5;  //local variable
//     d = 6  // global variable
//     return(a+b+c);
// }
// console.log(add())
// console.log(d);
// console.log(c);

// Object(Dictionary)

// var a = {}
// console.log(a);

// var stu_data = {lname:'dabhi',fname:'diyesh',roll_no:21,sub:'Computer Science',skills:['js','python','solidity','block-chain'],getfulname:function(){return `${this.fname}${this.lname}`}}
// console.log(stu_data);
// console.log(stu_data.fname);
// console.log(stu_data.lname);
// console.log(stu_data.roll_no);
// console.log(stu_data.sub);
// console.log(stu_data.skills);
// console.log(stu_data.getfulname());

//add key pair in object

// stu_data['language']='gujarati';
// console.log(stu_data);

// Object method
// var copystu_data = Object.assign({},stu_data)
// console.log(copystu_data);

// console.log(Object.keys(stu_data));
// console.log(Object.values(stu_data));
// console.log(Object.entries(stu_data));
// console.log(stu_data.hasOwnProperty('fname'));  // key is exists return true otherwise false

//                      object Exercises 

// Find the person who has many skills in the users object.
// const users = {
//     Alex: {
//       email: '  @alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
// }

// var arr_users = Object.entries(users)
// console.log(arr_users);
// var many_skills = []
// for (var i=0;i<arr_users.length;i++){
//     if (arr_users[i][1].skills.length>1){
//         many_skills.push(arr_users[i][0])
//     }
// }
// console.log(many_skills);

//      Callback

// function sum(a){
//     return a;
// }

// function result(sum,a){
//     return sum(a);
// }
// console.log(result(sum,2));

// Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

// var a = ()=>{
//     var b = () =>{
//         console.log('second function');
//     }
// }
// a();

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n ** 2
// }
//   // function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
// console.log(cube(callback, 3))


//      setInterval

// function callback(){
//     console.log('Hello');
// }
// setInterval(callback,1000)

// Setting a time using a setTimeout

// function callback(){
//     console.log('hello');
// }
// setTimeout(callback,3000)

//      forEach
// var sum = 0
// var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(elements){
//     sum+=elements;
// })
// console.log(sum);

// var countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((elements)=>console.log(elements.toUpperCase()))

//      map

// var numbers = [1, 2, 3, 4, 5]
// var num = numbers.map((n)=>n*n)
// console.log(num);

// //   filter  
// var countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// var co = countries.filter((n)=>n.endsWith('land'))
// console.log(co); 

// var scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]

// var b = scores.filter((a)=>a.score>80)
// console.log(b);

// function a(a){
//     return a.score>80;
// }
// var b = scores.filter(a)
// console.log(b);


//      reduce
// var numbers = [1, 2, 3, 4, 5]
// var sum = numbers.reduce(add);
// function add(total, num) {
//     console.log('total and num---------->', total, num);
//     return total + num
// }

//       every
// var names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// var n = names.every((b)=>typeof(b==='string'));
// console.log(n);     

// var result = names.every(num)
// function num(a){
//     console.log(a);
//     return typeof(a) ==='string';
// }
// console.log(result);

//      find
// var ages = [24, 22, 25, 32, 35, 18]
// var a = ages.find((n)=>n<20)
// // console.log(a);


// var d = ages.find(b)
// function b(a){
//     // console.log(a);
//     console.log(a<20);
// }
// console.log(d);



// var users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//     console.log(a,b);
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
// })
// console.log(users)


//      SET
// const companies = new Set()
// console.log(companies)

// var languages = ['English','Finnish','English','French','Spanish','English','French']
// var s = new Set(languages)
// console.log(s);

// var languages = ['English','Finnish','English','French','Spanish','English','French']
// var s = new Set(languages)
// for(var language of s){
//     console.log(language);
// }

//      add element
// console.log(s.add('hey'));
//delete element
// console.log(s.delete('English'));
// console.log(s.size);
//clear
// var a = s.clear();
// console.log(a);

//      map
// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)

// Adding values to the Map
// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// var a = '   divyesh    '
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());
// console.log(a.padEnd());
// console.log(a.padStart());

// var a = [1,32,8,4,3,2,13]
// var b = a.filter((a)=> a>10)
// console.log(b);

// var a = [1,32,8,4,3,2,13]
// var b = a.findIndex((a)=> a>10)
// console.log(b);

// var a = 'divyesh'
// var nc = Array.from(a)
// console.log(nc);

// var a = [1,32,8,4,3,2,13]
// var b = a.values();
// for(let x of b){
//     console.log(x);
// }


// Destructuring Array
// const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
// const [frontEnd, backEnd] = fullStack

// console.log(frontEnd)
// console.log(backEnd)

// var countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
// for(var[country,city] of countries){
//     console.log(country,city);
// }


// Destructuring Object

// var rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width, height, area, perimeter } = rectangle

// console.log(width, height, area, perimeter)

// var rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width:w, height:h, area:a, perimeter } = rectangle

// console.log(w, h, a, perimeter)

// var person = {firstName: 'Asabeneh',lastName: 'Yetayeh',age: 250,country: 'Finland',job: 'Instructor and Developer',skills: ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB','Python','D3.js'],languages: ['Amharic', 'English', 'Suomi(Finnish)']}

// var info = per =>{
//     var fname = per.firstName;
//     var lname = per.lastName;
//     var age = per.age;
//     var skills = per.skills;
//     return `${fname} ${lname} ${age} ${skills}`
// }
// console.log(info(person));

// Creating a pattern with RegExp Constructor
// without flag
// var pattern = 'love birds'
// var regEx = new RegExp(pattern)
// console.log(regEx);

// with flag
// var pattern = 'love'
// var flag = 'gi'
// var regEx = new RegExp(pattern, flag)
// console.log(regEx);

// var regEx = new RegExp('love','gi')
// console.log(regEx);


// Creating a pattern without RegExp Constructor
// var regEx= /love/gi
// console.log(regEx);

// Testing for a match
// var str = 'I love JavaScript love'
// var pa = /love/
// console.log(pa.test(str));

// Testing for a match
// var str = 'I love JavaScript love'
// var pa = /love/g
// console.log(str.match(pa));

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

// var str = 'I love JavaScript love love'
// var pa = /love/gi
// console.log(str.match(pa));
// console.log(str.search(pa));



// Replacing a substring

// var txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python/gi, 'JavaScript')
// console.log(matchReplaced)

// var txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// console.log(txt.replace(/%/g,''));

// Let's use square bracket to include lower and upper case
// var txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana Banana a day keeps the doctor far far away. '
// var pa = /[Aa]pple|[Bb]anana/g;
// console.log(txt.match(pa));  

// var txt = 'This regular expression example was made in January 12,  2020.'
// var pa = /\d/g
// console.log(txt.match(pa));

// var txt = 'This regular expression example was made in January 12,  2020.'
// var pa = /\d+/g
// console.log(txt.match(pa));

// var txt = 'Apple and banana are fruits'
// var pa = /[a]./g
// console.log(txt.match(pa));


// var txt = 'I am not sure if there is a convention how to write the word e-mail.\ Some people write it email others may write it as Email or E-mail.'
// var pa = /[Ee]-?mail/g
// console.log(txt.match(pa));

// var txt = 'This regular expression example was made in December 6,  2019.'
// var pa = /\b\w{4}\b/g 
// console.log(txt.match(pa));  

// exactly four character  words without numbers
// var txt = 'This regular expression example was made in December 6,  2019.'
// var pa = /\b[a-zA-Z]{4}\b/g
// console.log(txt.match(pa));

// a number and exactly four digits
// var txt = 'This regular expression example was made in December 6,  2019.'
// var pa = /\d{4}/g
// var pa = /\b[0-9]{4}\b/g
// var pa = /\d{1,4}/g
// console.log(txt.match(pa));

// Cart ^
// var txt = 'This regular expression example was made in December 6,  2019.'
// var pa = /^This/g
// console.log(txt.match(pa));

// var txt = 'This regular expression example was made in December 6,  2019.'
// var pa = /^[A-za-z,. ]+/g
// console.log(txt.match(pa));

// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// var a = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// var pa = /\d{1,5}/g
// console.log(a.match(pa));

// var a = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction,Extract these numbers and find the distance between the two furthest particles.'

// var points = []
// pa = /-?[0-9]/g
// var c = a.match(pa);
// c.forEach((a)=>points.push(a))
// points.sort()
// console.log(points);


// var a = '1firstname' // True
// pa = /.*[a-z]?_.*/g
// if(a.match(/[^0-9][a-z]_?/g)){
//     console.log('this variable name is True');
// }else{
//     console.log('this variable name is False');
// }
// console.log(a.match(pa));
// is_valid_variable('first-name') // False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname') // True

// console.log('30 Days of JavaScript')
// console.log('%d %s of JavaScript', 30,2, 'Days')
// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ) // log output green red and yellow text


//      WARNING MESSAGE
// console.warn('This is a warning')
// console.warn(
//   'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
// )
// console.warn('Warning is different from error')

//          ERROR MESSAGE
// console.error('This is an error message')
// console.error('We all make mistakes')

// console.table() show output as a table.
// var names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names)

// var user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)

//   var countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//   ]
//   console.table(countries)

// var users = [
//     {
//       name: 'Asabeneh',
//       title: 'Programmer',
//       country: 'Finland',
//       city: 'Helsinki',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
// ]
// console.table(users)



//  TRACK TIME 
// var countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
  
// console.time('Regular for loop')
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i][0], countries[i][1])
// }
// console.timeEnd('Regular for loop')
  
// console.time('for of loop')
// for (const [name, city] of countries) {
//     console.log(name, city)
// }
// console.timeEnd('for of loop')

// console.time('forEach loop')
// countries.forEach(([name, city]) => {
//     console.log(name, city)
// })
// console.timeEnd('forEach loop')


// console.info('30 Days Of JavaScript challenge is trending on Github')
// console.log('30 Days Of JavaScript challenge is trending on Github')
// console.info('30 Days Of fullStack challenge might be released')
// console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert(4 > 3, '4 is greater than 3') // no result
// console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// for (let i = 0; i <= 10; i += 1) {
//   let errorMessage = `${i} is not even`
//   console.log('the # is ' + i)
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
// }




// var names = ['Asabeneh', 'Brook', 'David', 'John']
// var countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]
// var user = {
//   name: 'Asabeneh',
//   title: 'Programmer',
//   country: 'Finland',
//   city: 'Helsinki',
//   age: 250
// }
// var users = [
//   {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   },
//   {
//     name: 'Eyob',
//     title: 'Teacher',
//     country: 'Sweden',
//     city: 'London',
//     age: 25
//   },
//   {
//     name: 'Asab',
//     title: 'Instructor',
//     country: 'Norway',
//     city: 'Oslo',
//     age: 22
//   },
//   {
//     name: 'Matias',
//     title: 'Developer',
//     country: 'Denmark',
//     city: 'Copenhagen',
//     age: 28
//   }
// ]

// console.group('Names')
// console.log(names)
// console.groupEnd()

// console.group('Countries')
// console.log(countries)
// console.groupEnd()

// console.group('Users')
// console.log(user)
// console.log(users)
// console.groupEnd()

// console.count() FUNCTION KETLIVAR CALL THAY TE CALCULATE KARE.
// const func = () => {
//     console.count('Function has been called')
//   }
//   func()
//   func()
//   func()


// Display the countries array as a table
// var countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// console.group("COUNTRIES")
// console.table(countries);
// console.groupEnd()


// 10 > 2 * 10 use console.assert()
// console.assert(10 > 2 * 10)

// Write a warning message using console.warn()
// console.warn('this content is harmful this pc')

// Write an error message using console.error()
// console.error('this is not valid')


// Check the speed difference among the following loops: while, for, for of, forEach

// a = [1,2,3,4,5,6]
// console.group("for loop")
// console.time('star foe loop')
// for(var i=0;i<a.length;i++){
//     console.log(i);
// }
// console.timeEnd('star foe loop')
// console.groupEnd("for loop")


// a = [1,2,3,4,5,6]
// console.group("for of")
// console.time('star foe loop')
// for(var i of a){
//     console.log(i);
// }
// console.timeEnd('star foe loop')
// console.groupEnd("for of")

//           Error Handling


// try{
//     console.log("inside of try.");
//     var a = Numberw('hello')
//     // blabla();
// }catch(error){
//     if(error instanceof TypeError){
//         console.log('inside type error');
//     }
//     else if(error instanceof ReferenceError){
//         console.log('inside of ReferenceError');
//     }
//     else{
//         console.log('unknown error');
//     }
//     // console.log('inside if catch.');
//     console.log(error);
// }


//        CLASS   &   OBJECT

// how to define class
// class Person{
//     //code   
// }
// var a = new Person();
// console.log(a);

//      Class Constructor

// class Person{
//     constructor(fname,lname){
//         // console.log(this);
//         this.fname = fname;
//         this.lname = lname;
//     }
// }
// var a = new Person('divyesh','dabhi');
// var b = new Person('kenil', 'raval')
// var c = new Person('Abraham', 'Yetayeh')
// console.log(a,b,c);

// class Person{
//     constructor(fname,lname,age,roll_no){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//     }
// }
// var a = new Person('divyesh','dabhi',22,21)
// console.log(a);

//          Default values with constructor

// class Person{
//     constructor(fname='tom',lname='karan',age=20,roll_no=1){
//         this.fname = fname
//         this.lname = lname
//         this.age = age
//         this.roll_no = roll_no
//     }
// }
// var a = new Person()
// var ab = new Person('divyesh','dabhi',22,21)
// console.log(a);
// console.log(ab);



//      Class methods

// class Person{
//     constructor(fname,lname,age,roll_no){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//     }
//     getfullname() {
//         var fullname = this.fname + ' ' + this.lname;
//         return fullname; 
//     }
// }
// var a = new Person('divyesh','dabhi',22,21)
// console.log(a.getfullname());

// class Person{
//     constructor(fname,lname,age,roll_no,city){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//         this.city = city;
//         this.score = 0;
//         this.skills = []
//     }
// }
// var a = new Person('divyesh','dabhi',22,21,'Surat')
// console.log(a.score);
// console.log(a.skills);


//      GETTER FUNCTION()

// class Person{
//     constructor(fname,lname,age,roll_no,city){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//         this.city = city;
//         this.score = 0;
//         this.skills = []
//     }
//     get getfname(){
//         return this.fname
//     }
//     get getskills(){
//         return this.skills;
//     }
// }
// var a = new Person('divyesh','dabhi',22,21,'Surat')
// console.log(a.getfname);
// console.log(a.getskills);


//      SETTER  
// class Person{
//     constructor(fname,lname,age,roll_no,city){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//         this.city = city;
//         this.score = 0;
//         this.skills = []
//     }
//     set setscore(score){
//         this.score+=score;
//     }
//     set setskills(skill){
//         this.skills.push(skill)
//     }
// }
// var a = new Person('divyesh','dabhi',22,21,'Surat')
// a.setscore = 99;
// a.setskills = 'python';
// a.setskills = 'block-chain';
// console.log(a.score);
// console.log(a.skills);



// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         this.score += score
//     }
//     set setSkill(skill) {
//         this.skills.push(skill)
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
//       let formattedSkills = skills ? `He knows ${skills}` : ''
  
//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }
  
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// console.log(person1.getScore)
// console.log(person1.getSkills)
// console.log(person1.getPersonInfo())



//          Static method
// class Person{
//     constructor(fname='divyvesh',lname='dabhi',age=22,roll_no=21,city='Surat'){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//         this.city = city;
//         this.score = 0;
//         this.skills = []
//     }
//     static favoriteSkill(){
//         skill = ['python','block-chain','javascript']
//         var index = Math.floor(Math.random()* skill.length)
//         return index[index]; 
//     }
// }
// // var a = new Person('divyesh','dabhi',22,21,'Surat')
// // console.log(a.score);
// console.log(Person.favoriteSkill());


//          Inheritance

// class student extends Person{
//     constructor(){
//         return this.age 
//     }
// }

// var b = new Person();
// console.log(b);

//      Overriding methods

// class Person{
//     constructor(fname,lname,age,roll_no){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.roll_no = roll_no;
//     }
//     getfullname() {
//         var fullname = this.fname + ' ' + this.lname;
//         return fullname; 
//     }
// }

// class Student extends Person{
//     constructor(fname,lname,age,roll_no,city,gender){
//         super(fname,lname,age,roll_no);
//         this.city = city;
//         this.gender = gender;
//     }
// }
// var a = new Student('divyesh','dabhi',22,21,'surat','Male')
// console.log(a);



//          Exercises

// Create an Animal class. The class will have name, age, color, legs properties and create different methods

// class Animal{
//     constructor(name,age,color='white',legs){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.legs = legs;
//     }
// }
// var a = new Animal('Hourse','50','White',4);
// console.log(a.legs);


// Create a Dog and Cat child class from the Animal Class.

// class Dog extends Animal{
//     constructor(name,age,color,legs) {
//         super(name,age,color,legs)
//     }
// }
// var a = new Dog('d')
// console.log(a.color);

// Override the method you create in Animal class

// class over extends Animal{
//     constructor(name,age,color='white',legs,skills){
//         super(name,age,color,legs)
//         this.skills = skills;
//     }
// }
// var a = new over()
// console.log(a);

// class ages{
//     count(age){
//         return `count : ${age.length}`;
//     }
//     sum(age){
//         var sum = 0;
//         for(var i of age){
//             sum+=i;
//         }
//         return `sum : ${sum}`;
//     }
//     min(age){
//         var m = age.sort()
//         return `Min number : ${m[0]}`;
//     }
//     max(age){
//         var m = age.sort()
//         var max = m.length-1;
//         return `Max number : ${m[max]}`;
//     }
// }
// var age = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// var a = new ages();
// console.log(a.count(age));
// console.log(a.sum(age));
// console.log(a.min(age));
// console.log(a.max(age));

//          JSON

// Converting JSON to JavaScript Object
// var a =`{
//     "users":[
//         {
//             "firstName":"Asabeneh",
//             "lastName":"Yetayeh",
//             "age":250,
//             "email":"asab@asb.com"
//         },
//         {
//             "firstName":"Alex",
//             "lastName":"James",
//             "age":25,
//             "email":"alex@alex.com"
//         },
//         {
//             "firstName":"Lidiya",
//             "lastName":"Tekle",
//             "age":28,
//             "email":"lidiya@lidiya.com"
//         }
//     ]
// }`

// console.log(typeof(a));
// var b = JSON.parse(a)
// console.log(typeof(b));



// const usersText = `{
//     "users":[
//         {
//             "firstName":"Asabeneh",
//             "lastName":"Yetayeh",
//             "age":250,
//             "email":"asab@asb.com"
//         },
//         {
//             "firstName":"Alex",
//             "lastName":"James",
//             "age":25,
//             "email":"alex@alex.com"
//         },
//         {
//         "firstName":"Lidiya",
//         "lastName":"Tekle",
//         "age":28,
//         "email":"lidiya@lidiya.com"
//         }
//     ]
// }`
// console.log(typeof(usersText))

// const usersObj = JSON.parse(usersText)
// console.log(typeof(usersObj))


// Using a reviver function with JSON.parse()

// const usersText = `{
//     "users":[
//         {
//             "firstName":"Asabeneh",
//             "lastName":"Yetayeh",
//             "age":250,
//             "email":"asab@asb.com"
//         },
//         {
//             "firstName":"Alex",
//             "lastName":"James",
//             "age":25,
//             "email":"alex@alex.com"
//         },
//         {
//             "firstName":"Lidiya",
//             "lastName":"Tekle",
//             "age":28,
//             "email":"lidiya@lidiya.com"
//         }
//     ]
// }`

// var a = JSON.parse(usersText,(key,value)=>{
//     var newvalue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value;
//     return newvalue;
// })

// console.log(a);

//              Converting Object to JSON use Stringfy


// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: [
//             'HTML',
//             'CSS',
//             'JavaScript',
//             'Redux',
//             'MongoDB',
//             'Express',
//             'React',
//             'Node'
//         ],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: [
//             'HTML',
//             'CSS',
//             'JavaScript',
//             'MongoDB',
//             'Express',
//             'React',
//             'Node'
//         ],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// var a = JSON.stringify(users,undefined,1)
// console.log(a);



// Using a Filter Array with JSON.stringify

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
//   }
  
// const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age','points'],4)
// console.log(txt)

// Change skills array to JSON using JSON.stringify()

// var skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// var change = JSON.stringify(skills)
// console.log(typeof(change));


// Stringify the age variable
// var age = 250;
// console.log(typeof(age));
// var a = JSON.stringify(age)
// console.log(typeof(a));

// Stringify the isMarried variable

// var isMarried = true;
// console.log(typeof(isMarried));
// var a = JSON.stringify(isMarried)
// console.log(typeof(a));

// Stringify the student object
// var student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// console.log(student);
// var a = JSON.stringify(student);
// console.log((a));

// Stringify the students object with only firstName, lastName and skills properties

// var student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }

// var a = JSON.stringify(student,['firstName','lastName','skills'])
// console.log(a);

// Parse the txt JSON to object.

// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Ooo": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }`
// console.log(typeof(txt));
// var a = JSON.parse(txt)
// console.log(typeof(a));


// Find the user who has many skills from the variable stored in txt.

// var many_skills = []
// var n = Object.entries(a)
// for(var i=0;i<n.length;i++){
//     if(n[i][1].skills.length>1){
//         many_skills.push(n[i][0])
//     }
// }

// console.log(many_skills);


// CALLBACK FUNCTION

// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
// }
// // doSomething()

// var callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
// }
// doSomething(callback)


// var abc = () => {
//     console.log('hello');
// }

// function ca(a,sde){
//     console.log('helloo,hjgfb');
//     // sde()
// }
// ca(45,abc)


// Promise

// function prom(complete){
//     return new Promise(function(resolve,reject){
//         if(complete){
//             resolve("i am successfully")
//         }
//         else{
//             reject("i am faild")
//         }
//     })
// }

// var  ful = (result) =>{
//     console.log(result);
// }
// var  reg = (error) =>{
//     console.log(error);
// }

// prom(false).then(ful).catch(reg)


// Fetch API


// var url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
// .then(response => response.text()) // accessing the API data as JSON
// .then(data => {
// // getting the data
// document.write(data)
// })
// .catch(error => console.error(error)) // handling error if something wrong happens

// var square = async function (n) {
//     return n * n
// }   

// console.log(square(3))

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// var url = 'https://restcountries.com/v2/all';
// fetch(url)
// .then(response => response.json())
// .then(data=>{
//     for(var i=0;i<data.length;i++){
//         document.write(`country_name : ${data[i].name},capital : ${data[i].capital},language : ${data[i].languages},populations : ${data[i].population},area : ${data[i].area}` )
//     }
// })



//      Closure

// function outerfunction(){
//     var count = 0;
//     function innerfunction(){
//         count++;
//         return count;
//     }
//     return innerfunction
// }

// var a = outerfunction()
// console.log(a());
// console.log(a());
// console.log(a());    

// Create a closure which has three inner functions

// function outerfunction(){
//     count = 0;
//     function plusone(){
//         count++;
//         return count;
//     }
//     function minusone(){
//         count--;
//         return count;
//     }
//     function multiply(){
//         ne = 2*count;
//         return ne;
//     }
//     return{
//         'plusone':plusone(),
//         'minusone':minusone(),
//         'multiply':multiply()
//     }
// }

// var a = outerfunction()
// console.log(a.plusone);
// console.log(a.minusone);
// console.log(a.multiply);


