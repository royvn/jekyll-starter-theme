---
layout: post
title: Responsive aspect ratio in CSS
description: Niet nieuw of moeilijk maar wel handig, een responsive aspect ratio in CSS. Toepasbaar op bijvoorbeeld video’s, placeholders en iframes. 
date: 2017-04-18
image: /uploads/responsive-aspect-ratio-in-css.png
categories: [Design, Development]
tags: [CSS]
author: royvn
---

Niet nieuw of moeilijk maar wel handig, een responsive aspect ratio in CSS. Toepasbaar op bijvoorbeeld video’s, placeholders en iframes.

Een responsive aspect ratio creëer je met percentages `padding-top` of `padding-bottom`. Een percentage is gebaseerd op de `width` van je `div`. Volledig responsive dus zodra je scherm klein wordt.

## Voorbeeld

In dit voorbeeld passen we een aspect ratio van 4:3 toe.

Zodra je `padding-bottom: 100%;` toepast heb je een 1:1 verhouding. Vanuit hier werk je naar de andere verhoudingen toe. Voor 4:3 is dat dan `padding-bottom: 75%;`.

```html
<div class="holder w4xh3"></div>
```

```css
.holder {
	width: 100%;
	height: 0;
	background-color: red;
}
.w4xh3 {
	padding-bottom: 75%;
}
```

## Andere aspect ratio

```css
.w4xh1 {
	padding-bottom: 25%;
}
.w4xh2 {
	padding-bottom: 50%;
}
.w4xh6 { 
	padding-bottom: 150%;
}
```