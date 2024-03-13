// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form field values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Check if required fields are filled
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Display success message
    alert("Form submitted successfully!");
}

// Event listener for form submission
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
