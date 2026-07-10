import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { ClientData } from "../type/ClientData";

const clientData = readData<ClientData>("test-data/clientData.csv");

Given("the user opens the Add New Client dialog", async function (this: glitchworld) {

    // Navigate to Add Client popup
});

When("the user enters client details", async function (this: glitchworld) {

    const data = clientData[0]!;

    await this.addClientPage.enterClientDetails(
        data.ClientName,
        data.CompanyName,
        data.Email,
        data.PhoneNumber,
        data.Description,
        data.CompanyAddress
    );
});

When('clicks the {string} button', async function (this: glitchworld, button: string) {

    if (button === "Add Client") {
        await this.addClientPage.clickAddClient();
    }
});

Then("the client should be added successfully", async function (this: glitchworld) {

    await this.addClientPage.verifyClientAddedSuccessfully();
});