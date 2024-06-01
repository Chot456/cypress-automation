import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/productPage";

const homePage = new HomePage()
const productPage = new ProductPage()
let name;
let gender;

before(function () {
  cy.fixture('example').then(function (data) {
    this.data = data
  })
})

Given('I open Ecommerce Page', function () {
  cy.visit(Cypress.env('url') + "/angularpractice/")
})

Given('I add Items to Cart', function () {


  homePage.getShopTab().click()

  this.data.productName.forEach(function (element) {
    cy.selectProduct(element)
  })

  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
})

Given('Validate the total prices', () => {
  var sum = 0

  cy.get('tr td:nth-of-type(4) > strong').each(($el, index, $list) => {
    const actualText = $el.text()
    var res = actualText.split(" ")
    res = res[1].trim()
    sum = sum + Number(res)
  }).then(function () {
    cy.log(sum)
  })

  cy.get('h3 > strong').then(function (element) {
    const actualText = element.text()
    var res = actualText.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(sum)
  })
})

Then('Select the country submit and verify Thank you message', () => {
  cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({ force: true })
  cy.get('form.ng-untouched > .btn').click()

  // cy.get('.alert').should('have.text', 'Thank you! Your order will be delivered in next few weeks :-)')
  cy.get('.alert').then(function (element) {
    const actualText = element.text()
    expect(actualText.includes('Success')).to.be.true
  })
})

When('I fill the form details', function (dataTable) {
  name = dataTable.rawTable[1][0];
  gender = dataTable.rawTable[1][1];
  homePage.getEditBox().type(name)
  homePage.getGender().select(gender)
})

Then('Validate the forms behavior', function () {
  homePage.getTwoWayDataBinding().should('have.value', name)
  homePage.getEditBox().should('have.attr', 'minlength', '2')
  homePage.getEntrepreneur().should('be.disabled')
})

Given('Select the Shop Page', function () {
  homePage.getShopTab().click()
})