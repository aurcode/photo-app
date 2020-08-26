// Crear una Fotografia

// function createPicture(title, date, size) {
//     //title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '100x100';
// let mediumPicture: SquareSize = '500x500';
// let bigPicture: SquareSize = '1000x1000'

// function createPicture(title: string, date: string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('Create Picture using', title, date, size)
// }

// createPicture('My Birthday', '2020-26-8', '500x500');
// createPicture('Colombia Trip', '2020-26'); // Error

// Parametros Opcionales en Funciones

function createPicture(title?: string, date?: string, size?: SquareSize) {
    // Se crea la Fotografia
    console.log('Create Picture using', title, date, size)
}
createPicture('My Birthday', '2020-26-8', '500x500');
createPicture('Colombia Trip', '2020-26');
createPicture('Colombia Trip');
createPicture();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size,
    // };
    return {title, date, size,}
};

const picture = createPic('Ñeka durmiendo', '2020-8-26', '1000x1000');
console.log(picture);

//Tipo de retorno con Typescript

function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if(message === 'error') {
        throw new Error(`${message}. Code error ${code}`);
    } else {
        return 'An error has ocurred';
    }
}

try {
    let result = handleError(200, 'OK');
    console.log('result', result)

    result = handleError(404, 'error');
    console.log('result', result)
} catch (error) {
    // Nothing
}