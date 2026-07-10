import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";

let currentPage: number;

Given("the user is on the Course Structure page", async function (this: glitchworld) {
  await this.courseManagementPage.navigateToCourseStructurePage();
}
);

Given("the user is on the Course Structure table", async function (this: glitchworld) {
  await this.courseManagementPage.pageNumberLocator("1").waitFor({
    state: "visible",
  });

  const activePage = await this.courseManagementPage.getActivePageNumber();

  expect(activePage).not.toBe("");
}
);

When("the user clicks the {string} button", async function (this: glitchworld, buttonName: string) {

  console.log("Before :", await this.courseManagementPage.getActivePageNumber());

  if (buttonName === "Next") {
    await this.courseManagementPage.clickNext();
  }
  else if (buttonName === "Previous") {
    await this.courseManagementPage.clickPrevious();
  }

  console.log("After :", await this.courseManagementPage.getActivePageNumber());
}
);

When("the user clicks page number {string}", async function (this: glitchworld, pageNo: string) {
  await this.courseManagementPage.clickPageNumber(pageNo);
}
);

Then("the user should be navigated to the {string} page", async function (this: glitchworld, expectedPage: string) {

  await this.courseManagementPage.pageNumberLocator(expectedPage).waitFor({
    state: "visible",
  });

  const activePage = await this.courseManagementPage.getActivePageNumber();

  console.log("Expected Page :", expectedPage);
  console.log("Actual Page   :", activePage);

  expect(activePage).toBe(expectedPage);
}
);

Given("the user is on the {string} page of the Course Structure table", async function (this: glitchworld, page: string) {

  if (page.toLowerCase() === "first") {
    await this.courseManagementPage.clickFirstPage();
    return;
  }

  if (page.toLowerCase() === "last") {
    await this.courseManagementPage.clickLastPage();
    return;
  }

  await this.courseManagementPage.pageNumberLocator(page).waitFor({
    state: "visible",
  });

  await this.courseManagementPage.clickPageNumber(page);

  const activePage = await this.courseManagementPage.getActivePageNumber();

  expect(activePage).toBe(page);

  currentPage = Number(activePage);
}
);

Then('the {string} button should be disabled', async function (this: glitchworld, direction: string) {
  if (direction.toLowerCase() === "next") {
    await expect(await this.courseManagementPage.isNextDisabled()).toBeTruthy()
  }
  else if (direction.toLowerCase() === "previous") {
    await expect(await this.courseManagementPage.isPreviousDisabled()).toBeTruthy()
  }
});

Then('each page except the last should display exactly {string} records', async function (this: glitchworld, noOfDatas: string) {
  await expect(await this.courseManagementPage.isDataCountSatisfied()).toBeTruthy()
});

Then("the page should display up to 8 courses",async function (this: glitchworld) {
    const courseCount = await this.courseManagementPage.getDataCount();
    expect(courseCount).toBeLessThanOrEqual(8);
  }
)