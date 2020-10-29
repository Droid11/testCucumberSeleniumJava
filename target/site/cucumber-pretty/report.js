$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4695610690,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the users email address as Email:testuser",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify the count of my salary digits for NOK 1000",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "testuser",
        "userpass"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1742423643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 41
    }
  ],
  "location": "LoginStep.iEnterTheUsersEmailAddressAsEmailAdmin(String)"
});
formatter.result({
  "duration": 1343803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 47
    }
  ],
  "location": "LoginStep.iVerifyTheCountOfMySaleryDigitsForNOK(int)"
});
formatter.result({
  "duration": 643752,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 162269096,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 2052726714,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserFormPage()"
});
formatter.result({
  "duration": 741103912,
  "status": "passed"
});
formatter.after({
  "duration": 232116,
  "status": "passed"
});
formatter.before({
  "duration": 3771118240,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18
    },
    {
      "cells": [
        "admin",
        "adminpass"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1480997649,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 135721072,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 2039856696,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserFormPage()"
});
formatter.result({
  "duration": 731174468,
  "status": "passed"
});
formatter.after({
  "duration": 67116,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;1"
    },
    {
      "cells": [
        "execute",
        "automation"
      ],
      "line": 30,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2"
    },
    {
      "cells": [
        "qa",
        "testing"
      ],
      "line": 31,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3672043177,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter execute and automation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1526097611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "execute",
      "offset": 8
    },
    {
      "val": "automation",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 302572,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 2081822178,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserFormPage()"
});
formatter.result({
  "duration": 736713468,
  "status": "passed"
});
formatter.after({
  "duration": 74762,
  "status": "passed"
});
formatter.before({
  "duration": 3675071328,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter qa and testing",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1509019211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 8
    },
    {
      "val": "testing",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 138529,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 2079547466,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserFormPage()"
});
formatter.result({
  "duration": 742799657,
  "status": "passed"
});
formatter.after({
  "duration": 63571,
  "status": "passed"
});
formatter.before({
  "duration": 3895084548,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Make a test fail - Missing URL",
  "description": "",
  "id": "loginfeature;make-a-test-fail---missing-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I navigate to log in page and it do not respond",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 36
    },
    {
      "cells": [
        "admin",
        "adminpass"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should see the user form page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToLogInPageAndItDoNotRespond()"
});
formatter.result({
  "duration": 31247217,
  "error_message": "org.openqa.selenium.InvalidArgumentException: Malformed URL: URL constructor:  is not a valid URL.\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027Roberts-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:187e:f0ec:140b:baa4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/8w/wmyqw23s17b4_633nl0qkzvc0000gn/T/rust_mozprofileB4CZNO, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.27.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dMAC, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d81.0.2, moz:shutdownTimeout\u003d60000, platformVersion\u003d19.6.0, moz:processID\u003d37429, browserName\u003dfirefox, moz:buildID\u003d20201012085804, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: c66eee49-71e3-ba4c-8415-8be6848b5420\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\n\tat Steps.LoginStep.iNavigateToLogInPageAndItDoNotRespond(LoginStep.java:95)\n\tat ✽.Given I navigate to log in page and it do not respond(Login.feature:34)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserFormPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 720114491,
  "status": "passed"
});
});