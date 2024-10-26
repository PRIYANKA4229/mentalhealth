const questions = [
    {
        question: "Q1.What is the most common mental health disorder in the U.S.?",
        options: ["Depression", "Anxiety Disorders", "Schizophrenia", "Bipolar Disorder"],
        correct: 1
    },
    {
        question: "Q2.What age group is most affected by mental health issues?",
        options: ["Children", "Teenagers", "Adults", "Seniors"],
        correct: 2
    },
    {
        question: "Q3.Which of the following is considered a coping mechanism for stress?",
        options: ["Avoiding all responsibilities", "Practicing mindfulness", "Skipping meals", "Suppressing emotions"],
        correct: 1
    },
    {
        question: "Q4.Which of the following is a symptom of anxiety?",
        options: ["Rapid heart rate", "Loss of appetite", "Increased focus", "Sleeping more"],
        correct: 0
    },
    {
        question: "Q5.What is one common treatment for depression?",
        options: ["Avoiding stress", "Physical exercise", "Therapy and medication", "Increasing work hours"],
        correct: 2
    },
    {
        question: "Q6.Which mental health disorder is characterized by extreme mood swings?",
        options: ["Schizophrenia", "Bipolar Disorder", "OCD", "PTSD"],
        correct: 1
    },
    {
        question: "Q7.Which of the following can help improve mental well-being?",
        options: ["Exercising regularly", "Ignoring problems", "Eating junk food", "Avoiding social contact"],
        correct: 0
    },
    {
        question: "Q8.What is mindfulness?",
        options: ["A form of meditation", "Thinking constantly about the past", "A form of anxiety", "Suppression of emotions"],
        correct: 0
    },
    {
        question: "Q9.How much physical activity is recommended to improve mental health?",
        options: ["None", "1-2 hours per day", "30 minutes a day", "Only on weekends"],
        correct: 2
    },
    {
        question: "Q10.Which of these is not a symptom of depression?",
        options: ["Excessive happiness", "Loss of interest in activities", "Fatigue", "Feelings of worthlessness"],
        correct: 0
    },
    {
        question: "Q11.What type of therapy involves talking with a mental health professional?",
        options: ["Physical therapy", "Cognitive behavioral therapy", "Occupational therapy", "Nutritional therapy"],
        correct: 1
    },
    {
        question: "Q12.Which is a common cause of stress?",
        options: ["Job demands", "Vacations", "Winning a lottery", "Getting a good night's sleep"],
        correct: 0
    },
    {
        question: "Q13.What does PTSD stand for?",
        options: ["Post-Traumatic Stress Disorder", "Personal Traumatic Stress Disorder", "Pre-Traumatic Stress Disorder", "Persistent Traumatic Stress Disorder"],
        correct: 0
    },
    {
        question: "Q14.What is a common symptom of social anxiety?",
        options: ["Feeling relaxed in social settings", "Excessive worry about social interactions", "Desire to be around people", "Talking more than usual"],
        correct: 1
    },
    {
        question: "Q15.What is an effective way to manage stress?",
        options: ["Time management", "Avoiding responsibilities", "Overworking", "Ignoring stress"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById('question');
const optionElements = document.querySelectorAll('.option-text');
const radioElements = document.querySelectorAll('input[name="option"]');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const submitButton = document.getElementById('submit');

nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
submitButton.addEventListener('click', submitQuiz);
document.getElementById('retry').addEventListener('click', retryQuiz);

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionElements.forEach((optionElement, index) => {
        optionElement.textContent = currentQ.options[index];
    });
    radioElements.forEach(radio => {
        radio.checked = false;
    });
    selectedAnswer = null;
    nextButton.disabled = true;  // Disable next button until an answer is chosen
    submitButton.style.display = 'none';  // Hide submit button until the last question
    if (currentQuestion === questions.length - 1) {
        nextButton.style.display = 'none';  // Hide next button on last question
        submitButton.style.display = 'inline-block';  // Show submit button on last question
    } else {
        nextButton.style.display = 'inline-block';  // Show next button if not the last question
        submitButton.style.display = 'none';  // Hide submit button if not the last question
    }
    prevButton.disabled = currentQuestion === 0;  // Disable previous button on first question
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

function retryQuiz() {
    score = 0;
    currentQuestion = 0;
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

// Ensure user selects an answer
radioElements.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedAnswer = radio.value;
        nextButton.disabled = false;  // Enable next button after selecting an answer
        const correctAnswer = questions[currentQuestion].correct;
        if (selectedAnswer == correctAnswer) {
            score++;
        }
    });
});

// Load the first question on page load
loadQuestion();
