// Void

export{}

// Tipo explicito 

function showInfo(user: any): any {
	console.log('User info', user.id, user.username, user.firstName);
	return 'hola'
}

showInfo({id: 100, username: 'Ñeka', firstName: 'Mishi'})

// Tipo inferido

function showFormattedInfo(user: any) {
	console.log('User info', `

		id: ${user.id}
		username: ${user.username}
		firstName: ${user.firstName}
		`)
}

showFormattedInfo({id: 100, username: 'Ñeka', firstName: 'Mishi'})


// Tipo void, como tipo de dato en variable

let unusable: void;
// unusable = null;
// unusable = undefined;

// Tipo: Never

function handleError(code: number, menssage: string): never{

	// Procces your code here 
	// Generate a message

	throw new Error(`${menssage}. Node: ${code}`);
	
}
try{
	handleError(404, 'Not Found')
} catch (error) {
}


function sumNumbers(limit: number): never {
	let sum = 0;
	console.log(sum)
	while(true) {
		sum++;
	}
}

sumNumbers(10);
// Ciclo infinito, programa nunca termina