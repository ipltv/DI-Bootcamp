// /** get element */
// // innerHTML / innerText / textContent

// /** attributes */

// // const img = document.querySelector('img');
// // console.log(img);

// // img.src = "https://developers.institute/wp-content/uploads/2024/02/5K0A9518-1024x683.jpeg"
// // img.width = "200"
// // img.style.border = "1px solid red"

// // /** setAttribute / getAttribute */

// // let imgSrc = img.getAttribute("style");
// // console.log(imgSrc);

// // const root = document.getElementById("root");
// // console.log(root.getAttribute("id"));

// // root.setAttribute("class", "box");

// /** children */

// // const root = document.getElementById("root");
// // // console.log(root.children);

// // // console.log(root.firstElementChild, root.lastElementChild);

// // const h2 = root.children[0];
// // console.log(h2)

// // let body = document.body;
// // console.log(body);

// // let forms = document.forms.myform
// // console.log(forms.elements.fname);

// /** removeChild */
// const root = document.getElementById("root");
// const myimg = root.children[1];

// console.log(myimg);

// // root.removeChild(myimg);

// /** ReplaceElement(new, old) */

// const h2 = root.children[0];
// const p = root.children[2];
// console.log(h2, p);

// root.replaceChild(p, h2);
// root.appendChild(h2);

// const page = document.getElementById("page");

// const firstCh = page.firstElementChild;
// const lastCh = page.lastElementChild;

// console.log("First and last children: ", firstCh, lastCh);

// const nextSib = firstCh.nextElementSibling;
// console.log("Next sibling from first child: ", nextSib);

// const prevSib = lastCh.previousElementSibling;
// console.log("Previous sibling from last child: ", prevSib);

// const parentNode = lastCh.parentNode;
// console.log("Parent Node of the last child: ", parentNode);

// const childNodes = parentNode.childNodes;
// console.log("Child nodes of parent node: ", childNodes);

function btnClick(){
    console.log("button was click");
    
}

function getValueFromInput(){
    const input = document.querySelector("input");
    console.log(input.value)
}