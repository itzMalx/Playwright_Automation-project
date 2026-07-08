import { Locator, Page } from 'playwright';
import { BasePage } from './basepage';

export class CourseManagementPage extends BasePage {

    readonly courseNameList: Locator
    readonly actionList: Locator
    readonly loading: Locator
    readonly previous: Locator
    readonly next: Locator
    readonly activePageNumber: Locator
    readonly totalPage: Locator
    readonly navigationButtons : Locator

    constructor(page: Page) {
        super(page)
        this.courseNameList = page.locator("//tr//td[3]")
        this.actionList = page.locator("//div[@class='flex gap-1 justify-center']")
        this.previous = page.locator("//button[normalize-space()='Previous']")
        this.next = page.locator("//button[normalize-space()='Next']")
        this.loading = this.page.locator(".animate-pulse")
        this.activePageNumber = page.locator("//button[contains(@class,'bg-blue-600')]")
        this.totalPage = page.locator("(//button[@data-slot='button'])[13]")
        this.navigationButtons=page.locator("//div[@class='flex items-center gap-1']//button")
    }

    async selectActionList(courseName: string) {

        await this.loading.first().waitFor({ state: "hidden" });
        const totalPages = Number((await this.totalPage.textContent()));
        for (let page = 1; page <= totalPages; page++) {
            await this.loading.first().waitFor({ state: "hidden" });
            const count = await this.courseNameList.count();
            for (let i = 0; i < count; i++) {
                const course = (await this.courseNameList.nth(i).innerText()).trim();
                console.log(course);
                if (course.includes(courseName)) {
                    await this.actionList.nth(i).click();
                    return;
                }
            }
            // Go to next
            if (page < totalPages) {
                await this.next.click();
                await this.loading.first().waitFor({ state: "hidden" });
            }
        }
        throw new Error(`Course '${courseName}' not found`);
    }
    async clickNext() {
        await this.click(this.next)
    }

    async clickPrevious() {
        await this.click(this.previous)
    }

    async isPreviousClickable() {
        await this.isClickable(this.previous)
    }

    async isNextClickable() {
        await this.isClickable(this.next)
    }

    async navigateToCourseStructurePage() {
        await this.page.goto("https://lms-smartcliff.vercel.app/lms/pages/coursestructure")
    }

    async getActivePageNumber() {
        return await this.getText(this.activePageNumber)
    }

    async clickPageNumber(pageNo: string) {
        await this.click(this.pageNumberLocator(pageNo))
    }

    pageNumberLocator(pageNo: string): Locator {
        return this.page.locator(`//button[normalize-space()='${pageNo}']`)
    }

    async clickLastPage() {
        await this.page.waitForLoadState("networkidle");

        const count = await this.navigationButtons.count();

        await this.navigationButtons.last().click();

        await this.loading.first().waitFor({ state: "hidden" });
    }

    async isNextDisabled(){
        return await this.isDisabled(this.next)
    }
}