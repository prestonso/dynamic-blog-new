---
title: 'JMeter - How to handle SSL Handshake Exception?'
date: 2018-06-25
author: touropia.com
featured: false
image: ./jmeter-how-to-handle-ssl-handshake-exception.jpg
description: "Know how to handle the handshake exception while executing your JMX test scripts."

category:
  - Load Testing
  - Performance testing
  - JMeter
---

<div class="entry-content">
<p >If you get below error as response data for a request while running the script, here is the solution.</p>
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="./error-response-data-for-request.png" alt="ssl handshake exception in jmeter">
</div>
<p >In HTTP Request sampler, change the field 'Implementation' to HttpClient4 to solve this exception.</p>
<div style="width:89%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="./sampler-change-the-field-Implementation.png" alt="ssl handshake exception in jmeter">
</div>
</div>
