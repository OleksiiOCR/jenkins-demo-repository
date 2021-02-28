$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/manageAccess.feature");
formatter.feature({
  "name": "Manage Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify admin can add new users",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\khaliunaabaasandorj\\Downloads\\drivers\\chromedriver\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.WebdriverUtils.getWebDriver(WebdriverUtils.java:33)\r\n\tat impls.LoginImpl.navigateToPage(LoginImpl.java:23)\r\n\tat steps.LoginSteps.iNavigateToInterviewPrep(LoginSteps.java:14)\r\n\tat ✽.I navigate to Interview Prep(file:src/main/resources/features/manageAccess.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see the \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"admin@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"adminUserPassword\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Manage Access\" link",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the following values in the following fields",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEnterTheFollowingValuesInTheFollowingFields(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I choose \"Instructor\" from dropdown \"Role\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I choose \"10\" from dropdown \"Batch\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Add User\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "admin"
      ]
    },
    {
      "cells": [
        "Last Name",
        "admin"
      ]
    },
    {
      "cells": [
        "E-mail",
        "admin@yahoo.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Edit\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I edit the user with following",
  "rows": [
    {
      "cells": [
        "Email",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEditTheUserWithFollowing(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Update User\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith.new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Delete\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Delete\" button in \"User Delete Window\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButtonIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the following user does NOT exist in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "John"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "john.smith@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Instructor"
      ]
    },
    {
      "cells": [
        "Batch",
        "4"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserDoesNOTExistInTheTable(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});