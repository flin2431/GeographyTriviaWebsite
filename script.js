const questions = [
    {
        question: "What American city is the Golden Gate Bridge located in?",
        answers: [
            {text: "Austin", correct: false},
            {text: "Seattle", correct: false},
            {text: "San Francisco", correct: true},
            {text: "Boston", correct: false},
        ]

    },

    {
        question: "What is the name of the largest desert in the world?",
        answers: [
            {text: "Sahara Desert", correct: false},
            {text: "Antarctic Desert", correct: true},
            {text: "Kalahari Desert", correct: false},
            {text: "Gobi Desert", correct: false},
        ]

    },

    {
        question: "What is the name of the smallest country in the world?",
        answers: [
            {text: "The Vatican City", correct: true},
            {text: "Hungary", correct: false},
            {text: "Luxembourg", correct: false},
            {text: "Scotland", correct: false},
        ]

    },

    {
        question: "What is the capital of the American State of California?",
        answers: [
            {text: "Los Angeles", correct: false},
            {text: "Long Beach", correct: false},
            {text: "San Diego", correct: false},
            {text: "Sacramento", correct: true},
        ]

    },

    {
        question: "How many time zones does Russia have?",
        answers: [
            {text: "12", correct: false},
            {text: "10", correct: false},
            {text: "3", correct: false},
            {text: "11", correct: true},
        ]

    },

    {
        question: "What country does the Rhine River run through?",
        answers: [
            {text: "Germany", correct: true},
            {text: "Austria", correct: false},
            {text: "Switzerland", correct: false},
            {text: "France", correct: false},
        ]

    },

    {
        question: "What is the name of the largest airport in the United States of America?",
        answers: [
            {text: "Charlotte Douglas International Airport", correct: false},
            {text: "O'Hare International Airport", correct: false},
            {text: "Denver International Airport", correct: true},
            {text: "John F. Kennedy International Airport", correct: false},
        ]

    },
    
    {
        question: "In what ocean is the Bermuda Triangle located?",
        answers: [
            {text: "Pacific Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Southern Ocean", correct: false},
            {text: "Atlantic Ocean", correct: true},
        ]

    },

    {
        question: "What is the name of the longest river in Africa?",
        answers: [
            {text: "The Nile River", correct: true},
            {text: "Congo River", correct: false},
            {text: "Limpopo River", correct: false},
            {text: "Zambezi River", correct: false},
        ]

    },

    {
        question: "What is the name of the smallest US state?",
        answers: [
            {text: "Delaware", correct: false},
            {text: "Missouri", correct: false},
            {text: "Rhode Island", correct: true},
            {text: "Maine", correct: false},
        ]

    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();



