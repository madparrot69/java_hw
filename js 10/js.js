// 1
const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => {
    alert(`hello world`);
});



// 2
const inputValue = document.querySelector(`#guessField`);

const pText = document.querySelector(`#guessResult`);

const checkGuess = () => {
    let rndNumber = Math.floor(Math.random() * 99 + 1);
    if(rndNumber == +inputValue.value){
        pText.textContent = `Ви вгадали число!`;
    } else {
        pText.textContent = `Ви не вгадали, спробуйте ще раз!`;
    }
    console.log(rndNumber);
};




// 3
let counter = 0;
document.addEventListener(`click`, () => {
    counter++;
    console.log(`на сторінку натиснули ${counter} разів`);
});



// 4
const applyCallbackToEachEkement = (arr, callback) => {
    const arrayNumber = [];
    for(const number of arr){
        arrayNumber.push(callback(number));
    }
    return arrayNumber;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) => {
    return number ** 2;
};

const result = applyCallbackToEachEkement(arr, squareCallback);
console.log(result);



// 5
const calculateDiscountPrice = (price, discount, callback)=>{
    const calcDiscountPrice = (price * discount) / 100;
    const DiscountPrice = (price - calcDiscountPrice);
    callback(DiscountPrice);
};

const showDiscountPrice = (calculateDiscountPrice) => {
    console.log(`ціна зі знижкою: ` + calculateDiscountPrice);
};

calculateDiscountPrice(865, 35, showDiscountPrice);