Feature: End to end Ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add Items to Cart
    Given Validate the total prices
    Then Select the country submit and verify Thank you message

    @Smoke
    Scenario: Filling the Form to shop
    Given I open Ecommerce Page
    When I fill the form details
        |name | gender |
        |chot | Male   |
    Then Validate the forms behavior
    Given Select the Shop Page