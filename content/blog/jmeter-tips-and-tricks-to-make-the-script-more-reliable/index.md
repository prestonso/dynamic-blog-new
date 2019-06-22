---
title: 'JMeter - Tips And Tricks To Make The Script More Reliable'
date: 2017-08-11
author: Vibhor.com
featured: false
image: ./jmeter-tips-and-tricks-to-make-the-script-more-reliable.png
description: "Here comes everything you need to know to make your JMeter test script more sensible"

category:
  - Load Testing
  - Best Practices
---


<div class="entry-content">
<div style="width:100%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
<img class="main-img" src="./testplan-jmeter.png" width="100%">
</div>
<ul class="blog-content">
<li>Always use the latest versions of JMeter as those will be having some enhancements and bug fixes.</li>
<li>Set Heap size accordingly to the configurations of Load Generator (LG). You can always modify heap size in jmeter.bat (for windows)/ jmeter.sh (for Linux).</li>
<li>While recording the test flow, add type of URL Pattern to include and exclude in HTTP(S) Test Script Recorder to avoid unwanted requests from being recorded to Test Plan.</li>
<li>Use Controllers according to your test scenario to avoid making your script clumsy.</li>
<li>Add delay between your test scenarios to make load more realistic on servers by adding Timers.</li>
<li>Make use of Config Elements in your test scripts to avoid duplication and re work.</li>
<li>Use listeners wisely as they consume a lot of memory of LG which will cause JMeter to freeze.</li>
<li>For running huge load tests, it's always recommended to start your test in Non-GUI mode which helps to reduce resource consumption.</li>
<li>Use JMeter plugins - plugins for extending JMeter to add additional features</li>
<li>JMeter Add-ons - add-ons by third parties like Jenkins, Maven, etc. can be used.</li>
<li>JMeter Services - third party service providers which have JMeter installation on cloud such as <a href="https://frugaltesting.com">FrugalTest</a>.</li>
</ul>
<p class="blog-content">To know more about what Apache Jmeter has to offer, <a href="introduction-to-apache-jmeter-aquick-guide">read on to find more!</a></p>
</div>
