#!/bin/bash
deno run -A npm:terser   assets/js/vendor/jquery/jquery-1.12.4.min.js   assets/js/plugins/jquery.fitvids.js   assets/js/plugins/jquery.greedy-navigation.js   assets/js/plugins/jquery.magnific-popup.js   assets/js/plugins/jquery.smooth-scroll.min.js   assets/js/plugins/stickyfill.min.js   assets/js/_main.js   -c -m -o assets/js/main.min.js
