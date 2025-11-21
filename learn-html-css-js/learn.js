console.log("hello js");

// = += -= *= /= ++ --

let x = 10;
console.log(x);

// x = x + 50;
var t = 20;
t *= 50;
t++;
t++;
t--;
t--;
console.log(t);

let txtOne = "Hello";
let txtTwo = " How are you";
txtOne += txtTwo;
console.log(txtOne);

// Function=មុខងារ------------------------------

function myFunction() {
  let x = 20;
  let y = 70;
  console.log(x + y);
}
myFunction();

function sum(x, y) {
  return x + y;
}
const result = sum(100, 200);
console.log(result);

// Array=គឺជាប្រភេទទិន្នន័យដែលអាចផ្ទុកតម្លៃច្រើនក្នុងអថេរតែមួយ---------------------

const oldFood = "banana";
const food = ["apple", "mango", "tomato", oldFood];
food[1] = "Coconut";

console.log(food);

// Condition Statement--------------------------------------------
// < >  <= >= == === != !== !

const condition = 40 < 50;

if (condition) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// ADN operator and OR operator && ||(ADN  ត្រូវការពិតទាំងពី​ OR  ត្រូវការពិតយ៉ាងហោចមួយ)-----------

const isFreeTime = false;
const hasManey = true;

if (isFreeTime || hasManey) {
  console.log("Traveling");
} else {
  console.log("Stay Home");
}

// While loop = “ដំណើរការកូដ រាល់ពេល លក្ខខណ្ឌនៅតែពិត”----------------------------

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

let n = 0;
while (n <= 5) {
  console.log(n);
  n++;
}

// For loop---------------------------------

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Exercise loop-------------------------------

