let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                     
const displayGroceries = () => {
    groceries.fruits.forEach((element) => console.log(element));
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    let shopping = { ...groceries };
    shopping.totalPrice = "35$"; //Not effected on groceries
    shopping.other.paid = false; //Also effected on groceries
    console.log("User:", user); // "John"
    console.log("Client:", client); // "Betty"
    console.log("Groceries totalPrice:", groceries.totalPrice); // "20$"
    console.log("Groceries paid:", groceries.other.paid); // false (changed!)
}
displayGroceries();
cloneGroceries();
