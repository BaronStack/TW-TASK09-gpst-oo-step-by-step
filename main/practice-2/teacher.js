const Person = require('./person');
// const Class = require('./class');
module.exports = class Teacher extends Person{
    constructor (name,age,clazzs) {
        super(name,age);
        this.clazzs = clazzs;
    }
    introduce () {
        if (this.clazzs.length > 0)
            return super.introduce() + " I am a Teacher. I teach Class " +this.getNum() + '.';
        else
            return super.introduce() + ' I am a Teacher. I teach No Class.';
    }
    getNum() {
        let num = [];
        this.clazzs.filter(function (item){
            num.push(item.number);
        });
        return num.join(',');
    }
}