const quotesArr = [
    {
        id: 0,
        author: "Plato",
        likes: 0,
        quote: "If you do not take an interest in the affairs of your government, then you are doomed to live under the rule of fools."
    },
    {
        id: 1,
        author: "Plato",
        likes: 0,
        quote: "The beginning is the most important part of the work."
    },
    {
        id: 2,
        author: "Benjamin Franklin",
        likes: 0,
        quote: "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety."
    },
    {
        id: 3,
        author: "Benjamin Franklin",
        likes: 0,
        quote: "Tell me and I forget, teach me and I may remember, involve me and I learn."
    },
    {
        id: 4,
        author: "Marie Curie",
        likes: 0,
        quote: "Nothing in life is to be feared, it is only to be understood."
    },
    {
        id: 5,
        author: "Marie Curie",
        likes: 0,
        quote: "Be less curious about people and more curious about ideas."
    },
    {
        id: 6,
        author: "Alan Turing",
        likes: 0,
        quote: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine."
    },
    {
        id: 7,
        author: "Alan Turing",
        likes: 0,
        quote: "Machines take me by surprise with great frequency."
    },
    {
        id: 8,
        author: "Albert Einstein",
        likes: 0,
        quote: "I never think of the future. It comes soon enough."
    },
    {
        id: 9,
        author: "Albert Einstein",
        likes: 0,
        quote: "Imagination is more important than knowledge."
    },
    {
        id: 10,
        author: "Sun Tzu",
        likes: 0,
        quote: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win."
    },
    {
        id: 11,
        author: "Sun Tzu",
        likes: 0,
        quote: "In the midst of chaos, there is also opportunity."
    },
    {
        id: 12,
        author: "Leonardo da Vinci",
        likes: 0,
        quote: "The noblest pleasure is the joy of understanding."
    },
    {
        id: 13,
        author: "Leonardo da Vinci",
        likes: 0,
        quote: "Learning never exhausts the mind."
    },
    {
        id: 14,
        author: "George Orwell",
        likes: 0,
        quote: "If liberty means anything at all, it means the right to tell people what they do not want to hear."
    },
    {
        id: 15,
        author: "George Orwell",
        likes: 0,
        quote: "The most effective way to destroy people is to deny and obliterate their own understanding of their history."
    },
    {
        id: 16,
        author: "Carl Sagan",
        likes: 0,
        quote: "Somewhere, something incredible is waiting to be known."
    },
    {
        id: 17,
        author: "Carl Sagan",
        likes: 0,
        quote: "We are made of star-stuff."
    },
    {
        id: 18,
        author: "Adam Smith",
        likes: 0,
        quote: "Science is the great antidote to the poison of enthusiasm and superstition."
    },
    {
        id: 19,
        author: "Adam Smith",
        likes: 0,
        quote: "No society can surely be flourishing and happy, of which the far greater part of the members are poor and miserable."
    }
];

function displayQuoteById(quoteID) {
    lastQuoteId = quoteID;
    section.replaceChildren();

    const p = document.createElement('p');
    p.innerText = quotesArr[quoteID].quote;
    section.appendChild(p);

    const i = document.createElement('i');
    i.innerText = quotesArr[quoteID].author;
    section.appendChild(i);

    quoteInfo.replaceChildren();
}

function generateRandomQuote() {
    let rndQuoteID;
    do {
        rndQuoteID = Math.floor(Math.random() * quotesArr.length);
    } while (rndQuoteID === lastQuoteId)
    displayQuoteById(rndQuoteID);
}

function displayCharactersCount(isWithSpaces) {
    if (lastQuoteId < 0) return;
    let displayCount = isWithSpaces ? quotesArr[lastQuoteId].quote.length
        : quotesArr[lastQuoteId].quote.replace(/\s/g, "").length;
    let displayText = isWithSpaces ? "The number of character inside the quote (space included): "
        : "The number of character inside the quote (space NOT included): ";
    quoteInfo.innerText = displayText + displayCount;
}

function displayWordCount() {
    if (lastQuoteId < 0) return;
    let wordCount = quotesArr[lastQuoteId].quote.split(/\s+/).length;
    quoteInfo.innerText = "Total words:" + wordCount;
}

function likeQuote() {
    if (lastQuoteId < 0) return;
    quotesArr[lastQuoteId].likes += 1;
    quoteInfo.innerText = "You liked this quote. \nTotal likes: " + quotesArr[lastQuoteId].likes;
}

function addQuote(e) {
    e.preventDefault();
    let newQuote = addQuoteForm.elements.userQuoteInput.value;
    let author = addQuoteForm.elements.userQuoteAuthorInput.value;

    if (!newQuote || !author)
        return;
    else {
        quotesArr.push({
            id: quotesArr.length,
            author: author,
            likes: 0,
            quote: newQuote
        })
        alert("New quote added:\n" + quotesArr[quotesArr.length - 1].quote + "\nby " + quotesArr[quotesArr.length - 1].author)
        addQuoteForm.elements.userQuoteInput.value = "";
        addQuoteForm.elements.userQuoteAuthorInput.value = "";
    }
}

function filterQuote(e) {
    e.preventDefault();
    let author = filterForm.elements.filtredAuthor.value.trim().toLowerCase();
    for (let quoteItem of quotesArr) {
        if (author === quoteItem.author.toLowerCase()) {
            filteredQuoteID = quoteItem.id;
            displayQuoteById(filteredQuoteID);
            break;
        }
    }
}

function isFilterAvailable() {
    return filteredQuoteID !== -1
}

function moveFilteredQuote(key) {
    if (isFilterAvailable()) {
        let quoteIndex = quotesArr.indexOf(quotesArr[filteredQuoteID]);
        let author = quotesArr[quoteIndex].author;
        let loopShift = key.toLowerCase() === "next" ? 1 : -1;

        let i = quoteIndex;
        do {
            i += loopShift;
            if (i < 0) i = quotesArr.length - 1;
            if (i >= quotesArr.length) i = 0;

            if (quotesArr[i].author === author) {
                filteredQuoteID = quotesArr[i].id;
                displayQuoteById(filteredQuoteID);
                return;
            }
        } while (i !== quoteIndex);
    }
}

const generateBtn = document.getElementById("generateBtn");
const section = document.querySelector("section");
const quoteInfo = document.getElementById("quoteInfroParagraph");
const addQuoteForm = document.getElementById("addQuoteForm");
const filterForm = document.getElementById("filterForm");

let lastQuoteId = -1;
let filteredQuoteID = -1;

generateBtn.addEventListener("click", generateRandomQuote);
document.getElementById("chrWithSpacesBtn").addEventListener("click", () => displayCharactersCount(true));
document.getElementById("chrNoSpacesBtn").addEventListener("click", () => displayCharactersCount(false));
document.getElementById("wordCountBtn").addEventListener("click", displayWordCount);
document.getElementById("likeBtn").addEventListener("click", likeQuote);
addQuoteForm.addEventListener("submit", (e) => addQuote(e));
filterForm.addEventListener("submit", (e) => filterQuote(e));
filterForm.querySelector('input[type="button"][value="Next"]').addEventListener("click", () => moveFilteredQuote("next"));
filterForm.querySelector('input[type="button"][value="Previous"]').addEventListener("click", () => moveFilteredQuote("previous"));