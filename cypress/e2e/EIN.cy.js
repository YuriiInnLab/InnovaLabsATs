/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('EIN sales UI test', () => {
   beforeEach(() => {
      cy.visit('/craco-taxid/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('EIN filling flow test', () => {
      cy.log('Home page test')
      cy.einHomeTest()
      cy.log('Home page verified!!!')
      cy.log('EIN flow test')
      cy.einflowTest()
      cy.log('EIN filling verified!!!')
      cy.log('EIN payment test')
      cy.einPaymentPage()
      cy.log('Payment page verified!!!')
      cy.log('EIN LLC upsell test')
      cy.einLLCUpsell()
      cy.einFillLLCUpsell()
      cy.log('LLC Upsell verified!!!')
      cy.log('EIN BOI upsell test')
      cy.einBOIUpsell()
      cy.einBOIFillUpsell()
      cy.log('BOI Upsell verified!!!')
      cy.einTMUpsell()
   })
})

