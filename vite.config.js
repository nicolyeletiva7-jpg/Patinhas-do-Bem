import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "./",

    build: {
        rollupOptions: {
            input: {
                index: resolve(
                    import.meta.dirname,
                    "html/index.html"
                ),
                projeto: resolve(
                    import.meta.dirname,
                    "html/projeto.html"
                ),
                cadastro: resolve(
                    import.meta.dirname,
                    "html/cadastro.html"
                )
            }
        },
        outDir: "dist",
        emptyOutDir: true
    }
});

