import { Locator, Page } from 'playwright';
import { BasePage } from '../pages/basepage';

export class DashboardPage extends BasePage {

   readonly courseManagementBtn: Locator

   constructor(page: Page) {
      super(page)
      this.courseManagementBtn = this.page.locator("div[title='Course Management']")
   }

async naviagateToCourse() {

    console.log(await this.page.url());
    await this.courseManagementBtn.waitFor({
        state: "visible",
        timeout: 20000
    });
    await this.courseManagementBtn.click();
}
}
   