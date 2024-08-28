/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Incorpify sales UI test', () => {
   beforeEach(() => {
      cy.visit('/incorp-ui-v2/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('TM filling flow test', () => {
      cy.log('Home page test')
      cy.incHomePageTest()
      cy.log('Home page verified!!!')
      cy.log('Step0 test')
      cy.incStep0Test()
      cy.log('Step0 verified!!!')
      cy.log('Step1 test')
      cy.incStep1Test()
      cy.log('Step1 verified!!!')
      cy.log('Step2 test')
      cy.incStep2Test()
      cy.log('Step2 verified!!!')
      cy.log('Step3 test')
      cy.incStep3Test()
      cy.log('Step3 verified!!!')
      cy.log('Step4 test')
      cy.incStep4Test()
      cy.log('Step4 verified!!!')
      cy.log('Step5 test')
      cy.incStep5Test()
      cy.log('Step5 verified!!!')
      cy.log('Step6 test')
      cy.incStep6Test()
      cy.log('Step6 verified!!!')
      cy.log('Step7 test')
      cy.incStep7Test()
      cy.log('Step7 verified!!!')
      cy.log('Step8 test')
      cy.incStep8Test()
      cy.log('Step8 verified!!!')
   })
})

