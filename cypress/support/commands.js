/// <reference types="cypress" />
import 'cypress-file-upload'

const {
  PageElements
} = require("../support/selectors")

const pe = new PageElements()
const tmtstdata = 'tmtest123a'
const incstsdata = 'inctss1a'
const nametsdat = 'atsname'
const eintsdat = 'enatsname'
const tsmaild = 'test123a@test.net'

//------Trademarks

Cypress.Commands.add('tmSearchTest', () => {
cy.elementIsVisible(pe.tm_search_field)
cy.elementIsVisible(pe.tm_home_logo)
cy.elementIsVisible(pe.tm_register_btn)
cy.get(pe.tm_search_field)
  .click()
  .type(tmtstdata)
cy.elementIsVisible(pe.tm_search_btn).click()
})

Cypress.Commands.add('tmFlowStep0', () => {
  cy.intercept('GET', 'https://dev.innova-labs.net:9080/category/products/TRADEMARK_RegisterTrademark/file-types' ).as('tmflowPageHasLoaded')
  cy.wait('@tmflowPageHasLoaded', { timeout: 6500 }).its('response.statusCode').should('eq', 200)
  cy.urlValidation('/registration-trademark-search')
  cy.elementIsVisible(pe.tm_multistep1)
  cy.elementIsVisible(pe.tm_top_logo)
  cy.elementIsVisible(pe.tm_continue_btn)
    .click()
})

Cypress.Commands.add('tmFlowStep1', () => {
  cy.elementIsVisible('#firstName')
    .type(tmtstdata)
  cy.elementIsVisible('#lastName')
    .type(tmtstdata)
  cy.elementIsVisible('#address')
    .type(tmtstdata)
  cy.elementIsVisible('#city')
    .type(tmtstdata)
  cy.elementIsVisible('#state')
  // Selecting State
  cy.log('Selecting State.')
  randOptionSelect('#state')
  cy.elementIsVisible('#zip').type('00010')
  cy.elementIsVisible('#phone').type('0001000010')
  cy.elementIsVisible('#email').type(tsmaild)
  //cy.pause()
  cy.elementIsVisible(pe.tm_continue_btn).click()
  
})

Cypress.Commands.add('tmFlowStep2', () => {
    cy.intercept('POST', 'https://dev.innova-labs.net:9080/clicks').as('classLoaded')
  cy.wait('@classLoaded', { timeout: 6500 }).its('response.statusCode').should('eq', 200)
  cy.elementIsVisible(pe.tm_pack_description)
  cy.elementIsVisible(pe.tm_multistep5)
  cy.elementIsVisible(pe.tm_new_class_btn)
  cy.get(pe.tm_class_select)
    .click()
    .type('025')
    .wait(1000)
    .type('{downarrow}'.repeat(getRandomInt(11))+ '{enter}')
  cy.elementIsVisible(pe.tm_continue_btn).click()
})

Cypress.Commands.add('tmFlowStep3', () => {
  cy.elementIsVisible(pe.tm_top_logo)

  // Verifying 3 packages are present
  cy.elementIsVisible(pe.tm_package1)
  cy.elementIsVisible(pe.tm_package3)
  cy.elementIsVisible(pe.tm_package2)
  cy.elementIsVisible(pe.tm_pack2_select).click()
})

Cypress.Commands.add('tmFlowStep4', () => {
  cy.elementIsVisible(pe.tm_top_logo)
  cy.elementIsVisible(pe.tm_rush_or_agreement)
  cy.elementIsVisible(pe.tm_summary).children()
    .should('have.length.at.least', 3)
  cy.elementIsVisible(pe.tm_continue_btn).click()
})

Cypress.Commands.add('tmPaymentPage', () => {
  cy.elementIsVisible(pe.tm_top_logo)
  cy.elementIsVisible(pe.tm_rush_or_agreement)
  cy.elementIsVisible(pe.tm_summary).children()
    .should('have.length.at.least', 3)
  cy.elementIsVisible(pe.tm_payment_form)

  // Selecting random m/y
  cy.log('Payment cradentials input')
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  randOptionSelect('#cardMonth')
  randOptionSelect('#cardYear')
  cy.elementIsVisible('#cvc').type('100')
  cy.elementIsVisible(pe.tm_rush_or_agreement).click()
  cy.elementIsVisible(pe.tm_payment_but).click()
  cy.urlValidation('/upsell?step=1')
  cy.elementIsVisible(pe.tm_top_logo)
  cy.elementIsVisible('.upsell-banner')
  cy.elementIsVisible('.upsell-form')

})

