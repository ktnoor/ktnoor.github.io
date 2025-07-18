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
    margin-bottom: 1.2em;
    border-bottom: 1px solid #eee;
    padding-bottom: 1em;
    display: flex;
    align-items: flex-start;
  }

  /* Create a proper bullet point container */
  .experience-item::before {
    content: "•";
    color:rgb(0, 0, 0);
    font-weight: bold;
    font-size: 2.5em; /* Make bullet bigger */
    line-height: 1.1em;
    margin-right: 0.5em;
    margin-top: 0; /* Top align the bullet */
    flex-shrink: 0; /* Prevent bullet from shrinking */
  }

  /* Container for all content except bullet */
  .experience-content {
    flex: 1;
  }

  .experience-title {
    font-weight: bold;
    font-size: 1.2em;
    color: #16354e;
    margin-bottom: 0.3em;
  }

  /* Remove the old bullet */
  .experience-title::before {
    content: none;
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

  /* Hide summary when expanded */
  .experience-item.active .experience-summary {
    display: none;
  }

  .experience-details {
    display: none;
    margin-top: 0.5em;
    padding: 1em;
    background: #f9f9f9;
    border-left: 3px solid #3177b1;
    border-radius: 0 4px 4px 0;
    animation: slideDown 0.3s ease-out;
    clear: both; /* Clear floated elements above */
    width: 100%;
    box-sizing: border-box;
    /* Override parent styles */
    color: #333; /* Reset text color */
    text-align: left; /* Reset text alignment */
    user-select: text; /* Make text selectable */
    font-size: 1em; /* Reset font size */
  }

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
    user-select: none;
    overflow: hidden; /* Clear floated elements */
  }
  .experience-expand:hover {
    background:rgb(192, 179, 179);
    border-color:rgb(29, 53, 73);
  }
  .experience-expand::after {
    content: "";
    display: table;
    clear: both;
  }
  .exp-arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .experience-item.active .exp-arrow {
    transform: rotate(180deg);
  }

  /* Optional: Update button text when expanded */
  .experience-expand .expand-text::after {
    content: "Click for details";
  }
  .experience-item.active .experience-expand .expand-text::after {
    content: "Click to collapse";
  }
</style>

# Professional Work Experience

<div id="experience-accordion">
  {% assign experiences = site.experience | where: "exp_type", "job" | sort: 'date' | reverse %}
  {% assign counter = experiences.size %}
  <ul class="experience-list">
  {% for post in experiences %}
    <li class="experience-item" data-index="{{ counter }}">
      <div class="experience-content">
        <div class="experience-title">{{ post.title }} <span style="float:right;font-size:0.9em">{{ post.date | date: "%B %Y" }} {% if post.end_date %}- {{ post.end_date | date: "%B %Y" }}{% endif %}</span></div>
        <div class="experience-venue">{{ post.venue }}, {{ post.location }}</div>
        {% if post.content %}
          <div class="experience-expand" onclick="expandExperience(event, {{ counter }})">
            <span class="experience-summary">{{ post.content | strip_html | truncate: 120, '...' }}</span>
            <span class="expand-text" style="float:right"></span> <span class="exp-arrow" style="float:right">&#x25BC;</span>
            <div class="experience-details" id="exp-details-{{ counter }}" onclick="event.stopPropagation();">
              {% if post.content %}<div>{{ post.content | markdownify }}</div>{% endif %}
            </div>
          </div>
        {% endif %}
      </div>
    </li>
    {% assign counter = counter | minus: 1 %}
  {% endfor %}
  </ul>
</div>

{% assign project_experiences = site.experience | where: "exp_type", "project" %}
{% if project_experiences.size > 0 %}

# Project Experience

<div id="experience-accordion">
  {% assign experiences = site.experience | where: "exp_type", "project" | sort: 'date' | reverse %}
  {% assign counter = experiences.size %}
  <ul class="experience-list">
  {% for post in experiences %}
    <li class="experience-item" data-index="{{ counter }}">
      <div class="experience-content">
        <div class="experience-title">{{ post.title }} <span style="float:right;font-size:0.9em">{{ post.date | date: "%B %Y" }} {% if post.end_date %}- {{ post.end_date | date: "%B %Y" }}{% endif %}</span></div>
        <div class="experience-venue">{{ post.venue }}, {{ post.location }}</div>
        {% if post.content %}
          <div class="experience-expand" onclick="expandExperience(event, {{ counter }})">
            <span class="experience-summary">{{ post.content | strip_html | truncate: 120, '...' }}</span>
            <span class="expand-text" style="float:right"></span> <span class="exp-arrow" style="float:right">&#x25BC;</span>
            <div class="experience-details" id="exp-details-{{ counter }}" onclick="event.stopPropagation();">
              {% if post.content %}<div>{{ post.content | markdownify }}</div>{% endif %}
            </div>
          </div>
        {% endif %}
      </div>
    </li>
    {% assign counter = counter | minus: 1 %}
  {% endfor %}
  </ul>
</div>
{% endif %}

{% assign volunteer_experiences = site.experience | where: "exp_type", "volunteer" %}
{% if volunteer_experiences.size > 0 %}

# Volunteer Experience

<div id="experience-accordion">
  {% assign experiences = site.experience | where: "exp_type", "volunteer" | sort: 'date' | reverse %}
  {% assign counter = experiences.size %}
  <ul class="experience-list">
  {% for post in experiences %}
    <li class="experience-item" data-index="{{ counter }}">
      <div class="experience-content">
        <div class="experience-title">{{ post.title }} <span style="float:right;font-size:0.9em">{{ post.date | date: "%B %Y" }} {% if post.end_date %}- {{ post.end_date | date: "%B %Y" }}{% endif %}</span></div>
        <div class="experience-venue">{{ post.venue }}, {{ post.location }}</div>
        {% if post.content %}
          <div class="experience-expand" onclick="expandExperience(event, {{ counter }})">
            <span class="experience-summary">{{ post.content | strip_html | truncate: 120, '...' }}</span>
            <span class="expand-text" style="float:right"></span> <span class="exp-arrow" style="float:right">&#x25BC;</span>
            <div class="experience-details" id="exp-details-{{ counter }}" onclick="event.stopPropagation();">
              {% if post.content %}<div>{{ post.content | markdownify }}</div>{% endif %}
            </div>
          </div>
        {% endif %}
      </div>
    </li>
    {% assign counter = counter | minus: 1 %}
  {% endfor %}
  </ul>
</div>
{% endif %}

<script src="{{ '/assets/js/experience.js' | relative_url }}"></script>
