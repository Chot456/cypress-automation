describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').type('ca')
      cy.get('.product:visible').should('have.length', 4)

      // aliasing products
      cy.get('.products').as('productLocator')
      
      //Parent child chaining
      cy.get('@productLocator').find('.product').should('have.length', 4)
      cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg =  $el.find('h4.product-name').text()

        if(textVeg.includes('Cashews')) {
           cy.wrap($el).find('button').click() 
        }
      })

      cy.get('.brand').should('have.text', 'GREENKART') 

      // Logging
      const logo = cy.get('.brand').then(function(logoElement) {
        cy.log(logoElement.text())
        
      })

    })
  })