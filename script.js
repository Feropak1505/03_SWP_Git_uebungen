console.log("Website geladen!");

function addDynamicContent() {
    const body = document.body;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Dieser Text wurde mit JavaScript hinzugefügt!';
    newParagraph.className = 'highlight';
    body.appendChild(newParagraph);}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ist bereit!');

    const button = document.createElement('button');
    button.textContent = 'Dynamischen Content hinzufügen';
    button.onclick = addDynamicContent;
    document.body.appendChild(button);});