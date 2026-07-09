import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class ModelSearchPage extends BasePage {
    readonly searchbar = this.page.getByRole('textbox', { name: 'Search services...' });
    readonly clicklink = this.page.getByText('Click to view');
    readonly checkservice = this.page.getByText('Glitch_Guardians_Muhindhar', { exact: true });
    async enterservice(service: string) {
        console.log("URL:", this.page.url());

        console.log(
            "Disabled:",
            await this.searchbar.isDisabled()
        );

        console.log(
            "Add Service Enabled:",
            await this.page
                .getByRole("button", { name: "Add Service" })
                .isEnabled()
        );

        await this.searchbar.fill(service);
    }


    async clickthelink() {
        const count = await this.clicklink.count();
        console.log("Click to view count:", count);
        await this.clicklink.first().click();
    }

    async check() {
        return await this.getText(this.checkservice)
    }

    async verifyService(serviceName: string) {
        await expect(this.page.getByText(serviceName)).toBeVisible();
    }

}