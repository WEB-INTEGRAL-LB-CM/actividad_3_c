import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        // Configuración normal para tus archivos JS comunes
        languageOptions: {
            globals: {
                console: "readonly",
                process: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error"
        }
    },
    {
        // Configuración especial para que no explote con tus archivos .test.js
        files: ["**/*.test.js", "**/*.spec.js"],
        rules: {
            "no-undef": "off" // Apaga el error de variables no definidas en los tests
        }
    }
];