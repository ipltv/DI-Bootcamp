const onlyLettersInput = document.getElementById("onlyLettersInput");

onlyLettersInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\p{L}]/gu, "");
});