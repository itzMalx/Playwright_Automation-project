import { Locator, Page } from 'playwright';

export class CourseManagementPage {

    readonly page: Page
    readonly courseNameList: Locator
    readonly actionList: Locator

    constructor(page: Page) {
        this.page = page
        this.courseNameList = this.page.locator("//tr//td[3]")
        this.actionList = this.page.locator("//div[@class='flex gap-1 justify-center']")

    }

    async addCourseStructure() {
        return this.courseNameList
    }

    async actionLists() {
        return this.actionList
    }
}