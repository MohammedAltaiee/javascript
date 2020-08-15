// const name = "mohammed al-taie";

// function upperCase(anyText) {
//   //this function make the text to be upper cased and return the new text as uppered case
//   const newText = anyText.toUpperCase();
//   console.log(newText);
// }
// upperCase(name); //calling the function with the old text or any text we want to upper cased it so it will be send the string to the function to make it upper case

// const namee = "Mayarrrrrrrrr";
// const age = 8;

// console.log(
//   "Hello my name is " +
//     namee +
//     " and my age is " +
//     age +
//     " and I'm getting bigger"
// );
// console.log(
//   `Hello my name is ${namee} and my age is ${age} and I'm getting bigger`
// );
// // const upperCase = () => {

// // }
// // arrays to create an array
// const schedule = ["wake up", "Eat", "watch Film"];
// console.log(schedule);
// console.log(schedule[0]);
// console.log(schedule[1]);
// console.log(schedule[2]);
// schedule.push("sleep"); //add to the last one
// console.log(schedule);
// schedule.pop(); //remove the last one
// console.log(schedule);
// // schecule.shift("wake up"); //ganna remove the first item
// schedule.unshift("add a new in the beginig");
// console.log(schedule);
// console.log(schedule.indexOf("Eat"));
// const names = ["ed", "kj", "fsjk"];
// for (const iterator of names) {
//   console.log(iterator);
//   if (iterator === "kj") {
//     console.log("kj is in my list ");
//     break; //to stop the iteration
//   }
// }

// const text = document.querySelector(".title");
// const changColor = document.querySelector(".changeColor");
// text.classList.add("change"); //class list is to manipulat the css class and add or remove or toggle etc to the classes
// changColor.addEventListener("click", function () {
//   text.classList.toggle("change");
// }); //this takes two parameter one is the event clicking, scrolling hover etc then when the event happend the second parameter (the function ) will apply



// // this is to make a list and to be able to add new items 
// const userList = document.querySelector(".name-list li");
// const listInput = document.querySelector(".list-input");
// const addListBtn = document.querySelector(".addListBtn");

// addListBtn.addEventListener("click", function () {
//   //create an li out of thin air
//   const newLi = document.createElement("li");
//   const liContent = document.createTextNode(listInput.value);
//   // add the input value inside that new li
//   newLi.appendChild(liContent);
//   // attaching the li to the user list
//   userList.appendChild(newLi);
// });



// to make a counter 
//set initial count
let count = 0;
//select value and buttons 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//for each we pass a call back function 
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) { //when u click genrate afunction that has aconst styles 
    const styles = e.currentTarget.classList; //this line give us the button that was clicked and return the class of it 
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;

  });
});