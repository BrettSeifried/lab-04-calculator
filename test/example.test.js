//  DO CALCULATIONS.JS FIRST

// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add, sub, multi, div, mod } from '../calculations.js';

const test = QUnit.test;

// removed to show test
// function add_two(num){
//     return num + 2;
// }

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('time add_two function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    // Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    // Act on Function
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected);
});

test('add(4,5) function', (expect) => {
    // Arrange
    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    // Act on Function
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected, 'should add 3 & 2');
});

test('sub(10,4) function', (expect)=>{
    const input1 = 10;
    const input2 = 4;
    const expected = 6;
    const actual = sub(input1, input2);
    expect.equal(actual, expected, 'Should get 6');
});

test('multi(2,8) function', (expect)=> {
    const input1 = 2;
    const input2 = 8;
    const expected = 16;
    const actual = multi(input1, input2);
    expect.equal(actual, expected, 'multi test');
});

test('Divide (10/2) function', (expect)=> {
    const input1 = 10;
    const input2 = 2;
    const expected = 5;
    const actual = div(input1, input2);
    expect.equal(actual, expected, 'division test');

});

test('Modulo 5%2 function', (expect)=>{
    const input1 = 5;
    const input2 = 2;
    const expected = 1;
    const actual = mod(input1, input2);
    expect.equal(actual, expected, 'modulo test');
});