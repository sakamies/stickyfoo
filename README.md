Stickyfoo
===

A semantic sticky footer plugin for jQuery

Usage
---

Here's the footer:

```
  <footer>
    <p>Yep</p>
  </footer>
```

Make it sticky:

```
  $('#footer').stickyfoo();
```

When there's room at the bottom, the footers gets a class:

```
  <footer class="sticky">
    <p>Yep</p>
  </footer>
```

When there's no room (when the document is longer than the viewport), it's just your footer as you styled it.

Basic boilerplate css is included in stickyfoo.css:

```
  .site-footer.sticky {
    position: absolute;
    bottom: 0px;
  }
```

Beware Collapsing Margins
---

The caveat here is that margins may bleed outside the body element, and I don't know of any way to measure the body height with collapsing margins included, so they're just ignored.

Feedback
---

Tweet <a href="http://twitter.com/sakamies">@sakamies</a>