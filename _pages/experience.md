---
layout: archive
# title: "Professional Experience"
permalink: /experience/
author_profile: true
---

{% include base_path %}

<style>
  .experience-list {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  .experience-item {
    margin-bottom: 1.5em;
    border-bottom: 1px solid #eee;
    padding-bottom: 1em;
  }
  .experience-title {
    font-weight: bold;
    font-size: 1.5em;
    color: #16354e;
    margin-bottom: 0.3em;
  }
  .experience-title::before {
    content: "• ";
    color: #3177b1;
    font-weight: bold;
  }
  .experience-venue {
    font-weight: bold;
    margin-bottom: 0.2em;
  }
  .experience-location {
    color: #666;
    margin-bottom: 0.2em;
  }
  .experience-date {
    color: #888;
    font-style: italic;
    margin-bottom: 0.5em;
  }
  .experience-summary {
    color: #555;
    line-height: 1.4;
    margin-bottom: 0.5em;
    font-style: italic;
  }
  .experience-details {
    display: none;
    margin-top: 0.5em;
    padding: 1em;
    background: #f9f9f9;
    border-left: 3px solid #3177b1;
    border-radius: 0 4px 4px 0;
  }
  .experience-item.active .experience-details {
    display: block;
  }
  .experience-expand {
    cursor: pointer;
    color: #3177b1;
    font-size: 0.9em;
    text-align: center;
    padding: 0.3em;
    border: 1px dashed #ccc;
    border-radius: 4px;
    margin-top: 0.5em;
    transition: all 0.2s ease;
  }
  .experience-expand:hover {
    background: #f0f0f0;
    border-color: #3177b1;
  }
  .exp-arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .experience-item.active .exp-arrow {
    transform: rotate(180deg);
  }
  .experience-summary {
    color: #555;
    line-height: 1.4;
    margin-bottom: 0.5em;
    font-style: italic;
  }

  /* ADD THIS NEW RULE - this is the key fix */
  .experience-item.active .experience-summary {
    display: none;
  }
  /* Add smooth animation */
  .experience-details {
    display: none;
    margin-top: 0.5em;
    padding: 1em;
    background: #f9f9f9;
    border-left: 3px solid #3177b1;
    border-radius: 0 4px 4px 0;
    animation: slideDown 0.3s ease-out; /* ADD this line */
  }

  /* ADD this new animation */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ADD these for dynamic button text (optional) */
  .experience-expand .expand-text::after {
    content: "Click for details";
  }
  .experience-item.active .experience-expand .expand-text::after {
    content: "Click to collapse";
  }
</style>

<div id="experience-accordion">
  {% assign experiences = site.experience | sort: 'date' | reverse %}
  {% assign counter = experiences.size %}
  <ul class="experience-list">
  {% for post in experiences %}
    <li class="experience-item" data-index="{{ counter }}">
      <div class="experience-title">{{ post.title }}</div>
      <div class="experience-venue">{{ post.venue }}</div>
      <div class="experience-location">{{ post.location }}</div>
      <div class="experience-date">{{ post.date | date: "%B %Y" }} {% if post.end_date %}- {{ post.end_date | date: "%B %Y" }}{% endif %}</div>
      {% if post.content %}
        <div class="experience-summary">{{ post.content | strip_html | truncate: 120, '...' }}</div>
      {% endif %}
      <div class="experience-expand" onclick="expandExperience(event, {{ counter }})">
        <span class="expand-text"></span> <span class="exp-arrow">&#x25BC;</span>
      </div>
      <div class="experience-details" id="exp-details-{{ counter }}">
        {% if post.content %}<div>{{ post.content | markdownify }}</div>{% endif %}
      </div>
    </li>
    {% assign counter = counter | minus: 1 %}
  {% endfor %}
  </ul>
</div>

<script src="{{ '/assets/js/experience.js' | relative_url }}"></script>