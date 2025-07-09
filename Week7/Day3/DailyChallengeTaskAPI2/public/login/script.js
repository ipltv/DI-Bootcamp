const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        const response = await axios.post('/login', {
            username,
            password
        });

        console.log("Success", response.data);
        showResponse(`Done! ${username}, you are authorized now!`, "ok");

    } catch (error) {
        const errorText = error.response?.data || error.message;
        console.log("Login error: ", errorText);
        showResponse(errorText.msg, "error");
    }
});

const showResponse = (text, result = "ok") => {
    const pElement = document.getElementById('response');
    if (result === "ok") {
        pElement.classList.add("ok");
        pElement.classList.remove("error");
    } else {
        pElement.classList.add("error");
        pElement.classList.remove("ok");
    }
    pElement.classList.add("visible");
    pElement.classList.add("hidden");;
    pElement.innerText = text;

    setTimeout(() => {
        pElement.innerText = "";
        pElement.classList.remove("visible");
        pElement.classList.add("hidden");;
    },
        4000);
};