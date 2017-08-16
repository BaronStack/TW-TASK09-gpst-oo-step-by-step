// Write your code here
module.exports = class Class {
    constructor (number) {
        this.number = number;
        this.leader;
        this.member= [];
    }
    assignLeader(student) {
        if (this.teacher) {
            this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
        }
        if (!this.isHasStudent(student)) {
            return 'It is not one of us.';
        }else {
            this.leader = student.id;
            return 'Assign team leader successfully.';
        }
    }
    appendMember(student) {
        this.member.push(student);
        if (this.teacher) {
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
        }
    }
    isHasStudent(student) {
        return this.member.some((item) => {
            return item.id === student.id;
        });
    }
};