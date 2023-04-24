class Music{
    constructor(title, singer, img, file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    
    getName() {
        return this.title + " - " + this.singer;
    }

}

//müzik listesini ekleyelim
const musicList = [
    new Music("The A La Menthe (BASS BOOSTED)", "The A La Menthe", "3.jpeg", "3.mp3"),
    new Music("Oku Canıma", "Ebru Gündeş", "2.jpeg", "2.mp3"),
    new Music("Ölmezdim", "Güncel Gürsel Artıkay", "4.jpeg", "4.mp3")
]



























































