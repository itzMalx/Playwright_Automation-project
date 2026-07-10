@Mylambigai
Feature: Pedagogy Management

    Background:
        Given Admin is on the Dashboard page after login
        And user clicks the Dynamic Field Settings icon
        And user clicks the Pedagogy button

    Scenario Outline: Add a new element to a pedagogy activity
        When user clicks the View button in the "<Pedagogy Activity>" row
        And user clicks the Add Element button
        And user enters "<Element name>" as the element name
        And user clicks the Create Element button
        Then "<Element name>" should be displayed in the activity list

        Examples:
            | Pedagogy Activity | Element name |
            | I Do              | Lecture      |
            | We Do             | Discussion   |
            | You Do            | Assignment   |

    Scenario: Search pedagogy activity
        When user enters activity in the activity search field
        Then only the matching activity should be displayed in the table