// alert("hello world");

console.log("Hello world");
console.log("code is running...");
console.log("code is running...");

 //+++++++++ example of var & let/const ++++++++// 
var a = 2;
var b = 5;
var c = "Abhi";
console.log(a+b+c);
console.log(typeof a, typeof b, typeof c);
{
    let a = 66;               
    console.log(a);
}
console.log(a);

//++++++++ important points to be noted as data types ++++++
let x = 1;
let y = "Abhinav";
let z = 4.4;
let p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);  

let o ={
    "name" : "Abhinav",
    "Job code" : 56000
}
console.log(o);

o.salary="100 cr";
console.log(o);
o.salary="500cr";
console.log(o);

//+++++++++++++++ If & Else +++++++++++++++++++//
let age = 45;
if (age>18) {
    "you can drive"
} else {
    "you cannot drive"
}

let d = 1;
console.log(d);
console.log(d+1);
console.log(d+2);
console.log(d+3);
console.log(d+4);

//++++++++++++++++ Loop +++++++++++++//

// for (let i = 0; i < 100; i++) {
//     console.log(a+i);    
// }

let obj = {
    name:"Abhinav",
    role:"programmer",
    company:"Devkraft"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
} 

// let i = 0;
// while (i<6) {
//         console.log(i);
//         i++;
// }

let i = 10;
do {
    console.log(i);
            i++;
} while (i<6);

function nice(name) {
    console.log("Hey "+ name +" you are good");;
    console.log("Hey "+name+" you are nice");;
    console.log("Hey "+name+" your tshirt is nice");;
    console.log("Hey "+name+" you are the best");;
}
nice("Abhinav")
nice("Sharma")

function sum(a,b) {
    return a+b
}
result1=sum(3,5);
result2=sum(4,2);
result3=sum(7,9);
console.log("the sum of a + b is ", result1);
console.log("the sum of a + b is ", result2);
console.log("the sum of a + b is ", result3);

const funx = (x)=>{
    console.log("I am a arrow function ", x);
}
funx(34);
funx(25);
funx(43);

//+++++++++++++++ string  +++++++++++++//

console.log("this is a string sample");
let t ="Abhinav";
console.log(t[0]);
console.log(t[1]);
console.log(t[2]);
console.log(t[3]);
console.log(t[4]);
console.log(t[5]);
console.log(t[6]);
console.log(t[7]);

let ab ="Abhinav";
let  frind = "Rohan";
console.log(`${ab} is a classmate of ${frind}` );
console.log(ab.toUpperCase());
console.log(ab.toLowerCase());