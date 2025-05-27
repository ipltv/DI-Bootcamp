const article = document.querySelector("article");
const h1 = article.firstElementChild
console.log(h1);

article.lastElementChild.remove();
console.log("Removed the last paragraph in the <article> tag");

const h2 = article.getElementsByTagName("h2")[0];
h2.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "red";
})

h1.addEventListener("mousemove", (e) => {
    e.target.style.fontSize = Math.floor(Math.random() * 81 + 20) + "px";
})

const h3 = article.getElementsByTagName("h3")[0];
h3.addEventListener("click", (e) => {
    e.target.style.display = "none";
})

const secondP = article.getElementsByTagName("p")[1];
secondP.addEventListener("mouseenter", (e) => {
    e.target.classList.add("fade-out");
});

const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", () => {
    const allParagraphs = article.getElementsByTagName("p");
    for (let p of allParagraphs) {
        p.style.fontWeight = "bold";
    }
});