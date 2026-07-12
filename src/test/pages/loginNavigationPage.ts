import { logger } from "../../utilities/logger";
import { BasePage } from "./basepage";

export class LoginNavigationPage extends BasePage {

    private readonly forgotPassword = this.page.getByRole('link', { name: 'Forgot Password?' });
    private readonly signInWithGoogle = this.page.getByRole('button', { name: 'Sign in with Google' });
    private readonly signUp = this.page.getByRole('link', { name: 'Sign Up' });

    private readonly facebook = this.page.locator(".sc-socials a").nth(0);
    private readonly youtube = this.page.locator(".sc-socials a").nth(1);
    private readonly tiktok = this.page.locator(".sc-socials a").nth(2);

    async clickSignInWithGoogle() {
        logger.info("Clicking the Sign in with Google button");
        await this.click(this.signInWithGoogle);
    }

    async clickForgotPassword() {
        logger.info("Clicking the Forgot Password link");
        await this.click(this.forgotPassword);
    }

    async clickSignUp() {
        logger.info("Clicking the Sign Up link");
        await this.click(this.signUp);
    }

    async clickFacebook() {
        logger.info("Clicking the Facebook icon");
        await this.click(this.facebook);
    }

    async clickYouTube() {
        logger.info("Clicking the YouTube icon");
        await this.click(this.youtube);
    }

    async clickTikTok() {
        logger.info("Clicking the TikTok icon");
        await this.click(this.tiktok);
    }
}