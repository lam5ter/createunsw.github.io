---
layout: default
title: Team
tagline: "we are entirely composed of student volunteers."
description: CREATE is entirely composed of student volunteers.
type: section
---

<style type="text/css">
.team-cover {
  background-image: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/14568197_657783307730461_165885174753342049_n.jpg?oh=2883a74caaea7d244e993f4e02abea9f&oe=593C5AB3);
  background-attachment: fixed;
}
</style>

<div class="jumbotron general-cover team-cover" >
  <div class="wrapper">
    <center>
      <h1><b>TEAM</b></h1>
      <span>MEET THE <b>CREATE</b> SQUAD</span>
    </center>
  </div>
</div>



<!--- Delete this block once all contributer files are done ---->
<div class="wrapper">
  <div class="manual-post" id="current_exec">
    <div class="manual manual-title">
      <i class="fa fa-user fa-lg" aria-hidden="true"></i>
      <strong>Current Executive Team</strong>
    </div><br>
    <div class="card">
      <img src="/images/Main/exec_anthony_fezi-sobbi.jpeg" alt="Avatar">
      <div class="profile-container">
        <b>Anthony Fezi-Sobbi</b>
        <p>President</p>
        <a href="mailto:a.feizi-sobbi@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_patrick_huang.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Patrick Huang</b>
        <p>Vice President of Events</p>
        <a href="mailto:events@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_chris_ho.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Christopher Ho</b>
        <p>Vice President of Sponsorship</p>
        <a href="mailto:sponsorship@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_simon_taylor.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Simon Taylor</b>
        <p>Treasurer</p>
        <a class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_daniel_li_2.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Daniel Li</b>
        <p>Secretary</p>
        <a href="mailto:create@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_alexander_lam.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Alexander Lam</b>
        <p>Arc Delegate</p>
        <a class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_Jason_phu.jpeg" alt="Avatar">
      <div class="profile-container">
        <b>Jason Phu</b>
        <p>Co-Director of Sales</p>
        <a href="mailto:sales@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_nathan_lam.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Nathan Lam</b>
        <p>Co-Director of Sales</p>
        <a href="mailto:sales@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_karen_zhong.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Karen Zhong</b>
        <p>Head of Media and Marketing</p>
        <a href="mailto:marketing@createunsw.com.au" target="_blank" class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_daniel_castillo.jpeg" alt="Avatar">
      <div class="profile-container">
        <b>Daniel Castillo</b>
        <p>Chief Technical Officer</p>
        <a class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
    <div class="card">
      <img src="/images/Main/exec_abhishek_sharan.jpg" alt="Avatar">
      <div class="profile-container">
        <b>Abhishek Sharan</b>
        <p>UAS Team Leader</p>
        <a class="btn btn-secondary btn-sm "><i class="fa fa-envelope-o"></i></a>
      </div>
    </div>
  </div>
</div>


<div class="wrapper">
{% assign status =  site.people | map: 'status' | join: ','  | split: ',' | uniq %}
{% for stat in status %}
  <div class="postBody">
  <div class="manual-post">
    <div class="manual manual-title" id="{{ stat }}">
      <i class="fa fa-user fa-lg" aria-hidden="true"></i>
      {% if stat == 'current_executive' %}
      <strong>Current Executives</strong>
      {% endif %}
      {% if stat == 'current_contributor' %}
      <strong>Current Contributors / Team Members</strong>
      {% endif %}
      {% if stat == 'past_contributor' %}
      <strong>Past Contributors / Team Members</strong>
      {% endif %}
      {% if stat == 'past_executive' %}
      <strong>Past Executives</strong>
      {% endif %}
    </div>
  </div><br>

  {% assign people = site.people | sort:"year" | reversed %}
    <div class="product-pod">
    {% for person in people %}
      {% if person.status contains stat %}
      <a href="{{ site.baseurl }}{{ person.url }}">
      <div class="card" >
        <img src="{{ person.face-url }}" alt="Avatar">
        <div class="profile-container">
        <b><a href="{{ site.baseurl }}{{ person.url }}">{{ person.title }}</a></b>
        <p>{{ person.role }} ({{ person.year }})</p>
        {% if person.email-url  %}
          <a href="mailto:{{ person.email-url }}" target="_blank" class="btn btn-secondary"><i class="fa fa-envelope-o"></i></a>
        {% endif %}
        {% if person.linkedin-url  %}
          <a href="{{ person.linkedin-url }}" target="_blank" class="btn btn-secondary"><i class="fa fa-linkedin"></i></a>
        {% endif %}
        {% if person.github-url  %}
          <a href="{{ person.github-url }}" target="_blank" class="btn btn-secondary"><i class="fa fa-github"></i></a>
        {% endif %}
        </div>
      </div>
      </a>
      {% endif %}
    {% endfor %}
  </div>
</div>
{% endfor %}
</div>

<div class="wrapper">
  <div class="manual-post">
    <div class="manual manual-title">
      <i class="fa fa-share-square-o fa-lg" aria-hidden="true"></i>
      <strong>Our Social Presence</strong>
    </div>

    <div class="portfolio-content">
      <a href="https://www.youtube.com/user/createunsw" target="_blank"><i class="fa fa-youtube fa-5x" aria-hidden="true"></i></a>
      <a href="https://facebook.com/CreateUNSW" target="_blank"><i class="fa fa-facebook fa-5x" aria-hidden="true"></i></a>
      <a href="https://instagram.com/CreateUNSW" target="_blank"><i class="fa fa-instagram fa-5x" aria-hidden="true"></i></a>
      <a href="https://github.com/CreateUNSW" target="_blank"><i class="fa fa-github fa-5x" aria-hidden="true"></i></a>
    </div>
  </div>
</div>
