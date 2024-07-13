// <reference types="Cypress" /
//import 'cypress-axe';
//import '@cypress-audit/lighthouse/commands';
//import '@cypress-audit/pa11y/commands';
//import 'cypress-audit'
// cypress/support/index.js

import 'cypress-axe';


describe('LambdaTest Selenium Playground', () => {
    it('Visit and interact with the page', () => {
      // Set the viewport to Samsung Note 9 dimensionss
      cy.viewport('samsung-note9');
  
      // Visit the Selenium Playground page
      cy.visit('https://www.lambdatest.com/selenium-playground');
  
      // Wait for all elements on the page to load
      cy.wait(3000); // This is a simple wait, can be adjusted or improved with better wait strategies
  
      // Click the "Input Form Submit" link
      cy.contains('Input Form Submit').click();
    
        cy.get('#name').type("Balaji Rajendran");
        cy.get('#inputEmail4').type("balajirajendran@gmail.com");
        cy.xpath("//input[@id='inputPassword4']").type("Balaji Raj");
        cy.get('#company').type("SF");
        cy.get('input#websitename').type("www.sf.com");
        cy.get('select[name="country"]').select('India');
        cy.get('input[name="city"]').type('Chennai');
        cy.get('input[name="address_line1"]').type('123 Main Street');
        cy.get('input[name="address_line2"]').type('Chennai 44');
        cy.get('#inputState').type('TN');
        cy.get('input[name="zip"]').type('10001');

    // Submit the form
    // cy.xpath("//button[@fdprocessedid='c160ta']").click();
    cy.xpath("(//button[@type='submit'])[2]").click();
    cy.wait(3000)

   
    cy.contains('Thanks for contacting us, we will get back to you shortly.')
      .should('be.visible');
      
      cy.wait(3000)

      
      // Ensure the session is cleared (optional)
     // cy.clearCookies();
      cy.clearLocalStorage();
     // cy.visit('about:blank');
      it('Should clear cookies and local storage', () => {
        // Perform test actions after clearing cookies and local storage
      });

      cy.wait(3000)

      cy.window().then(win => {
        win.close();
      });

   it('Should close browser tab and session', () => {
    // Navigate to a blank page to simulate closing the tab or session
    cy.visit('about:blank');
     
    
});
    });
     });
   
