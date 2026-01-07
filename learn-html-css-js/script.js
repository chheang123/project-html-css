console.log("hello js");
console.log(
  "HELLO EVERONE MY NAME IS (..THON KEO CHHEANG..) I'M 19 YERO AND I LEARN AT KOOMPI...."
);
console.log("I LIKE LEARN CODE AND I LIKE EAT KOKAKOLA COFFE AND MILK....");

// = += -= *= /= ++ -----------

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
var l = 20;

console.log(k);
console.log(l);

console.log(k + l);
console.log(60 * k * l);

var a = 50;
var b = 10;
var c = 50;

console.log(a + b + c);

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

let text1 = "keo";
let text2 = "chheang";
text1 += text2;

console.log(text1);

//Hoisting--
//undefined vs ReferenceError---

var hoist = "The variable has been hoisted";
console.log(hoist); //✅

console.log(hoist);
var hoist = "The variable has been hoisted"; // ❌
//
str = "Hoisting";
console.log(str);
var str;

//JavaScript Variables = អថេររបស់​ js-----------------
var b = 10;
console.log(2 ** b); // ចឹងមានន័យថា 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 = 1024

var c = 5;
console.log(2 ** 5); //  2 x 2 x 2 x 2 x 2 = 32

var da = 10;
va = 20;
ta = 40;

console.log(da + va + ta);

var ya = 10;

console.log(typeof ya !== "undefined"); //​ true
console.log(typeof ea !== "undefined"); // false

// javascript scopes----------
/*
const age = 19;

function go() {
  const keo = "js scopes";
  console.log(keo);
}
go();

console.log(age);
*/
//
function to() {
  const hair = "blainde";
  console.log(hair);
}
to();

//
const me = 20;
function tv() {
  const me = 25;
  const ke = "koka";
  console.log(me);
  console.log(ke);
}
console.log(me);
tv();
//
function isCool(name) {
  let cool;
  if (name === "wes") {
    cool = true;
  }
  console.log(cool);
  return cool;
}

isCool("wes");

// object data type-------------
var nums = [1, 5, 20];

var langs = ["Python", "javaScript", "c++", "c", "java"];
langs.sort();
console.log(langs);

//= a - b =1,5,20,100/ =b - a=100,20,5,1----------
var nums = [100, 5, 20, 1];
nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);

function sum(a, b) {
  console.log(a + b);
}
sum(10, 30);
sum(20, -5);
sum(10, 20.5);
sum(0, 0);

// URL------------
var url = {
  protocol: "https",
  domain: "https://www.codeguage.com/v1/courses/js/data-types",
  path: "/",
};
console.log(url.protocol);
console.log(url.domain);
console.log(url.path);

//-------------------
var url = {
  protocol: "https",
  domain: "roadmap.sh",
  path: "/javascript",

  getURL: function () {
    return url.protocol + "://" + this.domain + this.path;
  },
};
console.log(url.getURL());

const foo = 42;
const resuld = foo + "1";
console.log(resuld);

// String-----------------
const s1 = "2 +2";
const s2 = new String("4 +2");
console.log(eval(s1));
console.log(eval(s2.valueOf()));

//-------
const message = "This is\n my cat";

console.log(String.fromCharCode(65, 66, 67));

// FromCodepoint =img--------------------------

console.log(String.fromCodePoint(128512, 128525));

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

console.log(String.fromCodePoint(128512, 128640));

// Constructor--------------

class personn {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new personn("Otto");
otto.introduce();

//Srting.prototype.at()-----------

function returnLast(str) {
  return str.at(-1);
}
let invoiceRef = "my-invoice01";
console.log(returnLast(invoiceRef));

invoiceRef = "my-invoiceo02";
console.log(returnLast(invoiceRef));

//---number.prototype.tosrting()
function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColor(251));
console.log(hexColor("17"));

// ===  ធៀបតម្លៃ----------
let num1 = 255;
console.log(num1 === num1);

const q = "19";
console.log(19 === 11);

//Bigint-------
let p = BigInt("999999999999999");
console.log(p);

const bigIntNumber = BigInt("2734178238257164");
console.log(bigIntNumber + BigInt(5));

// boolean =true and false------------

console.log(10 > 3);
console.log(5 < 1);
console.log(5 === 5);

//object-----------
let usere = {
  name: "chheang",
  age: 20,
  "like banana": true,
};
console.log(usere);

