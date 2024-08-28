/// <reference types="cypress" />
import 'cypress-file-upload'
export { getRandomInt, randOptionSelect };

const {
  PageElements
} = require("../support/selectors")

const pe = new PageElements()

  //------Functions

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function randOptionSelect(dropdownSelector) {
  
  cy.get(dropdownSelector).should('be.visible')
    .find('option')
    .then(options => {
        // Exclude the first option (index 0) if it is the default option like "Select a state"
        const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1
        const randomOption = options[randomIndex].value
        // Select the random option
      cy.get(dropdownSelector).select(randomOption)
    });
  }
  
  //------State select
  
  Cypress.Commands.add('selectRandomDropdownOption', (dropdownSelector, optionSelector) => {
    cy.get(dropdownSelector)  // Trigger the dropdown
      .click();  // Open the dropdown
  
    cy.get(optionSelector)  // Select all the options
      .should('be.visible')  // Ensure the options are visible
      .then($options => {
        const optionCount = $options.length;
        const randomIndex = Math.floor(Math.random() * optionCount)
  
        cy.wrap($options[randomIndex]).click({ force: true })  // Click on the random option
      });
  });
  
  //------ElementValidation
  
  Cypress.Commands.add('elementIsVisible', (element) => {
    cy.get(element).should('be.visible')
  })
  
  /* Cypress.Commands.add('elementsAreVisible', (selector, expectedCount) => {
    cy.get(selector).should('have.length', expectedCount).each(($el) => {
      cy.wrap($el).should('be.visible')
    });
  });  */
  
  Cypress.Commands.add('elementsAreVisible', (selector, expectedCount = null) => {
    cy.get(selector).then($els => {
      if (expectedCount !== null) {
        expect($els).to.have.length(expectedCount);
      }
      $els.each((index, $el) => {
        cy.wrap($el).should('be.visible');
      });
    });
  });
  
  Cypress.Commands.add('sumAndCompare', (selector1, selector2) => {
    // Sum values from the first selector
    let sum1 = 0;
    cy.get(selector1).each(($el) => {
      const text = $el.text();
      const amount = parseFloat(text.replace('$', ''));
      sum1 += amount;
    }).then(() => {
      // Log the sum of the first selector
      cy.log('Sum of each product: ' + sum1);
  
      // Get the second selector's value, remove the "$", and convert it to a float
      cy.get(selector2).invoke('text').then((text2) => {
        const sum2 = parseFloat(text2.replace('$', ''));
  
        // Log the sum of the second selector
        cy.log('Total Sum ' + sum2);
  
        // Compare the sums
        expect(sum1).to.equal(sum2);
      });
    });
  });
  
  Cypress.Commands.add('elementExist', (element) => {
    cy.get(element).should('be.exist')
  })
  
  //------URL Validation
  Cypress.Commands.add('urlValidation', (element) => {
    cy.url().should('include', element)
  })

 
