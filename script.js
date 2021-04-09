const questionState = {
    q1: {answered: false},
    q2: {answered: false},
    q3: {answered: false},
    q4: {answered: false},
    q5: {answered: false},
    rightAnswers: 0,
   
}

const q1a1 = document.getElementById("q1a1")
const q1a2 = document.getElementById("q1a2")
const q1a3 = document.getElementById("q1a3")
const q1a4 = document.getElementById("q1a4")

const q2a1 = document.getElementById("q2a1")
const q2a2 = document.getElementById("q2a2")
const q2a3 = document.getElementById("q2a3")
const q2a4 = document.getElementById("q2a4")

const q3a1 = document.getElementById("q3a1")
const q3a2 = document.getElementById("q3a2")
const q3a3 = document.getElementById("q3a3")
const q3a4 = document.getElementById("q3a4")

const q4a1 = document.getElementById("q4a1")
const q4a2 = document.getElementById("q4a2")

const q5a1 = document.getElementById("q5a1")
const q5a2 = document.getElementById("q5a2")
const q5a3 = document.getElementById("q5a3")
const q5a4 = document.getElementById("q5a4")

function disableQ1() {
    q1a1.disabled = true;
    q1a2.disabled = true;
    q1a3.disabled = true;
    q1a4.disabled = true;
    showQuestion2();
}

q1a1.addEventListener('click', function() {
    questionState.q1.answered = true;
    q1a1.style.backgroundColor = "red";
    q1a3.style.backgroundColor = "lime"

    disableQ1()
})

q1a2.addEventListener('click', function() {
    questionState.q1.answered = true;
    q1a2.style.backgroundColor = "red";
    q1a3.style.backgroundColor = "lime"

    disableQ1()
})

q1a3.addEventListener('click', function() {
    questionState.q1.answered = true;
    q1a3.style.backgroundColor = "lime";
    questionState.rightAnswers = questionState.rightAnswers + 1
    disableQ1()
})

q1a4.addEventListener('click', function() {
    questionState.q1.answered = true;
    q1a4.style.backgroundColor = "red";
    q1a3.style.backgroundColor = "lime"

    disableQ1()
})

function showQuestion2() {
    if (questionState.q1.answered === true) {
        const question2 = document.getElementById("question2-container")
        question2.style.opacity = 1;
        question2.scrollIntoView({behavior: "smooth", block: "center"})

        
    }
}

function disableQ2() {
    q2a1.disabled = true;
    q2a2.disabled = true;
    q2a3.disabled = true;
    q2a4.disabled = true;
    showQuestion3();
}

q2a1.addEventListener('click', function() {
    questionState.q2.answered = true;
    q2a1.style.backgroundColor = "red";
    q2a2.style.backgroundColor = "lime"

    disableQ2()
})

q2a2.addEventListener('click', function() {
    questionState.q2.answered = true;
    q2a2.style.backgroundColor = "lime"
    questionState.rightAnswers = questionState.rightAnswers + 1
    disableQ2()
})

q2a3.addEventListener('click', function() {
    questionState.q2.answered = true;
    q2a3.style.backgroundColor = "red";
    q2a2.style.backgroundColor = "lime";
    
    disableQ2()
})

q2a4.addEventListener('click', function() {
    questionState.q2.answered = true;
    q2a4.style.backgroundColor = "red";
    q2a2.style.backgroundColor = "lime"

    disableQ2()
})

function showQuestion3() {
    if (questionState.q2.answered === true) {
        const question3 = document.getElementById("question3-container")
        question3.style.opacity = 1;
        question3.scrollIntoView({behavior: "smooth", block: "center"})
       
    }
}

function disableQ3() {
    q3a1.disabled = true;
    q3a2.disabled = true;
    q3a3.disabled = true;
    q3a4.disabled = true;
    showQuestion4();
}

q3a1.addEventListener('click', function() {
    questionState.q3.answered = true;
    q3a1.style.backgroundColor = "lime"
    questionState.rightAnswers = questionState.rightAnswers + 1
    disableQ3()
})

