---
title: JMeter-Regular Expression Extractor
date: 2018-10-24
author: none.com
featured: false
image: ./regular-expression-extractor-jmeter.png
description: "Learn how can you make your performance test scripts more dynamic with JMeter"

category:
  - JMeter
  - Load Testing
  - Best Practices
  - Performance Testing
---

**Regular Expression Extractor** uses regular expression string to fetch some values from response of one request and pass it on to another request. The value(s) which is extracted can be stored in any variable and can be used for reference in any further request in the test plan. Values can be extracted from Response Body, Response/Request Headers, URL, Response Code and Response Message of the **request** when you add this **Post Processors** to it.  
  
Using of **Regular Expression Extractor** in a test plan, will save us a lot of time in creating or enhancing a test plan.  
  
**Adding Regular Expression Extractor in a test plan:**  
Choose a **request** in a Test Plan from which you want to extract the value and Right click the request and select **Add >>Post Processors >>Regular Expression Extractor** .

<img class="main-img img-responsive" src="https://www.frugaltesting.com/resources/images/jmeter-regular-expression-extractor/post-processor.png">

**Fields of Regular Expression Extractor:**

*   **Reference Name:** The name of the variable in which to store the extracted value.
*   **Regular Expression:** Expression for parse the response data and save it in the Variable as **Reference Name** .
*   **Template:** Used to create a string from the matches found. The syntax to refer to a group is:  
      -'$1$' to refer to group 1
      -'$2$' to refer to group 2
      -'$0$'refers to whatever the entire expression matches
*   **Match No.:** Can specify which value should be used from the character sequence.  
      -Zero indicates, to choose a match at random.  
      -A positive number N means to select the nth match from the sequence etc.
*   **Default Value:** If the regular expression does not match, then the reference variable will be set to the default value.

<img class="main-img img-responsive" src="https://www.frugaltesting.com/resources/images/jmeter-regular-expression-extractor/regular-expression-extractor.png" alt="FrugalTesting Blog on Jmeter regular expression extractor">

**Example:** Below is the response data of the login request which we have and we need pass ID for the next or further requests in the Test Plan.  
 Response data:  
 {"ID":37035,"FirstName":"Tom","LastName":"S","UserName":"Tom","EmployeeID":"EMP005150","ProgramID":"311","ProgramRoleID":"237"}  
By adding Regular Expression Extractor post processor to the login request and fields of the post processor can be defined as:

*   **Reference Name:** userid
*   **Regular Expression:** "ID":(.\*?),
*   **Template:** $1$
*   **Match No.:**1

<img class="main-img img-responsive" src="https://www.frugaltesting.com/resources/images/jmeter-regular-expression-extractor/expressions.png" alt="FrugalTesting Blog on Jmeter regular expression extractor">

The special characters used for regular expressions are:

*   ( ) - these enclose the portion of the match string to be returned
*   \[ \] - character classes
*   { } - repetition
*   \* + - repetition
*   ? - stop when first match succeeds
*   . -’ wild-card character
*   \\ - escape character
*   | - alternatives
*   ^ $ - start and end of string or line
*   \[0-9\] - Digit
*   \[^0-9\] - Non-digit
*   \[0-9a-z\_A-Z\] - Word character
*   \[^0-9a-z\_A-Z\] - A non-word character
*   \[ \\t\\n\\r\\f\] -’ A whitespace character
*   \[^ \\t\\n\\r\\f\] - A non-whitespace character

**RegExp Tester:** We have RegExp Tester in View Result Tree to test regular expressions directly on sampler response data.

<img class="main-img img-responsive" src="https://www.frugaltesting.com/resources/images/jmeter-regular-expression-extractor/regex-tester.png">

This is all about the Regular Expression Extractor in JMeter and its usage. Read more blogs related to JMeter and various aspects of testing [here](blog?page=1).
