// This function is used to toggle the visibility of the password in a password field.
export function revealPassword() {
  // Get the password field element by its ID.
  const passwordField = document.getElementById("passwordField");

  // Check the current type of the password field.
  // If it's "password", change it to "text". This will reveal the password characters.
  // If it's not "password" (which means it's "text"), change it back to "password". This will hide the password characters.
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// This function is used to validate the password.
function validatePassword(password) {
  // Check if the password length is 8 or more.
  const hasValidLength = password.length >= 8;
  // Check if the password contains at least one uppercase letter.
  // The regular expression /[A-Z]/ tests for uppercase letters.
  const hasCapitalLetter = /[A-Z]/.test(password);
  // Check if the password contains at least one lowercase letter.
  // The regular expression /[a-z]/ tests for lowercase letters.
  const hasLowerCaseLetter = /[a-z]/.test(password);
  // Check if the password contains at least one number.
  // The regular expression /\d/ tests for numbers.
  const hasNumber = /\d/.test(password);
  // Check if the password contains at least one underscore.
  // The regular expression /_/ tests for underscores.
  const hasUnderscore = /_/.test(password);
  // Return an object with the results of the checks.
  // Each property in the object corresponds to a validation check,
  // and its value is a boolean indicating whether the password meets that condition.
  return { hasValidLength, hasCapitalLetter, hasLowerCaseLetter, hasNumber, hasUnderscore };
}

// This function is used to handle the input event of the password field.
export function handlePasswordInput() {
  // Get the password from the password field.
  const password = document.getElementById("passwordField").value;

  // If the password is empty, hide the password rules and return.
  if (password === '') {
    document.getElementById("passwordRules").style.display = "none";
    return;
  }

  // Show the password rules when the user starts typing.
  document.getElementById("passwordRules").style.display = "block";

  // Validate the password.
  const validationResults = validatePassword(password);

  // Map the validation results to the corresponding li elements.
  const validationToLiIdMap = {
    hasValidLength: "lengthRule",
    hasCapitalLetter: "uppercaseRule",
    hasLowerCaseLetter: "lowercaseRule",
    hasNumber: "numberRule",
    hasUnderscore: "specialRule",
    hasSpecialCharacter: "specialRule"
  };

  // Update the innerHTML of each li element based on the corresponding validation result.
  for (const [validation, result] of Object.entries(validationResults)) {
    const li = document.getElementById(validationToLiIdMap[validation]);
    li.querySelector('span').innerHTML = result ? '<i class="bi bi-check"></i>' : '<i class="bi bi-x"></i>';
  }
}