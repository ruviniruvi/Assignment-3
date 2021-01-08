//Question 1
const q1=document.getElementById("container");
console.log(q1);

//Question 2
const q2=document.querySelector("#container");
console.log(q2);

//Question 3
const q3=document.getElementsByClassName("#second");
console.log(q3);

//Question 4
const q4=document.querySelector("#container > ol > li.third");
console.log(q4);

//Question 5
//const q5=document.getElementById("container").innerHTML = "Hello!";
//console.log(q5);

//Question 6
const q6 = document.querySelector(".footer").classList.add("main");
console.log(q6);



//Question 7
const q7 = document.querySelector(".footer").classList.remove("main");
console.log(q7);

//Question 8
let q8 = document.createElement("li");
console.log(q8);

//Question 9
let q9=document.createTextNode("Four");
q8.appendChild(q9);
console.log(q9);

//Question 10
let q10=document.querySelector("ul").appendChild(q8)
console.log(q10);


//Question 12

for( let i = 0; i < 3; i++){
    document.querySelectorAll("ol li")[i].style.backgroundColor = "green";}

//Question 13
let q13 = document.querySelector(".footer").remove();
console.log(q13);