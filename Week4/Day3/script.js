let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bert",
    email: "sen@april.biz",
    age: undefined,
    getName: function (){

    },
    password: "123$43235"
}

console.log(user);

/**
 * JSON.stringify(obj - mandatory, filter function, indent/prety)
 */

const finlterMyJson = (key, value) => {
    if (key === "password") return undefined;
    return value;
}

let userJSON = JSON.stringify(user, finlterMyJson,1);
console.log(userJSON);

let userFromJson = `{
 "id": 1,
 "name": "Leanne Graham",
 "username": "Bert",
 "email": "sen@april.biz"
}`;

/**
 * JSON.parse
 */

console.log(JSON.parse(userFromJson));