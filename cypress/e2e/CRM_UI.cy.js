/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('CRM UI test', () => {
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
      cy.crmDashboardTest()
   })

   it('CRM INC_States order test', () => {
      cy.log('INC_States order test')
      cy.crmLogInTest(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])
      cy.crmINCStOrderTest('18C3D1EE99')
   })

})

