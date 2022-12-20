// set up the quiz

// first set the scores to a variable
let correctScore = 0;
let mistakeScore = 0;

// create a function that will generate random number
// create a variable that store the result
let result;
Math.floor(result);
function generateProblems(){
    let firstNum = Math.floor(Math.random() * 100 + 1);
    let secondNum = Math.floor(Math.random() * 100 + 1);
    const operator = ['*', '/', '+', '-'];
    let selectedOperator = operator[Math.floor(Math.random() * operator.length)];

    let resultStr = `${firstNum}  ${selectedOperator}  ${secondNum} =`;

    // display the generated problem to the user
    document.querySelector('#num1').innerText = firstNum;
    document.querySelector('#num2').innerText = secondNum;
    document.querySelector('#operator').innerText = selectedOperator;

    // perform calculation
    switch(selectedOperator){
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
    }
};
// get the message
const message = document.querySelector('#response');
// get the users answer
const userAnswer = document.querySelector('#user-answer');

// CREATE A FUNCTION THAT CHECKS USERS ANSWER
function checkAnswer(){
    // check if the users answer matches to the result
    if(userAnswer.value == result){
        // if the users answer is correct increase the score
        ++correctScore

        // display a message that indicates the answer is correct
        message.innerHTML = 'Correct'
        message.classList.add('text-success');
        message.classList.remove('text-danger');

        // display the next button
        nextBtn.classList.remove('d-none');

        // remove the check button
        checkBtn.classList.add('d-none');

        message.classList.remove('d-none');
    } else{
        // do the opposite
        ++mistakeScore
        message.innerHTML = 'Wrong'
        message.classList.add('text-danger');
        message.classList.remove('text-success');

        message.classList.remove('d-none');
        checkBtn.classList.remove('d-none');

        checkBtn.classList.add('d-none');

        tryAgainBtn.classList.remove('d-none');
    }
    
    // display the scores
    document.querySelector('#wrong').innerHTML = mistakeScore;
    document.querySelector('#correct').innerHTML = correctScore;
};

// SET AN EVENT LISTENER TO CALL THE FUNCTION
const checkBtn = document.querySelector('#check');
const nextBtn = document.querySelector('#next');
const tryAgainBtn = document.querySelector('#again');

nextBtn.addEventListener('click', () =>{
    generateProblems();
    nextBtn.classList.add('d-none');
    checkBtn.classList.remove('d-none');
    message.classList.add('d-none');

    userAnswer.value = '';

    userAnswer.disabled = false;
})

checkBtn.addEventListener('click', () => {
    checkAnswer();

    // call the history function
    createHistoryFunction();

    // disable from inputtting number
    userAnswer.disabled = true;
});

// restarting the quiz
document.querySelector('#restart').addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload();
});

// try again
tryAgainBtn.addEventListener('click', function(){
    generateProblems();

    checkBtn.classList.remove('d-none');
    tryAgainBtn.classList.add('d-none')
    userAnswer.value = '';

    userAnswer.disabled = false;
})

// end of setting an event listener

// Create a function that will append every users answer and the correct  answer
// get the list parents
const userAnsList = document.querySelector('#prev-user-ans');
const correctAnsList = document.querySelector('#prev-correct-ans');

function createHistoryFunction(){
    // create a new list element where we will insert the history
    const prevUserAns = document.createElement('p');
    const prevCorrectAns = document.createElement('p');

    // insert the values
    prevUserAns.innerText = userAnswer.value;
    prevCorrectAns.innerText = result;

    // 
    prevCorrectAns.classList = 'text-success'; 
    // append the new list element to list parents
    userAnsList.appendChild(prevUserAns);
    correctAnsList.appendChild(prevCorrectAns);

    if(userAnswer.value == ''){
        prevUserAns.innerText = 'empty';
    }

    if(userAnswer.value == result){
        prevUserAns.classList = 'text-success';
    } else{
        prevUserAns.classList = 'text-danger';
    }

    // remove the exes child
    const maxChild = 7;
    if(userAnsList.children.length >= maxChild && correctAnsList.children.length >= maxChild){
        const secondChildUser = userAnsList.children.item(1);
        const secondChildAns = correctAnsList.children.item(1);

        userAnsList.removeChild(secondChildUser);
        correctAnsList.removeChild(secondChildAns);
    }
}

// START THE QUIZ
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', ()=>{
    generateProblems();
    startBtn.classList.add('d-none');
    checkBtn.classList.remove('d-none');

    document.querySelector('#screen').classList.remove('d-none');
    document.querySelector('#user-answer').classList.remove('d-none');
    document.querySelector('#wrapper').classList.remove('align-items-center');
});