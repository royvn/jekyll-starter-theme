---
slug: /het-verschil-tussen-require-en-import/
title: Het verschil tussen require en import
description: Stukken code zijn beter beheersbaar in kleinere stukken, dit geldt ook voor javascript. Om stukken javascript...
date: 2018-11-24
image: ../uploads/het-verschil-tussen-require-en-import.jpg
categories: [Development]
tags: [JS]
author: royvn
---

Stukken code zijn beter beheersbaar in kleinere stukken, dit geldt ook voor [javascript](https://nl.wikipedia.org/wiki/JavaScript). Om stukken javascript code te kunnen importeren en exporteren gebruik je `import` en `export`. Desalniettemin zie je ook wel eens `require()` en `module.exports`. Wat is nu het verschil en wanneer gebruik je welke?

## Het verschil

Het verschil zit in de versies van ECMAScript, de standaard waarop javascript gebaseerd is. De huidige door browsers geïmplementeerde versie is ES5, welke gestandaardiseerd is in 2009. ES5 bevat native niet de mogelijkheid om stukken code te importeren en exporteren. Import en export statements zijn in de nieuwe versie van ES6, officieel ECMAScript 2015 genoemd, wel gedefinieerd.

### ES5

Om in ES5 toch gebruik te kunnen maken van modules is er in node een functie beschikbaar. Met `require()` en `module.exports` is het mogelijk code uit te wisselen.

Stel dat je de volgende structuur hebt. En dat we in index.js iets vanuit test.js willen importeren.

* project
  * src
      * test.js
      * index.js

```js
// test.js
var cheese = '🧀';
var chicken = '🐔';

module.exports.cheese = cheese;
module.exports.chicken = chicken;

// index.js
var test = require('./test.js');
console.log(test.cheese);
console.log(test.chicken);

// output
🧀
🐔
```

### ES6

In ES6 is het bijna hetzelfde. In plaats van `require` en `module.exports` gebruik je `import` en `export`. Dit maakt het geheel nog simpeler om te lezen.

```js
// test.js
export default '🧀';
export const chicken = '🐔';

// index.js
import cheese, { chicken } from './test.js';
console.log(cheese);
console.log(chicken);

// output
🧀
🐔
```

### Support en output

Het is super dat import en export statements in ES6 mogelijk zijn. Maar native worden import en export nog niet geheel door iedere browser ondersteund. Het is dan ook verstandig gebruik te maken van een javascript compiler zoals bijvoorbeeld [Babel](https://babeljs.io/). Op deze manier schrijf je ES6 code maar output je bijvoorbeeld browser ES5 compatible code. Voor het bundelen van scripts is [webpack](https://webpack.js.org/) ook aan te raden. Ook niet geheel onbelangrijk is dat je ES5 `require()` en `module.exports` en ES6 `import` en `export` varianten niet door elkaar heen kan gebruiken.

## Links

* Mozilla, (2018, 10 november). Import. Geraadpleegd op 23 november 2018, van [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* Mozilla, (2018, 12 juni). Export. Geraadpleegd op 23 november 2018, van [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)