'use strict';
const btnRegister = document.querySelector('.btnRegister');
const flexFormConnexion = document.querySelector('.flexFormConnexion');
const flexFormRegister = document.querySelector('.flexFormRegister');
const espaceConnexion = document.querySelector('.espaceConnexion')

btnRegister.addEventListener('click', () => {
    if(btnRegister.textContent === 'Register'){
        espaceConnexion.classList.add('changeTO');   
        btnRegister.textContent = 'login';
        espaceConnexion.classList.remove('Back');   
        btnRegister.style.transform = 'rotateY(180deg)'
    }else if(btnRegister.textContent === 'login'){
        espaceConnexion.classList.remove('changeTO');
        espaceConnexion.classList.add('Back');   
        btnRegister.textContent = 'Register';
        btnRegister.style.transform = 'rotateY(180deg) translateX(-370%)';
    } 

});
// if(btnRegister.textContent === 'login'){
//     // show flexFormRegister
// }

console.log(btnRegister.textContent === 'Register');
console.log(btnRegister.textContent);