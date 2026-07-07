import { BasePage } from "./basepage";
import { EnvReader } from "../../utilities/envreader";
import { readExcelData } from "../../utilities/excelreader";
import { LoginData } from "../type/LoginData";

export class LoginPage extends BasePage {
    private email = this.page.locator("//input[@id='email']");
    private password = this.page.locator("//input[@id='password']")
    private signinbtn = this.page.locator("//button[@type='submit']");
    private profilebtn = this.page.locator("//img[@alt='Testing course']");
    private checklogin = this.page.locator("//div[@class='flex items-center gap-1 mt-1']");
    private bothinvalid = this.page.locator("//div[@class='go3958317564']")
    private psinvalid = this.page.locator("//div[@class='go3958317564']")
    private unregemail = this.page.locator("//div[@class='go3958317564']");

    async navigate() {
        await this.page.goto(EnvReader.getBaseUrl())
    }

    async enteremail(email: string) {
        console.log("Email:", email);
        await this.fill(this.email, email)
    }
    async enterpassword(pass: string) {
        await this.fill(this.password, pass)
    }
    async clcksignin() {
        await this.click(this.signinbtn);
    }
    async getCurrentUrl() {
        return this.page.url();
    }
    async chckinvpass() {
        return this.getText(this.psinvalid);
    }
    async chckinvemail() {
        return this.getText(this.unregemail);
    }
    async checkloggedin() {
        return this.isVisible(this.profilebtn);
    }
    async checkbothinv() {
        return this.getText(this.bothinvalid);
    }

    async loginSite() {
        const data = readExcelData<LoginData>("src/test-data/logindata.xlsx", "Sheet1");
        const validUser = data.find(row => row.type === "valid")!;
        await this.fill(this.email, validUser.email);
        await this.fill(this.password, String(validUser.password));
        await this.click(this.signinbtn);
    }

}