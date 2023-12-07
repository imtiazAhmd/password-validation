import { revealPassword, validatePassword } from '../assets/js/password_validation.js';
describe('revealPassword', () => {
  beforeEach(() => {
    // Create a mock password field object
    const mockPasswordField = {
      id: 'passwordField',
      _type: 'password',
      // Mock implementation of the type property setter
      set type(value) {
        this._type = value;
      },
      // Mock implementation of the type property getter
      get type() {
        return this._type;
      }
    };
    // Spy on document.getElementById and make it return the mock password field
    jest.spyOn(document, 'getElementById').mockImplementation(id => {
      if (id === 'passwordField') {
        return mockPasswordField;
      }
      // Return null or some other value for other ids
      return null;
    });
  });

  it('revealPassword toggles password field type', () => {
    const passwordField = document.getElementById('passwordField');

    console.log(passwordField);
    // Initial type should be 'password'
    expect(passwordField.type).toBe('password');

    // After calling revealPassword, type should be 'text'
    revealPassword();
    expect(passwordField.type).toBe('text');

    // After calling revealPassword again, type should be 'password'
    revealPassword();
    expect(passwordField.type).toBe('password');
  });
});

describe('validatePassword', () => {
  it('returns false for passwords shorter than 8 characters', () => {
    expect(validatePassword('Short1')).toEqual({
      hasCapitalLetter: true,
      hasLowerCaseLetter: true,
      hasNumber: true,
      hasUnderscore: false,
      hasValidLength: false
    });
  });

  it('returns false for passwords without an uppercase letter', () => {
    expect(validatePassword('lowercase1')).toEqual({
      hasCapitalLetter: false,
      hasLowerCaseLetter: true,
      hasNumber: true,
      hasUnderscore: false,
      hasValidLength: true
    });
  });

  it('returns false for passwords without a lowercase letter', () => {
    expect(validatePassword('UPPERCASE1')).toEqual({
      hasCapitalLetter: true,
      hasLowerCaseLetter: false,
      hasNumber: true,
      hasUnderscore: false,
      hasValidLength: true
    });
  });

  it('returns false for passwords without a digit', () => {
    expect(validatePassword('NoDigit')).toEqual({
      hasCapitalLetter: true,
      hasLowerCaseLetter: true,
      hasNumber: false,
      hasUnderscore: false,
      hasValidLength: false
    });
  });

  it('returns true for valid passwords', () => {
    expect(validatePassword('ValidPassword_123')).toEqual({
      hasCapitalLetter: true,
      hasLowerCaseLetter: true,
      hasNumber: true,
      hasUnderscore: true,
      hasValidLength: true
    });
  });
});