'use strict'

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn')
const resultBtn = document.getElementById('result');
const display = document.getElementById('display');
const sqroots = document.querySelectorAll('.square-root');
const minusBtn = document.getElementById('minus');
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

for (let i = 0 ; i < sqroots.length; i++ ) {
  let sqroot = sqroots[i];
  sqroot.addEventListener('click', function (e) {
    sqr(e.srcElement.id);
  });
};

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);

minusBtn.addEventListener('click', minus)

// func

function numberPress(number) {
  if(display.value === '-') {
      display.value = `-${number}`;
      MemoryNewNumber = false;
    } else if (MemoryNewNumber){
    display.value = number;
    MemoryNewNumber = false;
    } else if(display.value === '0' ) {
      display.value = number;
    } else {
      display.value +=  number;
    };
  };

function operation(oper) {
  let cf = 10;
  let localOperationMemory = display.value;
  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber = ((MemoryCurrentNumber * cf) + (+localOperationMemory * cf)) / cf;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber = ((MemoryCurrentNumber * cf) - (+localOperationMemory * cf)) / cf;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber = ((MemoryCurrentNumber * cf) * (+localOperationMemory * cf)) / (cf * cf);
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber = ((MemoryCurrentNumber * cf) / (+localOperationMemory * cf));
    } else if (MemoryPendingOperation === '^') {
      MemoryCurrentNumber **= +localOperationMemory;
    }else {
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

function sqr(id) {
  if (id === 's') {
    if (display.value > 0) {
      display.value = Math.sqrt(display.value);
    } else {
      display.value = 'НЕВОЗМОЖНО';
    };
  } 
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

function minus(argument2) {
  let minusMemory = ''
  if (MemoryCurrentNumber == 0) {
    display.value = '-'
    MemoryPendingOperation = ''
    MemoryNewNumber = true;
  } else if (MemoryPendingOperation === '+') {
    MemoryPendingOperation = '-'
  } else if (MemoryCurrentNumber > 0){
    display.value = display.value + ' ' + '-';
  }
};