---
title: 'JMeter - How to use Selenium IDE script for performance testing?'
date: 2018-02-19
author: Vibhor.com
featured: false
image: ./jmeter-how-to-use-selenium-ide-script-for-performance-testing.jpg
description: "Learn how can we reuse the Selenium script to prepare performance test scripts."

category:
  - JMeter
  - Performance testing
  - Best Practices
  - Selenium
---

<div class="entry-content">
<h4 class="blog-subtitle">Steps</h4>
<ol class="blog-content">
<li>Capture the actions or functional flow in Selenium IDE.</li>
<li>Now, change the proxy of Firefox to some port say 9090.</li>
<li>Start JMeter and set the port in HTTP proxy Server of JMeter same as set in Step2 (say 9090).</li>
<li>Start the HTTP(S) Test Script Recorder in JMeter.</li>
<li>Now, run the Selenium IDE script which we have captured before.</li>
<li>After finish of script run in the IDE, check JMeter.</li>
</ol>
<p class="blog-content">Now you will see that traffic has been captured.</p>
<h4 class="blog-subtitle">Notes</h4>
<ul class="blog-content">
<li>When we do the above procedure, all the actions (like homepage, login page, and search page) will be recorded under one transaction controller which we need to modify later according to our requirement.</li>
<li>When we start the HTTP proxy Server in JMeter, all the css, js, images etc. will also get recorded.</li>
</ul>
</div>
