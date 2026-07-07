import { DataTable, Then, When } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";

Then("user navigate to course management page", async function (this: glitchworld) {
  await this.searchPage.clickCourse();
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
      await this.searchPage.verifySearchResults(row.result);
    }
  }
});

When("User searches codes with the following data", async function (this: glitchworld, dataTable: DataTable) {
  const data = dataTable.hashes();

  for (const row of data) {
    if (!row.keyword || !row.result) {
      throw new Error("keyword or result is missing in course code data table");
    }

    await this.searchPage.enterSearchKeyword(row.keyword);
    await this.searchPage.verifyCourseCodes(row.result);
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
      await this.searchPage.verifySearchResults(row.result);
    }
  }
});

Then("no matching results should be displayed", async function (this: glitchworld) {
  await this.searchPage.verifyNoResultsFound();
});