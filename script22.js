class Person {
    constructor(n, ph, add){
        this.name= n;
        this.phone = ph
        this.address = add

    }

    getInfo = function(){
        console.log(this.name, this.phone,this.address)
    }
}

class Student extends Person{
    constructor(marks,name,phone,add){
        // super(name,phone, add);
        super()
        this.marks=marks
    }
}


let obj1 = new Person("kirti", "123123","sfdhsjdf")
obj1.getInfo()
let obj2 = new Student(67,"tina","98765","985rtyh")
console.log(obj2)


