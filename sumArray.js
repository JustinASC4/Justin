function sumArr(a,b) {

for (var i=0; i < a.length; i++){
var sumA = []
sumA.push(a[0][i] + a[1][i]);
}


for (var i=0; i < b.length; i++){
var sumB = []
sumB.push(b[0][i] + b[1][i]);
}

return sumA;
console.log(sumA);
console.log(sumB);
}