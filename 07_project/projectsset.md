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
 