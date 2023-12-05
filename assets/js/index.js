import { revealPassword, validatePassword } from './password_validation.js';

// Define the HTML for the check and cross icons.
const checkIcon = '<i class="bi bi-check"></i>';
const xIcon = '<i class="bi bi-x"></i>';

// Add a click event listener to the reveal-icon element.
// When the reveal-icon element is clicked, the revealPassword function is called.
document.getElementById("reveal-icon").addEventListener("click", revealPassword);

// Initially hide the password rules.
document.getElementById("passwordRules").style.display = "none";

// Add an input event listener to the password field.
// This event is fired every time the user types into the field.
document.getElementById("passwordField").addEventListener("input", function () {
    // Get the password from the password field.
    const password = this.value;

    // If the password is empty, hide the password rules and return.
    if (password === '') {
        document.getElementById("passwordRules").style.display = "none";
        return;
    }
    // Show the password rules when the user starts typing.
    document.getElementById("passwordRules").style.display = "block";


    // Validate the password using the validatePassword function.
    // This function checks if the password meets several conditions and returns an object with the results.
    const validationResults = validatePassword(password);

    // Map the validation results to the corresponding li elements.
    // This object is used to find the li element that corresponds to each validation result.
    const validationToLiIdMap = {
        hasValidLength: "lengthRule",
        hasCapitalLetter: "uppercaseRule",
        hasLowerCaseLetter: "lowercaseRule",
        hasNumber: "numberRule",
        hasUnderscore: "specialRule"
    };

    // Update the innerHTML of each li element based on the corresponding validation result.
    for (const [validation, result] of Object.entries(validationResults)) {
        const li = document.getElementById(validationToLiIdMap[validation]);
        li.querySelector('span').innerHTML = result ? checkIcon : xIcon;
    }
});