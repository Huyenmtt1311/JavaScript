class Car{
    setname (name){
        this.name = name;
    }
    StartCar(){
        console.log('Start for '+this.name);
    }
    StopCar(){
        console.log('Stop for: '+this.name);
    }
}

class BMW extends Car{
    Speed(speed){
        console.log('Top speed of '+this.name+' is '+speed)
    }
}
let mycar = new BMW()
mycar.setname('huyen');
mycar.StartCar();
mycar.StopCar();
mycar.Speed(200);