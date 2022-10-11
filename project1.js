"use strict";

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number' ;            // no input
    }else if(guess === secretNumber){                                             //when palyer wins
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess > secretNumber) {
        if(score > 1){
        document.querySelector('.message').textContent = 'Too High';            //guess to high
        score = score-1;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost The Game';
        }
    }else if(guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low';         // too low
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost The Game';
        }
    }
});

document.querySelector('.again').addEventListener('click',function handler(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;  
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
