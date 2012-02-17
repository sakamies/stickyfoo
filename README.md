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