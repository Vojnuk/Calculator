document.addEventListener('DOMContentLoaded', ()=>{

"use strict"
let container = document.getElementById('container');

let display = document.getElementById('display');
let charDiv;
let numbers = '';
let operator;
let buffer = [];
let str = '';

container.addEventListener('mousedown', e => {
    //fixing strange behaviour of duplicating input values in display 
    if ( e.target === document.querySelector('#display') ) return e.stopPropagation();

    if ( numbers.length >= 5 ){
        e.stopImmediatePropagation();
        let sth = display.textContent;
        let nesto = "Only 5 numbers allowed!";
        display.textContent = nesto;
        window.setTimeout(() => {
            display.textContent = sth;
        }, 1000);

    }

    

     //pressing button animation
     e.target.classList.add('pressed');

    charDiv = e.target;
    if ( charDiv.classList.contains('operator') ){
        operator = charDiv.textContent;

        if (numbers !== ''){
            buffer.push(numbers);
        }
        numbers = '';
        buffer.push(operator);
    }
    else {
        numbers += charDiv.textContent;  
    }
    

    // display input
    display.textContent = '';
    str = '';
    for (let i = 0; i < buffer.length; i++){
        str += buffer[i];
    }
    display.textContent = str + numbers;
    
    //test
    console.log(numbers);
    if ( operator !== undefined ) console.log(operator);
    console.log(buffer);


    
    
    /*
      else if ( e.target === document.querySelector('#clear') ){
        display.textContent = "";
      }
      else if ( e.target === document.querySelector('#equals') ){
          display.textContent = eval( display.textContent );
      }
      
      else{ 
          display.textContent += e.target.textContent;
      }   

*/
      // guarding against multiple operators, zeros and decimal dots
})

/*
container.addEventListener('mouseup', e => {
        if( e.target.classList.contains('pressed') ){
            e.target.classList.remove('pressed');
        }
})

container.addEventListener( 'mouseover', (e)=>{
    if( e.relatedTarget.classList.contains('pressed') ){
        e.relatedTarget.classList.remove('pressed');
    }
 
})
*/






})