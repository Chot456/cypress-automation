describe('My forth test', () => {
    it('Checkout page', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      cy.get("#opentab").invoke('removeAttr', 'target').click()
      // cy.get("#opentab").click();
      cy.origin("https://www.qaclickacademy.com/", () => {
        cy.get(".navbar-nav [href='about\.html']").click();
        cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
      })
    })
  })