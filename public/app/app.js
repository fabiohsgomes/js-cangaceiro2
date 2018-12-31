import {handleStatus} from './utils/promise-helpers.js';

document.querySelector('#myButton')
.addEventListener('click', ( e ) => {
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => console.log(notas))
    .catch(err => console.log(err));
})