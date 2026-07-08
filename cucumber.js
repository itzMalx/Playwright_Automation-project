module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
      resultsDir: "reports/allure-results"
    },

    requireModule: ["ts-node/register"],

    require: [
      "src/test/step/**/*.ts",
      "src/test/support/**/*.ts",
      "src/test/hooks/**/*.ts",
    ],

    paths: [
      "src/test/feature/**/*.feature",
    ],

    publishQuiet: true,
    dryRun: false,

    format: [
      "progress",
      "json:reports/cucumber/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "rerun:@rerun.txt",
      "progress-bar",
      "allure-cucumberjs/reporter",
    ],
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/step/**/*.ts",
      "src/test/hook/**/*.ts",
    ],
    paths: ["@rerun.txt"],
  },
};