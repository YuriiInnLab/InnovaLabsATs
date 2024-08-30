/// <reference types="cypress" />
import './customCommands.js'
import { getRandomInt, randOptionSelect } from './customCommands.js'
import 'cypress-file-upload'

const {
  PageElements
} = require("../support/selectors")

const pe = new PageElements()

//------Testdata

const tmtstdata = 'tmtest123a'
const incstsdata = 'inctssa'
const incstmail = 'inctss1a@inctss1a.net'
const nametsdat = 'atsname'
const eintsdat = 'enatsname'
const tsmaild = 'test123a@test.net'
const inctsdat = 'incatstxt'
const incmaild = 'incatsname@incatsname.net'
const testzip = '00010'
const testphone = '0001000010'
const testcard = '0000000000000000'


//------Trademarks

Cypress.Commands.add('tmSearchTest', () => {
cy.elementIsVisible(pe.tm_search_field)
cy.elementIsVisible(pe.tm_home_logo)
cy.elementIsVisible(pe.tm_register_btn)
cy.get(pe.tm_search_field)
  .click().type(tmtstdata)
cy.scrollTo('top');
cy.get(pe.tm_search_btn).click({force: true})
cy.intercept('POST', 'https://dev.innova-labs.net:9080/clicks').as('tmflowPageHasLoaded')
cy.wait('@tmflowPageHasLoaded', { timeout: 10000 }).its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('tmFlowStep0', () => {
  cy.urlValidation('/registration-trademark-search')
  cy.elementsAreVisible(pe.tm_steps_vis, 5)
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
  randOptionSelect('#state')                        // Selecting State
  cy.elementIsVisible('#zip').type(testzip)
  cy.elementIsVisible('#phone').type(testphone)
  cy.elementIsVisible('#email').type(tsmaild)
  cy.elementIsVisible(pe.tm_continue_btn).click()
})

Cypress.Commands.add('tmFlowStep2', () => {
  cy.wait(500)
  cy.elementIsVisible(pe.tm_pack_description)
  cy.elementIsVisible(pe.tm_steps_vis, 5)
  cy.elementIsVisible(pe.tm_new_class_btn)
  cy.get(pe.tm_class_select)
    .click()
    .type('025')
    .wait(1000)
    .type('{downarrow}'.repeat(getRandomInt(11))+ '{enter}')
  cy.elementIsVisible(pe.tm_continue_btn).click({ force: true })
  cy.wait(1500)
})

Cypress.Commands.add('tmFlowStep3', () => {   
  cy.elementIsVisible(pe.tm_top_logo)
  cy.urlValidation('/registration-trademark-search?step=3')
  cy.scrollTo('top');
  cy.elementIsVisible(pe.tm_package_base).eq(1)
  cy.elementIsVisible(pe.tm_package_stand)
  cy.elementIsVisible(pe.tm_package_prem)
  //cy.elementsAreVisible(pe.tm_select_package, 3) // Verifying all 3 packages are present and can be selected
  
  // Problem Here

  cy.get(pe.tm_select_package).click()
 
   
})

Cypress.Commands.add('tmFlowStep4', () => {
  cy.elementIsVisible(pe.tm_top_logo)
  cy.urlValidation('/registration-trademark-search?step=4')
  cy.elementIsVisible(pe.tm_rush_or_agreement)
  cy.elementIsVisible(pe.tm_summary).children()
    .should('have.length.at.least', 3)
  cy.elementIsVisible(pe.tm_continue_btn).click()
  cy.wait(1000)
})

Cypress.Commands.add('tmPaymentPage', () => {
  cy.elementIsVisible(pe.tm_top_logo)
  cy.urlValidation('/trademarks/payment')
  cy.elementIsVisible(pe.tm_rush_or_agreement)
  cy.elementIsVisible(pe.tm_summary).children()
    .should('have.length.at.least', 3)
  cy.elementIsVisible(pe.tm_payment_form)
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  randOptionSelect('#cardMonth')
  randOptionSelect('#cardYear')
  cy.elementIsVisible('#cvc').type('100')
  cy.elementIsVisible(pe.tm_rush_or_agreement).click()
  cy.elementIsVisible(pe.tm_payment_but).click()
  cy.intercept('GET', 'https://dev.innova-labs.net:9080/upsell-offers?active=true*').as('tmUpsLoaded')
  cy.wait('@tmUpsLoaded', { timeout: 7500 }).its('response.statusCode').should('eq', 200)
    cy.urlValidation('/upsell?step=1')
  cy.elementIsVisible(pe.tm_top_logo)
  cy.elementIsVisible('.upsell-banner')
  cy.elementIsVisible('.upsell-form')

})

//------Inc_States

Cypress.Commands.add('incStatesTest', () => {
  cy.elementIsVisible(pe.incs_logo)
  cy.elementIsVisible(pe.incs_contactus_btn)
  cy.selectRandomDropdownOption(pe.incs_state_select,'.base-select__menu-list .base-select__option')
  cy.elementIsVisible(pe.incs_continue_btn).click()
})

Cypress.Commands.add('incStatesStep1', () => {
  cy.elementIsVisible(pe.incs_logo)
  cy.elementIsVisible(pe.incs_business_name).type(incstsdata)
  cy.elementIsVisible(pe.incs_business_cat1)
    .type('a{downarrow}{uparrow}{enter}')
  cy.elementIsVisible(pe.incs_business_cat2)
    .type('h{downarrow}{uparrow}{enter}')
  cy.elementIsVisible(pe.incs_street_address).type(incstsdata)
  cy.elementIsVisible(pe.incs_city).type(incstsdata)
  cy.elementIsVisible(pe.incs_primary_fname).type(incstsdata)
  cy.elementIsVisible(pe.incs_primary_lname).type(incstsdata)
  cy.elementIsVisible(pe.incs_statef_select)
    .type('{downarrow}'.repeat((getRandomInt(55)))+ '{enter}')
  cy.elementIsVisible(pe.incs_title)
    .type('{downarrow}'.repeat(getRandomInt(7))+ '{enter}')
  cy.elementIsVisible(pe.incs_zip).type(testzip)
  cy.elementIsVisible(pe.incs_phone).type(testphone)
  cy.elementIsVisible(pe.incs_email).type(incstmail)
  cy.elementIsVisible(pe.incs_manager)
    .type(nametsdat + ' ' + nametsdat)
  cy.elementIsVisible(pe.incs_agreement_checkbox).click()
  cy.elementIsVisible(pe.incs_continue_btn).eq(1).click()
})

Cypress.Commands.add('incStatesPayment', () => {
  cy.elementIsVisible(pe.incs_logo)
  cy.elementIsVisible(pe.incs_proc_option).eq(getRandomInt(2)).click()
  cy.elementExist(pe.incs_ra_chckbox).should('be.checked', { force: true });
  cy.elementIsVisible(pe.incs_pay_fname).type(incstsdata)
  cy.elementIsVisible(pe.incs_pay_lname).type(incstsdata)
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  cy.elementIsVisible(pe.incs_pay_yr_Mth).eq(0)
  .type('{downarrow}'.repeat((getRandomInt(12)))+ '{enter}')
  cy.elementIsVisible(pe.incs_pay_yr_Mth).eq(1)
  .type('{downarrow}'.repeat((getRandomInt(26))+2)+ '{enter}')                  //do not let card to be expired
  cy.elementIsVisible('#cvc').type('100')
  cy.elementIsVisible(pe.incs_continue_btn).click()
  cy.intercept('POST', 'https://dev.innova-labs.net:9080/clicks' ).as('incSCompleted')
  cy.wait('@incSCompleted', { timeout: 7000 }).its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('incSUpsellTest', () => {
  cy.urlValidation('/upsell?step=0')
  cy.elementIsVisible(pe.incs_logo)
  cy.elementsAreVisible(pe.incs_upsell_checkboxes)
// Need new checkbox command for checkbox in upsells
  cy.sumAndCompare(pe.incs_fupsell_prices, pe.incs_fupsell_sum)
  cy.elementIsVisible(pe.incs_continue_btn).click()
  cy.urlValidation('/upsell?step=1')
  cy.elementIsVisible(pe.incs_logo)
  cy.elementIsVisible(pe.incs_refuse_boiups)
  cy.elementIsVisible(pe.incs_continue_btn).click()
  cy.elementIsVisible(pe.incs_refuse_boiups).click()
  cy.urlValidation('/upsell?step=2')
  cy.elementIsVisible(pe.incs_logo)
  cy.elementsAreVisible(pe.incs_continue_btn, 2)
  cy.get(pe.incs_continue_btn).eq(1).click()
  cy.urlValidation('/thankyou')
  cy.elementIsVisible(pe.incs_logo)
  cy.elementIsVisible(pe.incs_continue_btn)               //Go to membership btn
})

//------EIN

Cypress.Commands.add('einHomeTest', () => {
  cy.elementIsVisible('.logo')
  cy.elementsAreVisible(pe.ein_products, 10)
  cy.elementsAreVisible(pe.ein_faq, 8)
  cy.get(pe.ein_products).eq(1).click()
})

Cypress.Commands.add('einflowTest', () => {
  cy.elementIsVisible('.logo')
  cy.intercept('GET', 'https://dev.innova-labs.net:9080/category/EIN/products/primary-activity' ).as('einFlowPageHasLoaded')
  cy.wait('@einFlowPageHasLoaded').its('response.statusCode').should('eq', 200)
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
  cy.elementIsVisible('#corpAddressZip').type(testzip)
  randOptionSelect('#corpAddressState')
  cy.elementIsVisible('#corpAddressCounty').type(eintsdat)
  cy.elementIsVisible('#customerPhone').type(testphone)
  cy.elementIsVisible('#customerEmail').type(tsmaild)
  cy.elementExist(pe.ein_agreement_chckbox).click()
  cy.elementIsVisible('#ClientAgreement').should('be.checked')
  cy.elementIsVisible('#EINSubmitButton').click()
})

Cypress.Commands.add('einPaymentPage', () => {
  cy.elementIsVisible('.logo')
  cy.elementIsVisible(pe.ein_multistep)
  cy.elementIsVisible('#firstName').type(eintsdat)
  cy.elementIsVisible('#lastName').type(eintsdat)
  cy.elementIsVisible('#cardNumber').type('0000000000000000')
  randOptionSelect('#cardMonth')
  randOptionSelect('#cardYear')
  cy.elementIsVisible('#cvc').type('100')
  cy.elementsAreVisible(pe.ein_processing_options, 2)
  cy.get('#processingOption2').should('be.checked')
  cy.elementIsVisible(pe.ein_submit_payment).click()
})

Cypress.Commands.add('einLLCUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.urlValidation('/LLCUpsellQuestion')
  cy.elementExist(pe.ein_confirm_llc).click()
})

Cypress.Commands.add('einFillLLCUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.urlValidation('/LLCUpsell')
  cy.elementIsVisible('#altCompanyName').type(eintsdat+'alt')
  cy.elementsAreVisible(pe.ein_ra_chckbox, 2)
  cy.get(pe.ein_ra_chckbox).eq(1).click()
  //cy.pause()
  cy.elementIsVisible(pe.ein_confirm_llc).click()
})

Cypress.Commands.add('einBOIUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.intercept('POST', 'https://dev.innova-labs.net:9080/orders/*/create-upsale*' ).as('boiEinPageLoaded')
  cy.wait('@boiEinPageLoaded', { timeout: 8000 }).its('response.statusCode').should('eq', 200)
  cy.urlValidation('/BOIUpgrade')
  cy.elementsAreVisible(pe.ein_upsell_decision_btns, 2)
  cy.get(pe.ein_upsell_decision_btns).eq(0).click()
})

Cypress.Commands.add('einBOIFillUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.urlValidation('/BOIUpgrade')
  cy.elementsAreVisible(pe.ein_dateofbirth_selectors, 3)
  cy.get(pe.ein_dateofbirth_selectors).each(($el) => {
    randOptionSelect($el)
  });
  cy.elementIsVisible('#driverLicenceOrID').type(eintsdat)
  cy.elementIsVisible('#customerIdFile').attachFile('testph.jpeg')
  cy.elementsAreVisible(pe.ein_upsell_decision_btns, 2)
  cy.get(pe.ein_upsell_decision_btns).eq(1).click()
  cy.intercept('GET', 'https://dev.innova-labs.net:9080/category/TRADEMARKS/products/prices?productCodes=TRADEMARK_RegisterTrademark&processingOptions=DELUXE' ).as('boiIsLoaded')
  cy.wait('@boiIsLoaded').its('response.statusCode').should('eq', 200) 
})

