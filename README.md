Stickyfoo: Semantic Sticky Footer Plugin for jQuery
===

Usage
---
Here's a footer:
    <footer id="footer"></footer>

Make it sticky:
    $('#footer').stickyfoo();

When there's room at the bottom, the footers gets a class:
    <footer class="sticky" id="site-footer"></footer>

When there's no room (when you need to scroll), it's just your footer as you styled it.

Basic boilerplate css is included in stickyfoo.css:

    #footer.sticky {
        position: absolute;
        bottom: 0px;
    }

Beware Collapsing Margins
---
The caveat here is that margins may bleed outside the body element, and I don't know of any way to measure the body height with collapsing margins included.

Feedback
---
Tweet <a href="http://twitter.com/sakamies">@sakamies</a>