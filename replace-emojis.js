var pattern = "*://ssl.gstatic.com/dynamite/emoji/*";

function redirect(requestDetails) {
    // Replace origin URL with archived Google Emoji equivalent from noto-emoji repository
    return {
        redirectUrl: requestDetails.url.replace("ssl.gstatic.com/dynamite/emoji", "raw.githubusercontent.com/googlei18n/noto-emoji/914c9ecb9d5e6d96c972c8df577cc6a36d162ece")
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern], types:["image"]},
    ["blocking"]
);