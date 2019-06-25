---
title: 'WebDriver Sampler in JMeter'
date: 2017-08-11
author: Vibhor.com
featured: false
image: ./webdriver-sampler-in-jmeter.png
description: "We usually use Apache JMeter for load testing and measure performance but the issue is that JMeter is not a real browser"

category:
  - Load Testing
  - Best Practices
---



<div class="entry-content">
<p class="blog-content">
Up to this point, performance testing has been on the server side of things as JMeter does not include the time needed to render the response, nor does JMeter process any client code, for example JavaScript . Things that add to the overall browser execution time may include:
</p>
<p class="blog-content">
Some of the new and noteworthy changes are.
</p>
<ol class="blog-content">
<li><strong>Client-side JavaScript execution</strong> - e.g. AJAX, JS templates</li>
<li><strong>CSS transforms </strong>- e.g. 3D matrix transforms, animations</li>
<li><strong>3rd party plugins</strong> - e.g. youtube, Double click ads, site analytics, etc.</li>
</ol>
<p class="blog-content">Hopefully, JMeter eco-system is very rich, so there is a solution for this; we will use<strong> WebDriver Sampler</strong> in JMeter as this sampler<strong> automates</strong> the execution and collection of performance metrics on <strong>client-side</strong>. </p>
<p class="blog-content">To get WebDriver Sampler--<a href="https://jmeter-plugins.org/wiki/WebDriverSampler/" target="blank">https://jmeter-plugins.org/wiki/WebDriverSampler/</a></p>
<p class="blog-content">Also we need to install the browser Driver plugins of JMeter to run the test on the particular browser like<strong> jp@gc - Chrome Driver Config, jp@gc - Firefox Driver Config</strong>, etc</p>
<p class="blog-content"></p>
<p class="blog-header">Configuration of WebDriver Sampler test:
</p><ol>
<li>Add a <strong>Thread Group</strong> to the Test Plan, and add <strong>HTTP Cookie Manager, jp@gc - Firefox Driver Config</strong> (from Config Element), <strong>jp@gc - WebDriver Sampler</strong> (from Sampler) to the Thread Group and a listener <strong>View Results in Table</strong>.</li>
<li>Write/Add the code in the <strong>WebDriver Sampler</strong> which you want to test. Here is the sample code, where it says to open www.frugaltesting.com website and to get load time of it:
<p><code>
WDS.sampleResult.sampleStart() <br>WDS.browser.get('https://www.frugaltesting.com')<br>
WDS.sampleResult.sampleEnd()<br>
</code></p>
<div style="width:92%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<center><img class="main-img img-responsive" src="./write-add-wds.png" alt="FrugalTesting blog on webdriver sampler in Jmeter"></center>
</div>
</li>
<li>Now when we hit play button, JMeter will open a Firefox browser and search<a href="https://www.frugaltesting.com/" target="_blank"> www.frugaltesting.com</a> site and end the test as browser closes automatically after performing the actions according to the script (sample script) in the Web Driver Sampler.</li>
<li>We can see the sample result in the View Result Table.
<div style="width:90%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<center> <img class="main-img img-responsive" src="./view-result-table.png" alt="FrugalTesting blog on webdriver sampler in Jmeter"></center>
</div> </li>
</ol><p></p>
<p class="blog-header">Configuration of WebDriver Sampler test:
</p><ol>
<li>The reader should be prudent in the number of threads they will create as each thread will have a single browser instance associated with it. </li>
<li>As each browser consumes a significant amount of resources, so a limit should be placed on how many browsers the user should create.</li>
</ol><p></p>
<p><a href="https://www.frugaltesting.com">FrugalTesting</a> is one stop solution for all your testing challenges. <a href="start-your-first-free-load-test"> Take your first free Load test here!</a></p>
<p><a href="introduction-to-apache-jmeter-aquick-guide">Read on to know more about Apache JMeter</a>
</p>
</div>
