let userJhon = {
    name : "Jhon",
    age: 25,
    address: {
        city : "Tel Aviv"
    },
    grades:[76,78,96]
}

let userAnne = {...userJhon};
userAnne.address = {...userJhon.address};
userAnne.name = "Anne";
userAnne.age = 29;
userAnne.address.city = "Haifa";

console.log(userJhon, userAnne);
