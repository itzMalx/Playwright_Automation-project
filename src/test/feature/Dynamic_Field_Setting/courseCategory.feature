@Shobana
Feature: Shobana_09-07-2026_Add course category

    Background:
        Given Admin on the Dashboard Page after Login
        And Admin is navigating to the dynamic field settings page
        And user selects course category

    @Addcategory
    Scenario Outline: Add Course Category
        When Admin clicks the Add Category button
        And Admin enters "<categoryName>" "<courseNames>" "<description>"
        And Admin clicks the Create Category button
        Then Admin should see "<message>"

        Examples:
            | categoryName | courseNames | description         | message                       |
            | Developer    | Java        | Backend Development | Category Created Successfully |
            |              | SQL         | Backend Development | Please fill out this field.   |

    @SearchCategory
    Scenario: Search Course Category
        When Admin searches the course category using csv data
        Then Matching course category should be displayed
