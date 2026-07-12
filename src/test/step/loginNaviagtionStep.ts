import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";
import { logger } from "../../utilities/logger";

Given('the user launches the SmartCliff application',async function (this: glitchworld) {
        // Write code here that turns the phrase above into concrete actions
        logger.info("Launching the SmartCliff application");
        await this.login.navigate();
    }
);

Given('the user is on the Login page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying that the user is on the Login page");
        await expect(this.page).toHaveURL(/login/i);
    }
);

When('the user clicks the {string} button on the Login page',async function (this: glitchworld, button: string) {
    // Write code here that turns the phrase above into concrete actions
        logger.info(`Clicking the "${button}" button`);
        if (button === "Sign in with Google") {
            await this.loginnav.clickSignInWithGoogle();
        }
    }
);

Then('the user should be redirected to the Google authentication page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying redirection to the Google authentication page");
         await expect(this.page).toHaveURL(/google\.com/i);
    }
);

When('the user clicks the {string} link',async function (this: glitchworld, link: string) {
    // Write code here that turns the phrase above into concrete actions
        logger.info(`Clicking the "${link}" link`);
        if (link === "Forgot Password?") {
            await this.loginnav.clickForgotPassword();
        }
    }
);

Then('the user should be redirected to the Forgot Password page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying redirection to the Forgot Password page");
        await expect(this.page).toHaveURL(/forgot-password/);

    }
);

When('the user clicks the Facebook icon',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Clicking the Facebook icon");
        await this.loginnav.clickFacebook();
    }
);

Then('the user should be redirected to the official Facebook page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying redirection to the official Facebook page");
        await expect(this.page).toHaveURL(/facebook\.com/i);
    }
);

When('the user clicks the YouTube icon',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Clicking the YouTube icon");
        await this.loginnav.clickYouTube();
       
    }
);

Then('the user should be redirected to the official YouTube page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying redirection to the official YouTube page");
         await expect(this.page).toHaveURL(/youtube\.com/i);
    }
);

When('the user clicks the TikTok icon',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Clicking the TikTok icon");
        await this.loginnav.clickTikTok();
    }
);

Then('the user should be redirected to the official TikTok page',async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
        logger.info("Verifying redirection to the official TikTok page");
        await expect(this.page).toHaveURL(/tiktok\.com/i);
    }
);