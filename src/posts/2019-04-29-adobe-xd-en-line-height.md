---
slug: /adobe-xd-en-line-height/
title: Adobe XD en line-height
date: "2019-04-29"
description: Als designer werk je met verschillende tools. Hierbij loop je soms tegen dingen aan die je...
image: ../uploads/adobe-xd-en-line-height.jpg
categories: [Design]
tags: [Adobe]
author: royvn
---

Als designer & developer werk je met verschillende tools. Hierbij loop je soms tegen dingen aan die je werkproces verstoren. Zo ook bij [Adobe XD](https://www.adobe.com/nl/products/xd.html). In de eerste instantie lijkt het een werkbare tool. Tijdens het aflezen van design specificaties viel het echter op dat XD apart met de [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) en de daarmee verbonden hoogte van een tekst object omgaat.

## Probleem

Een onderdeel van een goed ontwerp is bijvoorbeeld het doordacht toepassen van incrementele [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) en [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin). Horizontaal maar ook verticaal. Verticaal is waar het bij XD met tekst en line-height niet helemaal lekker gaat.

Op het Adobe forum staat het volgende over hoe XD afmetingen behandelt.

> XD currently uses a virtual pixel for most of its measurements (including font size), which should be the same unit of measure as a CSS pixel, or most measurements in iOS. It’s roughly equal to 1 physical pixel on a 72 dpi monitor (and, incidentally, a point).
>
> [Adobe forum](https://forums.adobe.com/thread/2140211)

Op basis hiervan verwacht je dat afmetingen overeen moeten komen met een CSS pixel.

## Voorbeeld

Stel dat je voor een website een titel van 1 regel ontwerpt met een font-size van 24 pixels en een line-height van 32 pixels. De titel zou zoals je verwacht in CSS 32 pixels hoog moeten zijn. Zo werkt het in je browser. Als de titel over twee regels gaat zou dat 32+32=64 pixels hoog moeten worden. Logisch toch? Adobe XD denkt er anders over, namelijk 40 pixels voor een enkele regel en 72 pixels voor een dubbele (afhankelijk van lettertype). Dat is een verschil van 8 pixels 😬 (lettertype [Poppins](https://fonts.google.com/specimen/Poppins)).

<div class="holder holder--16x9">
  <iframe class="holder__embed" src="https://giphy.com/embed/pPhyAv5t9V8djyRFJH"></iframe>
</div>

Niet te begrijpen voor een UX/UI design tool

## Gevolgen

### Ontwerp

Omdat de line-height en de daaraan verbonden hoogte niet klopt is het toepassen van verticale ruimte en het positioneren van elementen niet eenvoudig meer. De hoogte klopt niet, dus de Y as positie van een aangrenzend component voor de juiste margin of padding ook niet.

<video controls playsinline src="/adobe-xd-line-height-issue.mp4"></video>

De hoogte klopt niet op basis van de ingevoerde line-height en regels

### Overdracht

Als designer kan je het probleem rechttrekken door handmatig elk element een beetje te nudgen. Tijdsintensief, maar dat neemt niet weg dat ook de overdracht naar mede developers extra aandacht nodig heeft om er voor te zorgen dat een design goed geïmplementeerd wordt.

## Samenvattend

Adobe XD behandelt de hoogte van een tekst element, die mede ontstaat door de line-height, niet zoals CSS pixels. De hoogte klopt niet waardoor eenvoudige design specificaties lastiger af te lezen zijn. Ook moet er extra opgelet worden bij het consistent toepassen van padding, margin en meer.

Vindt je ook dat Adobe XD line-height en de daarmee verbonden hoogte moet functioneren zoals op het web? Stem dan op de volgende [feature](https://adobexd.uservoice.com/forums/353007-adobe-xd-feature-requests/suggestions/13813872-line-height-should-function-as-it-does-on-the-web) request bij het Adobe forum.

Gelukkig hebben andere tools zoals bijvoorbeeld [Sketch](https://www.sketch.com/) en [Figma](https://www.figma.com/) niet last van dit probleem ❤️.