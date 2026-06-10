import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn", // Te avisa si dejas variables sin usar
            "no-undef": "error",      // Te marca error si usas variables no definidas
            "eqeqeq": "error"         // Te obliga a usar el triple igual (===)
        }
    }
];