const inputNum=document.querySelectorAll(".inputNumber");
const button =document.querySelector("#btn");
const outputArea=document.querySelector("#output-Area");


function CalculateSumOfSquare(a,b){
  const  SumOfSquare= a*a+b*b;
  outputArea.innerText="The length of the hypotenious is "+ SumOfSquare**0.5;
    
}

function method(){
    CalculateSumOfSquare(Number(inputNum[0].value),(Number(inputNum[1].value)));

}

button.addEventListener("click",method);         