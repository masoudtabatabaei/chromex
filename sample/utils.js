export const fetchData = async (filePath) => {
    const response = await fetch(filePath);
    const data = await response.json();

    return data;
}

export const createNewElement = (tagName, {
    elementClass = [],
    elementText = ""
}) => {
    let elm = document.createElement(tagName);
    elm.classList.add(...elementClass);
    let elmText = document.createTextNode(elementText);
    elm.appendChild(elmText);

    return elm;
}