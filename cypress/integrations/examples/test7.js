
import 'cypress-iframe'

describe('My forth test', () => {
  it('Iframe test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.frameLoaded('#courses-iframe')

    // cy.iframe().find('a[href*="mentorship"]').eq(0).click()
  })
})