describe('My Second Test', () => {
    it('Checkout page', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('input[name="checkBoxOption1"]').check().should('be.checked').and('have.value', 'option1')
      cy.get('input[name="checkBoxOption1"]').uncheck().should('not.be.checked')

      // checkbox
      cy.get('input[type="checkbox"]').check(['option2', 'option3'])

      // Dropdown menu
      cy.get('select').select('option2').should('have.value', 'option2')

      //Search dropdown
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === 'India') {
          cy.wrap($el).click()
        }
      })
      cy.get('[placeholder="Type to Select Countries"]').should('have.value', 'India')

      // Hide and show element
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // radio button
      cy.get('[value="radio2"]').check().should('be.checked')

      // Alert
      cy.get('#alertbtn').click()
      cy.get('[placeholder="Hide\/Show Example"]').type('Hello')
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
      
    })
  })