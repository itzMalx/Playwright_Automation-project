import { Locator, Page } from 'playwright';
import { BasePage } from '../pages/basepage';
import path from "path";


export class PedagogyPage extends BasePage {

   readonly addModuleIcon: Locator
   readonly title: Locator
   readonly addModuleBtn: Locator
   readonly moduleList: Locator
   readonly printBtn: Locator
   readonly excelOption: Locator
   readonly tableRow: Locator
   readonly moreBtn : Locator
   readonly hierarchyOpt: Locator
   readonly errorMsg : Locator

   constructor(page: Page) {
      super(page)
      this.addModuleIcon = this.page.locator("//button[@title='Add module']//*[name()='svg']")
      this.title = this.page.locator("textarea[id='title']")
      this.addModuleBtn = this.page.locator("button[type='submit']")
      this.moduleList = this.page.locator("//tr//td[1]//div")
      this.printBtn = this.page.locator("//span[@class='hidden sm:inline'][text()='Print']")
      this.excelOption = this.page.getByText("Excel")
      this.tableRow = this.page.locator("//tr[@data-slot='table-row']")
      this.moreBtn = this.page.getByText("More")
      this.hierarchyOpt = this.page.locator("(//div//child::label[contains(@class,'flex items-center justify-between cursor-pointer')])[1]")
      this.errorMsg = this.page.getByText("Title is required for module")
   
   
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

   async clickPrint() {
      await this.click(this.printBtn)
   }

   async clickExcel() {
      await this.click(this.excelOption)
   }

   async tableRowCount() {
      return await this.getCount(this.tableRow)
   }

   async downloadExcel(page: Page): Promise<string> {
      const downloadPromise = page.waitForEvent("download");
      await this.clickExcel();
      const download = await downloadPromise;
      const filePath = path.join("downloads", download.suggestedFilename());
      await download.saveAs(filePath);
      return filePath;
   }

   async clickMoreBtn(){
      await this.click(this.moreBtn)
   }

   async enableHierarchyOpt(){
      await this.click(this.hierarchyOpt)
   }

   async errorMessage(){
      return await this.getText(this.errorMsg)
   }

   async clickSave(){
      await this.click(this.addModuleBtn)
   }

}