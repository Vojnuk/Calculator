document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM ready')

"use strict"

let display = document.getElementById('display')

let numContainer = document.getElementById('container');
numContainer.addEventListener('click', e => {

    /*
        PROBLEM: klikom na display dobija se nula. 
        Verovatno implicitna konverzija, taj tag nema nikakvu vrednost.
        VEROVATNO RESENJE:
        Obuhvati posebnim <div> samo brojeve i 
        operatore, bez displeja.
    */ 

    // problem sto na klik display ne vraca nista
    if ( e.target === document.querySelector('#display') ) return "jeste";
    if ( isNaN (Number(e.target.textContent)) ){
        console.log (e.target.textContent);
        display.textContent += e.target.textContent;
    } else {
        console.log(Number(e.target.textContent));
        display.textContent += Number(e.target.textContent);
    }
    /*
    Za AC i = moras definisati za njih specificne operacije.
    Vidi da li Math objekat poseduje za +,-,=,/,* 
    tacno definisane operacije.
    */ 

    

})


})