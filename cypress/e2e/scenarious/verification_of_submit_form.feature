Feature: Verification that submit form works correctly

  Scenario: Positive Scenario
    Given I am on the main page
    When I fill the form with valid data and submit
    Then I should see a success message

  Scenario: Negative Scenario
    Given I am on the main page
    When I fill the form with invalid email and submit
    Then I should see an error message
