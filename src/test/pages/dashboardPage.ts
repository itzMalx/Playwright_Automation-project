import { Locator, Page } from 'playwright';
import { BasePage } from './basepage';

export class DashboardPage extends BasePage {

    readonly courseManagementBtn: Locator

   constructor(page: Page) {
      super(page)
      this.courseManagementBtn = this.page.locator("div[title='Course Management']")
   }

   async naviagateToCourse() {
      await this.click(this.courseManagementBtn)
   }

}