import { Locator, Page } from 'playwright';
import { BasePage } from './basepage';

export class CourseManagementPage extends BasePage{

    readonly courseNameList: Locator
    readonly actionList: Locator
    readonly previous:Locator
    readonly next:Locator

    constructor(page: Page) {
        super(page)
        this.courseNameList=page.locator("//tr//td[3]")
        this.actionList=page.locator("//div[@class='flex gap-1 justify-center']")
        this.previous=page.locator("//button[normalize-space()='Previous']")
        this.next=page.locator("//button[normalize-space()='Next']")
    }

    async addCourseStructure() {
        return this.courseNameList
    }

    async actionLists() {
        return this.actionList
    }
    async clickNext() {
      await this.click(this.next)
   }

   async clickPrevious() {
      await this.click(this.previous)
   }

   async isPreviousClickable(){
      await this.isClickable(this.previous)
   }

   async isNextClickable(){
      await this.isClickable(this.next)
   }
}