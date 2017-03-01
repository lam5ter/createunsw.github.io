---
layout: default
title: Store
tagline: "Orders can be bought and collected from our Globe Lawn stall on Mondays from 12pm to 4pm during semester time only."
description: Orders can be bought and collected from our Globe Lawn stall on Mondays from 12pm to 4pm during semester time only.
type: section
---

<style type="text/css">
.store-cover {
	background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/13124451_582084161967043_2445159486797259678_n.jpg?oh=71315416e45f76921c6cdb378c4c5a78&oe=593EC25C);
	background-attachment: fixed;
}
</style>

<div class="jumbotron general-cover store-cover" >
  <div class="wrapper">
    <center>
      <h1><b>STORE</b></h1>
      <span>TOOLS <b>QUADCOPTERS</b> ELECTRONICS</span>
    </center>
  </div>
</div>

<div class="wrapper">


<div class="str-sub">
<br>Orders can be bought and collected from our Globe Lawn stall on <b>Mondays from 12pm to 4pm during semester time only</b>. If a collection is urgently needed, we can pre-arrange a collection time via email at <b>sales@createunsw.com.au</b>.
<br><br>You can also purchase from the vending machine that's located in MCIC when ever it's open.
<br><br>Talk to us before purchasing anything through this page. We may not have all items in stock.
<br><br>Please note: This service is primarily for UNSW students and staff only. Generally speaking, we do not ship orders. If you are outside of UNSW, please email your enquiry to sales@createunsw.com.au.
</div>


<div style="display: inline"><hr>
	{% assign cats =  site.products | map: 'category' | join: ','  | split: ',' | uniq %}
	{% for cat in cats %}
	<button class="btn btn-standard store-btn" onclick="location.href='#{{ cat }}'"><a>{{ cat }}</a></button>
	{% endfor %}<hr>
</div>

<ul class="post-list">
	{% assign cats =  site.products | map: 'category' | join: ','  | split: ',' | uniq %}
    {% for cat in cats %}
	    <div class="postBody">
			<div class="manual-post">
				<div class="manual manual-title" id="{{ cat }}">
			 		<strong>{{ cat }}</strong>
				</div>
			</div><br>
			{% assign products = site.products | sort:"title" %}
	    	<div class="product-pod">
		    {% for post in products%}
		    	{% if post.category contains cat %}
				<div class="panel panel-default" style="width:230px;">
				  <div class="panel-heading">
				    <h4 class="panel-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h4>
				  </div>
				  <div class="panel-body product-subpod">
				    <img src="{{ post.image }}" alt="{{ post.title }}" class="img-thumbnail"/>
				    <br><small>{{ post.category }}</small>
					{% assign price_split = post.price | round: 2 | split: "." %}
					{% assign integral = price_split[0] %}
					{% assign fractional = price_split[1] | append: "00" | truncate: 2, "" %}
				    <p>${{ integral }}.{{ fractional }}</p>
				  </div>
				  <div class="panel-footer">
				    <button class="btn btn-secondary snipcart-add-item"
				      data-item-name="{{ post.title }}"
				      data-item-id="{{ post.sku }}"
				      data-item-image="{{ post.image }}"
				      data-item-url="{{ site.baseurl }}"
				      data-item-price="{{ post.price }}">
				      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
				      Purchase
				    </button>
				    <a style="float:right" href="{{ site.baseurl }}{{ post.url }}" alt="{{ post.title }}">Item Details</a>
				  </div>
				</div>
	    		{% endif %}
   			 {% endfor %}
			</div>
		</div>
	{% endfor %}
</ul>

</div>