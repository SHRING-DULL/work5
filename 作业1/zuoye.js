let Father = function Father(bloodtype){
    this.bloodtype = "AB";
}
Father.prototype.wife = 'miss';

let Son = function(name,age,mother,bloodtype,phone){
    this.name = name;
    this.age = age;
    this.mother = Father.prototype.wife;
    Father.call(this,bloodtype)
    this.phone = '15214564000';
}
let son1 = new Son('Dipper',15)
Son.prototype.constructor=son1;
Son.name.prototype = 'Pines';
var son2 = new Son()

son2.name = 'son1';
console.log(son2.name)
delete son1.name;
console.log(son1)
son1.name = "Darven";
console.log(son1.name)
Object.defineProperty(son1,'name',{writable:false
})


let Daughter = function(name,age,mother,bloodtype,phone){
    this.name = name;
    this.age = age;
    this.mother = Father.prototype.wife;
    Father.call(this,bloodtype);
    this.phone = '16578415883';
}
let daughter1 = new Daughter('Alice',3)
Daughter.prototype.constructor = daughter1;
daughter1.name = 'daughter1';
Daughter.prototype.constructor=daughter1;
console.log(daughter1.name)
delete daughter1.name;
console.log(daughter1)
daughter1.name = "Mabel";
console.log(daughter1.name)


console.log(Father.prototype.wife)