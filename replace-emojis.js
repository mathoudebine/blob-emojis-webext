var pattern = "*://ssl.gstatic.com/dynamite/emoji/*";

function redirect(requestDetails) {
    // Replace origin URL with archived Google Emoji equivalent from noto-emoji repository
    newUrl = requestDetails.url.replace("ssl.gstatic.com/dynamite/emoji/png/32","raw.githubusercontent.com/mathoudebine/potatoes-emoji-webext/master/emojis");
    newUrl = newUrl.replace("ssl.gstatic.com/dynamite/emoji/png/128", "raw.githubusercontent.com/mathoudebine/potatoes-emoji-webext/master/emojis");
    return {
        redirectUrl: newUrl
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern], types:["image"]},
    ["blocking"]
);