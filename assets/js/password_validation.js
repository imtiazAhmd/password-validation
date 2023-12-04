// This function is used to toggle the visibility of the password in a password field.
export function revealPassword() {
  // Get the password field element by its ID.
  const passwordField = document.getElementById("passwordField");

  // Check the current type of the password field.
  // If it's "password", change it to "text". This will reveal the password characters.
  // If it's not "password" (which means it's "text"), change it back to "password". This will hide the password characters.
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}
