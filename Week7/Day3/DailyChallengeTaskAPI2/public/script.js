const form = document.getElementById("registerForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const first_name = form.firstName.value;
    const last_name = form.lastName.value;
    const email = form.email.value;

    try {     
        const response = await axios.post('/register', {
            email,
            username,
            first_name,
            last_name,
            password
        });

        console.log("Success", response.data);
        showResponse("Done! You are registered now!", "ok");

    } catch (error) {
        const errorText = error.response?.data || error.message;
        console.log("Register data sending error: ", errorText);
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