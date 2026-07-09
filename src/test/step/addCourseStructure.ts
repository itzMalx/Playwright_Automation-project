import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber'
import { glitchworld } from '../world/customworld';
import { logger } from '../../utilities/logger';
import courseStructure from '../../test-data/addCourseStructure.json'
import path from "path";
import fs from "fs";

Given('Admin on the Dashboard Page after Login', async function (this: glitchworld) {
    await this.login.navigate()
    await this.login.loginSite()
    logger.info("Login successfull!")
});

Given('Admin navigate to Course Management Page', async function (this: glitchworld) {
    await this.dashboardPage.naviagateToCourse()
    logger.info("Navigate to Course Management page")

});

Given('Admin click add Course Structure for the {string}', async function (this: glitchworld, course: string) {
    logger.info("Course:", course);
    await this.courseManagementPage.selectActionList(course)
});

When('Admin clicks the Add Module icon', async function (this: glitchworld) {
    await this.pedagogyPage.module()
});

When('Admin enters the required module details', async function (this: glitchworld) {
    await this.pedagogyPage.fillTitle(courseStructure.title)
    logger.info("Added module:", courseStructure.title)
});

When('Admin clicks the Add Module button', async function (this: glitchworld) {
    await this.pedagogyPage.clickAddModule()
});

Then('the newly added module should be displayed in the Module table', async function (this: glitchworld) {
    const isModulePresent = await this.pedagogyPage.verifyModuleAdded(courseStructure.title);
    expect(isModulePresent).toBeTruthy();
});

Given('Admin clicks the Add Course Structure button for the course', async function (this: glitchworld) {
    this.courseManagementPage.selectActionList("Playwright")
});

Given('verifies that a course structure is present in the table', async function (this: glitchworld) {
    const hasRow = await this.pedagogyPage.tableRowCount()
    if (hasRow! > 0) {
        logger.info("Table has elements")
    }
});

When('Admin clicks the Print button', async function (this: glitchworld) {
    this.pedagogyPage.clickPrint()
});

When('selects the Excel export option', async function (this: glitchworld) {
    this.downloadPath = await this.pedagogyPage.downloadExcel(this.page);
})

Then('the Excel file should be downloaded', async function (this: glitchworld) {
    expect(fs.existsSync(this.downloadPath)).toBeTruthy();
});

Given('Admin clicks Add Course Structure for the {string}', async function (this: glitchworld,courseId:string) {
  await this.courseManagementPage.selectActionList(courseId)
});

When('Admin clicks the Add Module button without filling the mandatory field', async function (this: glitchworld) {
  await this.pedagogyPage.clickSave()
});

Then('an error message should be displayed', async function (this: glitchworld) {
  await expect(await this.pedagogyPage.errorMessage()).toContain("Title is required for module")
});

