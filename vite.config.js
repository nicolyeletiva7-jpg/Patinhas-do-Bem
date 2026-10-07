import { defineConfig } from "vite";
import { resolve } from "path";

const raizProjeto = import.meta.dirname;
const raizHtml = resolve(raizProjeto, "html");

export default defineConfig({
    root: raizHtml,

    base: "./",

    build: {
        outDir: resolve(raizProjeto, "dist"),
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: resolve(raizHtml, "index.html"),
                projeto: resolve(raizHtml, "projeto.html"),
                cadastro: resolve(raizHtml, "cadastro.html")
            }
        }
    }
});

