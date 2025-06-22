interface Employee {
  name: string;
  age: number;
  role: string;
}

const jhon: Employee = {
  name: "jhon",
  age: 33,
  role: "developer"
}
for (const key in jhon){
  console.log(jhon[key as keyof Employee])
  console.log(jhon[key as keyof typeof jhon])
}


/**
 * Create a function isObj - get a generic type as parameter (arg: T)
 * retrun type { arg, is: true/false}
 */

function isObj<T>(arg: T): { arg: T; is: boolean } {
  return {
    arg,
    is: typeof arg === "object" && arg !== null && !Array.isArray(arg),
  };
}