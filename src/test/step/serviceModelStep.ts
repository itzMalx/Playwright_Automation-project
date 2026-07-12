import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { expect } from "@playwright/test";
import { logger } from "../../utilities/logger";

Given('Admin navigates to the Course Management page', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("navigate to dynamic settings")
  await this.servicePage.clickdynamic();
});

Given('the user clicks on the Dynamic Field Settings icon', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("clicking dynamic settings")
  await this.servicePage.clickdynamic();
});

Given('the user clicks on the Add Service button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("clicking add service button")
  await this.servicePage.clickaddservice();
});

When('the user enters service name {string}', async function (this: glitchworld, serviceName: string) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("entering the service name")
  await this.servicePage.enterserivename(serviceName);
});

When('the user enters description {string}', async function (this: glitchworld, description: string) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("entering the service description")
  await this.servicePage.enterdesc(description);
});

When('the user clicks on the Create Service button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("clicking the create service button")
  await this.servicePage.clickcreateserv();
});

Then('the service should be created successfully', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("service created")
  await expect(this.servicePage.checkservadded()).toBeTruthy();
});

Then('{string} field should display the required field validation message',async function (this: glitchworld, field: string) {
  // Write code here that turns the phrase above into concrete actions
  logger.info("service data added message is displaying")
    let actual: string;

    switch (field) {
      case "Service Name":
        actual = await this.servicePage.getsernameerr();
        break;

      case "Description":
        actual = await this.servicePage.getdeserror();
        break;

      default:
        throw new Error(`Unknown field: ${field}`);
    }
    expect(actual).toBe("Please fill out this field.");
  }
);