const inputAngle=document.querySelectorAll(".angle-input" );
const outputBox=document.querySelector(".output-box") ;
const checkBtn=document.querySelector("#check-Btn") ; 

function CalculateSumOfAngles(Anglee1,Anglee2,Anglee3){
    const SumOfAngles= Anglee1+Anglee2+Anglee3;
    // return SumOfAngles;
    // console.log(SumOfAngles)
}


function IsTriangle(SumOfAngles){
    const inputVal=CalculateSumOfAngles( Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value))

    // console.log("from is triangle")
    if(SumOfAngles=180 ){
        outputBox.innerText="yess this is a triangle "
    }
    else{
        outputBox.innerText="noo this is not a triangle "
    }
    
}

checkBtn.addEventListener('click',IsTriangle)