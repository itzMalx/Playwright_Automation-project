import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basepage';

export class CourseCategoryPage extends BasePage {
    private readonly addcategorybtn: Locator;
    private readonly categoryname: Locator;
    private readonly coursename: Locator;
    private readonly categorydec: Locator;
    private readonly createcategorybtn: Locator;
    private readonly searchbox: Locator;

    constructor(page: Page) {
        super(page);
        this.addcategorybtn = this.page.getByRole("button", { name: "Add Category" });
        this.categoryname = this.page.getByPlaceholder('Enter category name');
        this.coursename = this.page.getByPlaceholder('Type course name and press Enter...');
        this.categorydec = this.page.getByPlaceholder('Enter category description');
        this.createcategorybtn = this.page.getByRole("button", { name: "Create Category" });
        this.searchbox = this.page.getByPlaceholder("Search by name, description, code or courses...");
    }

    async clickAddCategoryBtn() {
        await this.click(this.addcategorybtn);
    }

    async enterCategoryName(categoryName: string) {
        await this.fill(this.categoryname, categoryName);
    }

    async enterCourseName(courseName: string) {
        await this.fill(this.coursename, courseName);
    }

    async enterCategoryDescription(description: string) {
        await this.fill(this.categorydec, description);
    }

    async clickCreateCategoryBtn() {
        await this.click(this.createcategorybtn);
    }

    async getMessage(message: string) {
        return await this.page.getByText(message).textContent();
    }
    async getValidationMsg() {
        return this.getValidationMessage(this.categoryname);
    }
    async searchCategory(searchValue: string) {
        await this.fill(this.searchbox, searchValue);
    }

    async getSearchResult(searchValue: string) {
        return this.page.locator(`//td//div[normalize-space()="${searchValue}"]`).first();
    }

}