'use strict'

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn')
const resultBtn = document.getElementById('result');
const display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

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
  if(MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if(display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    };
  };
};

function operation(oper) {
  let localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemory;
    } else {
      MemoryCurrentNumber = +localOperationMemory;
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = oper;
  }
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  };
};

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localOperationMemory = '0.';
    MemoryNewNumber = false;
  } else {
      if(localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
      };
  };
  display.value = localDecimalMemory;
};