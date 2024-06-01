import HomePage from '../pageObjects/HomePage.js'
import ProductPage from '../pageObjects/productPage.js'


describe('Framework', () => {

  before(function() {
    cy.fixture('example').then(function(data) {
      this.data = data
    })
  })

  it('Test Framework', function() {
    const homePage = new HomePage()
    const productPage = new ProductPage() 

    cy.log(Cypress.env('url'))

    cy.visit(Cypress.env('url')+"/angularpractice/")
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    })

    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

    var sum = 0

    cy.get('tr td:nth-of-type(4) > strong').each(($el, index, $list) => {
      const actualText = $el.text()
      var res = actualText.split(" ")
      res = res[1].trim()
      sum = sum+Number(res)
    }).then(function() {
      cy.log(sum)
    })

    cy.get('h3 > strong').then(function(element) {
      const actualText = element.text()
      var res = actualText.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)
    })

    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('form.ng-untouched > .btn').click()

    // cy.get('.alert').should('have.text', 'Thank you! Your order will be delivered in next few weeks :-)')
    cy.get('.alert').then(function(element) {
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })

  })
})