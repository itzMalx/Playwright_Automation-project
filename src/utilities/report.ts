const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "./reports/html-report",
  reportName: "Playwright BDD Report",
  pageTitle: "Report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "Glitch_Guardians - Machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});