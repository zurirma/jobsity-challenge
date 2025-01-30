import generateRandomAccount from '../../../generateRandomAccount.js'
import addresses from '../../fixtures/addresses.json'
import CheckoutContactFormPage from '../../support/PageObjects/CheckoutContactFormPage.js';



describe('Jobsity Challenge - Contact form validation', () => {
    let newUser;
  
    beforeEach(() => {
      newUser = generateRandomAccount(); 
    });
      it('Got through the checkout process validating the contact form', () => {

        cy.goToWomenStore();

        cy.selectAProduct(1);

        cy.addProductToCart('#option-label-size-143-item-167', '#option-label-color-93-item-60');

        cy.goToCheckout();

        CheckoutContactFormPage.fillOutEmail('newuser@mail{enter}');

        CheckoutContactFormPage.checkEmailRequiredError();

        CheckoutContactFormPage.fillOutEmail(newUser.email);

        CheckoutContactFormPage.fillOutFirstName(newUser.firstName);
         

        CheckoutContactFormPage.fillOutLastName(newUser.lastName);

        CheckoutContactFormPage.fillOutStreetAddress(addresses[1].street);

        CheckoutContactFormPage.fillOutCity(addresses[1].city);

        CheckoutContactFormPage.selectState(addresses[1].state, addresses[1].stateValue);

        CheckoutContactFormPage.fillOutPostCode(90703);

        CheckoutContactFormPage.fillOutPhone(555555);

        CheckoutContactFormPage.selectShippingMethod('flatrate_flatrate');

        CheckoutContactFormPage.goToPaymentStep();







         
  
      });
    });