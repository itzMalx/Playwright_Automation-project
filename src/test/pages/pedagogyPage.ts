import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basepage";
import { logger } from "../../utilities/logger";

export class PedagogyPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    private readonly pedagogyActivity = this.page.locator("//tr/td[1]//div[contains(@class,'font-medium')]")
    private readonly pedagogyElement = this.page.locator("//tr//td[2]//div")
    private readonly addElement = this.page.getByText("Add Element")
    private readonly elementNameInput = this.page.locator("input[placeholder=\"e.g., 'Think-Pair-Share'\"]")
    private readonly createElement = this.page.locator("//button[text()='Create Element']")
    private readonly elementNameTable = this.page.locator("//tr//td[@class='px-3 py-2 text-xs']")
    private readonly nextBtn = this.page.locator("(//button[@data-slot='button'])[13]")
    private readonly loadingText = this.page.getByText("Loading pedagogy data...")
    private readonly CreatingText = this.page.getByText("Creating...")

    async selectActivity(activityName: string) {
        await this.loadingText.waitFor({ state: "hidden" });
        const count = await this.pedagogyActivity.count();

        for (let i = 0; i < count; i++) {
            const activity = (await this.pedagogyActivity.nth(i).innerText()).trim();
            logger.info(`Activity ${i}: ${activity}`);

            if (activity.includes(activityName)) {
                logger.info(`Activity ${i} = ${activity}`);
                await this.pedagogyElement.nth(i).click();
                return;
            }
        }
        throw new Error(`${activityName} not found`);
    }

    async clickAddElement() {
        await this.click(this.addElement)
    }

    async enterElementName(ElementName: string) {
        await this.fill(this.elementNameInput, ElementName)
    }

    async clickCreateElement() {
        await this.click(this.createElement)
        await this.CreatingText.waitFor({ state: "hidden" })
    }

    async verifyElementPresent(elementName: string) {

        while (true) {
            const rowCount = await this.elementNameTable.count();
            for (let i = 0; i < rowCount; i++) {
                const text = (await this.elementNameTable.nth(i).innerText()).trim();
                if (text === elementName) {
                    logger.info(`${elementName} found`);
                    return true;
                }
            }
            if (await this.nextBtn.isDisabled()) {
                break;
            }
            await this.nextBtn.click();
            await this.page.waitForLoadState('networkidle');
        }
        throw new Error(`${elementName} not found in any page`);
    }


}