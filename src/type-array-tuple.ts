// Corchetes []

// Tipo Explicito

let users: string[];
users = ['luis200', 'nekaraxi', 'aurcode'];
// users = [1, true, 'test']; // Error

// Tipo Inferido

let otherUsers = ['luis200', 'nekaraxi', 'aurcode'];
// otherUsers = [1, true, 'test']; //Error


//  Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];


// Accediendo a los valores en un Array

console.log('second user', users[1]);
console.log('second title', pictureTitles[1]);


// Propiedades en Array
console.log('users.length', users.length);

// Uso de funciones en Arrays
users.push('platziUser'),
users.sort()
console.log('users', users)