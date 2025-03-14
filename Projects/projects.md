## Projects related to DOM

### Solution code for Project 1 - Color Changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});
```

### Solution code for Project 2 - BMI Calculator

```javascript
const button = document.querySelector('button');
button.addEventListener('click', (event) => {

  event.preventDefault();   // Prevents default submission of form

  // Getting input field values
  const height = Number(document.querySelector('#height').value);
  const weight = Number(document.querySelector('#weight').value);
  const resultDiv = document.querySelector('#results')

  // console.log(height, weight);

  if(height <= 0 || isNaN(height)){
    resultDiv.innerText = 'Enter a valid height!'
    return
  }
  if(weight <= 0 || isNaN(weight)){
    resultDiv.innerText = 'Enter a valid weight!'
    return
  }

  let bmiCal = weight/((height/100)**2)
  bmiCal = bmiCal.toFixed(2);

  let category = '';

  if(bmiCal < 18.6) {
    category = "Under Weight"
  } else if (bmiCal >= 18.6 && bmiCal <= 24.9) {
    category = "Normal Weight"
  } else {
    category = "Overweight"
  }

  resultDiv.innerText = `Your BMI is ${bmiCal} (${category})`;

  // console.log(bmiCal)
});
```

### Solution code for Project 3 - Digital Clock
```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString()) // printing on the console after every 1000ms (1s)
  clock.innerHTML = (date.toLocaleTimeString());
}, 1000);
```

### Solution Code for Project 4 - Guess the Number

```javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const feedback = document.querySelector('.lowOrHi');

let userGuessesArray = [];
let guessesLeft = 10;

submit.addEventListener('click', (event) => {
  event.preventDefault();

  let userGuess = parseInt(userInput.value);

  if (!isNaN(userGuess) && userGuess > 0 && userGuess <= 100) {
    if (guessesLeft > 0) {
      userGuessesArray.push(userGuess);
      guesses.innerText = `${userGuessesArray.join(', ')}`;
      guessesLeft--;
      remaining.innerText = guessesLeft;

      console.log(`Guesses left: ${guessesLeft}`);

      if (userGuess === randomNumber) {
        feedback.innerText = `🎉 Congratulations! ${userGuess} is correct!`;
        feedback.style.color = 'green';
        userInput.disabled = true;
        submit.disabled = true;
      } else if (userGuess > randomNumber) {
        feedback.innerText = '⬇️ Too high! Try a smaller number.';
        feedback.style.color = 'red';
      } else {
        feedback.innerText = '⬆️ Too low! Try a bigger number.';
        feedback.style.color = 'red';
      }

      console.log(`Random number was: ${randomNumber}`);

      if (guessesLeft === 0 && userGuess !== randomNumber) {
        feedback.innerText = `😢 No guesses left! The correct number was ${randomNumber}.`;
        feedback.style.color = 'orange';
        userInput.disabled = true;
        submit.disabled = true;
      }
    } else {
      alert('No more guesses left');
    }
  } else {
    alert('Enter a valid number between 1 to 100');
  }
});
```

### Solution Code for Project 6 - Unlimited Colors
```javascript
// Generating a random color
const randomColor = function () {
  const hexCode = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Another way of doing the same thing

// const randomColor = () => {
//   return `#${(Math.floor(Math.random()*16777215)).toString(16).padStart(6, '0')}`;
// }

// Function to change the bg-color in body
const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor();
};

// console.log(randomColor());


let intervalId;

// Event Listener for Start button
document.getElementById('start').addEventListener('click', () => {
  if (intervalId == null) {
    intervalId = setInterval(changeBgColor, 1000);
  }
});

// Event Listener for Stop button
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});
```