import CreateAnAccountPage from '../../support/PageObjects/CreateAnAccountPage.js';
import generateRandomAccount from '../../../generateRandomAccount.js'
import passwords from '../../fixtures/passwords.json';

describe('Jobsity Challenge - Create a new account', () => {
  let newUser;

  beforeEach(() => {
    newUser = generateRandomAccount(); 
    cy.goToContactForm();
  });
    it('Go to the contact form and fill out the fields validating the rules', () => {
    
    //Try to complete the form without a last name
    CreateAnAccountPage.fillFirstName(newUser.firstName);
    CreateAnAccountPage.fillLastName(newUser.lastName);
    CreateAnAccountPage.clearLastName();

    CreateAnAccountPage.fillEmail(newUser.email);
    CreateAnAccountPage.fillPassword(passwords.weak[1]);

    CreateAnAccountPage.checkPasswordStrength('Weak');

    CreateAnAccountPage.fillConfirmPassword(passwords.weak[1]);
    CreateAnAccountPage.submitForm();

    CreateAnAccountPage.checkRequiredError('lastname');
//Try to complete the form without a first name
    CreateAnAccountPage.fillLastName(newUser.lastName);
    CreateAnAccountPage.clearFirstName();
    CreateAnAccountPage.submitForm();

    CreateAnAccountPage.checkRequiredError('firstname');
//Try to complete the form without an email
    CreateAnAccountPage.fillFirstName(newUser.firstName);
    CreateAnAccountPage.clearEmail();
    CreateAnAccountPage.submitForm();

    CreateAnAccountPage.checkRequiredError('email_address');
//Try to complete the form with an invalid email address
    CreateAnAccountPage.fillEmail('test@mail');
    CreateAnAccountPage.submitForm();
    CreateAnAccountPage.checkEmailAddressError();

    CreateAnAccountPage.fillEmail(newUser.email);
//Try to complete the form with an unacepted password
    CreateAnAccountPage.fillPassword(passwords.invalid[1]);

    CreateAnAccountPage.checkPasswordError();
//Try to complete the form with a difference between password field and confirm password field
    CreateAnAccountPage.fillPassword(passwords.weak[0]);
    CreateAnAccountPage.fillConfirmPassword(passwords.weak[1]);
    CreateAnAccountPage.submitForm();

    CreateAnAccountPage.checkPasswordConfirmationError();

    CreateAnAccountPage.fillPassword(passwords.strong[1]);
    CreateAnAccountPage.checkPasswordStrength('Strong');

    CreateAnAccountPage.fillConfirmPassword(passwords.strong[1]);

    CreateAnAccountPage.submitForm();

    CreateAnAccountPage.checkAccountCreation();

    });
  });
  