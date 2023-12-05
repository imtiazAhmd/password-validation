import { revealPassword, handlePasswordInput } from './password_validation.js';

// Add a click event listener to the reveal-icon element.
// When the reveal-icon element is clicked, the revealPassword function is called.
document.getElementById("reveal-icon").addEventListener("click", revealPassword);

// Initially hide the password rules.
document.getElementById("passwordRules").style.display = "none";

// Add an input event listener to the password field.
// This event is fired every time the user types into the field.
document.getElementById("passwordField").addEventListener("input", handlePasswordInput);