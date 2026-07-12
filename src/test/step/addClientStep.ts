import { AddClientPage } from './../pages/addClientModalPage';
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { ClientData } from "../type/ClientData";

const clientData=readData<ClientData>("src/test-data/ClientData.csv");
let alreadyExistingClientCount: any;

Given("the user navigated to the Client Modal", async function (this: glitchworld) {
    await this.dynamicFieldPage.clickClientmodel();
    alreadyExistingClientCount=await this.addClientPage.getClientCount();
});

Given("the user opens the Add New Client dialog", async function (this: glitchworld) {
   await this.addClientPage.navigateToClientModel()
});

When("the user enters client details", async function (this: glitchworld) {
    const data=clientData[0];

    if(!data){
        throw new Error("Data is undefined ");
    }
    await this.addClientPage.enterClientDetails(data.clientName,data.companyName,
        data.email,data.phoneNumber,data.description,data.companyAddress);
});

When("clicks the {string} button", async function (this: glitchworld, buttonName: string) {
    if (buttonName==="Add Client") {
        await this.addClientPage.clickAddClient();
    }
    else if(buttonName==="Close"){
        await this.addClientPage.clickCancel();
    }
});

Then("the client should be added successfully", async function (this: glitchworld) {
    await this.addClientPage.verifyClientAddedSuccessfully();
});

When('the user leaves one or more mandatory fields empty', async function (this: glitchworld) {
    const data=clientData[0];

    if(!data){
        throw new Error("Data is undefined ");
    }
    await this.addClientPage.enterClientDetails(data.clientName,data.companyName,
        data.email,data.phoneNumber,data.description ,data.companyAddress);
});

Then('the client should not be added', async function (this: glitchworld) {
    await expect(this.page.locator("")).toBeVisible()
});

Then('appropriate validation messages should be displayed', async function (this: glitchworld) {
    await expect(this.page.locator("")).toBeVisible()
});


Then("the Add New Client dialog should be closed",async function (this: glitchworld) {
    await expect(await this.addClientPage.isFormVisible()).toBeFalsy()
    }
);

Then("the client should not be added",async function (this: glitchworld) {
    await expect(await this.addClientPage.getClientCount(),alreadyExistingClientCount).toBeTruthy()
    }
);