Cypress.Commands.add('einTMUpsell', () => {
  cy.elementIsVisible('.logo')
  cy.urlValidation('/TrademarkUpsellQuestion')
})

//------INC UI

Cypress.Commands.add('incHomePageTest', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.elementIsVisible(pe.inc_home_banner)
  cy.elementIsVisible(pe.inc_membership_button)
  cy.elementsAreVisible(pe.inc_nav_menu, 5)
  cy.elementIsVisible(pe.inc_llc_corp_button).click()
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation')
  cy.elementIsVisible(pe.inc_start_reg_button).click()
})

Cypress.Commands.add('incStep0Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=0')
  cy.selectRandomDropdownOption(pe.inc_state_select, pe.inc_states_options)
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep1Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=1')
  cy.elementIsVisible(pe.inc_business_name).type(inctsdat)
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep2Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=2')
  cy.elementIsVisible(pe.inc_select_universal).type('a{downarrow}{uparrow}{enter}')               //  Business category
  cy.elementIsVisible(pe.inc_select_universal).eq(1).type('h{downarrow}{uparrow}{enter}')
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep3Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=3')
  cy.elementsAreVisible(pe.inc_input_fields, 4)
  cy.get(pe.inc_input_fields).eq(0).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(1).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(2).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(3).type(testzip)
  cy.elementIsVisible(pe.inc_select_universal)                    // State selecting for Physical address
    .type('{downarrow}'.repeat((getRandomInt(55)))+ '{enter}')
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep4Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=4')
  cy.elementsAreVisible(pe.inc_input_fields, 6)
  cy.get(pe.inc_input_fields).eq(0).type(inctsdat + ' ' + inctsdat)
  cy.get(pe.inc_input_fields).eq(1).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(2).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(3).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(4).type(incmaild)
  cy.get(pe.inc_input_fields).eq(5).type(testphone)
  cy.get(pe.inc_select_universal).eq(1)
    .type('{downarrow}'.repeat((getRandomInt(6))+1)+ '{enter}')
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep5Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=5')
  cy.elementsAreVisible(pe.inc_details_questions, 4)
  cy.elementsAreVisible(pe.inc_nav_buttons, 2)
  cy.get(pe.inc_nav_buttons).eq(1).click()
})

