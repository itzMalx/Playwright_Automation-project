import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readExcelData } from '../../utilities/excelreader'
import { LoginData } from '../type/LoginData'
import { expect } from "@playwright/test";
import { messages } from "../../../constants/messages";

Given('the user is on the login page of the LMS smartcliff website', async function (this: glitchworld) {

    await this.login.navigate();
});

When('the user enters the login credentials', async function (this: glitchworld) {
    const data = readExcelData<LoginData>("src/test-data/logindata.xlsx", "Sheet1");

    const typeMap: Record<string, string> = {"@Validlogin": "valid","@Invalidpassword": "psinvalid",
        "@Invalidcredentials": "bothinvalid",
        "@Unregisteredemail": "emailinvalid"
    };
    const loginType = typeMap[this.tag] ?? "valid";
    const loginData = data.find(
        (row: LoginData) => row.type === loginType
    );
    if (!loginData) {
        throw new Error(`No test data found for login type: ${loginType}`);
    }
    await this.login.enteremail(loginData.email);
    await this.login.enterpassword(String(loginData.password));
});

When('the user clicks the signin button', async function (this: glitchworld) {
    await this.login.clcksignin();
    console.log("Current URL after Sign In:", this.page.url());
});

Then('the user should be logged in successfully', async function (this: glitchworld) {
    await expect(this.page).toHaveURL(/admindashboard/, {timeout: 30000});
    console.log("Logged in URL:", this.page.url());
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
    const actual = await this.login.chckinvemail();
    expect(actual).toBe(messages.invalid_email);
});

When('the user logs in with valid LMS credentials', async function (this: glitchworld) {
    const data = readExcelData<LoginData>("src/test-data/logindata.xlsx", "Sheet1");
    const loginData = data.find((row: LoginData) => row.type === "valid");

    if (!loginData) {
        throw new Error("Valid login data not found in Excel");
    }

    await this.login.enteremail(loginData.email);
    await this.login.enterpassword(String(loginData.password));
    await this.login.clcksignin();
});