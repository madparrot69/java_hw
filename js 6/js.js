// 1
let num = 0;
while(num < 10){
    num++;
    console.log(num);
}


// 2
for (let i = 1; i <=20; i++){
    if(i % 2){
        continue
    }

    console.log(i);
}


// 3
let number;

for (let i = 1; i <= 10; i++){
    number = 7 * i;
    console.log(number);
}


// 4
const numbers = [1, 2, 3, 4, 5];

let i = 0;
while (i < numbers.length){
    console.log(numbers[i]);
    i++;
}


// 5
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numb.length; i++){
    console.log(numb[i]);

    if(numb[i] === 7){
        break
    }
}


// 6
let n = prompt("enter a number");
let i = 0;

while (i < n){
    console.log(i);
    i++;

    if (i >= n){
        break
    }
}


// 7
let i = 1;

while(i <= 20){
    console.log(i);
    i++;
    if(i % 3 ==0){
        i++;
        continue
    }
}