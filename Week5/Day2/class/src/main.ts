let num: number = 1;
num = 4;

/** type string */
let str: string;
str = 'abc'

/** type boolean */
let bol: boolean;
bol = true;

/** any - try not to use it much as possible*/
let a: any;
a = 0;
a = "a";

/** union type */
let myStrNum : string | number | boolean;
myStrNum = 0;
myStrNum = "asd";
myStrNum = true;

/** type array */
let arr: string[] = ["1", "2", "3"];
arr.push("100");

let arrStrNum: (string | number)[] = [];
arrStrNum[0] = 1;
arrStrNum.push("a");
// arrStrNum.push(true);

//** type tuple */
// let myTuple: [string, number, string, boolean] = ["1", 1, "str", true];
type myTuple = [string, number, string, boolean];
// let arr1: myTuple = ["a", 2, false, "b"];
let arr2: myTuple = ["a", 2, "b", false];

//** type object */
let myObj: object = {};
myObj = [];
console.log(typeof []);
const user = {
    name: "Jhon",
    age: 25
};
// user.email = "jjj@gmail.com";
user.age = 26;

/** type /interface */
type MyString = string | number;
let url: MyString = "http...";
let url1: string = "https...";

type User = {
    name: string,
    age: number;
    gender?: string | number
};

let userJhon: User = {
    name: "Jhon",
    age: 25
};
console.log(userJhon.gender);

userJhon.gender = 0;

let userMarry: User = {
    name: "Marry",
    age: 23,
    gender: "F"
};

/** interface */
interface UserI {
    name: string,
    age: number;
    gender?: string | number
}

type UserA = UserI | User;

let userDan: UserI = {
    name: "Dan",
    age: 22,
    gender: "M"
};

/** type Enum */
enum Grade {
    U = "60",
    D = "70",
    C = "80",
    B = "90",
    A = "100"
}

console.log(Grade.A);

/** type literal */
type status = "failed" | "loading" | "success";
let statuscode: status;

statuscode = "failed";

/** type Aliases */

type NumberOrString  = number | string | null;
type NumberOrStringOrBoolean = NumberOrString | boolean;

type NewUser = {
    name : NumberOrString
}

type Gender = "male" | "female" | "other";
type Student = {
    name: string,
    grade: Grade,
    gender: Gender,
    status: status
}
let student1: Student = {
    name: "Trump",
    grade: Grade.U,
    gender: "other",
    status: "failed"
}