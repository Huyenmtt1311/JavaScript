/* đây là 1 khối lệnh được định nghĩa để thực thi 1 tác vụ cụ thể, nó cho phép nhóm các câu lệnh với nhau rồi đặt tên cho nó
sau đó gọi khi cần thiết để thực hiện tác vụ */
function tinhtong(a,b){
    return(a+b);
}
function phepnhan(a,b){
    return(a*b);
}
let result = tinhtong(2,3);
console.log('result: ', result);
let result1 = phepnhan(3,3);
console.log('result: ', result1);