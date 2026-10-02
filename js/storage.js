const CHAVE_CADASTRO = "patinhasCadastro";


export function salvarCadastro(dados) {

    localStorage.setItem(
        CHAVE_CADASTRO,
        JSON.stringify(dados)
    );

}


export function recuperarCadastro() {

    const dadosSalvos =
        localStorage.getItem(CHAVE_CADASTRO);

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);

}


export function preencherFormulario(form, dados) {

    if (!form || !dados) {
        return;
    }


    Object.keys(dados).forEach(function (campo) {

        const elemento =
            form.elements[campo];

        if (!elemento) {
            return;
        }


        if (campo === "interesses") {

            dados[campo].forEach(function (valor) {

                const checkbox =
                    form.querySelector(
                        `input[name="interesses"][value="${valor}"]`
                    );

                if (checkbox) {
                    checkbox.checked = true;
                }

            });

        } else if (elemento.type === "checkbox") {

            elemento.checked = dados[campo];

        } else {

            elemento.value = dados[campo];

        }

    });

}