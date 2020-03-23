class Media {
    constructor(title) {     // properties and methods shared among the classes Book, Movie and CD
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() { return this._title; }
    get isCheckedOut() { return this._isCheckedOut; }
    get ratings() { return this._ratings; }
    set checkOut(val) { this._isCheckedOut = val; }
    addRating(rating) { this._ratings.push(rating); }
    getAverageRating() {
        let rating = this._ratings.reduce((acc, currValue) => acc + currValue)
        return rating/this._ratings.length;
    }
    toggleCheckOutStatus(status) {
        if ( this._isCheckedOut = "false" )  {
            this._isCheckedOut = "true";
        } else this._isCheckedOut = "false";
    }
}

// book constructor
class Book extends Media{
    constructor(author, title, pages) {
        super(title);                             // passing the parameter to the parent class
        this._author = author;
        this._pages = pages;
    }
    get author() { return this._author; }
    get pages() { return this._pages; }
}

// movie constructor
class Movie extends Media{
    constructor(director, title, runTime) {
        super(title);                             // passing the parameter to the parent class
        this._director = director;
        this._runTime = runTime;
    }
    get director() { return this._director; }
    get runTime() { return this._runTime; }
}

//cd constructor
class Cd extends Media{
    constructor(artist, title, songs) {
        super(title);                             // passing the parameter to the parent class
        this._artist = artist;
        this._title = title;
        this._songs = [];
    }
    get artist() { return this._artist; }
    get songs() { return this._songs; }
}

const historyOnEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
historyOnEverything.toggleCheckOutStatus();
console.log(historyOnEverything.isCheckedOut);
historyOnEverything.addRating(4,5,5);
console.log(historyOnEverything.getAverageRating());

const speed = new Movie("Jad de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);;
speed.addRating(1,1,5);
console.log(speed.getAverageRating());
