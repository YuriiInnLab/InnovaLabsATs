const { defineConfig  } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://dev.innova-labs.net/',

    env: {                                                                      //------Users setting here
      users: {     
            admin: {
              username: "autotest",
              password: "autotest1234", 
            }  
        },
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    hideXHR: true,
    numTestsKeptInMemory: 5,                                                    //------Reducing browser consumption
    defaultCommandTimeout: 6000,
    retries: 10,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});