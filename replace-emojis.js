var pattern = "*://ssl.gstatic.com/dynamite/emoji/*";

function redirect(requestDetails) {
    // Replace origin URL with archived Google Emoji equivalent from noto-emoji repository
    return {
        redirectUrl: requestDetails.url.replace("ssl.gstatic.com/dynamite/emoji/png/32", "raw.githubusercontent.com/mathoudebine/potatoes-emoji-webext/master/emojis")
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern], types:["image"]},
    ["blocking"]
);