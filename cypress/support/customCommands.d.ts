declare namespace Cypress {
    interface Chainable<Subject> {

      //loginForm(username: any, password: any): Chainable<any>
      
      //------Trademark
      tmSearchTest(element: any): Chainable<any>
      tmFlowStep0(element: any): Chainable<any>
      tmFlowStep1(element: any): Chainable<any>
      tmFlowStep2(element: any): Chainable<any>
      tmFlowStep3(element: any): Chainable<any>
      tmFlowStep4(element: any): Chainable<any>
      tmPaymentPage(element: any): Chainable<any>

      //------INC_States
      incStatesTest(element: any): Chainable<any>
      incStatesStep1(element: any): Chainable<any>
      incStatesPayment(element: any): Chainable<any>
      incSUpsellTest(element: any): Chainable<any>

      //------INC
      incHomePageTest(element: any): Chainable<any>
      incStep0Test(element: any): Chainable<any>
      incStep1Test(element: any): Chainable<any>
      incStep2Test(element: any): Chainable<any>
      incStep3Test(element: any): Chainable<any>
      incStep4Test(element: any): Chainable<any>
      incStep5Test(element: any): Chainable<any>
      incStep6Test(element: any): Chainable<any>
      incStep7Test(element: any): Chainable<any>
      incStep8Test(element: any): Chainable<any>

      //------EIN
      einHomeTest(element: any): Chainable<any>
      einflowTest(element: any): Chainable<any>
      einPaymentPage(element: any): Chainable<any>
      einLLCUpsell(element: any): Chainable<any>
      einFillLLCUpsell(element: any): Chainable<any>
      einBOIUpsell(element: any): Chainable<any>
      einBOIFillUpsell(element: any): Chainable<any>
      einTMUpsell(element: any): Chainable<any>

      //------CRM UI

      crmLogInTest(element: any): Chainable<any>
      crmDashboardTest(element: any): Chainable<any>
      crmINCStOrderTest(element: any): Chainable<any>
      
      //------Commands

      goToPage(root: any): Chainable<any>       
      elementIsVisible(element: any): Chainable<any>
      elementloaded(element: any): Chainable<any>
      elementExist(element: any): Chainable<any>
      elementExist(element: any): Chainable<any>
      selectRandomDropdownOption(element: any): Chainable<any>
      elementsAreVisible(selector: any, expectedCount: any): Chainable<any>
      sumAndCompare(element: any): Chainable<any>
      
    }
}