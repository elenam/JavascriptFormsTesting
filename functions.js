/**
 * Created by elenam on 1/27/14.
 */

function createParagraph(content) {
    return "<p>" + content + "</p>"
}

function createImage(url) {
    return "<img src ='" + url +"' />";
}

function createList(n) {
    var defaultElements = ["One", "Two", "Three", "Four", "Five"];
    var theList = "<ol>";
    for (var i = 0; i < n; ++i) {
        if (i < defaultElements.length) {
            theList += "<li>" + defaultElements[i] + "</li>";
        } else {
            theList += "<li>Infinity</li>";
        }
    }
    theList += "</ol>";
    return theList;
}

module.exports = createParagraph;

