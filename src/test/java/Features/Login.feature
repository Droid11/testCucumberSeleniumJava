Feature: LoginFeature
  This feature deals with the login functionality of the application

 Scenario: Login with correct username and password
    Given I navigate to the login page
    And I enter the users email address as Email:testuser
    And I verify the count of my salary digits for NOK 1000
    And I enter the following for Login
      | username | password |
      | testuser | userpass |
    And I just need to see how step look for Cucumber-Java8
    And I click login button
    Then I should see the user form page


  Scenario: Login with correct username and password
    Given I navigate to the login page
    And I enter the following for Login
      | username | password  |
      | admin    | adminpass |
    And I click login button
    Then I should see the user form page

  Scenario Outline: Login with correct username and password using Scenario outline
    Given I navigate to the login page
    And I enter <username> and <password>
    And I click login button
    Then I should see the user form page
    Examples:
      | username | password   |
      | execute  | automation |
      | qa       | testing    |

  Scenario: Make a test fail - Missing URL
    Given I navigate to log in page and it do not respond
    And I enter the following for Login
      | username | password  |
      | admin    | adminpass |
    And I click login button
    Then I should see the user form page