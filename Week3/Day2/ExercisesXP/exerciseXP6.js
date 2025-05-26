const div = document.getElementsByTagName("div").item(0);

div.setAttribute("id", "socialNetworkNavigation");
let newLi = document.createElement("li");
let textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);

const ul = div.querySelector('ul');
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);
