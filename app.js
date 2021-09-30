import { add } from './calculations.js';
// console.log(add);
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-anwser');

// console.log(addInput1, addInput2, addButton, addAnswer);

addButton.addEventListener('click', ()=> {
  // console.log("add button is being clicked");
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const addResult = add(value1, value2);
    addAnswer.textContent = addResult;
});

// Sub traction
import { sub } from './calculations.js';
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-anwser');

subButton.addEventListener('click', () => {
    const subValue1 = Number(subInput1.value);
    const subValue2 = Number(subInput2.value);
    const subResult1 = sub(subValue1, subValue2);
    subAnswer.textContent = subResult1;

});

// Multiply Function
import { multi } from './calculations.js';
const multiInput1 = document.getElementById('multi-input1');
const multiInput2 = document.getElementById('multi-input2');
const multiButton = document.getElementById('multi-btn');
const multiAnwser = document.getElementById('multi-anwser');

multiButton.addEventListener('click', ()=>{
    const multiValue1 = Number(multiInput1.value);
    const multiValue2 = Number(multiInput2.value);
    const multiResult = multi(multiValue1, multiValue2);
    multiAnwser.textContent = multiResult;
});

// Division Function
import { div } from './calculations.js';
const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2');
const divButton = document.getElementById('div-btn');
const divAnwser = document.getElementById('div-anwser');

divButton.addEventListener('click', ()=>{
    const divValue1 = Number(divInput1.value);
    const divValue2 = Number(divInput2.value);
    const divResult = div(divValue1, divValue2);
    divAnwser.textContent = divResult;
});

// Modolu Function
import { mod } from './calculations.js';
const modInput1 = document.getElementById('mod-input1');
const modInput2 = document.getElementById('mod-input2');
const modButton = document.getElementById('mod-btn');
const modAnwser = document.getElementById('mod-anwser');

modButton.addEventListener('click', ()=>{
    const modValue1 = Number(modInput1.value);
    const modValue2 = Number(modInput2.value);
    const modResult = mod(modValue1, modValue2);
    modAnwser.textContent = modResult;
});
