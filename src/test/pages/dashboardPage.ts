import {Locator,Page} from 'playwright';

export class DashboardPage{

    readonly page : Page
    readonly course_management_btn: Locator


   constructor(page : Page){
      this.page=page
      this.course_management_btn = this.page.locator("div[title='Course Management']")
   }
   
}
      
