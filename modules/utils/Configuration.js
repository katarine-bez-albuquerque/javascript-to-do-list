/**
 * class Configuration
 */

export default class Configuration {
    #name;

    constructor() {
        this.#name = "";
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    createElementTag(element) {
        return document.createElement(element);
    }

    createClassName(elementCreated, className) {
        return elementCreated.classList.add(className);
    }

    removeClassName(elementCreated, className) {
        return elementCreated.classList.remove(className);
    }

    createTextContent(elementCreated, name) {
        return elementCreated.textContent = name;
    }

    appendClildElement(elementCreated, parent) {
        return parent.appendChild(elementCreated);
    }

    removeClildElement(elementCreated, parent) {
        return parent.removeChild(elementCreated);
    }

    removeAllChildElement(parent) {
        while(parent.firstElementChild) {
            parent.removeChild(parent.firstElementChild);
        }
    }
}