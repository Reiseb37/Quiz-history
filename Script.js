const questions = [
  {
    question: "Quelle période couvre de -3 000 000 à -3 500 ?",
    choices: ["Préhistoire", "Antiquité", "Moyen Âge", "Temps Modernes"],
    answer: 0
  },
  {
    question: "Qui est un personnage de l'Antiquité ?",
    choices: ["Charlemagne", "César", "Napoléon Bonaparte", "Louis XVI"],
    answer: 1
  },
  {
    question: "Quel élément caractéristique appartient au Moyen Âge ?",
    choices: ["Découverte du feu", "Châteaux forts et cathédrales", "Monarchie absolue", "Révolution française"],
    answer: 1
  },
  {
    question: "Laquelle de ces années marque le début des Temps Modernes ?",
    choices: ["476", "1492", "1789", "aujourd’hui"],
    answer: 1
  },
  {
    question: "Quel personnage est lié à l’Époque Contemporaine ?",
    choices: ["Jules César", "Jeanne d’Arc", "Louis XVI", "Cléopâtre"],
    answer: 2
  },
  {
    question: "Quel trait caractérise l’Antiquité ?",
    choices: ["Hommes nomades", "Savants et artistes font avancer les connaissances", "Croisades", "Grandes guerres mondiales"],
    answer: 1
  },
  {
    question: "Qui ne fait pas partie des personnages de la leçon ?",
    choices: ["Charlemagne", "Cléopâtre", "Christophe Colomb", "Léonard de Vinci"],
    answer: 3
  },
  {
    question: "Quel événement débute l’Époque Contemporaine ?",
    choices: ["Révolution française", "Invention de l’écriture", "Chute de Rome", "Prise de Jérusalem"],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const restartBtn = document.getElementById("restart-btn");

function startQuiz() {
  currentIndex = 0;
  score = 0;
  totalEl.textContent = questions.length;
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(idx) {
  const q = questions[currentIndex];
  const buttons = choicesEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === idx) btn.classList.add("wrong");
  });
  if (idx === q.answer) score++;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  nextBtn.disabled = true;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

restartBtn.addEventListener("click", startQuiz);

function endQuiz() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = score;
}

nextBtn.disabled = true;
startQuiz();
