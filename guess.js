#!/usr/bin/env node

var readline = require('readline');
const host = require("./host.js");

var randomNumber = host.randomNumber();

console.log(randomNumber); // NEED TO REMOVE THIS.

var terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('Guess the number (0-100): ');
terminal.prompt();

var count = 1;

terminal.on('line', function(answer)
{
    var answerNum = parseInt(answer);

    if (answerNum === randomNumber)
    {
        console.log('That’s the winning number, You guessed the number on '+ (count) + ' attempt(s)');
    
        process.exit(0);
    
    } else {

        console.log('Incorrect guess');
    }

    count++;
    terminal.prompt();
    
});