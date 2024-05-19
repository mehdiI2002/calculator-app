function getNum1() {
    return parseFloat(document.getElementById("num1-el").value);
}

function getNum2() {
    return parseFloat(document.getElementById("num2-el").value);
}
function Sum(){
let num1 =  getNum1()
let num2 =  getNum2()
    let sum =  num1 + num2;
    document.getElementById("result-el").textContent += sum
    
}
function Substract (){
    let num1 =  getNum1()
    let num2 =  getNum2()
    let sub = num1 -num2
    document.getElementById("result-el").textContent += sub
}
function Devide(){
    let num1 =  getNum1()
    let num2 =  getNum2()
    let devide =  num1 / num2;
    document.getElementById("result-el").textContent += devide
}
function Multiply(){
    let num1 =  getNum1()
    let num2 =  getNum2()
    let multiply =  num1  * num2;
    document.getElementById("result-el").textContent += multiply


}



