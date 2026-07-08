import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readExcelData } from '../../utilities/excelreader'
import { LoginData } from '../type/LoginData'
import { expect } from "@playwright/test";
import { messages } from "../../../constants/messages";

Given('the user is on the login page of the LMS smartcliff website', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    this.login.navigate();
});

When('the user enters the login credentials', async function (this: glitchworld) {

    const data = readExcelData<LoginData>("src/test-data/logindata.xlsx","Sheet1");

    const typeMap: Record<string, string> = {
        "@Validlogin": "valid",
        "@Invalidpassword": "psinvalid",
        "@Invalidcredentials": "bothinvalid",
        "@Unregisteredemail": "emailinvalid"
    };
    const loginData = data.find((row: LoginData) => row.type === typeMap[this.tag])!;
    if (!loginData) {
        throw new Error(`No test data found for tag: ${this.tag}`);
    }
    await this.login.enteremail(loginData.email);
    await this.login.enterpassword(String(loginData.password));
});

When('the user clicks the signin button', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    await this.login.clcksignin();
});

Then('the user should be logged in successfully', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.waitForURL("**/lms/pages/admindashboard");
    expect(await this.login.getCurrentUrl()).toContain("/lms/pages/admindashboard");
});

Then('the user should see an invalid credentials error message', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    const actual = await this.login.chckinvpass();
    expect(actual).toBe(messages.invalid_password);
});

Then('the user should see an invalid password error message', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    const actual = await this.login.checkbothinv();
    expect(actual).toBe(messages.both_invalid);
});

Then('the user should see an invalid credentials error message popup', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    const actual = await this.login.chckinvemail();
    expect(actual).toBe(messages.invalid_email);
});