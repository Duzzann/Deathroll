'use strict';

const btn = document.querySelector('.btn');
const menu =document.querySelector('.modalmenu');
const first = document.querySelector('.entryScreen');


btn.addEventListener('click',function(){
    first.classList.add('hidden');
      setTimeout(function() {
        first.classList.add('removed');
        menu.classList.remove('removed');
        setTimeout(function() {
        menu.classList.remove('hidden');
      }, 200);
      }, 400);
      
    
});