---
title: 'Introduction to Apache JMeter - A Quick guide'
date: 2018-06-25
author: Vibhor.com
featured: false
image: ./introduction-to-apache-jmeter-aquick-guide.jpg
description: "Introduction to Apache JMeter - A Quick guide"

category:
  - Load Testing
  - Performance testing
  - JMeter
---




<img class="main-img img-responsive" src="./apache-jmeter.png" alt="quick guide to introduction to apache jmeter">
<div class="entry-content">
<p >
As we all know Apache JMeter is a pure JAVA based open source tool to measure performance and to test
functional behaviour of the applications. It can be used as a load testing tool for analyzing and measuring the performance of a variety of services, with a focus on web applications.
It is used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load conditions.
</p>
<center>
<!-- <div style="width:40%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)"> -->
<img class="main-img img-responsive" src="./apache-jmeter.png" alt="quick guide to introduction to apache jmeter">
<!-- </div> -->
</center>
<h4 class="blog-subtitle">Features of Apache JMeter</h4>
<ol >
<li>Supports many protocols and can load test different servers or applications.</li>
<li>Allows to record the test flows of the applications and debugging.</li>
<li>Has support for many scripting languages to execute a Test Plan like Groovy, Beanshell.</li>
<li> Command-line mode/Non GUI to load test from any Java compatible OS (Linux, Windows, Mac OSX).</li>
<li>Capability to do correlation for any kind of Response Data formats like HTML, JSON, XML, etc.</li>
<li>JMeter has in-built functions which are used for inputs and data manipulation to do a test.</li>
<li>JMeter Listener allows us to view and analyze the response/results of the request in Graphical, Table and in Tree formats.</li>
</ol>
<h4 class="blog-subtitle">Installation:</h4>
<ol >
<li>
Setting up Apache JMeter is very simple, as we just need to go to the official website of <a href="http://jmeter.apache.org/download_jmeter.cgi">Apache JMeter</a>
and download the latest version (zip or tgz) and unzip the file to the local folder.
</li>
<li> Also download the latest version of JAVA, as JMeter is pure JAVA desktop application and setup Java Environment Variable Path.</li>
<li>Now go to JMeter-bin folder and run jmeter.bat file if it is windows OS and jmeter.sh for Linux and Mac OS.</li>
<li><a href="/">FrugalTesting</a> uses Apache JMeter 3.3, which has more number of features compared to older.</li>
</ol>
<h4 class="blog-subtitle">JMeter 3.3 Features:</h4>
<ol >
<li>JAVA 8 version is required to run JMeter 3.3.</li>
<li>The Function Helper Dialog has some improvements, on click of generate we can now be able to preview result of the function. And also two more functions have been introduced in the version:timeShift and RandomDate.
<div style="width:93%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" src="/resources/images/introduction-to-apache-jmeter-aquick-guide/function-helper.png" alt="FrugalTesting Introduction to apache jmeter guide">
</div>
</li>
<li>Now, HTTP sampler supports Brotli decompression. You can add br encoding value in the Header manager.</li>
<li>InfluxDB Backend Listener now supports sending results to InfluxDB through UDP protocol.</li>
<li>The Default implementation is removed from Cookie manager as it only supports only one HTTP client implementation.</li>
<li>JDBC connection configuration element has been improved by adding select boxes for drivers and validation queries.
<div style="width:76%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" src="/resources/images/introduction-to-apache-jmeter-aquick-guide/jdbc-connection-configuration.png" alt="jmeter guide , connection configuration">
</div>
</li>
<li>The UX/UI of IF and While controllers have been improved.</li>
</ol>
<p >These are some of the features improved in JMeter 3.3 and apart from these there are lot of bug fixes.</p>
<p >To know what's new in JMeter 5.0, <a href="../../../../2019/10/23/whats-new-in-jmeter">click here</a>.</p>
</div>
