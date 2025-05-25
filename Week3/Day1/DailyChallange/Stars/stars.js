const row_count = 6
// by using one loop
for (let i = 1; i <= row_count; i++ ){
    console.log("* ".repeat(i))
}

// by using two nested for loops
for (let i = 1; i <= row_count; i++ ){
    let result_string = ""
    for (let j = 1; j <= i; j++){
        result_string += "* "
    }
    console.log(result_string)
}