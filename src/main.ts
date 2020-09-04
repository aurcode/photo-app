import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, 'aurcode', 'Aurelio', true);
const album = new Album(2, 'Platzi Pictures');
const picture = new Picture(3, 'TypeScript Course', '2020-9', PhotoOrientation.LandScape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

user.removeAlbum(album);
console.log(user);
