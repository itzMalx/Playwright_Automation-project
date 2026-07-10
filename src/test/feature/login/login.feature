@Muhindhar
Feature: Muhindhar_07-07-2026_Login to the LMS smartcliff website with credentials

Feature Description:
              As a user,I want to validate the login functionality using valid and invalid credentials.
        Background:
            Given the user is on the login page of the LMS smartcliff website

        Scenario Outline: Login
             When the user enters the login credentials "<type>"
              And the user clicks the signin button
             Then the login result should be verified "<type>"

        Examples:
                  | type         |
                  | valid        |
                  | psinvalid    |
                  | emailinvalid |
                  | bothinvalid  |