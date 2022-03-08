Feature: Log-in

Scenario: User log-in succesfully

Given user is in login page
When enters email address
And user clicks sign-in
And user enters password
And user clicks sign-in
Then user should login successfully