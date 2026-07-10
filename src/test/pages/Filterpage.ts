import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../pages/basepage";

export class FilterPage extends BasePage {
  private readonly statusDropdown: Locator;
  private readonly categoryDropdown: Locator;
  private readonly levelDropdown: Locator;
  private readonly sortByDropdown: Locator;
  private readonly filterButton: Locator;
  private readonly clearAllButton: Locator;
  private readonly tableRows: Locator;
  private readonly noUsersFoundMsg: Locator;
  private readonly noDataMsg: Locator;
  private readonly courseCountText: Locator;

  constructor(page: Page) {
    super(page);

    this.filterButton = page.locator('button:has-text("Filters")');
    this.clearAllButton = page.locator('button:has-text("Clear All")');

    this.statusDropdown = page.locator("select").nth(0);
    this.categoryDropdown = page.locator("select").nth(1);
    this.levelDropdown = page.locator("select").nth(2);
    this.sortByDropdown = page.locator("select").nth(3);

    this.tableRows = page.locator("table tbody tr");
    this.noUsersFoundMsg = page.locator("text=No users found");
    this.noDataMsg = page.locator("text=No data matches your current criteria");
    this.courseCountText = page.locator("text=/\\d+\\s+courses/i");
  }

  async navigateToCourseManagement() {
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForTimeout(2000);

    const courseManagement = this.page.getByText("Course Management");
    await courseManagement.waitFor({ state: "visible", timeout: 20000 });
    await courseManagement.click();

    await this.page.waitForURL("**/coursestructure", { timeout: 20000 });
    await this.page.waitForLoadState("networkidle");
  }

  async clickFilterButton() {
    await this.filterButton.waitFor({ state: "visible", timeout: 10000 });
    await this.filterButton.click();
    await this.page.waitForTimeout(1000);
  }

  async selectCategoryLevelAndSort(category: string, level: string, sortBy: string) {
    await this.categoryDropdown.selectOption({ label: category }).catch(async () => {
      await this.categoryDropdown.selectOption(category);
    });

    await this.levelDropdown.selectOption({ label: level }).catch(async () => {
      await this.levelDropdown.selectOption(level);
    });

    await this.sortByDropdown.selectOption({ label: sortBy }).catch(async () => {
      await this.sortByDropdown.selectOption(sortBy);
    });

    await this.page.waitForTimeout(2000);
  }

  async selectStatusAndCategory(status: string, category: string) {
    await this.statusDropdown.selectOption({ label: status }).catch(async () => {
      await this.statusDropdown.selectOption(status);
    });

    await this.categoryDropdown.selectOption({ label: category }).catch(async () => {
      await this.categoryDropdown.selectOption(category);
    });

    await this.page.waitForTimeout(2000);
  }

  async verifyFilteredResults(category: string, level: string) {
    await this.page.waitForTimeout(2000);

    const rowCount = await this.tableRows.count();
    expect(rowCount).toBeGreaterThan(0);

    for (let i = 0; i < rowCount; i++) {
      const rowText = (await this.tableRows.nth(i).textContent())?.toLowerCase() || "";
      expect(rowText).toContain(category.toLowerCase());
      expect(rowText).toContain(level.toLowerCase());
    }
  }

  async verifyNoResults() {
    await this.page.waitForTimeout(2000);

    const noUsersVisible = await this.noUsersFoundMsg.isVisible().catch(() => false);
    const noDataVisible = await this.noDataMsg.isVisible().catch(() => false);

    expect(noUsersVisible || noDataVisible).toBeTruthy();
  }

  async clickClearAll() {
    await this.clearAllButton.waitFor({ state: "visible", timeout: 10000 });
    await this.clearAllButton.click();
    await this.page.waitForTimeout(2000);
  }

  async verifyFiltersReset() {
    const statusValue = await this.statusDropdown.inputValue();
    const categoryValue = await this.categoryDropdown.inputValue();
    const levelValue = await this.levelDropdown.inputValue();

    expect(["", "All", "all"]).toContain(statusValue);
    expect(["", "All", "all"]).toContain(categoryValue);
    expect(["", "All", "all"]).toContain(levelValue);
  }

  async verifyAllCoursesDisplayed() {
    await this.page.waitForTimeout(2000);

    await expect(this.courseCountText.first()).toBeVisible();
  }
}