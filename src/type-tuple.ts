export {};

// [1, 'user']
let user: [number, string];
user = [1, 'WyDa'];

console.log('user', user);
console.log('username', user[1]);
console.log('id', user[0]);


// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'WyDa']);
array.push([2, 'Ñeka']);
array.push([3, 'Godie']);
array.push([4, 'Her']);
console.log('array', array);

// Uso de funciones array
// Her -> Hersheys

array[3][1] = array[3][1].concat('sheys'); // Hersheys
console.log('array', array);

