import { Locator, Page } from 'playwright';
import { BasePage } from './basepage';
import path from "path";


export class CourseStructurePage extends BasePage {

   private readonly addModuleIcon = this.page.locator("//button[@title='Add module']//*[name()='svg']")
   private readonly title = this.page.locator("textarea[id='title']")
   private readonly addModuleBtn = this.page.locator("button[type='submit']")
   private readonly moduleList = this.page.locator("//tr//td[1]//div")
   private readonly printBtn = this.page.locator("//span[@class='hidden sm:inline'][text()='Print']")
   private readonly excelOption = this.page.getByText("Excel")
   private readonly tableRow = this.page.locator("//tr[@data-slot='table-row']")
   private readonly moreBtn = this.page.getByText("More")
   private readonly hierarchyOpt = this.page.locator("(//div//child::label[contains(@class,'flex items-center justify-between cursor-pointer')])[1]")
   private readonly errorMsg = this.page.getByText("Title is required for module")

   constructor(page: Page) {
      super(page)
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

   async clickMoreBtn() {
      await this.click(this.moreBtn)
   }

   async enableHierarchyOpt() {
      await this.click(this.hierarchyOpt)
   }

   async errorMessage() {
      return await this.getText(this.errorMsg)
   }

   async clickSave() {
      await this.click(this.addModuleBtn)
   }

}