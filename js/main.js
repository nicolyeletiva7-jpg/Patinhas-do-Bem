import { iniciarMenu } from "./menu.js";
import { carregarAnimais } from "./animais.js";
import { iniciarMascaras } from "./mascaras.js";
import { iniciarValidacaoFormulario } from "./validacao.js";


document.addEventListener("DOMContentLoaded", function () {

    iniciarMenu();

    carregarAnimais();

    iniciarMascaras();

    iniciarValidacaoFormulario();

});