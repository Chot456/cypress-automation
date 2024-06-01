describe('My forth test', () => {
  it('Checkout page', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    // HAndling child windows
    cy.get('#opentab').then(function(element) {
      const url = element.prop('href')
      cy.visit(url)//qaclickacademy.com
      cy.origin(url, () => {
        cy.get('div.sub-menu-bar a[href*="about"]').click()
      })
    })
    
  })
})