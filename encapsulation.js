class Employee {
    setEmp(name, id, age){
        this.name = name;
        this.id = id;
        this.age = age;
    }
    getEmpName() {
        return this.name;
    }
    getEmpId() {
        return this.id;
    }
    getEmpAge() {
        return this.age;
    }
}
let emp1 = new Employee();
emp1.setEmp('Huyen','1311','30');
console.log(emp1.getEmpId());
console.log(emp1.getEmpAge());