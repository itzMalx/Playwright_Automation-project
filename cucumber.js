module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },

    requireModule: ["ts-node/register"],

    require: [
      "src/test/steps/**/*.ts",
      "src/test/support/**/*.ts",
      "src/test/hooks/**/*.ts",
    ],

    paths: [
      "src/test/features/**/*.feature",
    ],

    publishQuiet: true,
    dryRun: false,

    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "rerun:@rerun.txt",
      "progress-bar",
      "html:reports/multiple-html-report.html",
      "json:reports/multiple-html-report.json",
    ],
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/steps/**/*.ts",
      "src/test/hooks/**/*.ts",
    ],
    paths: ["@rerun.txt"],
  },
};