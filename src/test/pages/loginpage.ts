import { BasePage } from "./basepage";
import { EnvReader } from "../../utilities/envreader";
import { readExcelData } from "../../utilities/excelreader";
import { LoginData } from "../type/LoginData";
import { logger } from "../../utilities/logger";
import { expect, Page } from "@playwright/test";
import { readData } from "../../utilities/csvreader";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private email = this.page.locator("//input[@id='email']");
    private password = this.page.locator("//input[@id='password']");
    private signinbtn = this.page.locator("//button[@type='submit']");
    private checklogin = this.page.locator("//div[@class='flex items-center gap-1 mt-1']");
    private bothinvalid = this.page.locator('[role="status"]');
    private psinvalid = this.page.getByText("Password is incorrect");
    private unregemail = this.page.locator("[role='status']");

    async navigate() {
        logger.info("Navigating to LMS SmartCliff Login Page");
        await this.page.goto(EnvReader.getBaseUrl());
    }

    async enteremail(email: string) {
        logger.info(`Entering email: ${email}`);
        await this.fill(this.email, email);
    }

    async enterpassword(pass: string) {
        logger.info("Entering password");
        await this.fill(this.password, pass);
    }

    // async clcksignin() {
    //     logger.info("Clicking Sign In button");
    //     await this.signinbtn.click();
    //     await this.page.waitForURL(/admindashboard|login/,{ timeout: 30000 });
    //     await this.page.waitForLoadState("domcontentloaded");
    // }
    async clcksignin() {
        logger.info("Clicking Sign In button");
        await this.signinbtn.click();

        await this.page.waitForTimeout(1000);

        console.log(await this.page.locator("body").textContent());
    }

    async getCurrentUrl() {
        logger.info("Fetching current URL");
        return this.page.url();
    }

    // async chckinvpass() {
    //     logger.info("Validating invalid password message");
    //     return await this.getText(this.psinvalid);
    // }
    async chckinvpass() {
        await expect(this.psinvalid).toBeVisible({ timeout: 10000 });
        return await this.getText(this.psinvalid);
    }

    async chckinvemail() {
        logger.info("Validating invalid email message");
        return await this.getText(this.unregemail);
    }

    async checkloggedin() {
        logger.info("Verifying successful login");
        return await this.isVisible(this.checklogin);
    }

 async checkbothinv() {
    logger.info("Validating invalid credentials message");
    return await this.getText(this.bothinvalid);
}

async loginSite() {

    const data = readData<LoginData>(
        "src/test-data/logindata.csv"
    );

    const validUser = data.find(row => row.type === "valid");

    if (!validUser) {
        throw new Error("No valid user found");
    }

    await this.enteremail(validUser.email);
    await this.enterpassword(String(validUser.password));
    await this.click(this.signinbtn);
}

async passwordinvalid() {
    logger.info("Validating invalid password message");
    return await this.getText(this.psinvalid);
}
}