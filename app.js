'use strict';
const btnRegister = document.querySelector('.btnRegister');
const flexFormConnexion = document.querySelector('.flexFormConnexion');
const espaceConnexion = document.querySelector('.espaceConnexion')

btnRegister.addEventListener('click', () => {
 espaceConnexion.classList.add('changeTO');   
//  flexFormConnexion.style.display = 'none';
 btnRegister.textContent = 'login';
 btnRegister.style.transform = 'rotateY(180deg)'
});
if(btnRegister.textContent === 'login'){
    // show flexFormRegister
}