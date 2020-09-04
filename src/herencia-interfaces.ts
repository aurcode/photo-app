export{}

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

interface Entity{
    id: number;
    title: string;
}

interface Album extends Entity {
    // Copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.LandScape,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('newPicture', newPicture);
console.log('picture', picture);
