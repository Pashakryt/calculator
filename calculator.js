


function inputNumber(num){
    var formula = document.getElementById("calc");
     console.log(formula.value);
     formula.value += num;
}
function calc_exe(){
    var formula = document.getElementById("calc");
     console.log(formula.value);
     var result_text = formula.value;
     var result = eval(result_text);
     formula.value = result;
}
function Clear_el(){
var formula = document.getElementById("calc");
     console.log(formula.value);
     formula.value = "";
}