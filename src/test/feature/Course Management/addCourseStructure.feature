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
            | course     |
            | J-AT-A-002 |

    Scenario: Export the course structure as an Excel file
        And Admin clicks the Add Course Structure button for the course
        And verifies that a course structure is present in the table
        When Admin clicks the Print button
        And selects the Excel export option
        Then the Excel file should be downloaded

    Scenario Outline: Add module without mandatory field
        And Admin clicks Add Course Structure for the "<course>"
        When Admin clicks the Add Module icon
        And Admin clicks the Add Module button without filling the mandatory field
        Then an error message should be displayed

        Examples:
            | course     |
            | J-AT-A-002 |



