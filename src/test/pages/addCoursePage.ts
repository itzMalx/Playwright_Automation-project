import { expect, Locator, Page } from '@playwright/test';
import { Basepage } from './basepage';

export class AddCoursePage extends Basepage {

    readonly addCourseBtn: Locator;
    readonly nextbtn:Locator;
    readonly module: Locator;
    readonly submodule: Locator;
    readonly topic: Locator;
    readonly subtopic: Locator;
    readonly javaskill:Locator;
    readonly pythonskill:Locator;
    readonly javascriptskill : Locator;
    readonly dbskill:Locator;
    readonly preview:Locator;
    readonly savebtn:Locator;
    readonly laterbtn:Locator;
    constructor(page: Page) {
        super(page);

        this.addCourseBtn  = this.page.getByRole('button',{name:'Add Course'});
        this.nextbtn = this.page.getByRole('button', {name:'Next'});
        this.module = this.page.locator('#module-checkbox');
        this.submodule = this.page.locator('#submodule-checkbox');
        this.topic = this.page.locator('#topic-checkbox');
        this.subtopic = this.page.locator('#subtopic-checkbox');
        this.javaskill=this.page.locator('//label[text()="Java"]');
        this.pythonskill=this.page.locator('//label[text()="Python"]');
        this.javascriptskill=this.page.locator('//label[text()="JavaScript"]');
        this.dbskill=this.page.locator('//label[text()="MySQL"]');
        this.preview=this.page.locator('//button[text()="Preview & Create"]');
        this.savebtn=this.page.locator('//button[text()=" Save Course Layout"]');
        this.laterbtn=this.page.locator('//button[text()="Later"]')

    }
     async clickAddCourse() {
        await this.addCourseBtn.click();
    }

    async selectDropdown(index: number, value: string) {

        const dropdown = this.page.locator("button[role='combobox']").nth(index);

        await dropdown.click();

        await this.page
            .locator("[role='option']")
            .filter({ hasText: value })
            .first()
            .click();

        await expect(dropdown).toContainText(value);
    }
   async selectMultiDropdown(section: string, values: string[]) {

    const container = this.page.locator("div").filter({
        has: this.page.getByText(section, { exact: true })
    }).first();

    const dropdown = container.locator("button[role='combobox']");

    await dropdown.click();

    for (const value of values) {
        await this.page.getByText(value, { exact: true }).click();
    }

    await this.page.keyboard.press("Escape");
}


    async clickNext() {
        await this.nextbtn.click();
    }

    async selectHierarchy() {
        await this.module.check();
        await this.submodule.check();
        await this.topic.check();
        await this.subtopic.check();
    }

    async selectSkills() {
        await this.javaskill.check();
        await this.pythonskill.check();
    }

    async enableResource(index: number) {

        const toggle = this.page.locator("button[role='switch']").nth(index);

        if ((await toggle.getAttribute("aria-checked")) === "false") {
            await toggle.click();
        }
    }

    async clickPreviewAndCreate() {
        await this.page.waitForTimeout(5000);
        await this.preview.scrollIntoViewIfNeeded();
        await this.preview.click();
    }

    async clickSaveCourseLayout() {
         await this.page.waitForTimeout(5000)
        await this.savebtn.click();
    }

    async verifyCourseCreatedSuccessfully() {
         await this.page.waitForTimeout(5000)
        await expect(this.laterbtn).toBeVisible();
    }

    async clickLater() {
        await this.laterbtn.click();
    }

    }