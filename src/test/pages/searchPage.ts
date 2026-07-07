import { expect, Locator, Page } from "@playwright/test";
import { Basepage } from "./basepage";

export class SearchPage extends Basepage {
  private txtSearch: Locator;
  private courseNames: Locator;
  private courseManagement: Locator;
  private courseCodes: Locator;

  constructor(page: Page) {
    super(page);

    this.txtSearch = page.locator(
      "//input[@placeholder='Search courses, codes, clients, or categories...']"
    );

    this.courseNames = page.locator("//table/tbody/tr/td[3]//button/span[1]");
    this.courseCodes = page.locator("//table/tbody/tr/td[3]//button/span[2]");
    this.courseManagement = page.locator("//div[@title='Course Management']");
  }

  async clickCourse() {
    await this.click(this.courseManagement);
    await this.courseNames.first().waitFor({ state: "visible", timeout: 10000 });
  }

  async enterSearchKeyword(keyword: string) {
    await this.clear(this.txtSearch);
    await this.fill(this.txtSearch, keyword);
    await this.page.waitForLoadState("networkidle");
  }

  async verifySearchResults(keyword: string) {
    await expect(async () => {
      const courses = await this.courseNames.allInnerTexts();
      expect(courses.length).toBeGreaterThan(0);
      for (const course of courses) {
        expect(course.toLowerCase()).toContain(keyword.toLowerCase());
      }
    }).toPass({ timeout: 5000 });
  }

  async verifyCourseCodes(keyword: string) {
    await expect(async () => {
      const codes = await this.courseCodes.allInnerTexts();
      expect(codes.length).toBeGreaterThan(0);
      for (const code of codes) {
        expect(code.toLowerCase()).toContain(keyword.toLowerCase());
      }
    }).toPass({ timeout: 5000 });
  }

  async verifyNoResultsFound() {
    await expect(async () => {
      const courses = await this.courseNames.allInnerTexts();
      expect(courses.length).toBe(0);
    }).toPass({ timeout: 5000 });
  }
}