//------Inc_States

Cypress.Commands.add('incStatesTest', () => {
  cy.elementIsVisible(pe.incS_logo)
  cy.elementIsVisible(pe.incS_contactus_btn)
  cy.selectRandomDropdownOption(pe.incS_State_Select,'.base-select__menu-list .base-select__option')
  cy.elementIsVisible(pe.incS_Continue_btn).click()

})

Cypress.Commands.add('incStatesStep1', () => {
  cy.elementIsVisible(pe.incS_logo)
  cy.elementIsVisible(pe.incS_Business_Name).type(incstsdata)
  cy.elementIsVisible(pe.incS_Business_Cat1).type('a{downarrow}{uparrow}{enter}')
  cy.elementIsVisible(pe.incS_Business_Cat2).type('h{downarrow}{uparrow}{enter}')
  cy.elementIsVisible(pe.incS_Street_Address).type(incstsdata)
  cy.elementIsVisible(pe.incS_City).type(incstsdata)
  cy.elementIsVisible(pe.incS_Primary_FName).type(incstsdata)
  cy.elementIsVisible(pe.incS_Primary_LName).type(incstsdata)
  cy.elementIsVisible(pe.incS_Statef_Select).type('{downarrow}'.repeat((getRandomInt(55)))+ '{enter}')
  cy.elementIsVisible(pe.incS_Title).type('{downarrow}'.repeat(getRandomInt(7))+ '{enter}')
  cy.elementIsVisible(pe.incS_Zip).type('00010')
  cy.elementIsVisible(pe.incS_Phone).type('0001000010')
  cy.elementIsVisible(pe.incS_eMail).type(tsmaild)
  cy.elementIsVisible(pe.incS_Manager).type(nametsdat + ' ' + nametsdat)
  cy.elementIsVisible(pe.incS_Agreement_Checkbox).click()
  cy.elementIsVisible(pe.incS_Continue_btn).eq(1).click()
  

})

Cypress.Commands.add('incStatesPayment', () => {
  cy.elementIsVisible(pe.incS_logo)
  cy.elementIsVisible(pe.incS_Proc_Option).eq(getRandomInt(2)).click()
  cy.elementExist(pe.incS_RA_Chckbox).should('be.checked', { force: true });
  cy.elementIsVisible(pe.incS_Pay_FName).type(incstsdata)
  cy.elementIsVisible(pe.incS_Pay_LName).type(incstsdata)
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  cy.elementIsVisible(pe.incS_Pay_Yr_Mth).eq(0)
  .type('{downarrow}'.repeat((getRandomInt(12)))+ '{enter}')
  cy.elementIsVisible(pe.incS_Pay_Yr_Mth).eq(1)
  .type('{downarrow}'.repeat((getRandomInt(28)))+ '{enter}')
  cy.elementIsVisible('#cvc').type('100')
  cy.elementIsVisible(pe.incS_Continue_btn).click()
})

Cypress.Commands.add('incSUpsellTest', () => {
  cy.intercept('POST', 'https://dev.innova-labs.net:9080/clicks' ).as('incSCompleted')
  cy.wait('@incSCompleted').its('response.statusCode').should('eq', 200)
  cy.urlValidation('/upsell?step=0')
  cy.elementIsVisible(pe.incS_logo)
  cy.elementsAreVisible(pe.incS_Upsell_Checkboxes, 3)

/// Check command, checkbox upsells

  cy.elementIsVisible(pe.incS_FUpsell_Sum).should('have.text', '$169')
  cy.elementIsVisible(pe.incS_Continue_btn).click()
  
  cy.urlValidation('/upsell?step=1')
  cy.elementIsVisible(pe.incS_logo)
  cy.elementIsVisible(pe.incS_Refuse_BOIUps)
  cy.elementIsVisible(pe.incS_Continue_btn).click()
  cy.elementIsVisible(pe.incS_Refuse_BOIUps).click()

  cy.urlValidation('/upsell?step=2')
  cy.elementIsVisible(pe.incS_logo)
  cy.elementsAreVisible(pe.incS_Continue_btn, 2)
  cy.get(pe.incS_Continue_btn).eq(1).click()

  cy.urlValidation('/thankyou')
  cy.elementIsVisible(pe.incS_logo)
  cy.elementIsVisible(pe.incS_Continue_btn) //Go to membership
  
})

//------EIN

Cypress.Commands.add('einHomeTest', () => {
  cy.elementIsVisible('.logo')
  cy.elementsAreVisible(pe.ein_Products, 10)
  cy.elementsAreVisible(pe.ein_Faq, 8)
  cy.get(pe.ein_Products).eq(1).click()
})

