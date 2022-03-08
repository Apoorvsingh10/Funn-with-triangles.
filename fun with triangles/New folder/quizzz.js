const quizForm=document.querySelector(".quiz-form");
const  submitBtn=document.getElementById("submit-btn")
const  outputElenment=document.querySelector(".output-elenment")

const correctAns=["right angle","Equilateral Triangle"]

function checkScore(){

    let score=0;
    let index=0;
    const formResult=new FormData(quizForm)

    for(let value of formResult.values()){
        if(value===correctAns[index]){
            score=score + 1
        }
        index=index + 1
    }
    outputElenment.innerText = "your score is "+ score;
    // console.log(formResult)
    
}

submitBtn.addEventListener("click",checkScore)
