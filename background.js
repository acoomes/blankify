// Run blankify.js.
function runBlankify() {
    browser.tabs.executeScript(null, {
        file: "/content_scripts/blankify.js"
    });
}

/* 
When the browser action is clicked, run blankify.
 */
browser.browserAction.onClicked.addListener(runBlankify);