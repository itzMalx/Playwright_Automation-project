import {Locator,Page} from 'playwright';
import { BasePage } from './basepage';

export class CourseManagement extends BasePage{

    readonly courseName_list: Locator
    readonly action_list: Locator
    readonly previous:Locator
    readonly next:Locator

   constructor(page : Page){
      super(page)
      this.courseName_list = this.page.locator("//tr//td[3]")
      this.action_list =page.locator("//div[@class='flex gap-1 justify-center']")
      this.previous=page.locator("//button[normalize-space()='Previous']")
      this.next=page.locator("//button[normalize-space()='Next']")


   }

   async clickPage(pageNumber: number) {
      await this.page.locator(".pagination")
        .getByRole("button", { name: pageNumber.toString() })
        .click();
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