class Animals{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name+ ' eats food');
    }
}
class Cat extends Animals{
    eat(){
        //super.eat();
        console.log(this.name+ ' eats fish');
    }
}
let Dog = new Cat('Dog')
Dog.eat();