import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber'
import { glitchworld } from '../world/customworld';
import {logger} from '../../utilities/logger';

Given('Admin on the Dashboard Page after Login', async function (this: glitchworld) {
    await this.login.navigate()
    await this.login.loginSite()
    logger.info("Login successfull!")
    console.log("Login success!")
});

Given('Admin navigate to Course Management Page', async function (this: glitchworld) {
    await this.dashboardPage.naviagateToCourse()  
    logger.info("Navigate to Course Management page")

});

Given('Admin click add Course Structure for the {string}', async function (this: glitchworld, course: string) {
    console.log("Course:", course);
    await this.courseManagementPage.selectActionList(course)
});

When('Admin clicks the Add Module icon', async function (this: glitchworld) {
    await this.pedagogyPage.module()
});

When('Admin enters the required module details', async function (this: glitchworld) {
    await this.pedagogyPage.fillTitle("Testing")
});

When('Admin clicks the Add Module button', async function (this: glitchworld) {
    await this.pedagogyPage.clickAddModule() 
});

Then('the newly added module should be displayed in the Module table', async function (this: glitchworld) {
    const isModulePresent = await this.pedagogyPage.verifyModuleAdded("Testing");
    await expect(isModulePresent).toBeTruthy();

});
