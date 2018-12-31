export const partialize = (fn, ...params) => fn.bind(null, ...params);
export const compose = (...fns) => value => fns.reduceRight((previusValue,fn) => fn(previusValue),value);
export const pipe = (...fns) => value => fns.reduce((previusValue,fn) => fn(previusValue),value);