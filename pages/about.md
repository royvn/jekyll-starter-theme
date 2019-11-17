---
layout: page
permalink: /over/
title: Over
subtitle: Howdy! Ik ontwerp en ontwikkel graag gebruiksvriendelijke interfaces
date: 2018-05-01
image: /uploads/royvn.jpg
---

{% include sections/banner.html src="/uploads/vissershaven-16x8.jpg" data_src="/uploads/vissershaven.jpg" alt="Vissershaven" %}

Hoi, ik ben **Roy van Neden**. Petrolhead, interaction designer en front-end developer uit Leidschendam woonachtig in Den Haag.

![Roy](/uploads/royvn-500x500.jpg)

Dit ben ik.

Met plezier besteed ik het meeste van mijn tijd aan het ontwerpen en realiseren van digitale producten.

In 2015 behaalde ik mijn Bachelor Communication & Multimedia Design aan de Haagse Hogeschool. De jaren daarna ben ik bij vele uiteenlopende projecten betrokken geweest. Van concept tot realisatie. Ik vind het leuk om in teamverband te werken en iteratief een product steeds verder uit te bouwen.

> If we want users to like our software we should design it to behave like a likeable person: respectful, generous and helpful.

Alan Cooper

## Vaardigheden

UX, UI, Sketch, HTML, SCSS, Javascript, Git, NPM, Yarn, Grunt, Gulp, Webpack, Twig, Liquid, Shopify, OctoberCMS, WordPress, Statamic, Jekyll.

## Workflow

Het fijnst en snelst werk ik met macOS, Sketch, Visual studio code, Git en Google Gallery.

## Werkervaring

### Front-end developer
CODE - a Shopify Plus agency  
Okt. 2019 - heden  
Delft

### Front-end developer & interaction designer
Pluut Interaction B.V.  
Feb. 2015 – sep. 2019  
Lisse

### Afstudeerder
Pluut Interaction  
Aug. 2014 – jan. 2015  
Wateringen

### Front-end developer & webdesigner
Pluut Interaction  
Jun. 2014 – aug. 2014  
Wateringen

### Stagiair vormgeving & front-end
PDC Informatie Architectuur B.V.  
Februari 2013 – juli 2013  
Den Haag

### Student Communicatie & Multimedia design (CMD)
De Haagse Hogeschool  
2010 – 2015  
Den Haag

Voor meer info verwijs ik je graag door naar mijn <a href="{{ site.authors.royvn.linkedin }}" target="blank" rel="noopener">Linkedin</a>.

## Overig

In mijn vrije tijd loop ik graag met mijn parttime hond door de natuur. 

![Hond](/uploads/hond.jpg)

Klussen, sportief en competitief bezig zijn vind ik ook leuk. Zo ben ik altijd in voor een ⛷ en 🏎 sessie. Op koude regenachtige dagen slinger ik ook graag een goede game 🎮 aan.

{% include sections/banner.html src="/uploads/skyline-scheveningen-16x8.jpg" data_src="/uploads/skyline-scheveningen.jpg" alt="Niet gek dit stukje achtertuin bij mij om de hoek 😄" %}

## Meer lezen?
Je bent aan het einde van deze pagina gekomen. Maar er is meer. Bekijk mijn recent geplaatste artikelen.

<ul>
{% for post in site.posts limit:4 %}
  <li>
    <a href="{{ post.url }}">
      {{ post.title }} <br>
      {{ post.date | date: '%d %m %Y' }}
    </a> 
  </li>
{% endfor %}
</ul>
