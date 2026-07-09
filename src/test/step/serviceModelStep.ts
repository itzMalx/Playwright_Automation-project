import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { expect } from "@playwright/test";




Given('Admin navigates to the Course Management page', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickdynamic();
});

Given('the user clicks on the dynamic field Settings icon', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickdynamic();
});

Given('the user clicks on the Add Service button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickaddservice();
});

When('the user enters service name {string}', async function (this: glitchworld, string) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.enterserivename(string);
});

When('the user enters description {string}', async function (this: glitchworld, string) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.enterdesc(string);
});

When('the user clicks on the Create Service button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickcreateserv();
});

Then('the service should be created successfully', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.servicePage.checkservadded()).toBeTruthy();
});

Given('the user clicks on the Dynamic Field Settings icon', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickdynamic();
});

When('the user enters the following service details', async function (this: glitchworld, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  const data = dataTable.hashes()[0];
  await this.servicePage.enterserivename(data["Service Name"]);
  await this.servicePage.enterdesc(data["Description"]);
});

Then('the Description field should display the required field validation message', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  const actual = await this.servicePage.getDescriptionValidationMessage();
  expect(actual).toBe("Please fill out this field.")
});

Then('the Service Name field should display the required field validation message', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  const actual = await this.servicePage.getServiceNameValidationMessage();
  expect(actual).toBe("Please fill out this field.");
});