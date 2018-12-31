import {handleStatus} from '../utils/promise-helpers.js';

const API = 'http://localhost:3000/notas';

const sumItems = code => notas => notas.$flatMap(nota=>nota.itens)
.filter(item=> item.codigo == code)
.reduce((total, item) => total+item.valor,0);

export const notasService = {
    listAll(){
        return fetch(API)
        .then(handleStatus)
        .catch(err => {
            log(err);
            return Promise.reject('N�o foi poss�vel obter as notas fiscais');
        })
    },
    sumItems(code){
        return this.listAll().then(sumItems(code));
    }
}