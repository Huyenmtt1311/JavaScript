let i
for(i = 1 ; i<5 ; i++){
    console.log('value of x is: '+i);
}

/*********For in và For of */

let fruits =  ['tao','chuoi','cam'];
let x;
for(x in fruits){
    console.log(x); // 0,1,2
    console.log(fruits[x]); // tao','chuoi','cam'
}
for(x of fruits){
    console.log(x); // tao','chuoi','cam'
}
