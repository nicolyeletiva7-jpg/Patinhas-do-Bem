const animais = [

    {
        nome: "Rocky",
        idade: "2 anos",
        porte: "Porte médio",
        descricao:
            "Brincalhão e cheio de energia. Adora passear e receber carinho.",
        imagem: "../img/rocky.jpg",
        alt:
            "Rocky, cachorro de pelagem clara e orelhas levantadas."
    },

    {
        nome: "Bella",
        idade: "3 anos",
        porte: "Porte médio",
        descricao:
            "Carinhosa e tranquila. Adora companhia e ambientes aconchegantes.",
        imagem: "../img/bella.jpg",
        alt:
            "Bella, cachorrinha de pelagem preta e expressão tranquila."
    },

    {
        nome: "Max",
        idade: "8 meses",
        porte: "Porte pequeno",
        descricao:
            "Curioso e muito amoroso. Está sempre pronto para uma nova aventura.",
        imagem: "../img/max.jpg",
        alt:
            "Max, filhote de cachorro de pelagem marrom e branca."
    }

];


export function carregarAnimais() {

    const animaisContainer =
        document.getElementById("animais-container");

    if (!animaisContainer) {
        return;
    }

    animaisContainer.innerHTML =
        animais.map(function (animal) {

            return `
                <article class="animal-card">

                    <img
                        src="${animal.imagem}"
                        alt="${animal.alt}"
                        loading="lazy">

                    <div class="animal-info">

                        <h3>
                            ${animal.nome}
                        </h3>

                        <p class="animal-details">
                            ${animal.idade} · ${animal.porte}
                        </p>

                        <p>
                            ${animal.descricao}
                        </p>

                        <a
                            href="../html/cadastro.html"
                            class="button button-small">
                            Quero conhecer
                        </a>

                    </div>
                </article>
            `;

        }).join("");

}