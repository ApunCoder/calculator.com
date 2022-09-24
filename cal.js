var button = document.getElementsByClassName('border');
var display = document.getElementById('show');
var operand1 = null;
var operand2 = null;
var operator = null;
var operatorMinus = null;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('value');
        if (value == '+' || value == '*' || value == '-' || value == '/' || value == '%') {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = value;
            display.innerText = "";
        }else if (value == '=') {
            if(operand1 == null){
                display.innerText = "0";
            }else{
                operand2 = parseFloat(display.textContent);
                if(isNaN(operand1)){
                    display.innerText = "Error";
                }else{
                    var result = eval(operand1 + operator + operand2);
                    display.innerText = result;
                }
            }
        }else if(value == 'AC'){
            display.innerText = "";

        }else {
            display.innerText += value;
        }
    });
}