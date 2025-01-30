class CheckoutContactFormPage {
    
    fillOutEmail(email) {
        cy.get('#customer-email')
        .should('be.visible')
        .clear()
        .type(email);
    }

    checkEmailRequiredError() {
        cy.get('#customer-email-error')
            .should('be.visible')
            .contains('Please enter a valid email address (Ex: johndoe@domain.com).');
      }
  
    fillOutFirstName(name) {
        cy.get('[name="firstname"]').type(name).clear();
        cy.get('._error')
            .should('be.visible')
            .contains('This is a required field.');

        cy.get('[name="firstname"]').type(name);
    }

    fillOutLastName(lastName) {
        cy.get('[name="lastname"]').type(lastName).clear();
        cy.get('._error')
            .should('be.visible')
            .contains('This is a required field.');

        cy.get('[name="lastname"]').type(lastName);
    }
  
    fillOutStreetAddress(street) {
        cy.get('[name="shippingAddress.street.0"]').type(street);
    }

    fillOutCity(city) {
        cy.get('[name="city"]').type(city).clear();
        cy.get('._error')
            .should('be.visible')
            .contains('This is a required field.');

        cy.get('[name="city"]').type(city);
    }
  
    selectState(state,value) {
        cy.get('select[name="region_id"]')
            .select(state)
            .should('have.value', value);
    }
  
    fillOutPostCode(code) {
        cy.get('[name="shippingAddress.postcode"]').type(code);
    }
  
    fillOutPhone(phone) {
        cy.get('[name="shippingAddress.telephone"]').type(phone);
    }
  
    selectShippingMethod(value) {
        cy.get('#checkout-shipping-method-load').should('be.visible');

        cy.get(`input[type="radio"][value=${value}]`).check();
    }

    goToPaymentStep() {
       cy.get('.button').contains('Next').click();

        cy.url().should('include', '/checkout/#payment');
    }

    

    
  }
  
  export default new CheckoutContactFormPage();