@Muhindhar
Feature: Add Service Model in Dynamic Field Settings

        Background:
            Given the user is logged into the LMS SmartCliff website
              And the user clicks on the Dynamic Field Settings icon

        @searchservice
        Scenario: Search Service by Service Name

             When user searches the service
                  | serviceName                |
                  | Glitch_Guardians_Muhindhar |
             Then user should be able to see the searched service

        @validmodel
        Scenario: Add Service Model

             When user searches the service
                  | serviceName                |
                  | Glitch_Guardians_Muhindhar |

              And user clicks on the searched service
              And user clicks on the Add Model button
              And user enters "validModel" details
              And user clicks on the Create Model button
             Then user should be able to see the created model in the page