Cypress.Commands.add('einflowTest', () => {

  cy.elementIsVisible('.logo')
  cy.intercept('GET', 'https://dev.innova-labs.net:9080/category/EIN/products/primary-activity' ).as('einflowPageHasLoaded')
  cy.wait('@einflowPageHasLoaded').its('response.statusCode').should('eq', 200)
    cy.urlValidation('/products/EINLLC')
    cy.elementIsVisible('#legalName').type(eintsdat)
    randOptionSelect('#organizedState')
    cy.elementIsVisible('#ownerFirstName').type(eintsdat)
    cy.elementIsVisible('#ownerLastName').type(eintsdat)
    randOptionSelect('#ownerTitle')
    cy.elementIsVisible('#ownerSSN').type('6433001206')

    cy.elementIsVisible('#activityReasonForApplying').select(1)
    cy.elementIsVisible('#activityPrimaryActivity').select(1)
    cy.elementIsVisible('#activitySpecificProducts').select(1)
    cy.elementIsVisible('#corpAddressAddress1').type(eintsdat)
    cy.elementIsVisible('#corpAddressCity').type(eintsdat)
    cy.elementIsVisible('#corpAddressZip').type('00010')
    randOptionSelect('#corpAddressState')
    cy.elementIsVisible('#corpAddressCounty').type(eintsdat)

    cy.elementIsVisible('#customerPhone').type('0001000010')
    cy.elementIsVisible('#customerEmail').type(tsmaild)
    cy.elementExist(pe.ein_Agreement_Chckbox).click()
    cy.elementIsVisible('#ClientAgreement').should('be.checked')
    cy.elementIsVisible('#EINSubmitButton').click()
})

Cypress.Commands.add('einPaymentPage', () => {
  cy.elementIsVisible('.logo')
  cy.elementIsVisible(pe.ein_Multistep)
  cy.elementIsVisible('#firstName').type(eintsdat)
  cy.elementIsVisible('#lastName').type(eintsdat)
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  randOptionSelect('#cardMonth')
  randOptionSelect('#cardYear')
  cy.elementIsVisible('#cvc').type('100')
  cy.elementsAreVisible(pe.ein_Processing_options, 2)
  cy.get('#processingOption2').should('be.checked')
  cy.elementIsVisible(pe.ein_Submit_Payment).click()
})

Cypress.Commands.add('einLLCUpsell', () => {

  cy.elementIsVisible('.logo')
  cy.urlValidation('/LLCUpsellQuestion')
  cy.elementExist(pe.ein_Confirm_LLC).click()

})

Cypress.Commands.add('einFillLLCUpsell', () => {

  cy.elementIsVisible('.logo')
  cy.urlValidation('/LLCUpsell')
  cy.elementIsVisible('#altCompanyName').type(eintsdat+'alt')
  cy.elementsAreVisible(pe.ein_RA_chckbox, 2)
  cy.get(pe.ein_RA_chckbox).eq(1).click()
  cy.elementIsVisible(pe.ein_Confirm_LLC).click()
})

Cypress.Commands.add('einBOIUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.urlValidation('/BOIUpgrade')
  cy.elementsAreVisible(pe.ein_Upsell_Decision_Btns, 2)
  cy.get(pe.ein_Upsell_Decision_Btns).eq(0).click()
  
})


Cypress.Commands.add('einBOIFillUpsell', () => {

  cy.elementIsVisible('.logo')
  cy.urlValidation('/BOIUpgrade')
  cy.elementsAreVisible(pe.ein_DateOfBirth_Selectors, 3)
  cy.get(pe.ein_DateOfBirth_Selectors).each(($el) => {
    randOptionSelect($el)
  });
  
  cy.elementIsVisible('#driverLicenceOrID').type(eintsdat)
  cy.elementIsVisible('#customerIdFile').attachFile('testph.jpeg')
  cy.elementsAreVisible(pe.ein_Upsell_Decision_Btns, 2)
  cy.get(pe.ein_Upsell_Decision_Btns).eq(1).click()
})

Cypress.Commands.add('einTMUpsell', () => {


  cy.intercept('GET', 'https://dev.innova-labs.net:9080/category/TRADEMARKS/products/prices?productCodes=TRADEMARK_RegisterTrademark&processingOptions=DELUXE' ).as('boiIsLoaded')
  cy.wait('@boiIsLoaded').its('response.statusCode').should('eq', 200) 
  cy.elementIsVisible('.logo')
  cy.urlValidation('/TrademarkUpsellQuestion')
})

