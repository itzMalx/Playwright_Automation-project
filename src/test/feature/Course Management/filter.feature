@Malavicka @filter
Feature: Malavicka_08-07-2026_Filter functionality in LMS SmartCliff website

  Background:
    Given Admin logs in and reaches the Dashboard for Filter
    And Admin opens the Course Management module for Filter
    And Admin clicks on the Filter button

  Scenario: Filter with valid category, level and sort by
    When Admin filters courses using valid filter data
    Then only courses matching the selected category and level should be displayed

  Scenario: Filter with invalid status and category
  
    When Admin filters courses using invalid filter data
    Then no filter results should be displayed

  Scenario: Clear All filters
    Given Admin has applied a category, level, and sort filter
    When Admin clicks on the Clear All button
    Then Status, Category, and Level should reset to All
    And all courses should be displayed