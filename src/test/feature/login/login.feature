@Muhindhar
Feature: Muhindhar_07-07-2026_Login to the LMS SmartCliff website

Feature Description:
              As a registered user,I want to log in to the LMS-smartcliff website.

        Background:
            Given the user is on the login page of the LMS smartcliff website

        @Validlogin
        Scenario: Login with valid credentials
             When the user enters the login credentials
              And the user clicks the signin button
             Then the user should be logged in successfully

        @Invalidpassword
        Scenario: Login with an incorrect password
             When the user enters the login credentials
              And the user clicks the signin button
             Then the user should see an invalid credentials error message

        @Invalidcredentials
        Scenario: Login with an invalid email and an invalid password
             When the user enters the login credentials
              And the user clicks the signin button
             Then the user should see an invalid password error message

        @Unregisteredemail
        Scenario: Login with an unregistered email
             When the user enters the login credentials
              And the user clicks the signin button
             Then the user should see an invalid credentials error message popup