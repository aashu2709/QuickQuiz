const questions = [
    {
        question: "Which language is used for Web Development?",
        options: ["Python", "Java", "C++", "Javascript"],
        answer: "Javascript",

    },
    {
        question: "Which of the following is not a web component element?",
        options: ["<shadow>", "<menu>", "<content>", " <element>"],
        answer: "<menu>",

    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<hyperlink>"],
        answer: "<a>",

    },
    {
        question: "Which of the following is used to read a HTML page and render it?",
        options: ["Web server", "Web matrix", "Web browser", "None of the mentioned"],
        answer: "Web browser",

    },
    {
        question: "Which font format is used in web pages?",
        options: ["EOT", "WOFF 2.0", "WOFF", "SVG Fonts"],
        answer: "WOFF",

    },
    {
        question: "Which of the following CSS Property controls how an element is positioned?",
        options: ["fix", "set", "static", "position"],
        answer: "position",

    },
    {
        question: "Which of the following is the Web application equivalent to querySelectorAll()?",
        options: ["#()", "&()", "!()", "$()"],
        answer: "$()",

    },
    {
        question: "What is the JavaScript keyword used to define a function?",
        options: ["var", "function", "let", "const"],
        answer: "function",

    },
    {
        question: "Which of the following property controls the horizontal overflow of a block or inline block?",
        options: ["overflow-x", "overflow", "overflow-y", "overflow-k"],
        answer: "overflow-x",

    },
    {
        question: "Which of the following css property repeats an image both horizontally and vertically?",
        options: ["background", "background-repeat", "background-position", "background-image"],
        answer: "background-repeat",

    },


]

let currentQuestionIndex = 0;
let score = 0;
let timer;
let questionTimeLimit = 20;


function loadQuestion() {
    clearInterval(timer);
    const timeLeftElement = document.getElementById("time-left");
    timeLeftElement.innerText = questionTimeLimit;

    let timeLeft = questionTimeLimit;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);

    const questionElement = document.getElementById("question");
    const optionsList = document.getElementById("options-list");

    optionsList.innerHTML = "";

    questionElement.innerText = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].options.forEach((option) => {
        const optionButton = document.createElement("li");
        optionButton.innerText = option;
        optionButton.classList.add("option");
        optionsList.appendChild(optionButton);
        optionButton.addEventListener("click", () => handleAnswerSelection(optionButton, option));

    });
}



function handleAnswerSelection(selectedOption, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        selectedOption.style.backgroundColor = "lightgreen";
    } else {
        selectedOption.style.backgroundColor = "lightcoral";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);

}
const nxtQuestion = document.getElementById("next-btn");


function showResults() {
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "result.aspx";
}

function displayScore() {
    const finalScore = localStorage.getItem("mostRecentScore");
    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.innerText = finalScore;
    }
}

const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];  





function saveScore(name, score) {
    const newEntry = { name: name, score: score };
    leaderboard.push(newEntry);

 
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard-list");

    if (leaderboardList) {
        leaderboardList.innerHTML = "";

        leaderboard.forEach((entry) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${entry.name} - ${entry.score} points`;
            leaderboardList.appendChild(listItem);
        });
    }
}

function saveUserScore() {
    const username = document.getElementById("username").value.trim();
    const finalScore = localStorage.getItem("mostRecentScore");

    if (username) {
        saveScore(username, finalScore);  
        window.location.href = "leaderboard.aspx";  
    }
}

const saveScoreBtn = document.getElementById("save-score-btn");
if (saveScoreBtn) {
    saveScoreBtn.addEventListener("click", saveUserScore)
}







window.onload = () => {
    if (document.getElementById("question")) {
        loadQuestion(); 
    } else if (document.getElementById("score")) {
        displayScore(); 
    } else if (document.getElementById("leaderboard-list")) {
        displayLeaderboard(); 
    }
};



