


arr = ["1", "2", "3", "4", "5", "6"];
neww.innerHTML = 'Массив: ' + arr;


showArr.onclick = function(){
  var userIndex = index.value; 
  var replaceValue = value.value;
  
    if (isNaN(userIndex) ){
           alert("Введите число в первое поле");
           neww.innerHTML = '';
           }
    else {
        arr[userIndex] = replaceValue;
        neww.innerHTML = 'Массив: ' + arr;
      }
}

popp.onclick = function(){
  if (arr == ''){
      neww.innerHTML = "Массив пуст";
           }
  else {
    arr.pop();
    neww.innerHTML = 'Массив: ' + arr;
      }
}

shift.onclick = function(){
  if (arr == ''){
      neww.innerHTML = "Массив пуст";
           }
  else {
    arr.shift();
    neww.innerHTML = 'Массив: ' + arr;
      }
}

push.onclick = function(){
  var addValue = value.value;
  
    if (addValue == ''){
           alert("Введите значение во второе поле");
           }
    else {
        arr.push(addValue);
        neww.innerHTML = 'Массив: ' + arr;
      }
}