// Validation Function
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.querySelector("input[placeholder='First Name']");
    const lastName = document.querySelector("input[placeholder='Last Name']");
    const email = document.querySelector("input[placeholder='Email Address']");
    const password = document.querySelector("input[placeholder='Password']");

    let isValid = true;

    // Reset error messages
    document.querySelectorAll(".error").forEach(el => el.remove());

    // First Name Validation
    if (!firstName.value.trim()) {
        showError(firstName, "First name is required");
        isValid = false;
    }

    // Last Name Validation
    if (!lastName.value.trim()) {
        showError(lastName, "Last name is required");
        isValid = false;
    }

    // Email Validation
    if (!email.value.trim()) {
        showError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Enter a valid email address");
        isValid = false;
    }

    // Password Validation
    if (!password.value.trim()) {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.trim().length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.querySelector("form").reset(); // Reset form fields
    }
}

// Show Error Function
function showError(input, message) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = message;
    error.style.color = "red";
    error.style.fontSize = "12px";
    error.style.marginTop = "5px";
    input.parentElement.appendChild(error);
}

// Email Validation Helper
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Attach the validation to the form submit event
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".container");
    form.addEventListener("submit", validateForm);
});
