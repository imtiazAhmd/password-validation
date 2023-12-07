# Available methods to use

## toggleInputType

The toggleInputType function is a simple utility function that takes in a string currentType and returns a string.

If the currentType is equal to 'password', it returns 'text'. If currentType is not equal to 'password', it returns 'password'.

This function is being used to toggle the visibility of a password in an input field. When the input type of a password field is 'password', the characters are hidden and shown as dots or asterisks for security. When the input type is 'text', the characters are visible. By calling this function with the current input type, you can switch between these two states.

## revealPassword

The `revealPassword` function is being used to toggle the visibility of a password in an input field.

When called, this function retrieves the password field element from the DOM. It then checks if the password field exists. If it does, it calls the `toggleInputType` function with the current input type of the password field.

The `toggleInputType` function changes the input type to `'text'` if it's currently `'password'`, and to `'password'` if it's currently anything else. This effectively reveals the password if it's hidden, and hides the password if it's revealed.

This function is attached to an UI element that user can click to toggle the visibility of their password.

## validatePassword

The validatePassword function is used to validate a password based on several rules. It takes a string password as an argument and returns an object mapping validation rules to their results.

Here are the rules it checks:

- `hasValidLength`: Checks if the password length is 8 or more. It uses the length property of the string to get the number of characters in the password.
- `hasCapitalLetter`: Checks if the password contains at least one uppercase letter. It uses the test method of a regular expression (/[A-Z]/) to check for uppercase letters in the password.
- `hasLowerCaseLetter`: Checks if the password contains at least one lowercase letter. It uses the test method of a regular expression (/[a-z]/) to check for lowercase letters in the password.
- `hasNumber`: Checks if the password contains at least one number. It uses the test method of a regular expression (/\d/) to check for numbers in the password.
- `hasUnderscore`: Checks if the password contains at least one underscore. It uses the test method of a regular expression (/_/) to check for underscores in the password.

Each of these checks results in a boolean value indicating whether the password meets the rule. These results are returned as properties of an object.

 > **_Note:_**To check only one Capital letter, you can use
 > `const hasOneCapitalLetter = (password.match(/[A-Z]/g) || []).length === 1;`

## getDisplayStyle

The getDisplayStyle function is used to determine the display style for the password rules div based on the given password.

It takes a string password as an argument and returns a string that represents the CSS display property value.

If the password is an empty string (''), it returns 'none'. This means that if the password field is empty, the password rules will be hidden.

If the password is not an empty string, it returns 'block'. This means that if the password field is not empty, the password rules will be displayed.

This function is being used to toggle the visibility of password rules in response to user input in the password field.

## updatePasswordRulesDisplay

The `updatePasswordRulesDisplay` function is used to update the visibility of the password rules based on the current password input.

It takes a string password as an argument. This password is the current input in the password field.

The function calls `getDisplayStyle` with the password as an argument to determine the appropriate CSS display property value. The `getDisplayStyle` function returns 'none' if the password is an empty string, and 'block' otherwise.

The function then retrieves the password rules element from the DOM using its ID, and sets its CSS display property to the value returned by `getDisplayStyle`. This effectively hides the password rules when the password field is empty, and shows them when the password field is not empty.

## checkPasswordLengthAndUpdateDisplayToTogglePasswordRule

The `checkPasswordLengthAndUpdateDisplayToTogglePasswordRule` function is used to check the length of the password and update the display of the password rules accordingly.

It takes an `HTMLInputElement` `passwordField` as an argument. This `passwordField` is the input field where the user types their password.

The function first retrieves the password from the `passwordField`. If `passwordField` is `null` or `undefined`, it defaults the password to an empty string.

It then checks if the password has just become non-empty (i.e., the user has just started typing in an empty password field) or just become empty (i.e., the user has just deleted all characters in the password field). It does this by comparing the length of the current password and the previous password.

If either of these conditions is true, it calls `updatePasswordRulesDisplay` with the current password. This will update the visibility of the password rules based on the current password.

Finally, it updates `previousPassword` with the current password. This is used to keep track of the password on the previous input event, so it can be compared with the current password on the next input event.

## updatePasswordRulesIcon

The `updatePasswordRulesIcon` function is used to update the icons for the password rules based on the validation results of the password.

It takes an object `validationResults` as an argument. This object maps validation rules to their results, where each property corresponds to a validation rule, and its value is a boolean indicating whether the password meets that rule.

The function iterates over each validation result using `Object.entries(validationResults)`. For each validation result, it retrieves the corresponding `li` element from the DOM using its ID, which is mapped from the validation rule by the `validationToLiIdMap` object.

It then updates the innerHTML of the `span` element within the `li` element to either a check mark or an x mark, depending on whether the validation passed. The check mark and x mark are likely defined as Unicode or HTML entities.

This function is being called whenever the password input changes, to provide visual feedback to the user about whether their password meets each rule.

## handlePasswordInput

The `handlePasswordInput` function is an event handler function that is typically attached to the password input field and is triggered whenever the user types into the field.

When called, this function performs the following steps:

1. Retrieves the password from the password field.
2. Validates the password using the `validatePassword` function. This function checks the password against several rules (such as length, presence of uppercase and lowercase letters, numbers, and special characters) and returns an object with the results of these checks.
3. Checks the password length and updates the display of the password rules accordingly. If the password is empty, the rules are hidden; otherwise, they are shown.
4. Updates the icons for the password rules based on the validation results. Each rule has an associated icon, which is set to a check mark if the password meets the rule, and an x mark otherwise.

This function provides real-time feedback to the user about the validity of their password as they are typing it.
