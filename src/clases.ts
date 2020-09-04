export{}

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

class Picture{
    //Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation,) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }

}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
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

// Accediendo a los miembros publicos
picture.id = 1000;
picture.title = 'Another title'; // Public
album.title = 'Personal Activities';
console.log('album', album)