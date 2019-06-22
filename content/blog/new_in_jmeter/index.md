---
title: "What's new in Jmeter"
date: 2019-10-23
author: none.com
featured: false
image: ./new_in_jmeter.png
description: "Check out some of the improvements and additions in the new version of JMeter 5.0"
category:
  - Load testing
  - Performance testing
  - JMeter
---


The new version of Apache JMeter is out with more features and more bug fixes. Let's see what changes and updates have been made in Apache JMeter 5.0.



Some of the new and noteworthy changes are.

-   Java version 8+ is required to run JMeter 5.0.
-   Now we can use Multipart/form-data for PUT and DELETE methods as
    well. It's now possible to send files along with the JSON body.
-   Now JMeter will automatically prefix the thread name with the load
    engine hostnames and port for distributed testing without any other
    configurations, which helps us make a count of threads correctly
    while reporting.
-   A new element, Xpath2 Extractor, provides easier XML namespace
    handling, with up-to-date XPath syntax and better performance.
    ![remote-host-and-rmi-configuration](/add-new-xpath.png)
-   The Flow Control Action and Result Status Action Handler elements
    make it easier for loop breaking and loop switching to the next
    iteration.
-   The Search feature has improved and now lets you iterate in the tree
    over search results and make necessary replacements through the
    Next/Previous/Replace/Replace/Find buttons.
    ![remote-start](/search-feature.png)
-   Now we can view the Response and Request headers separately in the
    View Result Tree Listener tab.
-   Now, while recording, we can see a popup at the top for naming a
    transaction when we are navigating through the application.
-   We can now restart JMeter from the File menu.
    ![starting-test-on-host](/restart-jmeter-from-file-menu.png)
-   The HTML report now has a custom Graph section where we can
    customize metrics as JMeter variables through sample\_variables.
-   A new function has been introduced, \_\_threadGroupName, which gets
    the ThreadGroup name.
-   The CSS/JQuery Extractor was renamed CSS Selector Extractor, and
    Test Action was renamed Flow Control Action.

**These are some of the features improved in JMeter 5.0.**
