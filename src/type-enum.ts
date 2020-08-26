// Orientacion para Fotografias 
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.LandScape;
console.log('landscape', landscape);


enum Country {
	Bolivia = 'bol',
	Colombia = 'col',
	Mexico = 'mex',
	EEUU = 'usa',
	Espana = 'esp'
}

const country: Country = Country.Espana;
console.log('country', country);


// Ejercicio

enum Part1{
	Primero = 1,
	Segundo = 2
}

console.log(Part1)

enum Part2{
	Tercero = 3,
	Cuarto = 4
}

console.log(Part2)

const Part1and2 = {
	...Part1,
	...Part2
}
console.log(typeof(Part1and2))
const Funcion = Part1and2.Cuarto;
console.log('Funcion', Funcion);
console.log(Part1and2)