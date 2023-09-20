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


// console.log("a");

// setTimeout(()=>{
//     console.log("b");
// },Math.abs(-10));

// console.log("c");

// callback function and callback hell in js 
// function showallrecord(showdetails){
//     let studentdata = ["krish","rupesh","ram","shyam","sita"];
//     console.log(showdetails(studentdata));
// }


// const showrecord = (data)=>{
//   data.map((items,id)=>{
//     return `your roll number is ${id} and your name is ${items}`;
//   })
// }


// showallrecord(showrecord);

// promises 
// function showdata() {
//     // promise is like and object it takes two parameter resolve and reject.
//     return new Promise((resolve, reject) => {
//         console.log("pending")
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve(`resolved`);
//             } else {
//                 reject(new Error("err"));
//             }
//         }, 3000);
//     });
// }

// console.log(showdata());

// let ,const ,var in js 
// let names = "krish"; //these is global variable we can access these value from everywhere
// function showname(){
//     // let names = "krish"; // these is local variable only can access from inside of this function
//     console.log(names);
// }

// showname();
// console.log(names);

// we can create multiple variable with same name by using var 
// var n1 = "hello";
// var n1 = "krish";
// console.log(n1);


// rest operator,spring operator 
// let data = [1,2,3,4];
 // console.log([45,...data]); output : [45,1,2,3,4]
// function showdata(num1,num2,num3,...items){
//    console.log(num1);
//    console.log(num2 + " "+ num3);
   // now items is the array
//    items.map((item,id)=>{
//     console.log(item);
//    })
// }

// showdata("hello",1,"world",4,5,6,7)

// ternary operator 
// console.log(true == false ? "condition true":"condition false"); 
// output: condition false

// sets in js 
// let d = new Set([1,2,3,4,5,2,2,3]);
// d.add(300,50,90);
// d.delete(1);
// d.clear();
// console.log(d.entries());
// let e = d.entries();

// for(let i = 0; i<=3; i++){
//     console.log(e.next().value);
// }


// json data 
let jsondata = '{ "employees" : [' +
'{ "firstName":"krish" , "lastName":"kharal" },' +
'{ "firstName":"janak" , "lastName":"khanal" },' +
'{ "firstName":"ram" , "lastName":"gaihre" } ]}';


// console.log(typeof(jsondata)); // string type
// convert string to object 
// let parsedata = JSON.parse(jsondata);
// console.log(typeof parsedata);  // object type
// let data = parsedata.employees; 
// data.map((items)=>{
//     console.log(`My name is ${items.firstName + " "+ items.lastName}`);
// })

// convert object to string 
// let s = {};
// console.log(typeof(s));  //object 
// let s1 = JSON.stringify(s); //string
// console.log(typeof s1);


// window object model 
// console.log(window.location.href);
// window.reload();
// window.open();
// window.close();
// window.resizeBy();
// window.resizeTo();
// window.prompt("hello how are you");
// window.confirm("are you sure you want to delete this");

// document object modal
// console.log(document);
// console.log(document.title);
// console.log(document.location.href);
// console.log(document.head);
// console.log(document.URL);

// how to create element in document
// let container1 = document.createElement("div");
// let container2 = document.createElement("div");
// container1.innerHTML = "<h2>hello world</h2>";
// container1.innerHTML = "<h3>hello world</h3>";
// h1.innerText = "hello world";
// h1.textContent = "hello krish";
// console.log(h1.innerText);
// console.log(container.innerHTML);
// container2.appendChild(container1);


// let ul = document.getElementsByTagName("ul");
// console.log(ul[0].parentElement);
// console.log(ul[0].parentNode);
// console.log(ul[0].previousElementSibling);
// console.log(ul[0].parentElement.nextElementSibling);
// console.log(ul[0].children);
// console.log(ul[0].childNodes);


// let div = document.createElement("div");
// let cont = document.querySelector('cont');

// div.innerHTML = "<h1>hello world</h1>";
// div.classList.add("container")
// div.id = "thisIsId";
// console.log(div.classList.contains("container")); //it will return true : the container class is in div
// console.log(div.classList.item);
// console.log(div.classList.length);
// console.log(div.classList.replace("container","helloworld"));
// console.log(div.classList.remove("container"));
// console.log(div.className); 
// console.log(div.innerHTML);

// select multiple list 
// let li = document.getElementsByTagName("li");

// for(let i=0; i<=li.length; i++){
//     li[i].innerHTML = `<h1>hello world ${i}</h1>`;
// }
// console.log(li);


// let a1 = document.getElementsByClassName("flex");
// document.onclick=()=>{
//     if(a1[0].classList.contains("bgcolor")){
//       a1[0].classList.remove("bgcolor")
//     }else{
//       a1[0].classList.add("bgcolor")
//     }
// }



