import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readJsonData } from "../../utilities/jsonreader";
import { ModelData } from "../type/ModelData";
import { expect } from "@playwright/test";

const servdata =readJsonData<Record<string, ModelData>>("serviceModel.json");
interface ServiceData {
    serviceName: string;
}
Given('the user is logged into the LMS SmartCliff website', async function (this: glitchworld) {
  await this.login.navigate();
  await this.login.loginSite();
  await expect(this.page).toHaveURL(/admindashboard/, { timeout: 60000 });
});

Then('the user clicks on the dynamic field settings icon', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.servicePage.clickdynamic();
});

Then('user clicks on the Service Model link in the Business to Institution Service', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addmodel.enterclicktoview();
});

Then('user clicks on the Add Model button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addmodel.clickaddtomod();
});

When('user enters {string} details', async function (this: glitchworld, datakey: string) {
  // Write code here that turns the phrase above into concrete actions
  const data = servdata[datakey];

  if (!data) {
    throw Error(`No test found ${datakey}`);
  }

  await this.addmodel.entermodelname(data.modelName);
  await this.addmodel.entermoddesc(data.description);
});

When('user clicks on the Create Model button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addmodel.clickcreatemod();
});

Then('user should be able to see the created model in the page', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  const msg = await this.addmodel.checkstored();
  expect(msg).toContain("Automation Testing");
});

When('user searches the service', async function (this: glitchworld, dataTable: DataTable) {
    // Write code here that turns the phrase above into concrete actions

    const data = dataTable.hashes()[0];

    if (!data || !data.serviceName) {
        throw new Error("Service name not found in DataTable");
    }

    await this.modelSearchPage.enterservice(data.serviceName);
});

Then('user should be able to see the searched service', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  const service = await this.modelSearchPage.check();
  expect(service).toContain("Glitch_Guardians_Muhindhar");
});

When('user clicks on the searched service', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.modelSearchPage.clickthelink();
});