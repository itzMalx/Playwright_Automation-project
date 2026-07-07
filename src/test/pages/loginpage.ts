import { Basepage } from "./basepage";
import { EnvReader } from "../../utilities/envreader";

export class LoginPage extends Basepage {
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

}