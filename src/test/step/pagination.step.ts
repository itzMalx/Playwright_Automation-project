import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";

let currentPage: number;

Given('the user is on the Course Structure page', async function (this: glitchworld) {
    await this.courseManagementPage.navigateToCourseStructurePage();

});

Given('the user is on the first page of the Course Structure table', async function (this: glitchworld) {
    const activePage = await this.courseManagementPage.getActivePageNumber();
    expect(activePage).toBe("1");
    currentPage=Number(activePage);

});

Given('the user is on the Course Structure table', async function (this: glitchworld) {
    const activePage = await this.courseManagementPage.getActivePageNumber();
    expect(activePage).not.toBe("");
});

When('the user clicks the {string} button', async function (this: glitchworld, buttonName: string) {
    if (buttonName==="Next") {
        await this.courseManagementPage.clickNext();
    }
    else if (buttonName==="Previous") {
        await this.courseManagementPage.clickPrevious();
    }
});

When('the user clicks page number {string}', async function (this: glitchworld, pageNo: string) {
    await this.courseManagementPage.clickPageNumber(pageNo);
});

Then('the user should be navigated to the next page', async function (this: glitchworld) {
    const activePage=await this.courseManagementPage.getActivePageNumber();
    expect(Number(activePage)).toBe(currentPage + 1);

});

Then('the user should be navigated to page {string}', async function (this: glitchworld, pageNo: string) {
    const activePage=await this.courseManagementPage.getActivePageNumber();
    expect(activePage).toBe(pageNo);
});