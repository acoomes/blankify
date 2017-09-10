/* 
Remove every node under document.body.
 */
function blankify() {
    browser.tabs.create({
        url: "https://developer.mozilla.org"
    });
    while(document.body.firstChild) {
        document.body.firstChild.remove();
    }
}

/* 
Assign blankify() as a listener for clicks on the browser action.
 */
browser.browserAction.onClicked.addListener(blankify);