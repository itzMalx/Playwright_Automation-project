// import { BasePage } from "./basepage";
// import { expect } from "@playwright/test";

// export class SeriveModelPage extends BasePage {
//     private dynamicicon = this.page.locator("//div[@title='Dynamic Field Settings']");
//     private addservice = this.page.locator("//button[text()='Add Service']");
//     private servicename = this.page.locator("//div[@class='relative']//child::input");
//     private desc = this.page.locator("//div[@class='flex items-center gap-1']//following-sibling::textarea");
//     private createserv = this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//child::button[2]");
//    // private addedservice = this.page.locator("//div[@class='Toastify__toast Toastify__toast-theme--light Toastify__toast--success Toastify__toast--close-on-click']");
//     private addedservice = this.page.getByRole("button", { name: "Add Service" });
//     private pagebtn = this.page.locator("//span[@class='text-xs text-gray-600']//following-sibling::button");
//     private table = this.page.locator("//div[@class='overflow-y-auto']");
//     private servicenameerr = this.page.locator("//div[@class='relative']//child::input");
//     private descerr = this.page.locator("//div[@class='flex items-center gap-1']//following-sibling::textarea");

// async clickdynamic() {
//     await this.click(this.dynamicicon);
//     await expect(this.addservice).toBeVisible();
//     await expect(this.addservice).toBeEnabled();
// }
//     async clickaddservice() {
//         await this.click(this.addservice);
//     }
//     async enterserivename(name: string) {
//         await this.fill(this.servicename, name);
//     }
//     async enterdesc(description: string) {
//         await this.fill(this.desc, description);
//     }
//     async clickcreateserv() {
//         await this.click(this.createserv);
//     }
//     async checkservadded() {
//         return await this.isVisible(this.addedservice);
//     }
//     async getServiceNameValidationMessage() {
//     return await this.servicenameerr.evaluate(
//         (element: HTMLInputElement) => element.validationMessage
//     );
// }

// async getDescriptionValidationMessage() {
//     return await this.descerr.evaluate(
//         (element: HTMLTextAreaElement) => element.validationMessage
//     );
// }
// }

import { expect, Locator } from "@playwright/test";
import { BasePage } from "./basepage";

export class SeriveModelPage extends BasePage {

    private dynamicicon = this.page.locator("//div[@title='Dynamic Field Settings']");

    private addservice = this.page.getByRole("button", { name: "Add Service" });

    private servicename = this.page.locator("//input[@placeholder=\"e.g., 'Software Development'\"]");

    private desc = this.page.locator("//textarea[@placeholder='Describe the service...']");

    private createserv = this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//child::button[2]")
    private addedservice = this.page.locator(".Toastify__toast--success");
    private servicenameerr = this.page.locator("//div[@class='relative']//child::input");
    private descerr = this.page.locator("//div[@class='flex items-center gap-1']//following-sibling::textarea");
    private successToast = this.page.locator(".Toastify__toast--success");

    private successMessage = this.page.getByText("Service created successfully");

    private successAlert = this.page.getByRole("alert");

    async clickdynamic() {
        console.log("Dynamic Icon Count:", await this.dynamicicon.count());
        console.log("Add Service Count:", await this.addservice.count());
        await this.dynamicicon.waitFor({ state: "visible" });
        await this.dynamicicon.click();
    }

    async clickaddservice() {
        await this.addservice.waitFor({ state: "visible" });
        await expect(this.addservice).toBeEnabled({ timeout: 10000 });
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