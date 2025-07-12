let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
}
EmpDetails.prototype.getname = function(){
    return this.name;
}
EmpDetails.prototype.getage = function(){
    return this.age;
}
let emp1 = new EmpDetails('Huyen','30')
console.log(emp1.getname());
console.log(emp1.getage());