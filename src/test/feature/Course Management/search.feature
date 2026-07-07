@Malavicka
Feature: Malavicka_07-07-2026_Search functionality in LMS SmartCliff Course Management

Feature Description:
        As an user,
        I want to search for client and course details
        so that I can quickly find the required course records.

    Background:
        Given user on the Dashboard Page after Login
        And user navigate to Course Management Page

    @ValidClientSearch
    Scenario: Search with valid client 
        When user enters a valid client in the search field
        And user clicks the search button
        Then the matching client details should be displayed in the course list

    @ValidCourseSearch
    Scenario: Search with valid course name
        When user enters a valid course name in the search field
        And user clicks the search button
        Then the matching course details should be displayed in the course list

    @InvalidClientSearch
    Scenario: Search with non-existing client 
        When user enters a non-existing client in the search field
        And user clicks the search button
        Then no matching client records should be displayed

    @InvalidCourseSearch
    Scenario: Search with non-existing course name
        When user enters a non-existing course name in the search field
        And user clicks the search button
        Then no matching course records should be displayed