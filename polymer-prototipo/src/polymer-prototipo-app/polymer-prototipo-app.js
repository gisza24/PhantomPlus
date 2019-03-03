import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import 'flexible-rating/flexible-rating.js';

/**
 * @customElement
 * @polymer
 */
class PolymerPrototipoApp extends PolymerElement {
  static get template() {
    
    
    return html`
    <style>
        
  h1{
    font-family:Cursive;
    

  }
  
        

      </style>
      </head>
      <body leftmargin=0 topmargin=0>
      <h1><center>Easy Bank<center></h1>
      </body>
     <div class="box">
    <paper-input always-float-label label="Nombre del banco" value={{nombreBanco}}></paper-input>
    <paper-input always-float-label label="Disponibilidad del banco" value={{disponibilidadBanco}}></paper-input>
    <paper-input always-float-label label="Zona" value={{zona}}></paper-input>
    <paper-input always-float-label label="Ubicacion" value={{ubicacion}}></paper-input>
    <paper-input always-float-label label="¿Qué tan segura es el área?" value changed={{area}}></paper-input>
    
<flexible-rating>
</flexible-rating>

    </div>
  `;
  }
  static get properties() {
    return {
      nombreBanco: {
        type: String,
        value: ''},
      disponibilidadBanco:{
        type: Boolean,
        value:''},
      zona: {
        type: String,
        value:''},
      ubicacion:{
        type: String,
        value:''}
      

    }
      
    };
  }


window.customElements.define('polymer-prototipo-app', PolymerPrototipoApp);
