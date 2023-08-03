const createNewElement = (tagName, {
    elementClass = [],
    elementText = ""
}) => {
    let elm = document.createElement(tagName);
    elm.classList.add(...elementClass);
    let elmText = document.createTextNode(elementText);
    elm.appendChild(elmText);

    return elm;
}