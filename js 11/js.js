// 1
const bankAccount = {
    ownerName: `Khrystyna`,
    accountNumber: 2463673097257941,
    balance: 25,

    deposit(plus){
        this.balance +=plus;
    },

    withdraw(minus){
        this.balance -= minus;
    },

    getBalance(){
        return this.balance;
    }
}

const btnDeposit = document.querySelector(".btnDeposit");
const btnWithdraw = document.querySelector(".btnWithdraw");

btnDeposit.addEventListener("click", () => {
    const addMoney = Number(document.querySelector(".deposit").value);
    bankAccount.deposit(addMoney);
    console.log(`У вас на рахунку: ${bankAccount.getBalance()}`);
});

btnWithdraw.addEventListener("click", () => {
    const subtractMoney = Number(document.querySelector(".withdraw").value);
    bankAccount.withdraw(subtractMoney);
    console.log(`У вас на рахунку: ${bankAccount.getBalance()}`);
});




// 2
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,

    temp(){
        if(this.temperature < 0){
            return true;
        }
      
            return false
        
    }
}

const btnTemp = document.querySelector(".btnTemp");
btnTemp.addEventListener("click", () => {
    const temp = Number(document.querySelector(".temperature").value);
    weather.temperature = temp;
    if(weather.temp()){
        console.log(`температура нище нуля`);
    }
    else{
    console.log(`температура вище або рівна нулю`);
}
});




// 3
const user = {
    name: "Марія",
    email: "maria@gmail.com",
    password: "4444",

    login(emaill, passwordl){
        if(emaill === this.email && passwordl === this.password){
            return true
            
        }
        else{
            return false
        }

    }

    
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    const nextPass = document.querySelector(".password").value;
    const nextEmail = document.querySelector(".email").value;
    if(user.login(nextEmail, nextPass)){
        alert("Ласкаво просимо");
    }
    else{
        alert("Невірна адреса або пароль");
    }

});



// 4
const movie = {
    title: "TITLE",
    director: "DIRECTOR",
    year: "2023",
    rating: 7,


    ratingAudit(){
        if(this.rating  <= 8){
            return true;
        }
      
            return false
    }

}

document.getElementById("title").textContent = movie.title;
document.getElementById("director").textContent = movie.director;
document.getElementById("year").textContent = movie.year;
document.getElementById("rating").textContent = movie.rating;

if(movie.ratingAudit()){
    document.getElementById("title").style.color = "green";
}