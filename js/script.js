// https://api.adviceslip.com/advice //
const Url = "https://api.adviceslip.com/advice";

// append elements //
const GenerateButton = document.querySelector("#generate-btn");
const AdviceID = document.querySelector("#advice-id");
const Advice = document.querySelector("#advice");

// generate url data //
async function generateURLData(){
   await fetch(Url).then((response) => response.json()).then((responseData) => AppendData(responseData));
}

// append data //
function AppendData(Data){
    AdviceID.innerHTML = `ADVICE # ${Data.slip.id}`;
    Advice.innerHTML = ` "${Data.slip.advice}"`;
}

// event listener //
GenerateButton.addEventListener("click", generateURLData);
