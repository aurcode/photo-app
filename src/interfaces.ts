// function para mostrar fotografias

export{}

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
    console.log({picture})
}

let myPic = {
    title: 'test title',
    date: '01-09-2020',
    orientation: PhotoOrientation.LandScape
};

showPicture(myPic);
showPicture({
    title: 'Tes title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test' // Error
});


interface PictureConfig{
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-9'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({})
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2021-7'});
console.log('picture', picture);

// Interfaz: Usuario
interface User {
    readonly id: number; // Solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'WyDa', isPro: true};
console.log('user', user);
user.username = 'Ñeka';
//user.id = 20; // Error
console.log('user', user);