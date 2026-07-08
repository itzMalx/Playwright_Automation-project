@Mylambigai
Feature: Mylambigai_7/7/2026 In Course Management Add Course Structure

    Background:
        Given Admin on the Dashboard Page after Login
        And Admin navigate to Course Management Page

    Scenario Outline: Add a new module to the course structure
        And Admin click add Course Structure for the "<course>"
        When Admin clicks the Add Module icon
        And Admin enters the required module details
        And Admin clicks the Add Module button
        Then the newly added module should be displayed in the Module table

        Examples: 
        |course|
        |Playwright|



