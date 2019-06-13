function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

// Example usage: Process all Text nodes on the page
walkTheDOM(document.body, function (node) {
    if (node.nodeType === 3) { // Is it a Text node?
        var text = node.data.trim();
        if (text.length > 0) { // Does it have non white-space text content?
            // process text
        }
    }
});
