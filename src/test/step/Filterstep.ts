import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { ValidFilterData, InvalidFilterData } from "../type/filterData";
import { LoginPage } from "../pages/loginpage";
import { FilterPage } from "../pages/Filterpage";
import { logger } from "../../utilities/logger";

let validFilterData: ValidFilterData;
let invalidFilterData: InvalidFilterData;

Given("Admin logs in and reaches the Dashboard for Filter", async function (this: glitchworld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await this.login.loginSite();
  logger.info("Login successful!");
});

Given("Admin opens the Course Management module for Filter", async function (this: glitchworld) {
  this.filterpage = new FilterPage(this.page);

  try {
    await this.dashboardPage.naviagateToCourse();
  } catch (error) {
    logger.info("First attempt to open Course Management failed, retrying...");
    await this.page.waitForTimeout(3000);
    await this.dashboardPage.naviagateToCourse();
  }

  logger.info("Navigated to Course Management page for Filter");
});

Given("Admin clicks on the Filter button", async function (this: glitchworld) {
  await this.filterpage.clickFilterButton();
});

When("Admin filters courses using valid filter data", async function (this: glitchworld) {
  const data = await readData<ValidFilterData>("src/test-data/filtervalidData.csv");

  if (data.length === 0) {
    throw new Error("Valid filter CSV is empty");
  }

  validFilterData = data[0]!;

  await this.filterpage.selectCategoryLevelAndSort(
    validFilterData.category,
    validFilterData.level,
    validFilterData.sortBy
  );
});

Then("only courses matching the selected category and level should be displayed", async function (this: glitchworld) {
  await this.filterpage.verifyFilteredResults(
    validFilterData.category,
    validFilterData.level
  );
});

When("Admin filters courses using invalid filter data", async function (this: glitchworld) {
  const data = await readData<InvalidFilterData>("src/test-data/filterinvalidData.csv");

  if (data.length === 0) {
    throw new Error("Invalid filter CSV is empty");
  }

  invalidFilterData = data[0]!;

  await this.filterpage.selectStatusAndCategory(
    invalidFilterData.status,
    invalidFilterData.category
  );
});

Then("no filter results should be displayed", async function (this: glitchworld) {
  await this.filterpage.verifyNoResults();
});

Given("Admin has applied a category, level, and sort filter", async function (this: glitchworld) {
  const data = await readData<ValidFilterData>("src/test-data/filtervalidData.csv");

  if (data.length === 0) {
    throw new Error("Valid filter CSV is empty");
  }

  validFilterData = data[0]!;

  await this.filterpage.selectCategoryLevelAndSort(
    validFilterData.category,
    validFilterData.level,
    validFilterData.sortBy
  );
});

When("Admin clicks on the Clear All button", async function (this: glitchworld) {
  await this.filterpage.clickClearAll();
});

Then("Status, Category, and Level should reset to All", async function (this: glitchworld) {
  await this.filterpage.verifyFiltersReset();
});

Then("all courses should be displayed", async function (this: glitchworld) {
  await this.filterpage.verifyAllCoursesDisplayed();
});