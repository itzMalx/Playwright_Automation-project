@Malavicka @search
Feature: Malavicka_07-07-2026_Search functionality in LMS SmartCliff website

  Background:
    Given Admin logs in and reaches the Dashboard for Search
    And Admin opens the Course Management module for Search

  Scenario: Search with valid client
    When User searches client with the following data
      | keyword | result  |
      | jamocha | jamocha |

  Scenario: Search with valid course name
    When User searches course with the following data
      | keyword | result |
      | mern    | Mern   |

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