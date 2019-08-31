---
title: Webkit naar WatchOS 5
excerpt: 
date: 2018-06-11
image: /uploads/wwdc18.png
categories: [Development]
tags: [WatchOS, Webkit]
---

Tijdens de WWDC 2018 van Apple was er een leuk nieuwtje. Webkit komt naar watchOS. Dit betekent dat je, zodra watchOS 5 uit is, web content zoals websites en html emails kan gaan consumeren op je Apple Watch!

De schermruimte op je Apple Watch is voor nu nogal beperkt. Dus wat zijn de mogelijkheden en hoe zal het werken?

## Hoe het werkt
Als basis zal Webkit op watchOS een website met 320 CSS pixels proberen te weergeven. 320 is qua afmetingen precies de schermbreedte van een iPhone 5s en iPhone SE.

Bij het laden van een website zal de `initial-scale`(het zoomniveau wanneer de pagina voor de eerste keer is geladen) automatisch overschreven worden van 1 naar 0.49. De weergave is dan niet meer 320 maar 156 CSS pixels. Op deze manier kan een responsive website, out of the box, weergegeven worden op een Apple Watch.

### Verdere optimalisatie
Het is mogelijk om je web content geheel te optimaliseren voor watchOS hiervoor moet je de onderstaande meta tag toevoegen.

```html
<meta name="disabled-adaptations" content="watch">
```

Met de meta tag zal Webkit op watchOS de automatische aanpassingen, zoals het schalen naar 0.49, niet doen. Met CSS kan je dan de echte width van de Apple Watch gebruiken. Op dit moment is dat 272 pixels voor de Apple Watch 38mm en 312 pixels voor de Apple Watch 42mm.

### Formulieren
De keuze om het invoeren van formulieren te ondersteunen in watchOS is opvallend. Met een klein scherm zou het al snel gepriegel moeten worden. Echter door gebruik te maken van het juiste html `type="value"` attribuut wordt het invoeren van data vanaf je Apple Watch makkelijker gemaakt door Apple.

```html
<input type="tel">
<input type="date">
<select></select>
```

Het gebruik van een `aria-label` was al belangrijk voor mensen met een beperking, maar nu zie je het als niet beperkte gebruiker bij het invoeren terug. Dit komt namelijk linksboven als back button in je scherm te staan.

```html
<input type="email" aria-label="E-mailadres">
```

### Safari reader
Zodra een pagina een <article></article> bevat met content wordt Safari Reader automatisch geactiveerd. Dit is te vergelijken met een soort modus zonder afleiding zoals je die wellicht kent in je browser.

Witte tekst wordt dan weergegeven op een zwarte achtergrond. Om hier optimaal gebruik van te maken is het vereist om microdata toe te passen.

```html
<article itemscope itemtype="https://schema.org/BlogPosting">
  <h1 itemprop="title"></h1>
  <h2 itemprop="subheading"></h2>
  <span itemprop="author"></span>
  <span itemprop="pubdate"></span>
</article>
```

### Interactie
Scrollen, ook mogelijk met de digital crown
Swipen
Tap to zoom
Edge swipe en firm press (o.a. voor terug en vooruit navigeren)

## Afwachten
Het is wachten op een definitieve release van watchOS 5.

## Links
* Apple, (2018, 20 juni). Designing Web Content for watchOS. Geraadpleegd op 20 juni 2018, van [https://developer.apple.com/videos/play/wwdc2018/239/](https://developer.apple.com/videos/play/wwdc2018/239/)
* Mozilla, (2018, 2 december). Viewport basics. Geraadpleegd op 20 juni 2018, van [https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Viewport_basics](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Viewport_basics)
* [https://schema.org/docs/documents.html](https://schema.org/docs/documents.html)