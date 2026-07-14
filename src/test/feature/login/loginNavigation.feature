@Underdev
Feature: Muhindhar_10-07-2026_Login Page Navigation

              As a user,
              I want to verify the navigation links and social media icons.

        Background:
            Given the user launches the SmartCliff application
              And the user is on the Login page

        @GoogleSignIn
        Scenario: Verify Sign in with Google button functionality
             When the user clicks the "Sign in with Google" button on the Login page
             Then the user should be redirected to the Google authentication page

        @ForgotPassword
        Scenario: Verify Forgot Password link functionality
             When the user clicks the "Forgot Password?" link
             Then the user should be redirected to the Forgot Password page

        @Facebook
        Scenario: Verify Facebook icon navigation
             When the user clicks the Facebook icon
             Then the user should be redirected to the official Facebook page

        @YouTube
        Scenario: Verify YouTube icon navigation
             When the user clicks the YouTube icon
             Then the user should be redirected to the official YouTube page

        @TikTok
        Scenario: Verify TikTok icon navigation
             When the user clicks the TikTok icon
             Then the user should be redirected to the official TikTok page
