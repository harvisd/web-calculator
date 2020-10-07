function calculate() {
    {
     var value1 = parseInt(document.getElementById("value1").value);
     var value2 = parseInt(document.getElementById("value2").value);
     var operator = document.getElementById('operator').value;
     document.getElementById("result").value = operate(value1, value2, operator);
     }
}


function operate(value1, value2, operator) {
     if (operator == 'addition') {
         return value1 + value2;
 }   else if (operator == 'subtraction') {
         return value1 - value2;
 }   else if (operator == 'division') {
         return value1 / value2;
 }   else if (operator == 'multiplication') {
         return value1 * value2;
 }
}