import {log} from './utils/promise-helpers.js';
import {notasService as service} from './nota/service.js';

import './utils/array-helpers.js';

const sumItens = code => notas => notas.$flatMap(nota=>nota.itens)
.filter(item=> item.codigo == code)
.reduce((total, item) => total+item.valor,0);

document.querySelector('#myButton')
.addEventListener('click', ( e ) => {
    service.sumItens('2143')
    .then(log)
    .catch(log);
});