import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { expect } from "@playwright/test";
import { readData } from "../../utilities/csvreader";
import { CousrseCategoryData } from "../type/CourseCategoryData";
Given('Admin is navigating to the dynamic field settings page', async function (this: glitchworld) {

    await this.dynamicFieldPage.clickDynamicfield();
});

Given('user selects course category', async function (this: glitchworld) {

    await this.dynamicFieldPage.clickCouresecategory();
});

When('Admin clicks the Add Category button', async function (this: glitchworld) {

    await this.courseCategoryPage.clickAddCategoryBtn();
});

When('Admin enters {string} {string} {string}', async function (this: glitchworld,categoryName: string,courseName: string,description: string) {

    if(categoryName===""){
        await this.courseCategoryPage.enterCategoryName(categoryName);
    }
    else{
        await this.courseCategoryPage.enterCategoryName(categoryName+Date.now());
    }
    
    await this.courseCategoryPage.enterCourseName(courseName+Date.now());
    await this.courseCategoryPage.enterCategoryDescription(description+Date.now());
    
});

When('Admin clicks the Create Category button', async function (this: glitchworld) {

    await this.courseCategoryPage.clickCreateCategoryBtn();
});

Then('Admin should see {string}', async function (this: glitchworld, message: string) {

    let actual: string | null;

    if (message === "Please fill out this field.") {
        actual = await this.courseCategoryPage.getValidationMsg();
    } else {
        actual = await this.courseCategoryPage.getMessage(message);
    }

    expect(actual).toContain(message);
});
  When('Admin searches the course category using csv data', async function (this: glitchworld) {
   const data = readData<CousrseCategoryData>("src/test-data/CourseCategory.csv");

    const searchData = data.find(row => row.type === "valid");

    if (!searchData) {
        throw new Error(`No data found `);
    }

    await this.courseCategoryPage.searchCategory(searchData.searchValue);
    
});

Then('Matching course category should be displayed', async function (this: glitchworld) {
    
    const data = readData<CousrseCategoryData>("src/test-data/CourseCategory.csv");

    const searchData = data.find(row => row.type === "valid");

    if (!searchData) {
        throw new Error("No data found");
    }

    const result = await this.courseCategoryPage.getSearchResult(searchData.searchValue);

    await expect(result).toBeVisible();
    
});