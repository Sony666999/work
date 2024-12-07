const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

const showError = (field, errorText) => {
    field.classList.add("error"); 
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text"); 
    errorElement.innerText = errorText; 
    field.closest(".form-group").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    let hasError = false; 
    if (fullname === "") {
        showError(fullnameInput, "Введите ваше имя");
        hasError = true;
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Введите корректный адрес электронной почты");
        hasError = true;
    }
    if (password === "") {
        showError(passwordInput, "Введите ваш пароль");
        hasError = true; 
    }
    if (date === "") {
        showError(dateInput, "Выберите вашу дату регистрации");
        hasError = true; 
    }
    if (gender === "") {
        showError(genderInput, "Выберите ваш пол");
        hasError = true;
    }

    if (hasError) return;

    form.submit();
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

form.addEventListener("submit", handleFormData);
