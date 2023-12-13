let previousPassword = '';
// Map the validation results to the corresponding li elements id.
const validationToLiIdMap = {
  hasValidLength: "lengthRule",
  hasCapitalLetter: "uppercaseRule",
  hasLowerCaseLetter: "lowercaseRule",
  hasNumber: "numberRule",
  hasUnderscore: "specialRule",
  hasSpecialCharacter: "specialRule"
};
const checkMark = '<i class="bi bi-check"></i>';
const xMark = '<i class="bi bi-x"></i>';

/**
 * Toggles the input type of a password field.
 *
 * This function checks the current input type of the password field:
 * - If it's "password", it changes it to "text". This will reveal the password characters.
 * - If it's not "password" (which means it's "text"), it changes it back to "password". This will hide the password characters.
 *
 * @param {string} currentType - The current input type of the password field.
 * @returns {string} - The new input type for the password field.
 */
function toggleInputType(currentType) {
  return currentType === 'password' ? 'text' : 'password';
}
/**
 * Toggles the visibility of the password in the password field.
 *
 * This function performs the following steps:
 * - Retrieves the password field element by its ID.
 * - Checks if the password field exists.
 * - If it exists, it toggles the input type of the password field between 'password' and 'text' using the `toggleInputType` function.
 * This effectively reveals and hides the password in the password field.
 */
export function revealPassword() {
  const passwordField = document.getElementById("passwordField");

  if (passwordField) {
    passwordField.type = toggleInputType(passwordField.type);
  }
}

/**
 * Validates a password based on several rules.
 *
 * The function checks if the password:
 * - Has a length of 8 or more characters.
 * - Contains at least one uppercase letter.
 * - Contains at least one lowercase letter.
 * - Contains at least one number.
 * - Contains at least one underscore.
 *
 * Each check is performed using a combination of JavaScript string methods and regular expressions.
 * The results of the checks are returned as an object, where each property corresponds to a validation rule,
 * and its value is a boolean indicating whether the password meets that rule.
 *
 * @param {string} password - The password to validate.
 * @returns {Object} - An object mapping validation rules to their results.
 */
export function validatePassword(password) {
  const hasValidLength = password.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasLowerCaseLetter = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUnderscore = /_/.test(password);

  return { hasValidLength, hasCapitalLetter, hasLowerCaseLetter, hasNumber, hasUnderscore };
}

/**
 * Determines the display style for the password rules based on the given password.
 * If the password is an empty string, it returns 'none', hiding the password rules.
 * Otherwise, it returns 'block', showing the password rules.
 *
 * @param {string} password - The password input.
 * @returns {string} - The display style ('none' or 'block').
 */
function getDisplayStyle(password) {
  return password === '' ? 'none' : 'block';
}

/**
 * Updates the display of the password rules based on the given password.
 * It first calculates the new display style using the `getDisplayStyle` function.
 * Then, it applies this new style to the element with the ID "passwordRules".
 * Finally, it logs a message to the console indicating that the function was called and the length of the password.
 *
 * @param {string} password - The password input.
 */
function updatePasswordRulesDisplay(password) {
  const newDisplayStyle = getDisplayStyle(password);
  document.getElementById("passwordRules").style.display = newDisplayStyle;
}

/**
 * Checks the length of the password and updates the display to toggle the password rule.
 * If the password has just become non-empty or just become empty, it calls `updatePasswordRulesDisplay`.
 * It then updates `previousPassword` with the current password.
 *
 * @param {HTMLInputElement} passwordField - The password input field.
 */
function checkPasswordLengthAndUpdateDisplayToTogglePasswordRule(passwordField) {
  const password = passwordField ? passwordField.value : '';
  if ((previousPassword.length === 0 && password.length > 0) ||
    (previousPassword.length > 0 && password.length === 0)) {
    updatePasswordRulesDisplay(passwordField.value);
  }
  previousPassword = password;
}
/**
 * Updates the icons for the password rules based on the given validation results.
 * It iterates over each validation result, and for each one, it finds the corresponding `li` element
 * and updates its innerHTML to either a check mark or an x mark, depending on whether the validation passed.
 *
 * @param {Object} validationResults - An object mapping validation rules to their results.
 */
function updatePasswordRulesIcon(validationResults) {
  for (const [validation, result] of Object.entries(validationResults)) {
    const li = document.getElementById(validationToLiIdMap[validation]);
    const span = li.querySelector('span');
    span.innerHTML = result ? checkMark : xMark;
    span.style.color = result ? 'green' : 'red';
  }
}
/**
 * Handles the input event for the password field.
 *
 * This function performs the following steps:
 * - Retrieves the password from the password field.
 * - Validates the password using the `validatePassword` function.
 * - Checks the password length and updates the display to toggle the password rule using the `checkPasswordLengthAndUpdateDisplayToTogglePasswordRule` function.
 * - Updates the icons for the password rules based on the validation results using the `updatePasswordRulesIcon` function.
 */
export function handlePasswordInput() {
  // Get the password from the password field.
  const passwordField = document.getElementById("passwordField");
  // Validate the password.
  const validationResults = validatePassword(passwordField.value);
  checkPasswordLengthAndUpdateDisplayToTogglePasswordRule(passwordField)
  // Update the innerHTML of each li element based on the corresponding validation result.
  updatePasswordRulesIcon(validationResults);
}
