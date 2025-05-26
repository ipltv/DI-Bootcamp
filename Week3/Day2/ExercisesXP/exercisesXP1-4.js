// Exercise 1 : Find the numbers divisible by 23
console.log("--------Exercise 1--------")

function displayNumbersDivisible(divisor){
    let numbers = []
    let sum = 0
    if (typeof divisor !== "number" || divisor === 0) {
        console.log("Invalid divisor");
        return;
    }
    for (let i = 0; i <= 500; i++){
        if (i % divisor === 0){
            numbers.push(i)
            sum += i
        }
    }
    console.log(`Outcome displayNumbersDivisible(${divisor}): ` + numbers.join(" "))
    console.log("Sum: ", sum)
}


displayNumbersDivisible(23)


// Exercise 2 : Shopping List
console.log("--------Exercise 2--------")

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill(shoppingList){
    let totalPrice = 0
    for (item of shoppingList){
        if (item in stock && stock[item] > 0){
            stock[item] -= 1;
            totalPrice += prices[item]
        }
    }
    return totalPrice;
}

console.log("Stock state: ", stock)
console.log("Your cart: ", shoppingList.join(", "))
console.log("Total price of your cart: ", myBill(shoppingList))
console.log("Stock state after your purchase: ", stock)

//Exercise 3 : What’s in my wallet ?
console.log("--------Exercise 3--------")

function changeEnough(itemPrice, amountOfChange){
    let sumOfChange = 0;
    for (let i = 0; i < 4; i++){
        switch (i) {
            case 0:
                sumOfChange += amountOfChange[0] * 0.25
                break;
            case 1:
                sumOfChange += amountOfChange[1] * 0.1
                break;
            case 2:
                sumOfChange += amountOfChange[2] * 0.05
                break;
            case 3:
                sumOfChange += amountOfChange[3] * 0.01
                break;
            default:
                break;
        }
    }
    console.log(sumOfChange)
    if (sumOfChange>=itemPrice) return true;
    else return false;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(0.75, [0,0,20,5]))

//Exercise 4 : Vacations Costs
console.log("--------Exercise 4--------")

function hotelCost(nightCount) {
    return 140 * nightCount;
}

function planeRideCost(destination) {
    switch (destination.trim().toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost(days) {
    let cost = 40 * days;
    if (days > 10) cost *= 0.95;
    return Math.round(cost);
}

function totalVacationCost(){
    let nights, destination, days;

    do {
        nights = parseInt(prompt("How many nights will you stay in the hotel?"), 10);
    } while (isNaN(nights) || nights <= 0);

    do {
        destination = prompt("What is your destination?");
    } while (!destination || destination.trim() === "");

    do {
        days = parseInt(prompt("How many days will you rent a car?"), 10);
    } while (isNaN(days) || days <= 0);

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return hotel + plane + car;
}

console.log(totalVacationCost())
