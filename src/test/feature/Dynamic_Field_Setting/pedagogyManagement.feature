Feature: Pedagogy Management

    Background:
        Given Admin is on the Dashboard page after login
        And the user clicks on the dynamic field Settings icon
        And user clicks the Pedagogy button

    Scenario Outline: Add element for Pedagogy Activity
        When user clicks the View button in the "<Pedagogy Activity>" row
        And user clicks the Add Element button
        And user enters the "<Element name>"
        And user clicks the Create Element button
        Then the new element should be displayed in the Activity list

        Examples:
            | Pedagogy Activity | Element name |
            | I Do              | Lecture      |
            | We Do             | Discussion   |
            | You Do            | Assignment   |