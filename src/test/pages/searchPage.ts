import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basepage";

export class SearchPage extends BasePage {
  private readonly txtSearch: Locator;
  private readonly resultsTable: Locator;
  private readonly noUsersFoundText: Locator;
  private readonly noDataText: Locator;
  private readonly courseCountText: Locator;

  constructor(page: Page) {
    super(page);

    this.txtSearch = page.locator("//input[@placeholder='Search courses, codes, clients, or categories...']");
    this.resultsTable = page.locator("//table");
    this.noUsersFoundText = page.locator("text=No users found");
    this.noDataText = page.locator("text=No data matches your current criteria");
    this.courseCountText = page.locator("//h1[contains(.,'Course Structures')]/following-sibling::*[contains(text(),'courses')]");
  }

  async enterSearchKeyword(keyword: string) {
    await this.clear(this.txtSearch);
    await this.fill(this.txtSearch, keyword);

    // wait for filtering to happen
    await this.page.waitForTimeout(3000);
  }

  async verifyClientResults(expectedText: string) {
    await this.page.waitForTimeout(2000);

    // Verify expected text appears inside the results table
    await expect(this.resultsTable).toContainText(expectedText, { timeout: 15000 });
  }

  async verifyCourseResults(expectedText: string) {
    await this.page.waitForTimeout(2000);

    // Verify expected text appears inside the results table
    await expect(this.resultsTable).toContainText(expectedText, { timeout: 15000 });
  }

  async verifyNoResultsFound() {
    await this.page.waitForTimeout(3000);

    const noUsersVisible = await this.noUsersFoundText.isVisible().catch(() => false);
    const noDataVisible = await this.noDataText.isVisible().catch(() => false);

    if (noUsersVisible || noDataVisible) {
      if (noUsersVisible) {
        await expect(this.noUsersFoundText).toBeVisible();
      }
      if (noDataVisible) {
        await expect(this.noDataText).toBeVisible();
      }
      return;
    }

    // fallback check if UI only updates course count to 0 courses
    await expect(this.page.locator("text=0 courses")).toBeVisible({ timeout: 10000 });
  }
}