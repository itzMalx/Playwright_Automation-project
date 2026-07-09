import { Locator, Page } from 'playwright';
import { BasePage } from '../pages/basepage';

export class PedagogyPage extends BasePage {

   readonly addModuleIcon: Locator
   readonly title: Locator
   readonly addModuleBtn: Locator
   readonly moduleList: Locator
   readonly printBtn : Locator
   readonly excelOption : Locator

   constructor(page: Page) {
      super(page)
      this.addModuleIcon = this.page.locator("//button[@title='Add module']//*[name()='svg']")
      this.title = this.page.locator("textarea[id='title']")
      this.addModuleBtn = this.page.locator("button[type='submit']")
      this.moduleList = this.page.locator("//tr//td[1]//div")
      this.printBtn = this.page.locator("//span[@class='hidden sm:inline'][text()='Print']")
      this.excelOption = this.page.locator("//button[@data-slot='button']")
   }

   async module() {
      await this.click(this.addModuleIcon)
   }

   async fillTitle(title: string) {
      await this.fill(this.title, title)
   }

   async clickAddModule() {
      await this.click(this.addModuleBtn)
      await this.addModuleBtn.waitFor({ state: "hidden" })
   }

   async verifyModuleAdded(title: string) {
      const titleList = await this.moduleList.allInnerTexts()
      for (var tit of titleList) {
         if (tit == title)
            return 1
      }

   }

   async clickPrint(){
      await this.click(this.printBtn)
   }

   async clickExcel(){
      await this.click(this.excelOption.last())
   }

}