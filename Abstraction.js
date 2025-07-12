 function Employee (name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
    let monthlybonus = 1000;

    let finalsalary = function(){
        let finalsalary = salary + monthlybonus;
        console.log('Final salary: '+finalsalary);
    }
    this.getEmployee = function(){
        console.log('Name: '+this.name+' | ID: '+this.id);
        finalsalary();
    }
}
let emp1 = new Employee('Huyen',30,500);
emp1.getEmployee();