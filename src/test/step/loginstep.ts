import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader";
import { LoginData } from "../type/LoginData";
import { expect } from "@playwright/test";
import { logger } from "../../utilities/logger";


Given('the user is on the login page of the LMS smartcliff website', async function (this: glitchworld) {
    logger.info("going to lms site ")
    // Write code here that turns the phrase above into concrete actions
    await this.login.navigate();
});

When('the user enters the login credentials {string}', async function (this: glitchworld,type: string) {
    // Write code here that turns the phrase above into concrete actions
    logger.info("entering username and password")
    const data = readData<LoginData>("src/test-data/logindata.csv");
    const loginData = data.find(row => row.type === type);
    if (!loginData) {
        throw new Error(`No data found for ${type}`);
    }
    await this.login.enteremail(loginData.email);
    await this.login.enterpassword(String(loginData.password));
});

When('the user clicks the signin button', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    logger.info("user clicks on the signin button")
    await this.login.clcksignin();
});

Then('the user should be logged in successfully', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    try {
        logger.info("logging in to the site ")
        await expect(this.page).toHaveURL(/admindashboard/, {timeout: 60000});
    } catch (error) {
        logger.error("Failed")
        throw Error
    }   
    
});

Then('the login result should be verified {string}', async function (this: glitchworld,type: string) {
    // Write code here that turns the phrase above into concrete actions
    if (type==="valid") {
        await expect(this.page).toHaveURL(/admindashboard/, { timeout: 30000 });
    } else {
        await expect(this.page).toHaveURL(/login/, { timeout: 30000 });
    }
});

When('the user logs in with valid LMS credentials', async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    const data = readData<LoginData>("src/test-data/logindata.csv");
    const validUser = data.find(row => row.type === "valid");
    if (!validUser) {
        throw new Error("Valid user not found");
    }
    await this.login.enteremail(validUser.email);
    await this.login.enterpassword(String(validUser.password));
    await this.login.clcksignin();
});