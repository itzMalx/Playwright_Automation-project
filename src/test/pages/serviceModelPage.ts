import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class SeriveModelPage extends BasePage {
    private dynamicicon = this.page.locator("//div[@title='Dynamic Field Settings']");
    private addservice = this.page.getByRole("button", { name: "Add Service" });
    private servicename = this.page.locator("//input[@placeholder=\"e.g., 'Software Development'\"]");
    private desc = this.page.locator("//textarea[@placeholder='Describe the service...']");
    private createserv = this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//child::button[2]")
    private servicenameerr = this.page.locator("//div[@class='relative']//child::input");
    private descerr = this.page.locator("//div[@class='flex items-center gap-1']//following-sibling::textarea");
    private successToast = this.page.locator(".Toastify__toast--success");
    private successMessage = this.page.getByText("Service created successfully");
    private successAlert = this.page.getByRole("alert");

    async clickdynamic() {
        await this.dynamicicon.waitFor({ state: "visible" });
        await this.click(this.dynamicicon);
    }

    async clickaddservice() {
        await expect(this.addservice).toBeEnabled({ timeout: 30000 });
        await this.addservice.click();
    }

    async enterserivename(name: string) {
        await this.servicename.fill(name);
    }

    async enterdesc(description: string) {
        await this.desc.fill(description);
    }

    async clickcreateserv() {
        await this.createserv.waitFor({ state: "visible" });
        await this.createserv.click();
    }

    async checkservadded() {
        if (await this.successToast.isVisible().catch(() => false))
            return true;
        if (await this.successMessage.isVisible().catch(() => false))
            return true;
        if (await this.successAlert.isVisible().catch(() => false))
            return true;
        return false;
    }
    async getServiceNameValidationMessage() {
        return await this.servicenameerr.evaluate(
            (element: HTMLInputElement) => element.validationMessage
        );
    }
    async getDescriptionValidationMessage() {
        return await this.descerr.evaluate(
            (element: HTMLTextAreaElement) => element.validationMessage
        );
    }


}