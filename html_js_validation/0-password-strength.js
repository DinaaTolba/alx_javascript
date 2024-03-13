function validatePassword(password) {
    // Regular expressions for different criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Check each criteria
    const isLengthValid = lengthRegex.test(password);
    const isUppercaseValid = uppercaseRegex.test(password);
    const isLowercaseValid = lowercaseRegex.test(password);
    const isDigitValid = digitRegex.test(password);
    const isSpecialCharValid = specialCharRegex.test(password);

    // Display error message if any criteria is not met
    if (!isLengthValid) {
        return "Password must be at least 8 characters long.";
    } else if (!isUppercaseValid) {
        return "Password must contain at least one uppercase letter.";
    } else if (!isLowercaseValid) {
        return "Password must contain at least one lowercase letter.";
    } else if (!isDigitValid) {
        return "Password must contain at least one numeric digit.";
    } else if (!isSpecialCharValid) {
        return "Password must contain at least one special character.";
    }

    // Return null if all criteria are met
    return null;
}

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const errorParagraph = document.getElementById("error");

    // Validate the password
    const errorMessage = validatePassword(password);

    // Prevent form submission if there's an error
    if (errorMessage !== null) {
        errorParagraph.textContent = errorMessage;
        event.preventDefault(); // Prevent form submission
    } else {
        errorParagraph.textContent = ""; // Clear any previous error message
    }
});
