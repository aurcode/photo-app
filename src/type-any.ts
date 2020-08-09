// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string

console.log ('idUser', idUser)

// Tipo Inferido
let otherId;
otherId = 1;
console.log ('otherId', otherId);2
otherId = '2';
console.log ('otherId', otherId);

let surprise: any = 'hello typescript';
//
const res = surprise.substring(6);
console.log('res', res)