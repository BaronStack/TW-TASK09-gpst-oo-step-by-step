const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor (name,age,clazzs) {
        super(name,age);
        this.assignObject(clazzs);
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
    isTeaching(student) {
        return this.clazzs.some(clazz => {
            return clazz.member.some(member => member.id === student.id);
        });
    }
    notifyStudentAppended() {}
    notifyLeaderAssigned() {}
    assignObject(clazzs) {
        for (let clazz of clazzs) {
            clazz.teacher = this;
        }
    }
};