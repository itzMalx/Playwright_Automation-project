module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
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
      "json:reports/cucumber-report.json",
      "rerun:@rerun.txt",
      "progress-bar",
      "allure-cucumberjs/reporter",
      "progress"
    ],
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/step/**/*.ts",
      "src/test/hooks/**/*.ts",
    ],

    paths: ["@rerun.txt"],
  },
};