const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
const heading1=document.querySelector('h1')
const heading2=document.querySelector('h2')
const span=document.querySelector('span')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
      console.log(e.target)
      if(e.target.id==='black'){
        body.style.backgroundColor=e.target.id
        heading1.style.color='purple'
        heading2.style.color='purple'
        span.style.color='purple'

      }
      else{
        heading1.style.color='black'
        heading2.style.color='black'
        span.style.color='black'
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id
          }
      }
    })
})