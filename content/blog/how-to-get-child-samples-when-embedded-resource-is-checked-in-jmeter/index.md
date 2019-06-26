---
title: 'JMeter - How to get Child Samples when Embedded resource is checked?'
date: 2017-10-24
author: Vibhor.com
featured: false
image: ./jmeter-how-to-get-child-samples-when-embedded-resource-is-checked.jpg
description: "Learn how to check the behaviour of the static /resources for each web page request"

category:
  - Load Testing
  - Performance testing
  - Best Practices
  - JMeter
---



<div class="entry-content">
<p >
Generally when we want to load test a website, we want to select the <b>'Retrieve Embedded / resources' </b> option with 'Parallel Download' as a real user scenario in <a href="../../../../2018/06/25/introduction-to-apache-jmeter-guide">Jmeter</a>.</p>
<p >But to visualize the embedded / resources like JS, CSS, images etc. in JMeter, we only have <b>'View Result Tree' </b> listener which we can't use for huge load tests.</p>
<p >So, to get the various performance attributes of the child elements like sample times and response codes, save the jtl file in XML format as follows:
</p>
<ul >
<li>Go to jmeter.properties and set jmeter.save.saveservice.output_format=xml.</li>
<li> Save it and Restart JMeter.
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" src="./save-child-sampler-result-configuration.png" alt="FrugalTesting blog on how to get child samples in jmeter">
</div>
</li>
<li>Or you can pass it command line as -Jjmeter.save.saveservice.output_format=xml
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1);overflow-x: scroll;white-space: nowrap;">
<img class="main-img " src="./save-child-samples-file-configuration-cmd.png" alt="FrugalTesting blog on how to get child samples in jmeter">
</div>
</li>
<li>And here you get jtl file with XML format:
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1);overflow-x: scroll;white-space: nowrap;">
<img class="main-img" src="./save-child-samples-file-xml-format.png" alt="FrugalTestin blog on how to get child samples in jmeter">
</div>
</li>
<li>On changing the format of jtl file to xml, and choosing 'View Result Tree' listener, you can see Sampler result data related to all child elements as well.
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" src="./save-child-sampler-result-tree.png" alt="FrugalTesting blog on how to get child samples in jmeter">
</div>
</li>
</ul>
<p >Know <a href="../../../../2017/10/24/how-to-get-child-samples-when-embedded-resource-is-checked-in-jmeter">how huge load on website can impact your application's performance here!</a></p>
</div>
