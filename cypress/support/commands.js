

Cypress.Commands.add('goToContactForm', qs => {
    cy.visit('/customer/account/create/');
    cy.title().should('include', 'Create New Customer Account');
    cy.get('#form-validate')
        .should('be.visible');
  });

  Cypress.Commands.add('goToWomenStore', qs => {
    cy.visit('/women.html');
    cy.title().should('include', 'Women');
    cy.get('.product-items').should('be.visible');
  });

  Cypress.Commands.add('selectAProduct', eq => {
    cy.get('.product-item')
        .eq(eq)
        .click();
  });

  Cypress.Commands.add('addProductToCart',(size,color) => {
    cy.get('.size').should('be.visible');
    cy.get(size).click();

    cy.get('.swatch-attribute.color').should('be.visible');
    cy.get(color).click();

    cy.get('#product-addtocart-button')
        .should('be.visible')
        .click();

    cy.get('.message-success')
        .should('exist')
        .should('be.visible');
  });

  Cypress.Commands.add('goToCheckout', () => {
    cy.get('.showcart')
            .should('be.visible')
            .click();

        cy.get('#top-cart-btn-checkout')
            .should('be.visible')
            .contains('Proceed to Checkout')
            .click({ force: true });

        cy.visit('/checkout/#shipping');
        cy.title().should('include', 'Checkout');

        cy.get('#shipping').should('be.visible');
  });