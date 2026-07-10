import { PedagogyPage } from './../pages/pedagogyPage';
import { DynamicFieldPage } from './../pages/dynamicFieldPage';
import { Given, When, Then } from '@cucumber/cucumber'
import { glitchworld } from '../world/customworld'
import { expect } from '@playwright/test'
import { logger } from '../../utilities/logger';
import { readExcelData } from "../../utilities/excelreader";
import path from "path";

const filePath = path.join(process.cwd(), "src/test-data/pedagogy.xlsx");
interface PedagogyData {
  ActivityName: string;
}

let activities: PedagogyData[] = [];


Given('Admin is on the Dashboard page after login', async function () {
  await this.login.navigate()
  await this.login.loginSite()
  logger.info("Login successfull!")
});

Given('user clicks the Dynamic Field Settings icon', async function () {
  await this.dynamicFieldPage.clickDynamicfield()
  logger.info("Navigated to Dynamic Field Setting page")
});

Given('user clicks the Pedagogy button', async function () {
  await this.dynamicFieldPage.clickPedagogy()
  logger.info("Click Pedagogy")
});

When('user clicks the View button in the {string} row', async function (Activity: string) {
  await this.pedagogyPage.selectActivity(Activity)
  logger.info(`Click to view to button for ${Activity}`)
});

When('user clicks the Add Element button', async function () {
  await this.pedagogyPage.clickAddElement()
  logger.info("Click Add Element button")
});

When('user enters {string} as the element name', async function (ElementName: string) {
  await this.pedagogyPage.enterElementName(ElementName)
  logger.info(`Entered Element name is ${ElementName}`)
});

When('user clicks the Create Element button', async function () {
  await this.pedagogyPage.clickCreateElement()
  logger.info("Clicked create element button")
});

Then('{string} should be displayed in the activity list', async function (ElementName: string) {
  expect(await this.pedagogyPage.verifyElementPresent(ElementName)).toBeTruthy()
  logger.info(`The ${ElementName} is displayed in the table`)
});

When('user enters activity in the activity search field', async function () {
  activities = readExcelData<PedagogyData>(filePath, "Pedagogy");
  const activity = activities[0]!.ActivityName;
  logger.info(`Searching: ${activity}`);
  await this.pedagogyPage.searchActivity(activity);
});

Then('only the matching activity should be displayed in the table', async function () {
  const activity = activities[0]!.ActivityName;
  expect(await this.pedagogyPage.verifySearchResult(activity)).toBeTruthy();
});