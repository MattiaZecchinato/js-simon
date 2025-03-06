// display form
const formElement = document.getElementById('answers-form');

// instructions
const instrElement = document.getElementById('instructions');

// countdown 30 sec
const countdownElement = document.getElementById('countdown');

let count = 3;

const countdown = setInterval(function() {

    console.log(count);
    countdownElement.innerText = count;
    count--;

    if(count === -1) { 
        console.log(count);
        // countdownElement.innerText = count;
        clearInterval(countdown);

        hideNumbers();
        displayForm();
        changeInstr();
    }
}, 1000);

// random numbers
const displayNum = 5;
const maxNumRand = 50;

const numbersRandElement = document.getElementById('numbers-list');

const arrayNumRand = randNum(displayNum, maxNumRand);

// check numbers



// FUNCTION

// generate random number
function randNum(iterations, max) {

    const arrayNum = [];

    for (let i = 0; i < iterations; i++) {

        const randNum = Math.ceil(Math.random() * max);

        numbersRandElement.innerHTML += `<li>${randNum}</li>`;

        arrayNum.push(randNum);
    }

    return arrayNum;
}

// hide numbers
function hideNumbers() {

    numbersRandElement.classList.add('d-none');
}

// display form
function displayForm() {

    formElement.classList.remove('d-none');
    formElement.classList.add('d-block');
}

// change instructions
function changeInstr() {

    instrElement.innerText = 'Inserisci tutti i numeri che ricordi (l\'ordine non è importante)!';
}
