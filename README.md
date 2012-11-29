Stickyfoo
===

A semantic sticky footer plugin for jQuery

Usage
---

First off, remember to include all the necessities in your html:

```
<link rel="stylesheet" href="http://webbies.ca/golflife/css/stickyfoo.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="js/stickyfoo.js"></script>
```

Here's a footer:

```
<footer id="footer">
  <p>Yep</p>
</footer>
```

Make it sticky when the document is ready:

```
$(document).ready(function() {
  $('#footer').stickyfoo();
});
```

When there's room at the bottom, the footers gets a class:

```
<footer class="sticky" id="footer">
  <p>Yep</p>
</footer>
```

When there's no room (when the document is longer than the viewport), it's just your footer as you styled it.

Basic boilerplate css is included in stickyfoo.css:

```
.sticky {
  position: absolute;
  bottom: 0px;
}
```

Beware of Collapsing Margins
---

The caveat here is that margins may bleed outside the body element, and I don't know of any way to measure the body height with collapsing margins included, so they're just ignored.

Feedback
---

Tweet <a href="http://twitter.com/sakamies">@sakamies</a>