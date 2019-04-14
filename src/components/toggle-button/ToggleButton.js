const template = document.createElement('template');
template.innerHTML = `
     <h2>hello world!</h2>
     <slot name="content">some default content</slot>
     <button id="button1">do not click</button>
`;

customElements.define('honey-toggle-button',

    class ToggleButton extends HTMLElement {

        constructor() {
            super()
            const options = this.getAttribute('options');
            console.log('constructor called with options: '+ JSON.stringify(options));

            // for init attribut defaults
            // e.g. this.src = '';




        }

        connectedCallback() {
            console.log('custom element is on the page!');

            if (!this.shadowRoot) {
              console.log('creating shadow dom');
              this.attachShadow({mode: 'open'});
              this.shadowRoot.appendChild(template.content.cloneNode(true));
              const options = JSON.parse(this.getAttribute('options'));
              this.content = options.content;
              this.toggledContent = options.toggledContent;


              // onClick auf Button definieren
              this.button = this.shadowRoot.getElementById('button1');
              this.button.innerHTML = this.content;
              this.button.addEventListener('click', () => {
                  this.toggle();
              });
            }
         }

        disconnectedCallback() {
            console.log('element has been removed');
            document.querySelector("honey-toggle-button").remove();
        }

        attributeChangedCallback(name, oldval, newval) {
            // do something every time the attribute changes

            console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);

            if( name === 'toggled'){
                if( newval != null){
                    this.button.innerHTML = this.toggledContent;
                }else{
                    this.button.innerHTML = this.content;
                }
            }

        }


        static get observedAttributes() {
            return ['toggled'];
          }


        get toggled() {
            return this.hasAttribute('toggled');
        }

        // the second argument for setAttribute is mandatory, so we’ll use an empty string
        set toggled(val) {
            if (val) {
                this.setAttribute('toggled', '');
            }
            else {
                this.removeAttribute('toggled');
            }
        }

        toggle(){
           if( this.hasAttribute('toggled')){
               this.removeAttribute('toggled');
           }else{
               this.setAttribute('toggled', '');
           }
        }
    }
);

//    export default ToggleButton;



