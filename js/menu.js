export function iniciarMenu() {

    const burger = document.querySelector(".burger-menu");
    const navMenu = document.querySelector(".nav-Menu");

    if (!burger || !navMenu) {
        return;
    }

    burger.addEventListener("click", function () {

        navMenu.classList.toggle("active");
        burger.classList.toggle("active");

        const aberto =
            burger.classList.contains("active");

        burger.setAttribute(
            "aria-expanded",
            aberto
        );

        burger.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });


    const linksMenu =
        navMenu.querySelectorAll("a");


    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            burger.classList.remove("active");

            burger.setAttribute(
                "aria-expanded",
                "false"
            );

            burger.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navMenu.classList.remove("active");
            burger.classList.remove("active");

            burger.setAttribute(
                "aria-expanded",
                "false"
            );

            burger.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

}