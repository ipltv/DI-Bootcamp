function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("John")
    }, 2000);
  });
}

async function case1() {
  let x = await getUsername();
  console.log(x)
}

case1().then(res => console.log(res));
console.log("Nils is the best cat");
