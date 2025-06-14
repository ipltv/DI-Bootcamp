// Daily Challenge: Type Guard with Union Types

type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

function handleData(array: (User | Product | Order)[]): string[] {
    let result: (string)[] = array.map(item => {
        switch (item.type) {
            case "user":
                return (`Hi, ${item.name}! Your age is ${item.age}`);
            case "product":
                return (`Product info\nID:${item.id}\nPrice:${item.price}`);
            case "order":
                return (`Order info\nID:${item.orderId}\nAmount:${item.amount}`);
            default:
                const _exhaustiveCheck: never = item;
                return _exhaustiveCheck;
        }
    })
    return result;
}

const testData: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'A123', amount: 3 },
];

const result = handleData(testData);
console.log(result);
