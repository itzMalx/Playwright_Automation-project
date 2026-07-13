import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basepage";

export class AddClientPage extends BasePage {

    private readonly addClientModel : Locator
    private readonly clientName: Locator;
    private readonly companyName: Locator;
    private readonly email: Locator;
    private readonly phoneNumber: Locator;
    private readonly description: Locator;
    private readonly companyAddress: Locator;
    private readonly addClient: Locator;
    private readonly form : Locator;
    private readonly cancel : Locator;
    private readonly clientCount : Locator;

    constructor(page: Page) {

        super(page);

        this.clientName=page.locator("#contactPerson");
        this.companyName=page.locator("#clientCompany");
        this.email=page.locator("#email");
        this.phoneNumber=page.locator("#phoneNumber");
        this.description=page.locator("#description");
        this.companyAddress=page.locator("#clientAddress");
        this.addClient=page.locator("//button[@type='submit']");
        this.addClientModel=page.locator("//button[contains(., 'New Client')]");
        this.cancel=page.locator("//button[normalize-space()='Cancel']")
        this.form=page.locator("//form[@class='px-6 py-4']")
        this.clientCount=page.locator("//span[3]")
        
    }
    async enterClientDetails(clientName: string,companyName: string,
        email: string,phoneNumber: string,
        description: string,companyAddress: string) {

        await this.clientName.fill(clientName);
        await this.companyName.fill(companyName);
        await this.email.fill(email);
        await this.phoneNumber.fill(phoneNumber);
        await this.description.fill(description);
        await this.companyAddress.fill(companyAddress);
    }

    async clickAddClient() {
        await this.addClient.click();
    }

    async verifyClientAddedSuccessfully() {
        await expect(this.page.getByText("Client added successfully")).toBeVisible();
    }

    async navigateToClientModel(){
        await this.click(this.addClientModel)
    }

    async clickCancel(){
        await this.click(this.cancel)
    }

    async isFormVisible() {
    try {
        await this.form.waitFor({ state: "hidden", timeout: 5000 });
        return false;
    }
    catch {
        return await this.isVisible(this.form);
    }
}

    async getClientCount(){
        return await this.getText(this.clientCount)
    }
}