@Shobana
Feature: Shobana_09-07-2026_Add course category

    Background:
        Given Admin on the Dashboard Page after Login
        And the user clicks on the dynamic field Settings icon
        And user selects course category
    Scenario Outline: Add Course Category
        When Admin clicks the Add Category button
        And Admin enters "<categoryName>" "<courseNames>" "<description>"
        And Admin clicks the Create Category button
        Then Admin should see "<message>"

        Examples:
            | categoryName | courseNames | description         | message                       |
            | Developer    | Java        | Backend Development | Category created successfully |
            |              | SQL         | Backend Development | Please fill out field         |