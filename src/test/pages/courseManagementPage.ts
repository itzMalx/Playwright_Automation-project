import { Locator, Page } from 'playwright';

export class CourseManagementPage {

    readonly page: Page
    readonly courseNameList: Locator
    readonly actionList: Locator
    readonly loading : Locator

    constructor(page: Page) {
        this.page = page
        this.courseNameList = this.page.locator("//tr//td[3]")
        this.actionList = this.page.locator("//div[@class='flex gap-1 justify-center']")
        this.loading = this.page.locator(".animate-pulse")

    }

    async selectActionList(courseName: string) {

        await this.loading.first().waitFor({ state: "hidden" });
        const count = await this.courseNameList.count();
        for (let i = 0; i < count; i++) {
            const course = await this.courseNameList.nth(i).innerText();
            console.log(course)
            if (course.includes(courseName)) {
                await this.actionList.nth(i).click();
                return;
            }
        }

        throw new Error(`Course '${courseName}' not found`);
    }
}