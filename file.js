let display = document.getElementById('display');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let multiBtn = document.getElementById('multiplication');
let divideBtn = document.getElementById('divide');
let clearBtn = document.getElementById('clear');
let resultBtn = document.getElementById('result');
let numbers = document.querySelectorAll('.numbers div');
let pointBtn = document.getElementById('point');
let setPoint = false;

let number1 , number2 , result;
let op = '';
let setResult = false;

clearBtn.addEventListener('click',(e)=>{
  display.textContent = ' ';
  setPoint = false;
})

pointBtn.addEventListener('click',(e)=>{
  if(setPoint == false){
    display.textContent += '.';
    setPoint = true;
  }
})

plusBtn.addEventListener('click',(e)=>{
  number1 = Number(display.textContent)
  display.textContent = ' ';
  op = '+'
})

minusBtn.addEventListener('click',(e)=>{
  number1 = Number(display.textContent)
  display.textContent = ' ';
  op = '-'
})

divideBtn.addEventListener('click',(e)=>{
  number1 = Number(display.textContent)
  display.textContent = ' ';
  op = '/'
})

multiBtn.addEventListener('click',(e)=>{
  number1 = Number(display.textContent)
  display.textContent = ' ';
  op = '*'
})

resultBtn.addEventListener('click',(e)=>{
  if(setResult == false){
    number2 = Number(display.textContent);
  }else{
    number1 = Number(display.textContent);
  }
  switch(op){
    case '+': 
      result = number1 + number2;
    break;

    case '-': 
      result = number1 - number2;
    break;
    
    case '/': 
      result = number1 / number2;
    break;
  
    case '*': 
      result = number1 * number2;
    break;
  }
  display.textContent = result
  setResult = true
})

numbers.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    if(display.textContent == ' '){
      display.textContent = e.target.textContent;
    }else{
      display.textContent +=  e.target.textContent;
    }
  })
})