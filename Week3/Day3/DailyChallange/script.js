const templates = [
    "One day, [person] decided to [verb] at the [place] with a [adjective] [noun].",
    "Everyone knew that [person] kept a [noun] in the [place], because it was too [adjective] to [verb] at home.",
    "When the [place] suddenly disappeared, only a [adjective] [noun] and [person] could [verb] it.",
    "Yesterday, [person] bought a [adjective] [noun] and decided to [verb] with it right at the [place].",
    "Nobody expected the [noun] to be so [adjective] when [person] started to [verb] in the [place].",
    "[person] always wanted to [verb], and [person] finally did it at the [place].",
    "The [adjective] [noun] was not just any [noun]; it belonged to [person]!",
    "In the middle of the [place], [person] screamed, '[verb]! [verb] like there's no tomorrow!'",
    "To [verb] a [noun] in a [place] takes a very [adjective] [person].",
    "[person] found a [noun] at the [place], and that [noun] changed [person]'s life."
]


function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function collectUserInput() {
    return {
        "[noun]": document.getElementById('noun').value.trim(),
        "[adjective]": document.getElementById('adjective').value.trim(),
        "[person]": document.getElementById('person').value.trim(),
        "[verb]": document.getElementById('verb').value.trim(),
        "[place]": document.getElementById('place').value.trim()
    };
}

//Return random template from the list.
function getRndTemplate(templates) {
    return templates[Math.floor(Math.random() * templates.length)];
}

//Replace placeholders in template with correspond value from user's input.
function getRndStory(userInput) {
    let story = getRndTemplate(templates);
    for (let word in userInput) {
        const escapedWord = escapeRegExp(word);
        const regex = new RegExp(escapedWord, "g");
        story = story.replace(regex, userInput[word]);
    }
    return story;
}

function displayStory(userInput) {
    let story = getRndStory(userInput);
    const storySpan = document.getElementById("story");
    storySpan.textContent = story;
}


const form = document.querySelector("form");
const shuffleBtn = document.createElement("button");
shuffleBtn.setAttribute("type", "button");
shuffleBtn.setAttribute("id", "shuffle-button");
shuffleBtn.disabled = true;
shuffleBtn.innerText = "Shuffle It!"
form.appendChild(shuffleBtn);

let userInput = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    userInput = collectUserInput();
    for (let input in userInput) {
        if (!userInput[input]) {
            alert("Please fill in all the fields to generate a story.");
            return;
        }
    }
    shuffleBtn.disabled = false;
    displayStory(userInput);
})

shuffleBtn.addEventListener("click", () => {
    if (Object.keys(userInput).length === 0) {
        return;
    }
    displayStory(userInput);
})

