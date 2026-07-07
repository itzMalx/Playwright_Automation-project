Feature:logging in to the site
              Description: logging to the site

        Background:
            Given the user is on the url

        Scenario: valid login
              And user clicks on the myacc link
              And user clicks on the loginlink
              And user enters the valid email as "muhindhar271@gmail.com"
              And user enters password as "12345678"
             When user clicks on the login button
             Then user should be loggedin successfully

        Scenario: Invalid login
              And user clicks on the myacc link
              And user clicks on the loginlink
              And user enters the valid email as "muhindhar271@gmail.com"
              And user enters password as "1234567"
             When user clicks on the login button
             Then user should not be loggedin successfully



