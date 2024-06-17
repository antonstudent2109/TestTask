Feature: Add Room functionality

  Scenario: Successfully add a room
    Given I am logged in as an admin
    When I add a new room with valid details
    Then I should see the new room listed on the main page

  Scenario: Fail to add a room with missing details
    Given I am logged in as an admin
    When I add a new room with missing required details
    Then I should see error messages indicating the missing fields
