import { iniciarMenu } from "ong/html/js/menu.js";
import { carregarAnimais } from "js/animais.js";
import { iniciarMascaras } from "ong/html/js/mascaras.js";
import { iniciarValidacaoFormulario } from "js/validacao.js";


document.addEventListener("DOMContentLoaded", function () {

    iniciarMenu();

    carregarAnimais();

    iniciarMascaras();

    iniciarValidacaoFormulario();

});