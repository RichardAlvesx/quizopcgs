const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const textRestart = document.querySelector(".restart span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const contentRestart = document.querySelector(".restart");
const btnFinish = document.querySelector(".finish button");
const btnRestart = document.querySelector(".restart button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentRestart.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

btnFinish.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  window.location.href = "digitarnome.html";
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  } else {
    alert('Resposta errada!');
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  if(questionsCorrect == questions.length)
  {
    textFinish.innerHTML = `<center>Muito bem..<img src="13.png"><br>Você acertou todas as questões!<br>Clique abaixo para gerar seu certificado:`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
  }else{
    textRestart.innerHTML = `<center>Poxa.. Você não acertou todas as questões <img src="135884.png"><br>Você acertou 0${questionsCorrect} de 0${questions.length} questões!<br>Tente novamente...`;
    content.style.display = "none";
    contentRestart.style.display = "flex";   
  }
}

function loadQuestion() {
  spnQtd.innerHTML = `Questão: 0${currentIndex + 1} de 0${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
