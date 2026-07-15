import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { ClientData } from "../type/ClientData";

const clientData=readData<ClientData>("src/test-data/ClientData.csv");
let alreadyExistingClientCount: string;

Given("the user navigated to the Client Modal", async function (this: glitchworld) {
    await this.dynamicFieldPage.clickClientmodel();
    alreadyExistingClientCount=(await this.addClientPage.getClientCount()) ?? "";
});

Given("the user opens the Add New Client dialog", async function (this: glitchworld) {
    await this.addClientPage.navigateToClientModel();
});

When("the user enters client details", async function (this: glitchworld) {
    const data = clientData[0];
    if (!data) throw new Error("Valid client row (index 0) not found in ClientData.csv");

    await this.addClientPage.enterClientDetails(
        data.clientName, data.companyName,
        data.email,data.phoneNumber, data.description, data.companyAddress
    );
});

When("the user enters client details with an existing email address", async function (this: glitchworld) {
    const data=clientData[0];
    if (!data) {
        throw new Error("Valid client row (index 0) not found in ClientData.csv");
    }

    await this.addClientPage.enterClientDetails(
        data.clientName, data.companyName,
        data.email,data.phoneNumber, data.description, data.companyAddress
    );
});

When("the user leaves one or more mandatory fields empty", async function (this: glitchworld) {
    const data=clientData[1];
    if (!data) {
        throw new Error("No data found");
    }
    await this.addClientPage.enterClientDetails(
        data.clientName, data.companyName,data.email, data.phoneNumber, data.description, data.companyAddress
    );
});

When("clicks the {string} button", async function (this: glitchworld, buttonName: string) {
    if (buttonName==="Add Client") {
        await this.addClientPage.clickAddClient();
    } else if (buttonName==="Cancel") {
        await this.addClientPage.clickCancel();
    }
    else{
        throw new Error("Invalid button");
    }
});

Then("the client should be added successfully", async function (this: glitchworld) {
    await this.addClientPage.verifyClientAddedSuccessfully();
});

Then("the client should not be added", async function (this: glitchworld) {
    const currentCount=(await this.addClientPage.getClientCount()) ?? "";
    expect(currentCount).toEqual(alreadyExistingClientCount);
});

Then("appropriate validation messages should be displayed", async function (this: glitchworld) {
    expect(await this.addClientPage.isFormVisible()).toBeTruthy();
});

Then("an appropriate duplicate email validation message should be displayed", async function (this: glitchworld) {
    expect(await this.addClientPage.isFormVisible()).toBeTruthy();
});

Then("the Add New Client dialog should be closed", async function (this: glitchworld) {
    expect(await this.addClientPage.isFormVisible()).toBeFalsy();
});