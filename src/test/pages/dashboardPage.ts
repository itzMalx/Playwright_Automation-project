import {Locator,Page} from 'playwright';
import { BasePage } from './basepage';

export class DashboardPage extends BasePage{

   readonly course_management_btn: Locator


   constructor(page : Page){
      super(page)
      this.course_management_btn = this.page.locator("div[title='Course Management']")
   }

}
      
