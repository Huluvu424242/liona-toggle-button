const template = document.createElement('template');
template.innerHTML = `
     <style>
          button[toggled=true] {
             color: red;
          }
          button[toggled=false] {
                       color: red;
          }
     </style>
     <button id="toggleButton" toggled="false">loading...</button>
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

            this.erzeugeShadowDOMIfNotExists();
         }

      erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
          console.log('creating shadow dom');
          this.attachShadow({mode: 'open'});
          this.shadowRoot.appendChild(template.content.cloneNode(true));
          const options = JSON.parse(this.getAttribute('options'));
          this.content = options.content;
          this.toggledContent = options.toggledContent;


          // onClick auf Button definieren
          this.button = this.shadowRoot.getElementById('toggleButton');
          this.button.innerHTML = this.content;
          this.button.addEventListener('click', () => {
            this.toggle();
          });
        }
      }

      disconnectedCallback() {
            console.log('element has been removed');
//            document.querySelector("honey-toggle-button").remove();
        }

        attributeChangedCallback(name, oldval, newval) {
            // do something every time the attribute changes

            console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);

          this.erzeugeShadowDOMIfNotExists();

           if( this.toggled ){
               this.button.innerHTML = this.toggledContent;
           }else{
               this.button.innerHTML = this.content;
           }
        }


        static get observedAttributes() {
            return ['toggled'];
          }


        get toggled() {
            return this.getAttribute('toggled')==='true';
        }

        // the second argument for setAttribute is mandatory, so we’ll use an empty string
        set toggled(val) {
            if (val) {
                this.setAttribute('toggled', true);
            }
            else {
                this.setAttribute('toggled', false);
            }
        }

        toggle(){
           if( this.toggled ){
               this.toggled = false;
//               this.button.innerHTML = this.content;
           }else{
               this.toggled = true;
//               this.button.innerHTML = this.toggledContent;
           }
        }
    }
);

//    export default ToggleButton;



