module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-essential", "@vue/prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {
        "vue/multi-word-component-names": 0,
        "vue/require-v-for-key": 0,
        "vue/no-unused-vars": 0,
    },
}
