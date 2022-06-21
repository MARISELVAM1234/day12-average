//  let a = [20,30,50];
// b = 0;
// for (i  = 0; i < a.length ; i++ ){
//     b = b+a[i] ;
//     c = b/a.length;

// }
// console.log( "avg of number " , c);



let a = [];
n = parseInt(prompt("Range"));
b = 0;
for (i = 0; i < n; i++) {
    input = parseInt(prompt("Enter the number"));
    console.log("input", input);
    a.push(input);
    b = b + a[i];
}
console.log("total", b);
c = b / n;
console.log("avg of number ", c);