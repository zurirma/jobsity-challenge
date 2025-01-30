# jobsity-challenge
Jobsity Challenge - Automation Testing 
This repository contains the solution to the Jobsity Challenge. The project automates web application testing using the Cypress testing framework. The goal of the challenge is to demonstrate proficiency in automated testing by implementing a robust test scenario for a web application.

# Project Setup
1.- Clone the repository:
git clone https://github.com/zurirma/jobsity-challenge.git
2.- Navigate into the project directory:
cd jobsity-challenge
3.- Install the necessary dependencies:
npm install
4.- After installing the dependencies, ensure that Cypress is initialized:
npx cypress open
This will open the Cypress Test Runner and allow you to run the tests.

# Features
Automated Testing with Cypress: The project uses Cypress to automate test scenarios for a web application.

Page Object Model: The Page Object Model is implemented to maintain clean and reusable test code.
Dynamic Test Data: The tests use a custom helper function to generate random user data (email, name) for form submissions.

# Test Scenarios
The following test scenarios are automated in this project:

1.- User Registration: Automating the process of filling in the user registration form and validating form field requirements (e.g., password strength, field validation).
2.- Error Handling: Ensuring appropriate error messages are displayed when submitting the form with invalid or missing data.
3.- Valid Data Submission: Validating the form with correct user data and ensuring successful account creation.
4.- Password Validation: Testing password strength and ensuring that the confirmation password matches.
5.- Contact form in checkout process.

# How to Run Tests
To run the tests, follow these steps:

1.- Open Cypress Test Runner:

npx cypress open
This will open the Cypress UI, where you can select and run the tests interactively.

2.- Alternatively, run the tests in headless mode:

npx cypress run
This will run all tests in the background without opening the UI.

# Folder Structure
cypress/: Contains the Cypress test files, fixtures, and support files.

fixtures/: JSON files containing test data, as random passwords and addresses.
support/: Contains the Page Object Model implementation.
pageObjects/: Contains the CreateAnAccountPage class to handle interactions with different parts of the form.

generateRandomAccount.js: Helper file to generate random user data (email, first name, last name).



