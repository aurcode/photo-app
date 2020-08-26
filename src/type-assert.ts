export {};
// <tipo> // Angle Bracket syntax
let username: any;
username = 'wyda';

// Tenemos una cadena, TS confia en mí!
let message: string = (<string>username).length > 5 ?
    `Welcome ${username}`:
    `Username is too short`;
console.log('message', message);

let usernameWithId: any = 'wydisss 50';
// Como obtener el username?
username = (<string>usernameWithId).substring(0,(<string>usernameWithId).length-3)
console.log('username',username)

message = (username as string).length > 5 ?
    `Welcome ${username}`:
    `Username is too short`;
console.log('message', message);


let helloUser: any;
helloUser = 'Hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);