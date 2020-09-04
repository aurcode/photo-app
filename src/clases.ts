export{}

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

class Picture{
    //Propiedades
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation,) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }

}

class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }

}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Panorama);
album.addPicture(picture);
console.log(album)
const picture2: Picture = new Picture(2, 'Platzi Session2', PhotoOrientation.Portrait);
album.addPicture(picture2);
console.log(album)