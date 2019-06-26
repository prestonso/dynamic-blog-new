---
title: 'What is HAR?'
date: 2018-05-14
author: Vibhor.com
featured: false
image: ./what-is-har.jpg
description: "An over view of HAR(HTTP Archive format) and how it helps in providing additional..." 

category:
  - Performance testing
---

<div class="entry-content">
<p >
An HAR (HTTP Archive format) file helps us to track the requests between web browser and website.The format of HAR is a JSON-formatted archive file, and the common extension for the files is .har. These file is used by several http session tools to export the captured data. The captured data of each request contains headers, cookies, response and timings.
</p>
<p >
HAR files can be used for troubleshooting issues like:
</p>
<ul >
<li>Performance Issues: slow page load, timeout when performing certain task</li>
<li>Page rendering : page format, missing information,Dependant code that needs third-party code libraries, Resource-consuming or large CSS files.</li>
</ul>
<p >The data is stored as a JSON document and extracting meaning from the low-level data is not always easy. But with practice, an HAR file can quickly help you to identify the key performance problems with a web page, letting you efficiently target your development efforts at areas of your site that will deliver the greatest results.</p>
<p >Steps to analyse for Performance issues are:</p>
<ul >
<li>Search for the slow responding request.</li>
<li>Identify what is the longest waiting time, and how long it waited.</li>
<li>Check what the main contributor towards the delay is.</li>
<li>Run consistency checking by reloading the page multiple times.</li>
<li>Seek for assistance from the Dev Support team with the information captured if identifying the Server is contributing to the delay.</li>
<li>Reloading the static /resources every time, when the same user revisits the page which effects page loading time.</li>
<li>Page load times can be decreased either by compressing or removing surplus elements.</li>
<li>Dependant code that needs third-party code libraries to be loaded before it is run; this can increase the DNS lookup time for these /resources thus decreasing the overall speed of your site.</li>
</ul>
<p >Following are the HTTP session tools which generate HAR:</p>
<ul >
<li>Firebug</li>
<li>Fiddler</li>
<li>HttpWatch</li>
<li>Charles Web Proxy</li>
<li>Mozilla Firefox</li>
<li>Google Chrome</li>
<li>Internet Explorer 9</li>
<li>Microsoft Edge</li>
<li>Paw</li>
<li>Restlet Client</li>
</ul>
<p >As the HAR file contains a lot of information, you can easily determine the root cause and improve website performance. With the above mentioned tools you can easily create the HAR file and easily access the information</p>
<p >If you want to get a better visualization of the data, you can use analyser like<a target="blank" href="https://toolbox.googleapps.com/apps/har_analyzer/"> G Suite Toolbox.</a></p>
</div>
