// 1
let array = [1, 2, 3];
array[1] = 10;
console.log(array);


// 2
var Array = ["рядок 1", "рядок 2", "рядок 3"];
Array.push("рядок 4");
console.log(Array);


// 3
let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}
console.log(sum);


// 4
let numbers2 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers2.length; i++) {
    document.write(numbers2[i] + " ");
}


// 5
let strings = ["перший рядок", "другий", "третій", "4", "5"];
for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
        console.log(strings[i]);
    }
}


// 6
let numbers3 = [9, 3, 64, 333, 87, 23, 22, 95, 10, 17];
let maxNumber = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
    if (numbers3[i] > maxNumber) {
        maxNumber = numbers3[i];
    }
}
console.log("Максимальне значення в масиві: " + maxNumber);


// 7
let numbers4 = [9, 3, 64, 333, 87, 23, 22, 95, 10, 17];
console.log("Парні числа в масиві:");

for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] % 2 === 0) {
        console.log(numbers4[i]);
    }
}