const myObj = {};
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.myString);

//--
let myCar = {};
let propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Bmw";

console.log(myCar);

// object.keys()-----------------

const object = {
  a: "some srting",
  b: "53",
  c: "apple",
  d: "banana",
  e: "i like my dog",
};
console.log(Object.keys(object));
console.log(Object.values(object));

// Basic array

const arr = ["a", "b", "c", "d", "e", "f"];

console.log(Object.keys(arr));
console.log(Object.values(arr));

const Manager = {
  name: "Karina",
  age: 21,
  job: "co",
};

const Intern = {
  name: "bobo",
  age: 22,
  job: "Teacher",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi();
Intern.sayHi();

//Function.prototype.call()-------------
function greet() {
  console.log(this.animal, "typically sleep between ", this.sleepDuration);
}
/*const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};
greet.call(obj);
*/
//-----
globalThis.globProp = "foo";
function display() {
  console.log(`globProp value is ${this.globProp}`);
}
display.call();

globalThis.globProp = "i go to school";
function display() {
  console.log(`globProp value is ${this.globProp}`);
}
display.call();

//Functions------------
function sum(a, b) {
  return a + b;
  console.log("Never will run");
}
const value = sum(10, 6);
console.log(value);

function greet(name) {
  console.log("Hello" + name);
}

console.log("bob");

//typeof operator----------------
console.log(typeof 42);
console.log(typeof "chheang");
console.log("Input is 7.8.9 and after conversion", Number("7.8.9"));
console.log(
  "Input is 6.6.6 and after conversion to float is",
  parseInt("6.6.6")
);
console.log(
  "Input is 6.6.6 and after conversion to float is",
  parseFloat("6.6.6")
);

console.log(typeof true);
console.log(typeof undefined);

const someData = 100;
console.log(someData + "play");

//--------------

const number = 0;
console.log(number);

console.log("Hello");
console.log(0);
console.log(false);

val = 1;
if (val) {
  console.log("yes, val exists");
}

//-implict Type Casting​= គឺជាពេលដែល JavaScript បំប្លែងប្រភេទទិន្នន័យ (ដូចជា Number, String, Boolean) ដោយស្វ័យប្រវត្តិ -----
let strNum = "5";
let num = 2;

let result1 = strNum - num; // '5' - 2
console.log(result1);       // ទិន្នផល: 3 (string "5" ត្រូវបានបំប្លែងទៅជា number 5)
console.log(typeof result1); // ទិន្នផល: "number"

let result2 = strNum * num; // '5' * 2
console.log(result2);       // ទិន្នផល: 10
console.log(typeof result2); // ទិន្នផល: "number"

let result3 = strNum / num; // '5' / 2
console.log(result3);       // ទិន្នផល: 2.5
console.log(typeof result3); // ទិន្នផល: "number"


console.log("The cases where the method will return true")
console.log("The given input is rw",Boolean('rw'))
console.log("The given input is -3.6",Boolean(-3.6))
console.log("The given input is new Date()",Boolean(new Date()))
console.log("The cases where the method will return false")
console.log("The given input is number 0",Boolean(0) )
console.log("The given input is null value",Boolean(null) )
console.log("The given input is undefined",Boolean(undefined))
console.log("The given input is empty string",Boolean(''))

//Keyed collections---------
//Map object----------------
//weakMap-------------------
const myArray =[1,2,3,4,5,6];
const mySet = new Set(myArray);

mySet.add({channeLName: 'javaScript Mastery'});
console.log(mySet);

//---
const myMap =new Map();
myMap.set('name', 'sok');
myMap.set(1,'number one');
myMap.set({id: 1}, 'object key');

console.log(myMap.get('name'));
console.log(myMap.size);//=3 map3គូរ 

//----
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 ={};
const o2 = () => {};
const o3 = {};

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1,o2);
console.log(wm1.get(o1));

wm2.set(o2, undefined);
wm2.set(wm1, wm2);
console.log(wm2.get(o2));

wm1.get(o2);
console.log(wm1.get(o2));

wm1.has(o2);
wm2.has(o2);
wm2.has(o3);
console.log(wm2.has(o2));
console.log(wm2.has(o3));

wm3.set(o1, 37);
wm3.get(o1);
console.log(wm3.get(o1));

wm1.has(o1);
wm1.delete(o1);
wm1.has(o1);
console.log(wm1.has(o1));


