import {
    salvarCadastro,
    recuperarCadastro,
    preencherFormulario
} from "./storage.js";


export function iniciarValidacaoFormulario() {

    const form =
        document.getElementById("volunteerForm");

    const mensagem =
        document.getElementById("formMessage");

    const interesses =
        document.querySelectorAll(
            'input[name="interesses"]'
        );

    if (!form) {
        return;
    }


    const dadosSalvos =
        recuperarCadastro();

    if (dadosSalvos) {

        preencherFormulario(
            form,
            dadosSalvos
        );

    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();
        mensagem.textContent = "";
        mensagem.classList.remove("error");


        const atividadeSelecionada =
            Array.from(interesses).some(function (item) {

                return item.checked;

            });


        if (!atividadeSelecionada) {

            mensagem.textContent =
                "Selecione pelo menos uma atividade de interesse.";

            mensagem.classList.add("error");

            if (interesses[0]) {
                interesses[0].focus();
            }
            return;

        }


        if (!form.checkValidity()) {
            form.reportValidity();
            return;

        }


        const dadosCadastro = {};

        const campos =
            form.querySelectorAll(
                "input, select, textarea"
            );


        campos.forEach(function (campo) {

            if (!campo.name) {
                return;
            }

            if (campo.name === "interesses") {
                return;
            }

            if (campo.type === "checkbox") {

                dadosCadastro[campo.name] =
                    campo.checked;

            } else {

                dadosCadastro[campo.name] =
                    campo.value;

            }

        });


        dadosCadastro.interesses =
            Array.from(interesses)
                .filter(function (item) {
                    return item.checked;
                })
                .map(function (item) {
                    return item.value;
                });


        salvarCadastro(dadosCadastro);

        mensagem.textContent =
            "Cadastro validado com sucesso! Os dados foram salvos no navegador para serem recuperados posteriormente.";

        mensagem.classList.remove("error");

        form.reset();

    });

}