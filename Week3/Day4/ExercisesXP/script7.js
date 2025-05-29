(function (name) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/50");
    img.style.verticalAlign = "middle";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";
    let span = document.createElement("span");
    span.textContent = `Welcome, ${name}`;

    div.appendChild(img);
    div.appendChild(span);

    document.querySelector("nav").appendChild(div);
})("Nils")