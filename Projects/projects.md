## Projects related to DOM

### Solution code for Project 1

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

### Solution code for Project 2

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