/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

context('Trademarks test', () => {
   
   describe('Trademarks (v1) sales UI test', () => {
      beforeEach(() => {
         cy.visit('/trademarks/')
         Cypress.on('uncaught:exception', (err, runnable) => {
            return false
         })
         cy.clearLocalStorage()
      })
 
   

      it('Home Page Test', () => {
         cy.tmSearchTest()
      })

      it('TM filling flow test', () => {
         cy.tmSearchTest()
         cy.log('TM steps test')
         cy.tmFlowStep0()
         cy.log('Filling out required fields')
         cy.tmFlowStep1()
         cy.log('Selecting Class')
         cy.tmFlowStep2()
         cy.log('Selecting Package')
         cy.tmFlowStep3()
         cy.log('Rush page test')
         cy.tmFlowStep4()
         cy.log('Payment page test')
         cy.tmPaymentPage()
      })
   })
})
