---
title: 'JMeter - How To Distribute User Load In The Test Plan?'
date: 2018-03-25
author: Vibhor.com
featured: false
image: ./jmeter-how-to-distribute-user-load-in-the-test-plan.png
description: "An easy guide to know how to divide the user's ratio according to various user scenario flows"

category:
  - Load Testing
  - Performance testing
  - Best Practices
  - JMeter
---


<div class="entry-content">
<p class="blog-content">
You might have encountered this situation where not all users would do a particular scenario all the
time. Let's consider an e-commerce application, having major scenarios as user <b> login, search,
browsing </b> the application by anonymous user, product <b> adding to cart</b> and <b>buying</b> the product. Say
for example:
</p>
<ul class="blog-content">
<li>40% of authenticated users login to website</li>
<li>30% of anonymous users browsing the website</li>
<li>20% of users doing search</li>
<li>9% of users adding product to the cart</li>
<li>And 1% of all users actually buying the product</li>
</ul>
<p class="blog-content">To mimic this behaviour in a load test script, we use Throughput Controller which controls how often
a particular scenario should be executed. And the controller contains 2 modes:</p>
<ul class="blog-content">
<li>Percent Executions</li>
<li>Total Executions</li>
</ul>
<p class="blog-content">Now we will see how these 2 modes can be executed in Test Plan:</p>
<p class="blog-content">Consider 100 users/threads to be run. <b>Percent Executions</b> mode commands the controller to
execute a certain percentage of the iterations through the test plan as defined in Throughput
textbox shown below:</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/percentage.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content">As you can see below, after execution of the Test Plan, the samplers have executed according to the frequency (throughput) set in each request.</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/frequency.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content"><b>Total Executions</b> mode commands the controller to stop executing after a certain number of
iterations have completed as given by Throughput textbox shown below.</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/totalexecution.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content">As you can see below, the samplers have executed as per the limit defined in <b> Total Executions,</b>
instead of all requests hitting with 100 users.</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/perusers.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content">If<b> Per User </b> checkbox is checked, the controller executes per user/thread basis. If unchecked, then
the calculation will be global for all users.</p>
<p class="blog-content">Letâ€™s understand with an example, the <b> Per User</b> case. Say our test configuration is 100 users and the
duration of test plan is 300secs.</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/peruser1.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content">Letâ€™s use total execution mode and check <b>Per User.</b></p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/user.png" alt="FrugalTesting blog on distributed user load">
</div>
<p class="blog-content">As you can see, the total number of executions is equal to the number of users times the number
given for throughput.</p>
<div style="width:88%; margin-top:20px; margin-bottom:20px;padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
<img class="main-img img-responsive" style="" src="/resources/images/jmeter-how-to-distribute-user-load-in-the-test-plan/sample.png" alt="FrugalTesting blog on distributed user load">
</div>
</div>
