import {Album} from './album';

export class User {
    private album: Album[];
    //      picture: Picture[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean,){
        this.album = [];
    }

    addAlbum(album: Album){
        this.album.push(album);
    }
}