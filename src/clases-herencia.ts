export{}

enum PhotoOrientation{
	LandScape,
	Portrait,
	Square,
	Panorama
}

// Superclases
abstract class Item{
    protected readonly _id: number;
    protected _title: string

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

class Picture extends Item{
    public static photoOrientation = PhotoOrientation;
    //Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation,) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }

}

class Album extends Item{
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title) //Constructor de SUPER Clase
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
// picture.id = 1000; // Private
picture.title = 'Another title'; // Private
album.title = 'Personal Activities'; // Private
console.log('album', album);

// const item = new Item(1, 'Test title');
// console.log(item)

// Probar miembro estatico de nuestra clase Picture
console.log('PhotoOrientation', Picture.photoOrientation.LandScape)