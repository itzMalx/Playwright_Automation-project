import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basepage';

export class AddCoursePage extends BasePage {

    private readonly addCourseBtn: Locator;
    private readonly nextbtn: Locator;
    private readonly module: Locator;
    private readonly submodule: Locator;
    private readonly topic: Locator;
    private readonly subtopic: Locator;
    private readonly javaskill: Locator;
    private readonly pythonskill: Locator;
    private readonly javascriptskill: Locator;
    private readonly dbskill: Locator;
    private readonly preview: Locator;
    private readonly savebtn: Locator;
    private readonly laterbtn: Locator;
    private readonly clienterrmsg: Locator;
    private readonly modelerrmsg: Locator;
    private readonly hirearchyerrmsg: Locator;
    private readonly resourceerrmsg: Locator;
    private readonly imageadd: Locator;
    constructor(page: Page) {
        super(page);

        this.addCourseBtn = this.page.getByRole('button', { name: 'Add Course' });
        this.nextbtn = this.page.getByRole('button', { name: 'Next' });
        this.module = this.page.locator('#module-checkbox');
        this.submodule = this.page.locator('#submodule-checkbox');
        this.topic = this.page.locator('#topic-checkbox');
        this.subtopic = this.page.locator('#subtopic-checkbox');
        this.javaskill = this.page.locator('//label[text()="Java"]');
        this.pythonskill = this.page.locator('//label[text()="Python"]');
        this.javascriptskill = this.page.locator('//label[text()="JavaScript"]');
        this.dbskill = this.page.locator('//label[text()="MySQL"]');
        this.preview = this.page.locator('//button[text()="Preview & Create"]');
        this.savebtn = this.page.locator('//button[text()=" Save Course Layout"]');
        this.laterbtn = this.page.locator('//button[text()="Later"]');
        this.clienterrmsg = this.page.locator('//span[text()="Please select a client"]');
        this.modelerrmsg = this.page.locator('//span[text()="Please select a service model"]');
        this.hirearchyerrmsg = this.page.locator('//span[text()="Please select at least one course hierarchy option"]');
        this.resourceerrmsg = this.page.locator('//div[text()="Please select at least one resource type"]');
        this.imageadd = this.page.locator("//input[@type='file']").nth(0);
    }
    async clickAddCourse() {
        await this.addCourseBtn.click();
    }
    async getClienterrmsg() {
        return await this.getText(this.clienterrmsg);
    }
    async selectDropdown(index: number, value: string) {

        const dropdown = this.page.locator("button[role='combobox']").nth(index);

        await dropdown.click();

        await this.page
            .locator("[role='option']")
            .filter({ hasText: value })
            .first()
            .click();

    }
    async selectMultiDropdown(index: number, value: string) {

        const dropdown = this.page
            .locator('button[role="combobox"]')
            .nth(index);

        await dropdown.click();

        const listBox = this.page.locator('[role="listbox"]').last();

        const label = listBox
            .locator('label')
            .filter({ hasText: value })
            .first();

        await label.click();

    }
    async clickNext() {
        await this.nextbtn.click();
    }

    async selectHierarchy() {
        await this.clickCheckbox(this.module);
        await this.clickCheckbox(this.submodule);
        await this.clickCheckbox(this.topic);
        await this.clickCheckbox(this.subtopic);
    }

    async selectSkills() {
        await this.clickCheckbox(this.javaskill);
        await this.clickCheckbox(this.pythonskill);
        await this.clickCheckbox(this.javascriptskill);
        await this.clickCheckbox(this.dbskill);
    }

    async enableResource(index: number) {

        const toggle = this.page.locator("button[role='switch']").nth(index);

        if ((await toggle.getAttribute("aria-checked")) === "false") {
            await toggle.click();
        }
    }

    async clickPreviewAndCreate() {
        await this.preview.scrollIntoViewIfNeeded();
        await this.preview.click();
    }

    async clickSaveCourseLayout() {
        await this.savebtn.click();
    }

    async verifyCourseCreatedSuccessfully() {
        await expect(this.laterbtn).toBeVisible();
    }

    async clickLater() {
        await this.laterbtn.click();
    }

    async getModelerrMsg() {
        return this.getText(this.modelerrmsg);
    }
    async getHierarchyMsg() {
        return this.getText(this.hirearchyerrmsg);
    }
    async getResoureMsg() {
        return this.getText(this.resourceerrmsg);
    }
    async uploadCourseImage() {
        await this.uploadFile(
            this.imageadd,
            "src/test-data/course.jpg"
        );
    }


}