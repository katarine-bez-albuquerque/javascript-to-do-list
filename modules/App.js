/**
 * App.js
 */

import Configuration from "./utils/Configuration.js";

const input = document.querySelector(".input");
const buttonAdd = document.querySelector(".add");
const buttonRemoveAll = document.querySelector(".remove_all");
const list = document.querySelector(".list");

const configuration = new Configuration();

function create(value) {
    const article = configuration.createElementTag("article");
    configuration.createClassName(article, "item");
    const p = configuration.createElementTag("p");
    configuration.createTextContent(p, value);
    configuration.appendClildElement(p, article);

    const button = configuration.createElementTag("button");
    configuration.createTextContent(button, "Remove");            
    button.addEventListener('click', () => remove(article));    
    configuration.appendClildElement(button, article);
    
    const activity = configuration.appendClildElement(article, list);
    return activity;
}

function remove(activity) {
    configuration.removeClildElement(activity,list);
}

function removeAll() { 
    configuration.removeAllChildElement(list);
}

function clear() {
    input.value = "";
}

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        create(input.value);
        clear();
    }    
})

buttonAdd.addEventListener('click', () => {
    create(input.value);
    clear();
});

buttonRemoveAll.addEventListener('click', () => {
    removeAll();
    clear();
});
