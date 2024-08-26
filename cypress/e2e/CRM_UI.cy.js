/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Trademarksv1 test', () => {
   beforeEach(() => {
      cy.visit('/crm/login')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('CRM UI test', () => {
      cy.log('Log in test')
      cy.crmLogInTest(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])
      cy.log('Dashboard verified!!!')
      cy.crmDashboardTest()
   })

   it('CRM INC_States order test', () => {
      cy.log('INC_States order test')
      cy.crmLogInTest(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])
      cy.crmINCStOrderTest('E24E9E169C')
   })

})