const names = ["sok", "bona", "mama", "koka", "chheang", "lila"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const students = [
  {
    name: "keochheang",
    age: 77,
  },
  {
    name: "tolita",
    age: 88,
  },
  {
    name: "makarina",
    age: 90,
  },
];

console.log(students);

const frames = [
  {
    name: "Banana",
    total: 30,
  },
  {
    name: "Apple",
    total: 40,
  },
  {
    name: "Tomato",
    total: 20,
  },
];
console.log(frames);

// String Props and Methods--------------------------

let text = "Hello world";
console.log(text.length); // គឺវាធ្វេីឲ្យពាក្យHello worldនេះប្រែលទៅជាលេខនៅពេលដក់ឃ្លាក៏វារាប់ដែល

let txtT = "THON KEO CHHEANG";
console.log(txtT.toLowerCase()); //កែអក្សរពីធំទៅតូច

let tet = "Thon keo chheang";
console.log(tet.toUpperCase()); //កែប្រែលអក្សរពីតូចទៅធំទាំងអស់

let txt = "Ro Za";
console.log(txt.includes("R"));

// Array Props & Methods------------

const tho = ["nana", "maymay", "mama"];

tho.unshift("chheang"); //unshift() → បន្ថែមធាតុទៅ ដើម array
tho.push("chheang"); //push()    បន្ថែមធាតុទៅ​ ខាងចុង array
tho.shift(); //shift()   ដក់ធាតុដែលនៅខាងដេីមចេញ array
tho.pop(); //pop       ដក់ធាត់ដែលនៅខាងចុងចេញ  array

console.log(tho);

// ForEach--
// Array Methods-----------------------

const ch = ["chheang", "sokliza", "lili"]; //🔹 item = តម្លៃ🔹 index = លេខទីតាំង🔹 array = អារ៉េទាំងមូល

ch.forEach(function (item, index, array) {
  console.log(item);
});

// Join Method--
// Array Methods-----------------

const phones = ["iphone", "oppo", "koompi"];

const joinItem = phones.join(" and ");

console.log(joinItem);

// Reduce Method--
const chheang = [500, 200, 300, 200, 300];
// ac =0; cur =500 =>500;
//ac =500; cur =200 =>700;
//ac =700; cur =300, =>1000;
//ac =1000; cur =200, =>1200;
//ac =1200; cur =300, =>1500;

//acc តម្លៃដែលសន្សំបាន
//cur តម្លៃបច្ចុប្បន្ននៅក្នុងអារេ

const total = chheang.reduce(function (ac, cur) {
  return ac + cur; // ពាក្យពេញ accumulator and curentValue
}, 0);
console.log(total);

// Reduce Method (more)------

const array = ["chheang", "koompi"];
let fullName = "My name is ";
array.forEach(function (i) {
  fullName += i;
});
console.log(fullName);

//---------------------------

const kc = ["thon", "keo", "chheang"];
// ac="" cr ="thon" => "thon"
// ac="thon" cr "keo" =>"thonkeo"
// ac="thonkeo" cr "chheang" => "thonkeochheang"

const namea = kc.reduce(function (ac, cur) {
  return ac + cur;
}, " -");

console.log(namea);

// Document Object------- គឺដូចជាផ្ទះមួយ ហេីយក្នុងផ្ទះនោះមានអ្វីផ្សេងៗជាច្រេីន។

const person = {
  name: "chheang",
  age: 20,
  city: "phnom penh",
};
console.log(person.age);

// Target Node Oject--------------------------------
/*
const name1 = document.getElementById("name1");
console.log(name1);

const elament = document.querySelector("button[type='button']");
console.log(elament);

const elamentt = document.querySelector("body > ul");
console.log(elamentt);

// Exercise
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

btn.onclick = function () {
  heading.classList.toggle("hide"); // hideមានន័យថាលាក់​ ឬ​ បិត
};
*/

//--
const CHHEANGG_RA = "yaya";
const CHHEANGG_YA = "haha";
const CHHEANGG_UA = "popo";

//JavaScript Variables---
var k = 10;
var l =20;

console.log(k);
console.log(l);

console.log(k + l);
console.log(60 * k *l);


var a = 50;
var b = 10;
var c = 50;

console.log(a+b+c)

var a = 1;
var b = 2;

{
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

//JavaScript String Operators------
let u = 10;
console.log(u);

let text1 ="keo";
let text2 ="chheang";
text1 += text2

console.log(text1);

//Hoisting--
//undefined vs ReferenceError---

var hoist ='The variable has been hoisted';
console.log(hoist);//✅

console.log(hoist)
var hoist ='The variable has been hoisted';// ❌ 
//
str ='Hoisting';
console.log(str);
var str;

//JavaScript Variables = អថេររបស់​ js-----------------
var b =10;
console.log(2 ** b);// ចឹងមានន័យថា 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 = 1024

var c =5;
console.log(2**5);//  2 x 2 x 2 x 2 x 2 = 32

var da =10;
    va =20;
    ta =40;

console.log(da + va + ta );



var ya =10;

console.log(typeof ya !== 'undefined'); //​ true 
console.log(typeof ea !== 'undefined'); // false 

// javascript scopes----------

const age =19;

function go (){
  const keo = 'js scopes';
  console.log(keo);
}
go();

console.log(age);

//
function to(){
  const hair = 'blainde';
  console.log(hair);
}
to()

//
const me  =20;
function tv(){
  const me = 25;
  const ke = 'koka';
  console.log(me);
  console.log(ke)
}
console.log(me);
tv()
//
function isCool(name){
  let cool;
  if(name ==='wes'){
    cool =true;
  }
  console.log(cool);
  return cool;
}

isCool('wes')

// object data type-------------
var nums =[1, 5 ,20];

var langs = ['Python', 'javaScript','c++','c','java'];
langs.sort();
console.log(langs);

//= a - b =1,5,20,100/ =b - a=100,20,5,1----------
var nums = [100, 5, 20, 1];
nums.sort(function(a, b) {
  return a - b;
});
console.log(nums);

function sum(a, b) {
   console.log(a + b);
}
sum(10,30);
sum(20,-5);
sum(10,20.5);
sum(0,0);

// URL------------
var url = {
   protocol: 'https',
   domain: 'https://www.codeguage.com/v1/courses/js/data-types',
   path: '/'
};
console.log(url.protocol);
console.log(url.domain);
console.log(url.path);


//-------------------
var url ={
  protocol: 'https',
  domain: 'roadmap.sh',
  path:'/javascript',

  getURL: function(){
    return url.protocol + '://' + this.domain + this.path;
  }
};
console.log(url.getURL())


const foo =42;
const resuld = foo + "1";
console.log(resuld);

// String-----------------
const s1 ="2 +2";
const s2 = new String("4 +2");
console.log(eval(s1))
console.log(eval(s2.valueOf()));

//-------
const message = 'This is\n my cat';


console.log(String.fromCharCode(65,66,67));

// FromCodepoint =img--------------------------

console.log(String.fromCodePoint(128512 ,128525));

console.log(String.fromCodePoint(9731,9733, 9842 ,0x2f804));

console.log(String.fromCodePoint(128512,128640));

// Constructor--------------


class personn {
  constructor(name){
    this.name = name;

  }
  introduce(){
    
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new personn("Otto");
otto.introduce();

//Srting.prototype.at()-----------

function returnLast(str){
  return str.at (-1);
}
let invoiceRef = "my-invoice01";
console.log(returnLast(invoiceRef));

invoiceRef ="my-invoiceo02";
console.log(returnLast(invoiceRef));