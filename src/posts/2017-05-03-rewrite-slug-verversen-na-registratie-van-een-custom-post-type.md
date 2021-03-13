---
slug: /rewrite-slug-verversen-na-registratie-van-een-custom-post-type/
title: Rewrite slug verversen na registratie van een custom post type
description: In WordPress werkt een later aangepaste rewrite slug van een custom post type niet automatisch in...
date: 2017-05-03
image: ../uploads/rewrite-slug-verversen-na-registratie-van-een-custom-post-type.jpg
categories: [Notities]
tags: [WordPress]
author: Roy
---

In [WordPress](https://nl.wordpress.com/) werkt een later aangepaste rewrite slug van een custom post type niet automatisch in de front-end.

Hieronder zie je custom post type ‘project’ als voorbeeld.

```php
function prefix_custom_post_project() {
    $args = array(
        'label' => 'Projects',
        'rewrite' => array(
            'slug' => 'projecten'
        ),
    );
    register_post_type('project', $args);
}
add_action( 'init', 'prefix_custom_post_project' );
```

## Oplossing

Navigeer in de backend eenvoudig naar instellingen en permalinks. Dit triggert een refresh waarna de nieuwe rewrite slug direct in de front-end bijgewerkt is.