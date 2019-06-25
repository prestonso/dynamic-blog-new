---
title: 'JMeter - How to ensure HTTPS traffic gets recorded from mobile application through proxy?'
date: 2017-11-12
author: Vibhor.com
featured: false
image: ./jmeter-how-to-ensur-https-traffic-gets-recorded-from-mobile-application-through-proxy.jpg
description: "Are you still facing the issue of traffic not being recorded?"

category:
  - Load Testing
  - Performance testing
  - Best Practices
  - JMeter
---


<div class="entry-content">
<p class="blog-content">After setting the proxy configuration in mobile for recording, if the mobile traffic doesn't show up in JMeter while recording, just install JMeter Root CA certificate - in mobile device. It can be taken either from JMeter's bin folder present as Security Certificate or download it - <a href="https://gist.github.com/borisguery/9ef114c53b83e553b635" target="_blank">click to download</a></p>
<div style="width:94%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="./https-traffic1.png" alt="https traffic recorder for mobile through proxy">
</div>
<p class="blog-content">After installing the certificate in the device, just start the HTTP(S) Test Script Recorder in JMeter. Now you will be able to see the traffic being recording.</p>
</div>
