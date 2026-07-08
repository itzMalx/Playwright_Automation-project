Feature: VetrivelB_07-07-2026_Course_Structure_Pagination

  Background:
    Given the user is on the login page of the LMS smartcliff website
    When the user enters the login credentials
    And the user clicks the signin button
    Then the user should be logged in successfully
    And the user is on the Course Structure page

  @NextPage
  Scenario: Verify user can navigate to the next page using the Next button
    Given the user is on the first page of the Course Structure table
    When the user clicks the "Next" button
    Then the user should be navigated to the next page

  Scenario: Verify user can navigate to a specific page using the page number
    Given the user is on the Course Structure table
    When the user clicks page number "2"
    Then the user should be navigated to page "2"