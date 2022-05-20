$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "\r\nAs a User I want to select make and model of car on carsguide.com",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "VIC - Central Victoria",
        "$40,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "QLD - Gold Coast",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "120d",
        "VIC - Melbourne",
        "$60,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "TAS - North",
        "$70,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Toyota",
        "Avensis",
        "TAS - South",
        "$80,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jaguar",
        "X Type",
        "SA - Adelaide",
        "$90,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6157670100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 71025200,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 168393900,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 93885900,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1744190200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 75795200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 84204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 76346600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 68175599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 267074200,
  "status": "passed"
});
formatter.after({
  "duration": 601601300,
  "status": "passed"
});
formatter.before({
  "duration": 4227308900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"A4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"QLD - Gold Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 156735501,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 92451900,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1576232601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 271742699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Gold Coast",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 81643100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 77517300,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 73164801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 259900200,
  "status": "passed"
});
formatter.after({
  "duration": 638565400,
  "status": "passed"
});
formatter.before({
  "duration": 4308706801,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"120d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 151671199,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 90223599,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1572471501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120d",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 157765000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 81483901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 71016500,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 67650800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1212823399,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-A63I6LBD\u0027, ip: \u0027192.168.68.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f4ab1628a6f484f766a0591bb06d3065, getElementText {id\u003d36bbb9ac-0acc-4ca7-9cd6-36c0ade4c7d7}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\vpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54297}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54297/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (f4ab1628a6f484f766a0591bb06d3065)] -\u003e xpath: //input[@id\u003d\u0027uhf-make\u0027]]\nSession ID: f4ab1628a6f484f766a0591bb06d3065\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:201)\r\n\tat sun.reflect.GeneratedMethodAccessor14.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.carsguide.pages.BuyPage.verifyMakeText(BuyPage.java:88)\r\n\tat com.carsguide.steps.BuyPageSteps.iShouldSeeTheMakeInResults(BuyPageSteps.java:61)\r\n\tat ✽.Then I should see the make \"BMW\" in results(buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 32877601,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-A63I6LBD\u0027, ip: \u0027192.168.68.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f4ab1628a6f484f766a0591bb06d3065, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\vpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54297}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54297/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f4ab1628a6f484f766a0591bb06d3065\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:332)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4163045799,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"TAS - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 139028700,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 98908299,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 3707168301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 113539100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - North",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 103708501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 72925000,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 68868200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1386280900,
  "status": "passed"
});
formatter.after({
  "duration": 593700300,
  "status": "passed"
});
formatter.before({
  "duration": 4375857800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Toyota\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Avensis\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"TAS - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Toyota\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 139574600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 93989801,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1700948700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avensis",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 268376900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - South",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 76650700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 71870200,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 64165900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 287273000,
  "status": "passed"
});
formatter.after({
  "duration": 597587700,
  "status": "passed"
});
formatter.before({
  "duration": 4416678900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression,"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click search cars link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"X Type\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 133641901,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 95547999,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 10001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1525084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X Type",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 166598199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - Adelaide",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 76185200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 74364400,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 69437000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 214364600,
  "status": "passed"
});
formatter.after({
  "duration": 605170400,
  "status": "passed"
});
formatter.uri("usedcar.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "\r\nAs a User I want to select used car on carsguide.com",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "VIC - Central Victoria",
        "$40,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "NT - North",
        "$50,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "120d",
        "NSW - All",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "TAS - North",
        "$70,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Toyota",
        "Avensis",
        "TAS - South",
        "$80,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Jaguar",
        "X Type",
        "SA - Adelaide",
        "$90,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4338345700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25101,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 164490800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 97342500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1852556900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 197566700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 74003400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 72255500,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 65175800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2420534901,
  "status": "passed"
});
formatter.after({
  "duration": 606746001,
  "status": "passed"
});
formatter.before({
  "duration": 4349725300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NT - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 144050501,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 96549100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1815745401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 109182400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 72476501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 73888001,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 63956000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1428904300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-A63I6LBD\u0027, ip: \u0027192.168.68.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e31dc9827be03dd69e1c773f941dde75, getElementText {id\u003d82203db8-b311-4615-a279-21320b0642d3}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\vpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55073}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55073/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (e31dc9827be03dd69e1c773f941dde75)] -\u003e xpath: //input[@id\u003d\u0027uhf-make\u0027]]\nSession ID: e31dc9827be03dd69e1c773f941dde75\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:201)\r\n\tat sun.reflect.GeneratedMethodAccessor14.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.carsguide.pages.BuyPage.verifyMakeText(BuyPage.java:88)\r\n\tat com.carsguide.steps.BuyPageSteps.iShouldSeeTheMakeInResults(BuyPageSteps.java:61)\r\n\tat ✽.Then I should see the make \"Audi\" in results(usedcar.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 55937299,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-A63I6LBD\u0027, ip: \u0027192.168.68.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e31dc9827be03dd69e1c773f941dde75, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\vpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55073}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55073/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e31dc9827be03dd69e1c773f941dde75\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:332)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4543898000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"120d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 149189601,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 95983699,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1830601000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120d",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 153964601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 92821700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 71951201,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 65373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 259806999,
  "status": "passed"
});
formatter.after({
  "duration": 578864501,
  "status": "passed"
});
formatter.before({
  "duration": 4442072700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"TAS - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16099,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 138262401,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 106707301,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1656400400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 106292701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - North",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 73132699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 74447700,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1501662299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 103954000,
  "status": "passed"
});
formatter.after({
  "duration": 604500400,
  "status": "passed"
});
formatter.before({
  "duration": 3801198300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Toyota\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Avensis\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"TAS - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Toyota\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12200,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 143924000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 1686661100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 11399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 84446000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avensis",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 139642799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - South",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 78805801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 93438599,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1692227099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 59483200,
  "status": "passed"
});
formatter.after({
  "duration": 596238499,
  "status": "passed"
});
formatter.before({
  "duration": 4374702601,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke,"
    },
    {
      "line": 4,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hover mouse on buy + sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to used car sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"X Type\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iHoverMouseOnBuySellTab()"
});
formatter.result({
  "duration": 162848501,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iClickUsedCarsLink()"
});
formatter.result({
  "duration": 95156400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.iNavigateToUsedCarSalePage()"
});
formatter.result({
  "duration": 12600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1775434600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X Type",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 128656099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - Adelaide",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 76774400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 70631301,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 62361700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1313393901,
  "status": "passed"
});
formatter.after({
  "duration": 603722800,
  "status": "passed"
});
});