import {Locator,Page} from 'playwright';

export class CourseManagement{

    readonly page : Page
    readonly courseName_list: Locator
    readonly action_list: Locator

   constructor(page : Page){
      this.page=page
      this.courseName_list = this.page.locator("//tr//td[3]")
      this.action_list = this.page.locator("//div[@class='flex gap-1 justify-center']")

   }
    
}