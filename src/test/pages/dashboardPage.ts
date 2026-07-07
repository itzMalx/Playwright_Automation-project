import {Locator,Page} from 'playwright';

export class DashboardPage{

    readonly page : Page
    readonly courseManagement_Btn: Locator


   constructor(page : Page){
      this.page=page
      this.courseManagement_Btn = this.page.locator("div[title='Course Management']")
   }

}
      
