

Cypress.Commands.add('goToContactForm', qs => {
    cy.visit('/customer/account/create/');
    cy.title().should('include', 'Create New Customer Account');
    cy.get('#form-validate')
        .should('be.visible');
  });