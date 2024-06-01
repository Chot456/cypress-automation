const { defineConfig } = require("cypress");
const proprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await proprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  // require('cypress-mochawesome-reporter/plugin')(on);

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: 'https://rahulshettyacademy.com',
    userId: "john",
    password: "password"
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integrations/examples/BDD/*.feature'
  },
  projectId: "vm39bj",
  
});
