System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "icndb/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "postal": "npm:postal@1.0.0",
    "postal.request-response": "npm:postal.request-response@0.3.1",
    "reqwest": "github:ded/reqwest@1.1.5",
    "rivets": "npm:rivets@0.8.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "watch": "github:melanke/Watch.JS@master",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:lodash@2.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postal.request-response@0.3.1": {
      "lodash": "npm:lodash@2.4.1"
    },
    "npm:postal@1.0.0": {
      "lodash": "npm:lodash@3.1.0"
    },
    "npm:rivets@0.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sightglass": "npm:sightglass@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

