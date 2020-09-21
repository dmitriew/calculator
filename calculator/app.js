'use strict'

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn')
const resultBtn = document.getElementById('result');
const display = document.getElementById('display');
const memoryCurrentNumber = 0;
const memoryNewNumber = false;
const memoryPendingOperation = '';

for (let i = 0 ; i < numbers.length; i++ ) {
  let number = numbers[i];
  number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
  });
};


for (let i = 0 ; i < operators.length; i++ ) {
  let operatorBtn = operators[i];
  operatorBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });
};

for (let i = 0 ; i < clearBtns.length; i++ ) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.srcElement.id);
  });
};

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);

// func

function numberPress(number) {
  console.log('клик по кнопке с номером!' + number)
};

function operation(symbol) {
  console.log('клик по кнопке с операциями' + ' ' + symbol)
};

function clear(id) {
  console.log(`click on btn ${id}! `)
};

function decimal(argument) {
  console.log('hello click 123123');
};

function result(argument) {
  console.log('hello click result');
};