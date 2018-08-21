// Pattern of emojis loaded from the Google CDN
var pattern = "*://ssl.gstatic.com/dynamite/emoji/*";

// Callback to replace origin URL with archived Google Emoji equivalent from noto-emoji repository
function redirect(requestDetails) {
    
    newUrl = requestDetails.url.replace("ssl.gstatic.com/dynamite/emoji/png/32",
        "raw.githubusercontent.com/mathoudebine/potatoes-emoji-webext/master/emojis");
    newUrl = newUrl.replace("ssl.gstatic.com/dynamite/emoji/png/128", 
        "raw.githubusercontent.com/mathoudebine/potatoes-emoji-webext/master/emojis");
        
    return {
        redirectUrl: newUrl
    };
}

// Intercept all requests to Google CDN of type 'image' before they are made
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern], types:["image"]},
    ["blocking"]
);