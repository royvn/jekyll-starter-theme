---
title: Responsive aspect ratio in CSS
description: Niet nieuw of moeilijk maar wel handig, een responsive aspect ratio in CSS. Toepasbaar op bijvoorbeeld video’s, placeholders en iframes. 
date: "2017-04-18"
image: /responsive-aspect-ratio-in-css.png
categories: [Design, Development]
tags: [CSS]
author: Roy
---

Niet nieuw of moeilijk maar wel handig, een responsive aspect ratio in CSS. Toepasbaar op bijvoorbeeld video’s, placeholders en iframes.

Een responsive aspect ratio creëer je met percentages `padding-top` of `padding-bottom`. Een percentage is gebaseerd op de `width` van je `div`. Volledig responsive dus zodra je scherm klein wordt.

## Voorbeeld

In dit voorbeeld passen we een aspect ratio van 4:3 toe.

Zodra je `padding-bottom: 100%;` toepast heb je een 1:1 verhouding. Vanuit hier werk je naar de andere verhoudingen toe. Voor 4:3 is dat dan `padding-bottom: 75%;`.

```html
<div class="aspect-ratio aspect-ratio--4x3"></div>
```

```css
.aspect-ratio {
	width: 100%;
	height: 0;
	background-color: red;
}
.aspect-ratio.aspect-ratio--4x3 {
	padding-bottom: 75%;
}
```

## Andere aspect ratio

```css
.aspect-ratio.aspect-ratio--4x1 {
	padding-bottom: 25%;
}
.aspect-ratio.aspect-ratio--4x2 {
	padding-bottom: 50%;
}
.aspect-ratio.aspect-ratio--4x6 { 
	padding-bottom: 150%;
}
```