abstract class TakePhoto{
    constructor(
        public camera: string,
        public filter: string,
    ){}
   abstract getSepia(): void;
   get ReelTime(): number{
    //Some complex calculations
    return 8;

}

class Instagram extends TakePhoto{
    constructor (
        public camera: string,
        public filter: string,
        public burst: number
    ){
        super (camera, filter);
    }
    getSepia(): void {
        console.log("Sepia");

}
const katherine = new TakePhoto ("Nikon", "Black & White", 3)
katherine.ReelTime()