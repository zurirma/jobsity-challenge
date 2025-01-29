class CreateAnAccountPage {
    
    fillFirstName(name) {
      cy.get('#firstname').clear().type(name);
    }

    clearFirstName() {
      cy.get('#firstname').clear();
    }
  
    fillLastName(name) {
      cy.get('#lastname').clear().type(name);
    }

    clearLastName() {
      cy.get('#lastname').clear();
    }
  
    fillEmail(email) {
      cy.get('#email_address').clear().type(email);
    }

    clearEmail() {
      cy.get('#email_address').clear();
    }
  
    fillPassword(password) {
      cy.get('#password').clear().type(password);
    }
  
    fillConfirmPassword(password) {
      cy.get('#password-confirmation').clear().type(password);
    }
  
    submitForm() {
      cy.get('#form-validate').find('button').contains('Create an Account').click();
    }
  
    checkRequiredError(field) {
      cy.get(`#${field}-error`).should('be.visible').contains('This is a required field');
    }

    checkEmailAddressError() {
      cy.get('#email_address-error').should('be.visible').contains('Please enter a valid email address (Ex: johndoe@domain.com).');
    }
  
    checkPasswordError() {
      cy.get('#password-error').should('be.visible').contains('Minimum length of this field must be equal or greater than 8 symbols');
    }
  
    checkPasswordConfirmationError() {
      cy.get('#password-confirmation-error').should('be.visible').contains('Please enter the same value again');
    }
  
    checkPasswordStrength(level) {
      cy.get('#password-strength-meter').should('be.visible').find('span').contains(level);
    }

    checkAccountCreation() {
      cy.get('.message-success')
        .should('exist')
        .should('be.visible')
        .contains('Thank you for registering with Main Website Store.')
    }

    
  }
  
  export default new CreateAnAccountPage();
  