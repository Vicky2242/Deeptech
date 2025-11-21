// function greet(){
//     console.log("Welcome to Js");
// }

// greet();

// function calculateBill(price, tax){
//     let total=price+(price*tax)/100;
//     return total;
// }

// let finalBill = calculateBill(1000, 10);
// console.log(finalBill);


function banking(bal, withdraw){
    bal -= withdraw;
    return  bal;
}

let finalBal = banking(500, 1500);
console.log("Available balance:" +finalBal);

// if(bal<withdraw){
//     console.log("Please try some other amount");
// }else if(bal>withdrawl){
//     console.log("withdrawl successful")
// }else{
//     console.log("Please try again.")
// }

// const greet=() => {
//     console.log("Welcome to JS");
// }

// greet();

// const add =(a, b)=> {
//     return a+b;
// }

// console.log(add(10,20));
