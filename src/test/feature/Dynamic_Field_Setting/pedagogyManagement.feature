@Mylambigai
Feature: Pedagogy Management

    Background:
        Given Admin is on the Dashboard page after login
        And Admin navigates to the Dynamic Field Setting page
        And Admin clicks the Pedagogy button

    Scenario Outline: Add element for Pedagogy Activity
        When Admin clicks the View button in the "<Pedagogy Activity>" row
        And Admin clicks the Add Element button
        And Admin enters the "<Element name>"
        And Admin clicks the Create Element button
        Then the new element should be displayed in the Activity list

        Examples:
            | Pedagogy Activity | Element name |
            | I Do              | Lecture      |
            | We Do             | Discussion   |
            | You Do            | Assignment   |