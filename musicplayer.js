class MusicPlayer {
    constructor(MusicList) {
        this.musicList=musicList;
        this.index = 0;
    }

    getMusic(){
        return this.musicList[this.index];
    }
    //index ile sıradakı şarkıya geçme, son şarkıdaysak başa döndürme 
    next(){
        if(this.index + 1 != this.musicList.length){
            this.index++;
        }
        else{
            this.index=0;
        }
    }
    //index ile bir önceki şarkıya geçme, ilk şarkıdaysa son şarkıya geçme 
    prev(){
        if(this.index != 0 ){
            this.index--;
        }
        else{
            this.index = this.musicList.length - 1;
        }
    }

}


































