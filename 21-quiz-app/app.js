const questions = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hyper>", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    options: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Styling System", correct: false },
      { text: "Colorful Style Syntax", correct: false }
    ]
  },
  {
    question: "Which method adds an element at the end of an array in JavaScript?",
    options: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "Which property changes the text color in CSS?",
    options: [
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "foreground", correct: false }
    ]
  },
  {
    question: "What will be the output of 2 + '2' in JavaScript?",
    options: [
      { text: "'22'", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "<!--", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    options: [
      { text: "<br>", correct: true },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<line>", correct: false }
    ]
  },
  {
    question: "Which event triggers when a user clicks on an HTML element?",
    options: [
      { text: "click", correct: true },
      { text: "change", correct: false },
      { text: "mouseover", correct: false },
      { text: "submit", correct: false }
    ]
  },
  {
    question: "Which function converts a string to an integer in JavaScript?",
    options: [
      { text: "parseInt()", correct: true },
      { text: "parse()", correct: false },
      { text: "toInt()", correct: false },
      { text: "int()", correct: false }
    ]
  }
];


const question =document.getElementById("question");
const ansBtns=document.getElementById("ansBtn");
const nextBtn =document.getElementById("nextBtn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex= 0;
  score = 0;
  nextBtn.innerHTML = "Next"
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". "+ currentQuestion.question;

  currentQuestion.options.forEach((answer) =>{
    
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    ansBtns.appendChild(button);
    
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click',selectAnswer)
  });
}


function resetState(){
  nextBtn.style.display  = "none";
  while(ansBtns.firstChild){
    ansBtns.removeChild(ansBtns.firstChild);
  }
}

function selectAnswer(e){
  
  const selectBtn = e.target;

  
  const isCorrect = selectBtn.dataset.correct === "true";
  
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  }else{
      selectBtn.classList.add("incorrect");
  }
  
  Array.from(ansBtns.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextBtn.style.display = "block";
}

function showScore(){
  resetState();
  question.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextBtn.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();

