import { Basepage } from "./basepage";
import { EnvReader } from "../../utilities/envreader";
import { readExcelData } from "../../utilities/excelreader";
import { LoginData } from "../type/LoginData";
import { logger } from "../../utilities/logger";

export class LoginPage extends Basepage {

    private email = this.page.locator("//input[@id='email']");
    private password = this.page.locator("//input[@id='password']");
    private signinbtn = this.page.locator("//button[@type='submit']");
    private profilebtn = this.page.locator("//img[@alt='Testing course']");
    private checklogin = this.page.locator("//div[@class='flex items-center gap-1 mt-1']");
    private bothinvalid = this.page.locator("//div[@class='go3958317564']");
    private psinvalid = this.page.locator("//div[@class='go3958317564']");
    private unregemail = this.page.locator("//div[@class='go3958317564']");

    async navigate() {
        try {
            logger.info("Navigating to LMS SmartCliff Login Page");
            await this.page.goto(EnvReader.getBaseUrl());
        } catch (error) {
            logger.error(`Failed to navigate to login page: ${error}`);
            throw error;
        }
    }

    async enteremail(email: string) {
        try {
            logger.info(`Entering email: ${email}`);
            await this.fill(this.email, email);
        } catch (error) {
            logger.error(`Failed to enter email: ${error}`);
            throw error;
        }
    }

    async enterpassword(pass: string) {
        try {
            logger.info("Entering password");
            await this.fill(this.password, pass);
        } catch (error) {
            logger.error(`Failed to enter password: ${error}`);
            throw error;
        }
    }

    async clcksignin() {
        try {
            logger.info("Clicking Sign In button");
            await this.click(this.signinbtn);
        } catch (error) {
            logger.error(`Failed to click Sign In button: ${error}`);
            throw error;
        }
    }

    async getCurrentUrl() {
        try {
            logger.info("Fetching current URL");
            return this.page.url();
        } catch (error) {
            logger.error(`Failed to fetch current URL: ${error}`);
            throw error;
        }
    }

    async chckinvpass() {
        try {
            logger.info("Validating invalid password message");
            return await this.getText(this.psinvalid);
        } catch (error) {
            logger.error(`Failed to fetch invalid password message: ${error}`);
            throw error;
        }
    }

    async chckinvemail() {
        try {
            logger.info("Validating invalid email message");
            return await this.getText(this.unregemail);
        } catch (error) {
            logger.error(`Failed to fetch invalid email message: ${error}`);
            throw error;
        }
    }

    async checkloggedin() {
        try {
            logger.info("Verifying successful login");
            return await this.isVisible(this.checklogin);
            // or use profilebtn if that's the correct locator
        } catch (error) {
            logger.error(`Failed to verify login: ${error}`);
            throw error;
        }
    }

    async checkbothinv() {
        try {
            logger.info("Validating invalid credentials message");
            return await this.getText(this.bothinvalid);
        } catch (error) {
            logger.error(`Failed to fetch invalid credentials message: ${error}`);
            throw error;
        }
    }

    async loginSite() {
        try {
            logger.info("Logging in with valid credentials");

            const data = readExcelData<LoginData>(
                "src/test-data/logindata.xlsx",
                "Sheet1"
            );

            const validUser = data.find(row => row.type === "valid")!;

            await this.fill(this.email, validUser.email);
            await this.fill(this.password, String(validUser.password));
            await this.click(this.signinbtn);

            logger.info("Login completed successfully");
        } catch (error) {
            logger.error(`Login failed: ${error}`);
            throw error;
        }
    }
}