@Muhindhar
Feature: Adding the service in the dynamic field management page
        Background:
            Given the user is on the login page of the LMS smartcliff website
             When the user enters the login credentials
              And the user clicks the signin button
             Then the user should be logged in successfully

        Scenario Outline: Add a valid service
              And the user clicks on the dynamic field Settings icon
              And the user clicks on the Add Service button
             When the user enters service name "<ServiceName>"
              And the user enters description "<Description>"
              And the user clicks on the Create Service button
             Then the service should be created successfully

        Examples:
                  | ServiceName | Description                                   |
                  | Electronics | Build the PCB board for the ESP32             |
                  | Software    | Build an end-to-end food ordering application |



        Scenario: Add a service without a description
              And the user clicks on the Dynamic Field Settings icon
              And the user clicks on the Add Service button
             When the user enters the following service details
                  | Service Name | Description |
                  | Electronics  |             |
              And the user clicks on the Create Service button
             Then the Description field should display the required field validation message



        Scenario: Add a service with empty details
              And the user clicks on the Dynamic Field Settings icon
              And the user clicks on the Add Service button
             When the user enters the following service details
                  | Service Name | Description |
                  |              |             |
              And the user clicks on the Create Service button
             Then the Service Name field should display the required field validation message


        Scenario: Add a service without  service name
              And the user clicks on the Dynamic Field Settings icon
              And the user clicks on the Add Service button
             When the user enters the following service details
                  | Service Name | Description |
                  |              | Sample      |
              And the user clicks on the Create Service button
             Then the Service Name field should display the required field validation message