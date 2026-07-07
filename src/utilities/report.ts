const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports",
    reportPath: "./reports/html-report",
    reportName: "Playwright BDD Report",
    pageTitle: "Playwright Report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "Chromium",
            version: "Latest",
        },
        device: "Local",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
});