//----------------------------------------
let Thing;
{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this,{
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function (){
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
  console.log(typeof privateScope) // =object
}

console.log(typeof privateScope);//"undefined"បើលក្នុងBlock Scope { }= object

const thing = new Thing();
console.log(thing);

//Javascript sets----------------------------------------------------
let events = new Set();
let event1 = { type: "consert" , day: "Saturday"};
let event2 = { type: "book one" , day: "Wedaesday"};
let event3 = { type: "coffee", day: "Thursday"};
let event4 = { type: "meet you", day: "Monday"};
let event5 = { type: "nono", day:"Friday"};//let event5 = {...} គ្រាន់តែបង្កើត object មួយ ប៉ុន្តែវាមិនមានន័យថា object នោះត្រូវបានបន្ថែមទៅក្នុង Set ដោយស្វ័យប្រវត្តិនោះទេ។

events.add(event1);
events.add(event2);
events.add(event3);
events.add(event4);

console.log(events.size);// = 4
console.log(events.has(event4))// = true
console.log(events.has(event5))// =  false

for (let itme of events.values()){
  console.log(itme);// = type all
}

console.log(events.has(event2));

events.delete(event3);
for (let value of events){
  console.log(value)// delete event3 = type "coffee" , day: "Thursday"
}

//-------------------------------------------
let cities = new Set ();

let city1 = { name:"phnom penh"};
let city2 = { name:"korean"};
let city3 = { name:"london"};

cities.add(city1);
cities.add(city2);
cities.add(city3);

cities.forEach((city, cities)=>{
  console.log(city);//  city ជំនួស set /city and set បានដូចគ្នា
});



//Array and Set---------------------------------------
//Mothod1=វិធីសាស្ត្រទី១
 
let users =["chheang","neath","mini","sonala","chheang","chheang"];

function unique(users){
  return Array.from(new Set(users));
}
console.log(unique(users));

//Mothod2=វិធីសាស្ត្រទី២
let set = new Set (users);
let arrFromSet = [...set];

console.log(arrFromSet);

//Array vs Set តើមួយណាស្វែងរកធាតុលឿនជាង-------------
let arr1 = [], sets =new Set (); 
let user = ["john","jane","anne","john","anne","murray","mama","koko","popo"];

for (let i = 0; i < user.length; i++){
  arr1.push(user[i]);
  set.add(user[i]);
}

let results;

console.time ('Array');
results = arr1.indexOf("mama") !== -1;
console.timeEnd('Array');



console.time('Set');
results = sets.has("mama"); 
console.timeEnd('Set');

//--------------
let users1 =[{
  id: 1,
  name: 'jonh'
},
{
  id: 2,
  name: 'morata'
},
{
  id: 3,
  name: 'anne'
}

]
let userName = users1.map(function(user){
  console.log(user)
})

let userName1 =[];
users1.forEach(function(users1){
  userName1.push(users1.name);
});
console.log(userName1);

//-------------------------------------
const user2 = new Map();
user2.set('id',1 );
user2.set('name', 'john');

console.log(user2.get('id'));

let iterator =user2.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
// iterator យកទីន្នន័យម្ដងមួយៗពីdata(Map,Array,Set)
// enries()សម្រាប់យក[key, value]  =user1.entries()ចម្លើយ=>['id',1]=>['name','john];

let it = 5;

do {
  console.log(it);
  i++;
} while (it < 4);



// for loop------------

for (let i = 1; i<= 20; i++){
  console.log(i);
}

let coding =["chheang","chheng","mama","jojo","koma"];

for(let i =0; i < coding.length; i++){
  console.log(coding[i]);
}

//----------------------------------

let userIDs = new Map();

let user3 ={names:'john'}, user4 = {names: 'Murray'}, user5 ={names:'jane'};

userIDs.set(user3,3) .set(user4,4) .set(user5,5)

// Method 1
for (let [names, id] of userIDs){
  console.log(names);
  console.log(id)
}

// Method 2

userIDs.forEach((names, id) =>{
  console.log(names);
  console.log(id);
})

//-------------------------------------


const testjson = {
  card1:{
    name: "hello world",
    age:123412312,
    email: "example@gmai.com",
  },
  card2:{
    name: "hello world",
    age:123412312,
    email: "example@gmai.com",
  }
}
//convert object to json
const jsondata = JSON.stringify(testjson)

console.log(jsondata)

//convert json to object

console.log(JSON.parse(jsondata))
