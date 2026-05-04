const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.omninote.com.br",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
    },
  },
});
