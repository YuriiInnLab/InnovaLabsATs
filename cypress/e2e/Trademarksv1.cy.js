/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Trademarks (v1) sales UI test', () => {
   beforeEach(() => {
      cy.visit('/trademarks/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('TM filling flow test', () => {
      cy.log('Home page and search test')
      cy.tmSearchTest()
      cy.log('Search verified!!!')
      cy.log('TM steps test')
      cy.tmFlowStep0()
      cy.log('Step0 verified!!!')
      cy.log('Filling out required fields')
      cy.tmFlowStep1()
      cy.log('Step1 verified!!!')
      cy.log('Selecting Class')
      cy.tmFlowStep2()
      cy.log('Step2 verified!!!')
      cy.log('Selecting Package')
      cy.tmFlowStep3()
      cy.log('Step3 verified!!!')
      cy.log('Rush page test')
      cy.tmFlowStep4()
      cy.log('Step4 verified!!!')
      cy.log('Payment page test')
      cy.tmPaymentPage()
      cy.log('Payment page verified!!!')   
      
   })
})

