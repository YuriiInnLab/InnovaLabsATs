/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('INC_States sales UI test', () => {
   beforeEach(() => {
      cy.visit('/incorp-ui-v3/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('Inc States filling flow test', () => {
      cy.log('Home page test')
      cy.incStatesTest()
      cy.log('Step1 test')
      cy.incStatesStep1()
      cy.log('Payment test')
      cy.incStatesPayment()
      /* cy.log('Upsell test')
      cy.incSUpsellTest()
      cy.log('Upsell verified!!!') */

   })
})

