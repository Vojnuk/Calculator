document.addEventListener('DOMContentLoaded', ()=>{

"use strict"

let display = document.getElementById('display')
let container = document.getElementById('container');

container.addEventListener('mousedown', e => {
    //fixing strange behaviour of duplicating input values in display 
    if ( e.target === document.querySelector('#display') ) return e.stopPropagation();
    
    //pressing button animation
    e.target.classList.add('pressed')

    //limiting number of characters on display
    if ( display.textContent.length > 20 ){
        console.log("Only 20 characters allowed");
        e.stopPropagation();
    }
      else if ( e.target === document.querySelector('#clear') ){
        display.textContent = "";
      }
      else if ( e.target === document.querySelector('#equals') ){
          display.textContent = eval( display.textContent );
      }
      else{ 
          display.textContent += e.target.textContent;
      }   

})

container.addEventListener('mouseup', e => {
        e.target.classList.remove('pressed');
})

container.addEventListener( 'mouseover', (e)=>{
    e.relatedTarget.classList.remove('pressed');
})




// guarding against multiple operators

})