
const recetas = [
    "guiso de lentejas tradicional",
    "Locro Criollo",
    "Fideos de arroz con salteado de tofu y pimiento",
    "Ensalada de quinoa, calabaza asada y granada",
    "Pizza sin tacc casera",
    "Croquetas de arroz yamaní orgánico con vegetales de estación y sin gluten",
    "Torta Invertida de Manzana SIN TACC",
    "Tarta toffe"

]

class Recipe_Search extends HTMLElement {

    constructor (){
        super ();

        const shadoow = this.attachShadow( {mode:'open'});
        shadoow.innerHTML = '<input type="text" />'
    }
  
}

customElements.define('recipe_search', Recipe_Search );


