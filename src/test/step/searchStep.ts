import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { logger } from "../../utilities/logger";
import { LoginPage } from "../pages/loginpage";

Given("Admin logs in and reaches the Dashboard for Search", async function (this: glitchworld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await this.login.loginSite();
  logger.info("Login successful!");
});

Given("Admin opens the Course Management module for Search", async function (this: glitchworld) {
  await this.dashboardPage.naviagateToCourse();
  logger.info("Navigated to Course Management page");
});

When("User searches client with the following data", async function (this: glitchworld, dataTable: DataTable) {
  const data = dataTable.hashes();

  for (const row of data) {
    if (!row.keyword || !row.result) {
      throw new Error("keyword or result is missing in client search data table");
    }

    await this.searchPage.enterSearchKeyword(row.keyword);

    if (row.result.toLowerCase() === "none") {
      await this.searchPage.verifyNoResultsFound();
    } else {
      await this.searchPage.verifyClientResults(row.result);
    }
  }
});

When("User searches course with the following data", async function (this: glitchworld, dataTable: DataTable) {
  const data = dataTable.hashes();

  for (const row of data) {
    if (!row.keyword || !row.result) {
      throw new Error("keyword or result is missing in course search data table");
    }

    await this.searchPage.enterSearchKeyword(row.keyword);

    if (row.result.toLowerCase() === "none") {
      await this.searchPage.verifyNoResultsFound();
    } else {
      await this.searchPage.verifyCourseResults(row.result);
    }
  }
});

Then("no matching results should be displayed", async function (this: glitchworld) {
  await this.searchPage.verifyNoResultsFound();
});