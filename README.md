# Potatoes Emojis Firefox WebExtension

**This add-on replaces latest noto-emoji from Google with old "potatoes"(or "worms" or whatever you call it...) emojis from Android 6.0.1 on the Google website Messages for web.**

## What it does

This extension includes:

* a content script, "replace-emojis.js", that is injected into any pages under "messages.android.com" or any of its subdomains
* potato emojis from Android 6.0.1 from https://github.com/googlei18n/noto-emoji/commit/914c9ecb9d5e6d96c972c8df577cc6a36d162ece, completed with newer versions for missing emojis (7.0, 8.0, 9.0)

The content script intercept HTTP requests to the CDN hosting latest Noto emojis (ssl.gstatic.com) and redirect these requests to an archived version of the noto-emoji Github repository (commit 914c9ecb9d5e6d96c972c8df577cc6a36d162ece).

