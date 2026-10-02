export function iniciarMascaras() {

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const estado = document.getElementById("estado");

    if (cpf) {

        cpf.addEventListener("input", function () { 
            let valor =
                cpf.value.replace(/\D/g, "");

            valor = valor.slice(0, 11);

            valor = valor.replace(
                /^(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /^(\d{3})\.(\d{3})(\d)/,
                "$1.$2.$3"
            );

            valor = valor.replace(
                /^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/,
                "$1.$2.$3-$4"
            );

            cpf.value = valor;

        });

    }


    if (telefone) {

        telefone.addEventListener("input", function () {

            let valor =
                telefone.value.replace(/\D/g, "");

            valor = valor.slice(0, 11);

            if (valor.length > 7) {

                valor = valor.replace(
                    /^(\d{2})(\d{5})(\d{1,4})$/,
                    "($1) $2-$3"
                );

            } else if (valor.length > 2) {

                valor = valor.replace(
                    /^(\d{2})(\d{1,5})$/,
                    "($1) $2"
                );

            } else if (valor.length > 0) {

                valor = valor.replace(
                    /^(\d{1,2})$/,
                    "($1"
                );

            }

            telefone.value = valor;

        });

    }


    if (cep) {

        cep.addEventListener("input", function () {

            let valor =
                cep.value.replace(/\D/g, "");

            valor = valor.slice(0, 8);

            if (valor.length > 5) {

                valor = valor.replace(
                    /^(\d{5})(\d{1,3})$/,
                    "$1-$2"
                );

            }

            cep.value = valor;

        });

    }


    if (estado) {

        estado.addEventListener("input", function () {

            estado.value = estado.value
                .replace(/[^a-z]/gi, "")
                .slice(0, 2)
                .toUpperCase();

        });

    }

}