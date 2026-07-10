@Vetri
Feature: VetrivelB_09-07-2026_Add_Client_Feature

    Background:
        Given the user is on the login page of the LMS smartcliff website
        When the user enters the login credentials
        And the user clicks the signin button
        Then the user should be logged in successfully
        And the user clicks on the dynamic field Settings icon
    
    @WithMandatoryField
    Scenario: Verify a client can be added with all mandatory field 
        Given the user opens the Add New Client dialog
        When When the user enters client details
        And clicks the "Add Client" button
        Then Then the client should be added successfully

    @WithoutMandatoryField
    Scenario: Verify a client cannot be added without filling all mandatory fields
        Given the user opens the Add New Client dialog
        When the user leaves one or more mandatory fields empty
        And clicks the "Add Client" button
        Then the client should not be added
        And appropriate validation messages should be displayed

    