---
layout: archive
title: "Professional Experience"
permalink: /experience/
author_profile: true
---

{% assign experiences = site.experience | sort: 'date' | reverse %}

{% for post in experiences %}
  <div class="experience-entry">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>
      <strong>{{ post.venue }}</strong><br>
      {{ post.location }}<br>
      {{ post.date | date: "%B %Y" }} {% if post.end_date %}- {{ post.end_date | date: "%B %Y" }}{% endif %}
    </p>
    
    {{ post.excerpt }}
  </div>
{% endfor %}