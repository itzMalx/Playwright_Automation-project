import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { ClientData } from "../type/ClientData";

const clientData=readData<ClientData>("src/test-data/ClientData.csv");

Given("the user navigated to the Client Modal", async function (this: glitchworld) {
    await this.dynamicFieldPage.clickClientmodel();
});

Given("the user opens the Add New Client dialog", async function (this: glitchworld) {
   await this.addClientPage.navigateToClientModel()
});

When("the user enters client details", async function (this: glitchworld) {
    const data=clientData[0];

    if(!data){
        throw new Error("No valid client row found in ClientData.csv");
    }

    await this.addClientPage.enterClientDetails(data.clientName,data.companyName,
        data.email,data.phoneNumber,data.description,data.companyAddress
    );
});

When("clicks the {string} button", async function (this: glitchworld, buttonName: string) {
    if (buttonName==="Add Client") {
        await this.addClientPage.clickAddClient();
    }
});

Then("the client should be added successfully", async function (this: glitchworld) {
    await this.addClientPage.verifyClientAddedSuccessfully();
});

