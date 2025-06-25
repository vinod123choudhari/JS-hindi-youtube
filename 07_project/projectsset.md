#Project related to DOM

## project link
[click here](
https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)


#solution code

## project 1

```javascript
 const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case 'grey':
        console.log(body.style.backgroundColor=e.target.id)
      case 'white':
        console.log(body.style.backgroundColor=e.target.id)
      case 'blue':
        console.log(body.style.backgroundColor=e.target.id)
      case 'yellow':
        console.log(body.style.backgroundColor=e.target.id)
        
      default :
        console.log("not select correct color")
    }
  })
})
```

## project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});```
 