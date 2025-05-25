const numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString())
console.log(numbers.join("+"))

let sorted_arr = numbers.slice(0)
for (let i = 0; i < sorted_arr.length-1; i++){
    for (let j = 0; j < sorted_arr.length - i - 1; j++){
        if (sorted_arr[j] < sorted_arr[j + 1]){
            sorted_arr[j] = sorted_arr[j] + sorted_arr[j + 1];
            sorted_arr[j + 1] = sorted_arr[j] - sorted_arr[j + 1];
            sorted_arr[j] = sorted_arr[j] - sorted_arr[j + 1];
        }
    }
}
console.log(sorted_arr)