Cypress.Commands.add('incStep6Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=6')
  cy.elementsAreVisible(pe.inc_packages ,6)
  cy.elementsAreVisible(pe.inc_packages_select ,3)
  cy.elementIsVisible(pe.inc_packages_select).eq(2).click()
})

Cypress.Commands.add('incStep7Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/llc-incorporation-filing?step=7')
  cy.elementIsVisible(pe.inc_ra_confirmation).click()
})

Cypress.Commands.add('incStep8Test', () => {
  cy.elementIsVisible(pe.inc_logo)
  cy.urlValidation('/payment')
  cy.elementsAreVisible(pe.inc_input_fields, 7)
  cy.elementIsVisible(pe.inc_order_summary)
  cy.get(pe.inc_input_fields).eq(0).invoke('val').should('not.be.empty')
  cy.get(pe.inc_input_fields).eq(1).invoke('val').should('not.be.empty')
  cy.get(pe.inc_input_fields).eq(2).type(testcard)
  cy.get(pe.inc_input_fields).eq(3).type('100')
  cy.get(pe.inc_input_fields).eq(4).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(5).type(inctsdat)
  cy.get(pe.inc_input_fields).eq(6).type(testzip)
  cy.elementIsVisible(pe.inc_select_universal).eq(0)                    // State selecting for Physical address
    .type('{downarrow}'.repeat((getRandomInt(12)))+ '{enter}')
    cy.elementIsVisible(pe.inc_select_universal).eq(1)                    // State selecting for Physical address
    .type('{downarrow}'.repeat((getRandomInt(26))+2)+ '{enter}')
  cy.elementIsVisible(pe.inc_select_universal).eq(2)                    // State selecting for Physical address
    .type('{downarrow}'.repeat((getRandomInt(55)))+ '{enter}')
  cy.elementExist(pe.inc_agreement_checkbox).check({ force: true }).should('be.checked')
  cy.elementIsVisible(pe.inc_submit_order).click()
  
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
  cy.elementIsVisible(pe.crm_filter_button)
  cy.elementsAreVisible(pe.crm_dashboard_filters, 4)
  cy.elementIsVisible(pe.crm_recurring_checkbox).should('not.be.checked')
  cy.elementIsVisible(pe.crm_nav_orders).click()
  cy.elementsAreVisible(pe.crm_nav_buttons, 12)
})

