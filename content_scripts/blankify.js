/* 
blankify();
    removes every node in the document.body.
 */
function blankify() {
    while (document.body.firstChild) {
        document.body.firstChild.remove();
    }
}

blankify();