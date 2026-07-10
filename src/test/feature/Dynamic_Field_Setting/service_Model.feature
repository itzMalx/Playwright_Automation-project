@servicemodel
Feature: Muhindhar_08-07-2026_Adding the service in the dynamic field management page

Feature Description:
              As an authenticated user,I want to manage services in the Dynamic Field Management page.

        Background:
            Given the user is logged into the LMS SmartCliff website
              And the user clicks on the Dynamic Field Settings icon

        Scenario Outline: Add a valid service
              And the user clicks on the Add Service button
             When the user enters service name "<ServiceName>"
              And the user enters description "<Description>"
              And the user clicks on the Create Service button
             Then the service should be created successfully

        Examples:
                  | ServiceName | Description                                   |
                  | Electronics | Build the PCB board for the ESP32             |
                  | Software    | Build an end-to-end food ordering application |

        Scenario Outline: Validate mandatory fields while creating a service
              And the user clicks on the Add Service button
             When the user enters service name "<ServiceName>"
              And the user enters description "<Description>"
              And the user clicks on the Create Service button
             Then "<ValidationField>" field should display the required field validation message

        Examples:
                  | ServiceName | Description | ValidationField |
                  | Electronics |             | Description     |
                  |             |             | Service Name    |
                  |             | Sample      | Service Name    |