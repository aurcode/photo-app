import {User, Album, Picture, PhotoOrientation} from './photo-app';
const user = new User(1, 'aurcode', 'Aurelio', true);
const album = new Album(2, 'Platzi Pictures')
const picture = new Picture(3, 'TypeScript Course', '2020-9', PhotoOrientation.LandScape)

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user);