//------CRM UI

Cypress.Commands.add('crmLogInTest', (username, password) => {

  cy.elementIsVisible('#formBasicEmail').type(username)  
  cy.elementIsVisible('#formBasicPassword').type(password) 
  cy.elementIsVisible('.btn').click()
  cy.elementIsVisible('.logo-normal')
  cy.urlValidation('/admin/dashboard')
})

Cypress.Commands.add('crmDashboardTest', () => {
  cy.elementIsVisible(pe.crm_Filter_Button)
  cy.elementsAreVisible(pe.crm_Dashboard_Filters, 4)
  cy.elementIsVisible(pe.crm_Recurring_Checkbox).should('not.be.checked')
  cy.elementIsVisible(pe.crm_Nav_Orders).click()
  cy.elementsAreVisible(pe.crm_Nav_Buttons, 12)

})

Cypress.Commands.add('crmINCStOrderTest', (testorder) => {
  cy.elementIsVisible(pe.crm_Nav_Orders).click()
  cy.elementIsVisible(pe.crm_IncS_Orders).click()
  cy.elementsAreVisible(pe.crm_Order_Vis_Filters, 5)
  cy.elementsAreVisible(pe.crm_Order_Search_Options, 6)
  cy.get(pe.crm_Order_Vis_Filters).eq(2).type(testorder)
  cy.get(pe.crm_Order_Search_Options).eq(1).click()
  cy.elementIsVisible(pe.crm_Order_Select).click()
  cy.elementIsVisible('.logo-normal')
  cy.elementIsVisible(pe.crm_Product_Select)
  cy.elementIsVisible(pe.crm_OrderID)
  cy.elementIsVisible(pe.crm_OrderCreated)
  cy.elementIsVisible(pe.crm_FirstName).should('have.text', eintsdat)
  cy.elementIsVisible(pe.crm_LastName).should('have.text', eintsdat)
  cy.elementIsVisible(pe.crm_Email).should('have.text', tsmaild)
  cy.elementsAreVisible(pe.crm_Order_Products, 4)
  cy.get(pe.crm_Order_Products).eq(0).should('have.text', 'INC_States_LLCIncorporationV2(Pending RA)')
/*   cy.get(pe.crm_Order_Products).eq(2).should('have.text', 'INC_States_Same_Day_ProcessingV2')
  cy.get(pe.crm_Order_Products).eq(3).should('have.text', 'INC_States_RegisteredAgent') */
  cy.get(pe.crm_Order_Products).eq(3).should('have.text', 'INC_States_StateIncorporationFee(Completed)')
  cy.elementIsVisible(pe.crm_Edit_Btn).click()
  cy.elementIsVisible(pe.crm_Save_Ord_Changes).click()

})


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

Cypress.Commands.add('elementsAreVisible', (selector, expectedCount) => {
  cy.get(selector).should('have.length', expectedCount).each(($el) => {
    cy.wrap($el).should('be.visible')
  });
});

Cypress.Commands.add('elementExist', (element) => {
  cy.get(element).should('be.exist')
})

//------URL Validation
Cypress.Commands.add('urlValidation', (element) => {
  cy.url().should('include', element)
})


/*
Cypress.Commands.add('goToPage', (root) => {

  cy.get(pe.header_menu).then(() => {

    switch (root) {

      case 'Form':

      case 'Map':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(0).click()
        break

      case 'Customer':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(1).click()
        break

      case 'Estimates':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(2).click()
        break

      case 'Schedule':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(3).click()
        break

      case 'Invoices':
        cy.get('ul[class="nav navbar-nav"] > li > a ').eq(4).click()
        break

      case 'Timesheet':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(5).click()
        break

      case 'SnowTrack':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(6).click()
        break

      case 'P.O.':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(7).click()
        break

      case 'Reports':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(8).click()
        break

      default:
        break

    }

  })
})

    //--------------------------------------------USEFUL----------------------------------

/*cy.location().should((loc) => {
  switch (root) {
    case 'Home':
      expect(loc.pathname).to.eq('/order-add')
      break

    case 'Import & Optimize':

      expect(loc.pathname).to.eq('/orders-import')
      break
    default:
      break
  }
})*/

/*Cypress.Commands.add('importOption', (optName) => {

  switch (optName) {

    case 'Select all':
      cy.get(pe.importOptions.selectAll).click()
      break

    case 'Group Orders':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Ungroup':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Validate':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      cy.get(pe.importOptions.submitImport_btn).should('not.be.disabled')
      break

    case 'Delete':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Global map':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    default:
      break;
  }
})*/


