/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Trademarksv1 test', () => {
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
      cy.log('Search done!!!')
      cy.log('TM steps test')
      cy.tmFlowStep0()
      cy.log('Step0 done!!!')
      cy.log('Filling out required fields')
      cy.tmFlowStep1()
      cy.log('Step1 done!!!')
      cy.log('Selecting Class')
      cy.tmFlowStep2()
      cy.log('Step2 done!!!')
      cy.log('Selecting Package')
      cy.tmFlowStep3()
      cy.log('Step3 done!!!')
      cy.log('Rush page test')
      cy.tmFlowStep4()
      cy.log('Step4 done!!!')
      cy.log('Payment page test')
      cy.tmPaymentPage()
      cy.log('Payment page done!!!')   
      
   })
})

