import { Locator, Page } from 'playwright';
import { BasePage } from '../pages/basepage';

export class DashboardPage extends BasePage {

   readonly courseManagementBtn: Locator

   constructor(page: Page) {
      super(page)
      this.courseManagementBtn = this.page.locator("div[title='Course Management']")
   }

   async naviagateToCourse() {
<<<<<<< HEAD

      console.log("Current URL:", await this.page.url());

      // await this.page.waitForLoadState("networkidle");

      // await this.courseManagementBtn.waitFor({
      //    state: "visible",
      //    timeout: 30000
      // });

      await this.courseManagementBtn.click();
=======
      await this.courseManagementBtn.waitFor({ state: "attached", timeout: 20000 });
      await this.courseManagementBtn.waitFor({ state: "visible", timeout: 20000 });
      await this.click(this.courseManagementBtn);
>>>>>>> 18431617ece9352232c8e0d3f9809ffe7c8f3260
   }
}
