console.log("hello js");


// = += -= *= /= ++ --

let x = 10  ;
console.log(x)

// x = x + 50;
var t =20;
t *= 50;
t ++;
t ++;
t --;
t --;
console.log(t)



let txtOne ="Hello";
let txtTwo =" How are you"
txtOne += txtTwo;
console.log(txtOne)

// Function=មុខងារ------------------------------

function myFunction(){
    let x =20;
    let y =70;
    console.log(x + y);
}
myFunction();

function sum(x , y ){
    return x + y;
}
const result = sum(100,200);
console.log(result);


// Array=គឺជាប្រភេទទិន្នន័យដែលអាចផ្ទុកតម្លៃច្រើនក្នុងអថេរតែមួយ---------------------



const oldFood ="banana"
const food =["apple", "mango", "tomato", oldFood]
food[1] ="Coconut";

console.log(food)



// Condition Statement--------------------------------------------
// < >  <= >= == === != !== !

const condition = 40 < 50;

if (condition){
    console.log("This is true");
} else {
    console.log("This is false");
}

// ADN operator and OR operator && ||(ADN  ត្រូវការពិតទាំងពី​ OR  ត្រូវការពិតយ៉ាងហោចមួយ)-----------


const isFreeTime = false;
const hasManey = true;

if (isFreeTime  || hasManey ){
    console.log("Traveling");
} else {
    console.log("Stay Home");
}

// While loop = “ដំណើរការកូដ រាល់ពេល លក្ខខណ្ឌនៅតែពិត”----------------------------

let i = 10;
while (i > 0){
    console.log(i);
    i--;
}

let n = 0; 
 while (n <=5) {
    console.log(n);
    n++;
 }

 // For loop---------------------------------

 for (let i = 10; i>= 0; i--){
    console.log(i)
 }

 // Exercise loop-------------------------------

 const names =["sok", "bona", "mama", "koka", "chheang", "lila"];

 for (let i = 0; i < names.length; i++){
    console.log(names[i])
 }




 const students = [
    
    {
    
    name: "keochheang",
    age: 77,
    },
    {
    name: "tolita",
    age:88,
    },
    {
    name: "makarina",
    age:90,
    },
 ];
 
    
console.log(students)

const frames = [
    {
        name :"Banana",
        total:30 ,
    },
    {
        name :"Apple",
        total:40 ,
    },
    {
        name :"Tomato",
        total:20 ,
    },
]
console.log(frames)

// String Props and Methods--------------------------

let text = "Hello world";
console.log(text.length);// គឺវាធ្វេីឲ្យពាក្យHello worldនេះប្រែលទៅជាលេខនៅពេលដក់ឃ្លាក៏វារាប់ដែល

let txtT ="THON KEO CHHEANG";
console.log(txtT.toLowerCase())//កែអក្សរពីធំទៅតូច

let tet ="Thon keo chheang";
console.log(tet.toUpperCase())//កែប្រែលអក្សរពីតូចទៅធំទាំងអស់

let txt ="Ro Za";
console.log(txt.includes("R"))


// Array Props & Methods------------

const tho =["nana","maymay","mama"];

tho.unshift("chheang");     //unshift() → បន្ថែមធាតុទៅ ដើម array
tho.push("chheang");        //push()    បន្ថែមធាតុទៅ​ ខាងចុង array
tho.shift();                //shift()   ដក់ធាតុដែលនៅខាងដេីមចេញ array
tho.pop();                  //pop       ដក់ធាត់ដែលនៅខាងចុងចេញ  array

console.log(tho);


 
// ForEach--
// Array Methods-----------------------

const ch =["chheang","sokliza","lili"]//🔹 item = តម្លៃ🔹 index = លេខទីតាំង🔹 array = អារ៉េទាំងមូល


ch.forEach(function(item, index, array){
    console.log(item);
});
 
// Join Method--
// Array Methods-----------------

const phones =["iphone","oppo","koompi"];

const joinItem = phones.join(" and ");


console.log(joinItem);


// Reduce Method--
const chheang =[500, 200, 300, 200, 300];
// ac =0; cur =500 =>500;
//ac =500; cur =200 =>700;
//ac =700; cur =300, =>1000;
//ac =1000; cur =200, =>1200;
//ac =1200; cur =300, =>1500;

//acc តម្លៃដែលសន្សំបាន
//cur តម្លៃបច្ចុប្បន្ននៅក្នុងអារេ

const total = chheang.reduce(function(ac,cur){
    return ac+cur;// ពាក្យពេញ accumulator and curentValue
},0);
console.log(total);


// Reduce Method (more)------

const array =["chheang","koompi"];
let fullName ="  --";
array.forEach(function (i){
    fullName += i ;
});
console.log(fullName);


