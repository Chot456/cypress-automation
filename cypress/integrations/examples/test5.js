describe('My forth test', () => {
  it('Checkout page', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    // HAndling table values
      cy.get('table[name="courses"] tbody tr td:nth-child(2)').each(($e1, index, $list) => {
        const courseName = $e1.text()

        if(courseName.includes('Python')) {
          cy.get('table[name="courses"] tbody tr td:nth-child(2)').eq(index).next().then(function(price) {
            const priceValue = price.text()
            expect(priceValue).to.equal('25')
          })
        }
      })


      // Mouse hover
      cy.get('.mouse-hover-content').invoke('show')
      cy.get('[href="\#top"]').click()
      cy.url().should('include', 'top')
  })
})