// let a = "krishna";
// let b = "kharal";

// concatenate two string
// console.log("My name is "+a + " "+ b);

// operators
let num1 = 2;
let num2 = 4;

// arithmetic operator 
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);

// assigment operator : =, =- , =+, =/,**=,

// logical operator 
// console.log(num1 > num2 && num1 < num2) //if both condition is true then it will return true otherwise false
// console.log(num1 > num2 || num1 < num2) //if only one condition is true then it will return true otherwise false
// console.log(!true);

// object in js 
let student = {
    name:"krish",
    lname:"kharal",
    family:["fathername","mothername"],
    showdetails:function(){
        return `${student.name} ${student.lname}`;
    }
}

let {name,lname,showdetails,family} = student;
// console.log(showdetails())

//how to iterate arrary element
// family.map((items)=>{
//     console.log(items);
// })

// loop : for,while,do while
// for(let i=0; i <= family; i++){
//     console.log(family[i]);
// }

let i=0;
// while(i <= family.length){
//     console.log(family[i]);
//     i++;
// }

// do{
//  console.log(family[i]);
//  i++;
// }while(i <= family.length);

// for (let items in student){
//     console.log(student[items]);
// }

// const person = {fname:"John", lname:"Doe", age:25};

// for (let x in person) {
//     console.log(person[x]);
// }


// functions 
// function showUserDetails(name,lname,age){
//  if(age <= 10){
//     return `your age is less then or equal to 10`;
//  }else if(age >= 10 && age <= 50){
//     return `your age is greater then 10 and less then 50`;
//  }
// }


// let a = showUserDetails("krish","kharal",23);
// console.log(a);


// events : click,mouseHover,mouseout,mousedown,mouseup,keypress,keyup,keydown

// strings method:
let uname = "    krish";
// console.log(uname.toUpperCase());
// console.log(uname.toLowerCase());
// console.log(uname.charAt(0).toUpperCase());
// console.log(uname[0]);
// console.log(uname.concat(" kharal"));
// console.log(uname.length);
// console.log(uname.includes("h"));
// console.log(uname.indexOf("k"));
// console.log(uname.replace("krish","kharal"));
// console.log(uname.repeat(300));
// console.log(uname.search("s"));
// console.log(uname.slice(0,2));
// console.log(uname.split(''));
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(uname.match("ish"));
// console.log(uname.trim());
// console.log(uname.valueOf());
// console.log(uname.toString());

// let students = ["krish","ram","shyam","sita"];
// console.log(students);

// let {n1,...n2} = students;
// console.log(n1);
// console.log(n2[0]);
// console.log(students);

// array method 
// filter method 
// let filterdata = students.filter((items,index)=>{
//     return index !== 0;
// })

// console.log(filterdata);

// let reducerdata = students.reduce((callback,initialvalue)=>{
//     return callback + " "+ initialvalue;
// })

// console.log(reducerdata);

let arr1 = [4,7,4];
let arr2 = [4,5,6];
// console.log(arr1 + " "+ arr2);
// console.log(arr1.concat(arr2));
// arr1.push("3");
// arr1.pop("1");
// console.log(arr1.reverse());
// console.log(arr1.length);
// console.log(arr1.shift("hello"));
// console.log(arr1.unshift());

// let arr = arr1.concat(arr2);

// arr.map((items,index)=>{
//     console.log(items + index);
// })

// console.log(arr.filter(items=>{
//     return items.id != 2;
// }));

// let a = arr1.every((items)=>{
//     return items > 10;
// })

// if(a < 10){
//     console.log("you are baby");
// }else{
//     console.log("your age is greater than 10");
// }


// date method in js 
// let date = new Date(3,4,2080);
// console.log(date.getHours());
// console.log(date.getDay());
// console.log(date.getDate());

// we can also set date 
// date.setFullYear(2080);
// console.log(date.getFullYear());

// setInterval,settimeout in js 
// let intervalset = setInterval(()=>{
//   console.log("hello world");
// },1000)

// setTimeout(()=>{
//     clearInterval(intervalset);
// },5000);

// Math method 
// console.log(Math.abs(-3.5));
// console.log(Math.sin(30));
// console.log(Math.PI);
// console.log(Math.ceil(4.5));
// console.log(Math.floor(Math.random(3.4)*5));
// console.log(Math.pow(2,3));
