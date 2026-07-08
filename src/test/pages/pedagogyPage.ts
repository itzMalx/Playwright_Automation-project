import { Locator, Page } from 'playwright';
import { BasePage } from './basepage';

export class PedagogyPage extends BasePage {

   readonly addModuleIcon: Locator
   readonly title: Locator
   readonly addModuleBtn: Locator
   readonly moduleList: Locator

   constructor(page: Page) {
      super(page)
      this.addModuleIcon = this.page.locator("//button[@title='Add module']//*[name()='svg']")
      this.title = this.page.locator("textarea[id='title']")
      this.addModuleBtn = this.page.locator("//button[text()='Add Module']")
      this.moduleList = this.page.locator("//tr//td[1]//div")
   }

   async module() {
      await this.click(this.addModuleIcon)
   }

   async fillTitle(title: string) {
      await this.fill(this.title, title)
   }

   async clickAddModule() {
      await this.click(this.addModuleBtn)
   }

   async verifyModuleAdded(title: string) {
      await this.page.waitForTimeout(10000)
      const titleList = await this.moduleList.allInnerTexts();

      return titleList.some(t => t.trim() === title);
   }

}