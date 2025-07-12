// let number = [1,2,3,4,5]
// console.log(number) ;// in ra cả mảng
// console.log(number[3]) ;// lấy ra chỉ mục 3
// console.log(number.length)  ;// lấy ra độ dài của mảng
// number.push(7);
// console.log(number); // thêm giá trị vào mảng sau đó in ra

// number[1] = 20
// console.log(number) // thay đổi giá trị trong 1 mảng rồi in ra

// let x
// for (x in number){
//     console.log(x);
//     console.log(number[x]);
// }

// for (x of number){
//     console.log(x);
// };


/********Arrys method*******/

let car = ['honda','Vin','Kia','Mazda'];
// car.pop();  // xoá phần tử cuối cùng
// console.log(car);
// car.shift(); //xoá phần tử đầu tiên
// console.log(car);
// car.push('BMW') // thêm vào cuối
// console.log(car);
// car.unshift('Toyota'); // Thêm vào đầu
// console.log(car);
// delete car[1]; // loại bỏ chi mục số mấy, tuy nhiên để lại vị trí
// console.log(car);
// car.splice(1,1); // xoá mấy phần tử bắt đầu từ phần tử số 1
// console.log(car);
// car.splice(1,2); // xoá mấy phần tử bắt đầu từ phần tử số 1
// console.log(car);
// car.splice(2,0,'add new1','add new2'); // 2 là chỉ số bắt đầu tạo mảng, 0 là khong xoá phần tử nào, còn lại thêm mới 2 cái
// console.log(car);
// car.splice(2,1,'add new3','add new4'); 
// console.log(car);
// let result = car.slice(0,2); // tạo mảng mới gồm 2 phần tử bắt đầu từ chỉ số 0
// console.log(result);
let result = car.slice(1,3); // tạo mảng mới gồm 2 phần tử bắt đầu từ chỉ số 1
console.log(result);

let sochan = [2,4,6,8];
let sole = [1,3,5,7];
let random = [10,20,30];
let chuoi = sochan.concat(sole,random); // nói chuỗi
console.log(chuoi);