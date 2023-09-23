
//task1 start
let animal = prompt('Введите животное на английском')
let amount = prompt('Введите количество животных')

for(let i = 1; i <= amount; i++){
 if(i == 1){
   console.log(i + ' ' + animal);
 }else{
   console.log(i + ' ' + animal + 's');
 }
}
//task1 complete



//task2 start
let number = prompt('Введите число');
let degree = prompt('Введите степень');
let res = 1

if(isNaN(number) || isNaN(degree)) {
  alert('Вы ввели некорректное значение')
}else {
  let result = 1;
}

for(let i = 0; i < degree; i++) {
  res = number * res
}

console.log(res);
//task2 complete

//task3 start
let total = prompt('Введите количество') 
let middleSymbol = prompt('Введите символ для отступа') 
let lastSymbol = prompt('Введите конечный символ')
let result = ''; 
for (let i = 0; i < total; i++) { 
  if(result == 0){ 
    result = lastSymbol 
  }else{ 
   result = middleSymbol + result 
  } 
 console.log(result); 
}
//task3 complete