import {log, timeoutPromise, delay, retry} from './utils/promise-helpers.js';
import {notasService as service} from './nota/service.js';
import {takeUtil, debounceTime, partialize, pipe} from './utils/operators.js';
import {EventEmmiter} from './utils/event-emmiter.js';

import './utils/array-helpers.js';

const operations = pipe(partialize(takeUtil,3), partialize(debounceTime,500));

const action = operations(() => retry(3,3000,()=>timeoutPromise(200,service.sumItems('2143')))
.then(total => EventEmmiter.emmit('itensTotalizados', total))
.catch(log));

document.querySelector('#myButton').addEventListener('click',action);