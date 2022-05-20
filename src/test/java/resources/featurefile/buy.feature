Feature: Search functionality

  As a User I want to select make and model of car on carsguide.com

  @Regression,@Sanity,@Smoke
  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When  I hover mouse on buy + sell tab
    And   I click search cars link
    Then  I navigate to new and used car search page
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on find my next car tab
    Then  I should see the make "<make>" in results
    Examples:
      | make   | model   | location               | price   |
      | Audi   | A3      | VIC - Central Victoria | $40,000 |
      | Audi   | A4      | QLD - Gold Coast       | $50,000 |
      | BMW    | 120d    | VIC - Melbourne        | $60,000 |
      | Honda  | Accord  | TAS - North            | $70,000 |
      | Toyota | Avensis | TAS - South            | $80,000 |
      | Jaguar | X Type  | SA - Adelaide          | $90,000 |