q3a2.addEventListener('click', function() {
    questionState.q3.answered = true;
    q3a1.style.backgroundColor = "lime"
    q3a2.style.backgroundColor = "red";
    disableQ3()
})

q3a3.addEventListener('click', function() {
    questionState.q3.answered = true;
    q3a3.style.backgroundColor = "red";
    q3a1.style.backgroundColor = "lime";
    
    disableQ3()
})

q3a4.addEventListener('click', function() {
    questionState.q3.answered = true;
    q3a4.style.backgroundColor = "red";
    q2a1.style.backgroundColor = "lime"

    disableQ3()
})

function showQuestion4() {
    if (questionState.q3.answered === true) {
        const question4 = document.getElementById("question4-container")
        question4.style.opacity = 1;
        question4.scrollIntoView({behavior: "smooth", block: "center"});
      
    }
}

function disableQ4() {
    q4a1.disabled = true;
    q4a2.disabled = true;
    showQuestion5();
}

q4a1.addEventListener('click', function() {
    questionState.q4.answered = true;
    q4a1.style.backgroundColor = "red"
    q4a2.style.backgroundColor = "lime"
    disableQ4()
})

q4a2.addEventListener('click', function() {
    questionState.q4.answered = true;
    q4a2.style.backgroundColor = "lime"
    questionState.rightAnswers = questionState.rightAnswers + 1
    disableQ4()
})


function showQuestion5() {
    if (questionState.q4.answered === true) {
        const question5 = document.getElementById("question5-container")
        question5.style.opacity = 1;
        question5.scrollIntoView({behavior: "smooth", block: "center"});
       
    }
}

function disableQ5() {
    q5a1.disabled = true;
    q5a2.disabled = true;
    q5a3.disabled = true;
    q5a4.disabled = true;
    finishQuiz();
}

q5a1.addEventListener('click', function() {
    questionState.q5.answered = true;
    q5a1.style.backgroundColor = "red";
    q5a4.style.backgroundColor = "lime"

    disableQ5()
})

q5a2.addEventListener('click', function() {
    questionState.q5.answered = true;
    q5a2.style.backgroundColor = "red";
    q5a4.style.backgroundColor = "lime"

    disableQ5()
})

q5a3.addEventListener('click', function() {
    questionState.q5.answered = true;
    q5a3.style.backgroundColor = "red";
    q5a4.style.backgroundColor = "lime"

    disableQ5()
})

q5a4.addEventListener('click', function() {
    questionState.q5.answered = true;
    q5a4.style.backgroundColor = "lime"
    questionState.rightAnswers = questionState.rightAnswers + 1
    disableQ5()
})

function finishQuiz() {
    if (questionState.q5.answered === true) {
        const endContainer = document.getElementById("end-container")
    if (
        questionState.rightAnswers <= 3) {
        document.getElementById("results").innerHTML = `You scored ${questionState.rightAnswers}/5. Better luck next time!`
    } else if (
        questionState.rightAnswers === 4) {
            document.getElementById("results").innerHTML = `You scored 4/5. Good work!`
        } else if (
            questionState.rightAnswers === 5
        ) {
            document.getElementById("results").innerHTML = `You scored full marks! It's official, you're a genius.`
        };

    endContainer.style.opacity = 1
    endContainer.scrollIntoView({behavior: "smooth", block: "start"})
    }
}

const resetButton = document.getElementById("resetButton")

resetButton.addEventListener('click', function() {
    const buttons = document.getElementsByClassName("answer-button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
        buttons[i].style.backgroundColor = "deepskyblue"
    }
    questionState.q1.answered = false;
    questionState.q2.answered = false;
    questionState.q3.answered = false;
    questionState.q4.answered = false;
    questionState.q5.answered = false;
    questionState.rightAnswers = 0;
    document.getElementById("question2-container").style.opacity = 0;
    document.getElementById("question3-container").style.opacity = 0;
    document.getElementById("question4-container").style.opacity = 0;
    document.getElementById("question5-container").style.opacity = 0;
    document.getElementById("end-container").style.opacity = 0;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

})