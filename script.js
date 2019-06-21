document.addEventListener('DOMContentLoaded', ()=>{

"use strict"
let container = document.getElementById('container');

let display = document.getElementById('display');
let numbersString = '';
let operator;
let operators = ['+', '-', '/', '*'];
let buffer = [];
let str = '';


container.addEventListener('mousedown', e => {
    //fixing strange behaviour of duplicating input values in display 
    if ( e.target === document.querySelector('#display') ) return ;
    // fixing "undefined" with clicking on container
    if ( e.target === document.getElementById('container') ) return;

    //pressing button animation
    e.target.classList.add('pressed');

    let bufferCharsLength = 0;
    for( let i = 0; i < buffer.length; i++ ){
        bufferCharsLength += buffer[i].length; 
    }

    //clear
    if ( e.target === document.querySelector('#clear') ){
        display.textContent = "";
        numbersString = '';
        buffer = [];
    }
    //check number limit
    else if ( (bufferCharsLength + numbersString.length) >= 10 
        /*
        && 
        ( e.target.classList.contains('number') 
            || 
          e.target.textContent === '.'
        )*/
       ){
        e.stopImmediatePropagation();
        let currentInput = display.textContent;
        display.textContent = "Only 10 characters allowed!";
        window.setTimeout(() => {
            display.textContent = currentInput;
        }, 1000);
    
    }
    //store and display input
    else if ( e.target.classList.contains('operator') ){

        operator = e.target.textContent;
        //guard against number finishing with dot
        if ( numbersString.charAt(numbersString.length - 1) === '.') return;
        //guard against leading +, /, *
        if( numbersString.length === 0 
            && buffer.length === 0 
            && operator !== '-'){
                    return 0;
        }
        //guard against multiple operators
        else if (
            operators.indexOf( buffer[buffer.length-1] ) !== -1 
            && 
            numbersString === ''    
        ){
            if (buffer[0] === '-') return;
            else buffer.splice(buffer.length-1, 1, operator);
        }
        else if (numbersString !== ''){
            buffer.push(numbersString);
            buffer.push(operator);
            numbersString = '';
        }
        else buffer.push(operator);
        displayInput();
        }
        
    else if( e.target.classList.contains('number')
        ||
        e.target.textContent === '.'
    ){
        //guard against multiple decimal dots
        if ( e.target.textContent === '.' ){
            if (numbersString.length == 0
                || 
                numbersString.indexOf('.', numbersString.length - 1) !== -1
                ||
                numbersString.indexOf('.') !== -1
            ) return 0;
            else numbersString += e.target.textContent; 
        }
        //guard against multiple leading zeros
        else if ( numbersString.charAt(0) === '0' 
            &&
            numbersString.charAt(1) !== '.'
        ){
            return 0;
        }
        else{
            numbersString += e.target.textContent; 
        } 
        displayInput();
    }
    //evaluate
    else  {e.target === document.querySelector('#equals') 
        //guard against last char in display being operator
        if ( operators.indexOf(buffer[buffer.length - 1]) !== -1 
            && numbersString === ''
        ) return;
        let evaluation = String( eval( display.textContent ) )
        display.textContent = evaluation;
        numbersString = evaluation;
        buffer = [];
    }
    function displayInput(){
        display.textContent = '';
        str = '';
        for (let i = 0; i < buffer.length; i++){
            str += buffer[i];
        }
        display.textContent = str + numbersString;
    }
})


container.addEventListener('mouseup', e => {
        if( e.target.classList.contains('pressed') ){
            e.target.classList.remove('pressed');
        }
})

container.addEventListener( 'mouseover', (e)=>{
    if( e.relatedTarget.classList.contains('pressed') ){
        e.relatedTarget.classList.remove('pressed');
    }else return 0;
 
})


})