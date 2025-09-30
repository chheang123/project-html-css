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
 

 



