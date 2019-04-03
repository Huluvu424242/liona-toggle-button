class ExpandableBox extends HTMLElement {

    constructor() {
        super()
        console.log('constructor');
        var shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML =
            `<style>
            p {
                color: red;
            }
            </style>
            <h2>hello world!</h2>
            <slot>some default content</slot>`

    }

    connectedCallback() {
        console.log('custom element is on the page!');
//        document.body.appendChild(document.createElement('honey-example'));
    }

    disconnectedCallback() {
        console.log('element has been removed');
        document.querySelector("honey-example").remove();
    }

    attributeChangedCallback(name, oldval, newval) {
        console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
        para : HTMLElement = document.createElement('p');
        para.innerHTML="toogled";
        document.body.appendChild(para);
        // do something every time the attribute changes
    }


    static get observedAttributes() {
        return ['expanded'];
    }


    get expanded() {
        return this.hasAttribute('expanded');
    }

    // the second argument for setAttribute is mandatory, so we’ll use an empty string
    set expanded(val) {
        if (val) {
            this.setAttribute('expanded', '');
        }
        else {
            this.removeAttribute('expanded');
        }
    }



}

window.customElements.define('honey-example', ExpandableBox);

export default ExpandableBox;

