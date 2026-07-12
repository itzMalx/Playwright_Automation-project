@Vetri
Feature: VetrivelB_09-07-2026_Add_Client_Feature

    Background:
        Given the user is logged into the LMS SmartCliff website
        And the user clicks on the Dynamic Field Settings icon
        And the user navigated to the Client Modal
    
    @WithMandatoryField
    Scenario: Verify a client can be added with all mandatory field

        Given the user opens the Add New Client dialog
        When the user enters client details
        And clicks the "Add Client" button
        Then the client should be added successfully

    @WithoutMandatoryField
    Scenario: Verify a client cannot be added without filling all mandatory fields

        Given the user opens the Add New Client dialog
        When the user leaves one or more mandatory fields empty
        And clicks the "Add Client" button
        Then the client should not be added
        And appropriate validation messages should be displayed

    @CancelButton
    Scenario: Verify clicking the Cancel button closes the Add New Client dialog

        Given the user opens the Add New Client dialog
        When the user enters client details
        And clicks the "Cancel" button
        Then the Add New Client dialog should be closed
        And the client should not be added