// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-anwser');

console.log(addInput1, addInput2, addButton, addAnswer);

addButton.addEventListener('click', ()=> {
  console.log("add button is being clicked");
});
