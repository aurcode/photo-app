// Type: object

let user: object;
user = {}; // Object

user = {
	id: 1,
	username: 'paparazzi',
	isPro: true
};

console.log('user', user)

// Object vs object (Class JS vs type TS)

const myObj = {
	id: 1,
	username: 'Ñeka',
	isPro: true
};

const isInstance = myObj instanceof Object;

console.log('isInstance', isInstance)
console.log('user.username', myObj.username)