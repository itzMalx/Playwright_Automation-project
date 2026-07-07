@Malavicka
Feature: Malavicka_07-07-2026_Search functionality in LMS SmartCliff website

  Background:
    Given the user is on the login page of the LMS smartcliff website
    When the user logs in with valid LMS credentials
    Then the user should be logged in successfully
    And user navigate to course management page

  Scenario: Search with valid client
    When User searches client with the following data
      | keyword    | result     |
      | mern       | Mern       |

  Scenario: Search with valid course name
    When User searches course with the following data
      | keyword    | result     |
      | frontend   | Frontend   |

  Scenario: Search with non existing client
    When User searches client with the following data
      | keyword       | result |
      | xyzclientnone | none   |
    Then no matching results should be displayed

  Scenario: Search with non existing course
    When User searches course with the following data
      | keyword           | result |
      | nonexistentcourse | none   |
    Then no matching results should be displayed