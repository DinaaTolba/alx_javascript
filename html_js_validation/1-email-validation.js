function validateEmail(email) {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email format is valid
    if (emailRegex.test(email)) {
        return true; // Email format is valid
    } else {
        return false; // Email format is invalid
    }
}

document.getElementById("emailForm").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const errorParagraph = document.getElementById("error");

    // Validate the email
    const isValidEmail = validateEmail(email);

    // Prevent form submission if email format is invalid
    if (!isValidEmail) {
        errorParagraph.textContent = "Please enter a valid email address.";
        event.preventDefault(); // Prevent form submission
    } else {
        errorParagraph.textContent = ""; // Clear any previous error message
    }
});
