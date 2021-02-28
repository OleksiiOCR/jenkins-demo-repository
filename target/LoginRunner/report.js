$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/excel.feature");
formatter.feature({
  "name": "Excel practice",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Read excel file",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I validate the following row exists in \"Sheet1\" of \"Book1.xlsx\":",
  "rows": [
    {
      "cells": [
        "Central"
      ]
    },
    {
      "cells": [
        "Morgan"
      ]
    },
    {
      "cells": [
        "Pencil"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExcelSteps.iValidateTheFollowingRowExistsInOf(String,String,String\u003e)"
});
formatter.write("2021-02-28 11:07:26 PASS: The expected data was found in row: 12");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});