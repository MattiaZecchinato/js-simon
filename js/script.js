// countdown 30 sec

const countdownElement = document.getElementById('countdown');

let count = 10;

const countdown = setInterval(function(){

    console.log(count);
    countdownElement.innerText = count;
    count--;

    if(count === 0) { 
        countdownElement.innerText = count;
        clearInterval(countdown);
    }

}, 1000);