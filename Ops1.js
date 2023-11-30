class movies {
    constructor(title,dir,rating) {
        this.title = title;
        this.dir = dir;
        this.rating = rating;
    }
};
var a = new movies('vadaChennai','maaran',' 4.5 ****');
var b = new movies('vadaChennai','maaran',' 4.5 ****');
var c = new movies('vadaChennai','maaran',' 4.5 ****');
console.log(a.title);
console.log(b.dir);
console.log(c.rating);