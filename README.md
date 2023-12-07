# Basic password validation

## Goal

The password will be provided by the user (as an argument of the method) and should return if the password is valid or not.

A valid password should meet the following criteria:

- Have more than 8 characters
- Contains a capital letter
- Contains a lowercase
- Contains a number
- Contains an underscore

## Repository

The project is hosted on GitHub at [https://github.com/imtiazAhmd/password-validation.git](https://github.com/imtiazAhmd/password-validation.git).

## Prerequisites

You need to have `node.js` and `npm` installed on your machine to run this project.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/imtiazAhmd/password-validation.git
```

Navigate to the project directory:

```bash
cd password-validation
```

Install the dependencies:

```bash
yarn install
```

## Running the project

You can start the project by running the following command:

```bash
npm run dev
```

This will start the `node-sass` to watch `scss/main.scss` file and compile it to `assets/css/style.css` whenever it changes. It will also start `live-server` to serve the project on a local server.

## Running tests

### Accessibility test

To check if there is any accessibility issues based on WCAG 2.2 AA, run the following:

```bash
npm run accessibility-test
```

> Note: Make sure server is running and port number is 8080, if >port number is different, you need to update the script in the >package.json

### Unit test

To run the unit tests, run the following:

```bash
npm run unit-test
```

### Additional docs

Additional documentations can be found within the `docs` folder.
