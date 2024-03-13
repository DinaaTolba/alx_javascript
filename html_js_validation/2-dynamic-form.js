// Function to generate dynamic input fields
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear existing fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate form before submission
function validateForm(event) {
    const inputFields = document.querySelectorAll("#inputContainer input");

    // Check if any field is empty
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            alert("Please fill in all fields.");
            event.preventDefault(); // Prevent form submission
            return;
        }
    }
}

// Event listener for form submission
document.getElementById("dynamicForm").addEventListener("submit", validateForm);

// Event listener for dropdown menu change
document.getElementById("numFields").addEventListener("change", function() {
    const numFields = parseInt(this.value);
    generateInputFields(numFields);
});

// Initialize dynamic fields based on initial dropdown value
const initialNumFields = parseInt(document.getElementById("numFields").value);
generateInputFields(initialNumFields);