Cypress.Commands.add('crmINCStOrderTest', (testorder) => {
  cy.elementIsVisible(pe.crm_nav_orders).click()
  cy.elementIsVisible(pe.crm_incS_orders).click()
  cy.elementsAreVisible(pe.crm_order_Vis_filters, 5)
  cy.elementsAreVisible(pe.crm_order_search_options, 6)
  cy.get(pe.crm_order_Vis_filters).eq(2).type(testorder)
  cy.get(pe.crm_order_search_options).eq(1).click()
  cy.elementIsVisible(pe.crm_order_select).click()
  cy.elementIsVisible('.logo-normal')
  cy.elementIsVisible(pe.crm_product_select)
  cy.elementIsVisible(pe.crm_orderid)
  cy.elementIsVisible(pe.crm_order_created)
  cy.elementIsVisible(pe.crm_firstname).should('have.text', incstsdata)
  cy.elementIsVisible(pe.crm_lastname).should('have.text', incstsdata)
  cy.elementIsVisible(pe.crm_email).should('have.text', incstmail)
  cy.elementsAreVisible(pe.crm_order_products, 8)
  cy.get(pe.crm_order_products).eq(0).should('have.text', 'INC_States_LLCIncorporationV2(Pending RA)')
  cy.get(pe.crm_order_products).eq(2).should('have.text', 'INC_States_StateIncorporationFee(Completed)')
  cy.elementIsVisible(pe.crm_edit_btn).click()
  cy.elementIsVisible(pe.crm_save_ord_changes).click()
})


