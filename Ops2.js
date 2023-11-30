class person  {
    constructor(name,age,genter) {
        this.name = name;
        this.age= age;
        this.genter = genter;
    }
    getFulldetile() {
        return `detail for person full detail
        name is ${this.name} and age is ${this.age} and genter ${this.genter}`
    }
};

var final = new person ('imthiyas',25,'male');
console.log(final.getFulldetile());