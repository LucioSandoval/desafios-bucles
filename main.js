console.log("=========> impares del 1 al 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

i = 100;
console.log("===========> disminuir multiplos de 3 ");
while(i >=0){
    if(i % 3 == 0){
        console.log(i);
    }
    i--
}

let num = 4;
console.log("===========> secuencia")
while (num >= -3.5) {
    console.log(num);
    num -= 1.5;
}


let sum = 0;
console.log("========> suma")
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

let producto = 1;
console.log("=========> factorial")
for (let i = 1; i <= 12; i++) {
    producto *= i;
}
console.log(producto);