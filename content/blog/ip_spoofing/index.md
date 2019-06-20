---
title: 'IP Spoofing'
date: 2019-02-10
author: none.com
featured: false
image: ./ip_spoofing.jpg
description: "Johannes Gensfleisch zur Laden zum Gutenberg (c. 1398 – 1468) was a German blacksmith, goldsmith, printer."
category:
  - Movable Type
  - Johannes Gutenberg
---

To emulate real time behaviour while doing on demand performance
testing, we need to hit the target server with multiple virtual users
using multiple IP addresses from a single Load Generator (LG) to keep
the web server from blocking those virtual users. So we go for IP
spoofing concept, to achieve this we need to configure few setting in
network connection of LG. \
\
Go to your control panel -\> Network setting and choose a network to
which your LG is connected and **Properties** and choose **Internet
Protocol Version 4**-\> **Properties**

![FrugalTesting blog on Jmeter ip spoofing for load testing
](/network-properties.png)

And uncheck **Obtain an IP address automatically**and set the IP
address, netmask, gateway and DNS servers manually (check the IP's are
available under the same subnet).
<h2 style="color:yellow"><a href="http://www.google.com">this is heading 2</a></h2>
![FrugalTesting blog on Jmeter ip spoofing for loadtesting](/network-ipv4-advanced.png)

After adding the ip addresses go to advanced and add more ips within the
range of the subnet mask and say OK.\
\
 As the IP addresses for networks on the Internet are allocated by the
InterNIC. If you have an Internet connection then you would be allocated
a network address by the agency that registered you, like the InterNIC.
Let us assume this to be 192.6.132.0, a class C network. Then all the
machines on this network would have the same network address. And the
last 0 will be replaced by a number from 1 to 254 for the node address.
So, nodes will have addresses 192.6.132.1, 192.6.132.2, and so on up to
192.6.132.254.

![FrugalTesting blog on Jmeter ip spoofing for load
testing](/add-tcp-ip.png)

![FrugalTesting blog on Jmeter ip spoofing for load
testing](/add-tcp-ip-2.png)

Now we need configure these ips to JMeter that send the request using
these ips. Add the **HTTP Request Sampler** to the Thread Group, in
advanced tab u can find **IP/Hostname** dropdown box and give the ip
which we added through network settings.

![FrugalTesting blog on Jmeter ip spoofing for loadtesting](/jmeter-source-address.png)

To pass multiple ip addresses add a csv data set config and pass the csv
file, where the ip addresses have been added and pass the variable name.

![FrugalTesting blog on Jmeter ip spoofing for load
testing](/source-ip-csv.png)

![FrugalTesting blog on Jmeter ip spoofing for load
testing](/request-ip-csv.png)

Now hit the target host by setting No of threads (users) and duration
and check the server logs u can find the load was generating from
multiple ips. In this way we achieve ip spoofing through JMeter in load
testing and performance testing.

* * * * *
