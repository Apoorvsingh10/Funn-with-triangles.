const input=document.querySelectorAll(".inputNumber");
const button=document.querySelector("#btn");
const outputArea=document.querySelector("#output-Area");


function CalculateSum(a,b){
    const sum=0.5*(a+b);
    // console.log(sum)
    outputArea.innerText= "Area of the traiangle is(UNIT SQUARE)"  + sum;
}

function findArea(){
    CalculateSum(Number(input[0].value),Number(input[1].value));
}



button.addEventListener("click",findArea);