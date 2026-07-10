import { Locator, Page } from "playwright";
import { logger } from "../../utilities/logger";

export class BasePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: Locator) {
    try {
      await locator.click();
    }
    catch (error) {
      logger.error(`Failed to click element: ${error}`);
      throw error;
    }
  }

  async clickCheckbox(locator: Locator) {
    await locator.waitFor({ state: "visible" });
    if (!(await locator.isChecked())) {
        await locator.check();
    }
}

  async fill(locator: Locator, value: string) {
    try {
      await locator.fill(value);
    }
    catch (error) {
      logger.error(`Failed to fill element: ${error}`);
      throw error;
    }
  }

  async clear(locator: Locator) {
    try {
      await locator.clear();
    }
    catch (error) {
      logger.error(`Failed to clear element: ${error}`);
      throw error;
    }
  }

  async getText(locator: Locator) {
    try {
      return await locator.textContent();
    }
    catch (error) {
      logger.error(`Failed to get text: ${error}`);
      throw error;
    }
  }

  async jsclick(locator: Locator) {
    try {
      await locator.evaluate((element) => {
        (element as HTMLElement).click();
      });
    }
    catch (error) {
      logger.error(`Failed to perform JavaScript click: ${error}`);
      throw error;
    }
  }

  async hover(locator: Locator) {
    try {
      await locator.hover();
    }
    catch (error) {
      logger.error(`Failed to hover element: ${error}`);
      throw error;
    }
  }

  async dblclick(locator: Locator) {
    try {
      await locator.dblclick();
    }
    catch (error) {
      logger.error(`Failed to double click element: ${error}`);
      throw error;
    }
  }

  async rightclick(locator: Locator) {
    try {
      await locator.click({ button: "right" });
    }
    catch (error) {
      logger.error(`Failed to right click element: ${error}`);
      throw error;
    }
  }

  async leftClick(locator: Locator) {
    try {
      await locator.click({ button: "left" });
    }
    catch (error) {
      logger.error(`Failed to left click element: ${error}`);
      throw error;
    }
  }

  async pressKey(locator: Locator, key: string) {
    try {
      await locator.press(key);
    }
    catch (error) {
      logger.error(`Failed to press key '${key}': ${error}`);
      throw error;
    }
  }

  async getInnerText(locator: Locator) {
    try {
      return await locator.innerText();
    }
    catch (error) {
      logger.error(`Failed to get inner text: ${error}`);
      throw error;
    }
  }

  async getInputValue(locator: Locator) {
    try {
      return await locator.inputValue();
    }
    catch (error) {
      logger.error(`Failed to get input value: ${error}`);
      throw error;
    }
  }

  async isEnabled(locator: Locator) {
    try {
      return await locator.isEnabled();
    }
    catch (error) {
      logger.error(`Failed to check if element is enabled: ${error}`);
      throw error;
    }
  }

  async isDisabled(locator: Locator) {
    try {
      return await locator.isDisabled();
    }
    catch (error) {
      logger.error(`Failed to check if element is disabled: ${error}`);
      throw error;
    }
  }

  async isVisible(locator: Locator) {
    try {
      return await locator.isVisible();
    }
    catch (error) {
      logger.error(`Failed to check if element is visible: ${error}`);
      throw error;
    }
  }

  async scrollIntoView(locator: Locator) {
    try {
      await locator.scrollIntoViewIfNeeded();
    }
    catch (error) {
      logger.error(`Failed to scroll element into view: ${error}`);
      throw error;
    }
  }

  async waitForElement(locator: Locator) {
    try {
      await locator.waitFor({ state: "visible" });
    }
    catch (error) {
      logger.error(`Failed to wait for element: ${error}`);
      throw error;
    }
  }

  async uploadFile(locator: Locator, filePath: string) {
    try {
      await locator.setInputFiles(filePath);
    }
    catch (error) {
      logger.error(`Failed to upload file: ${error}`);
      throw error;
    }
  }

  async getAttribute(locator: Locator, attribute: string) {
    try {
      return await locator.getAttribute(attribute);
    }
    catch (error) {
      logger.error(`Failed to get attribute '${attribute}': ${error}`);
      throw error;
    }
  }

  async allTextContents(locator: Locator) {
    try {
      return await locator.allTextContents();
    }
    catch (error) {
      logger.error(`Failed to get all text contents: ${error}`);
      throw error;
    }
  }

  async selectOption(locator: Locator, value: string) {
    try {
      return await locator.selectOption(value);
    }
    catch (error) {
      logger.error(`Failed to select option '${value}': ${error}`);
      throw error;
    }
  }

  async ElementScreenshot(locator: Locator, photopath: string) {
    try {
      return await locator.screenshot({ path: photopath });
    }
    catch (error) {
      logger.error(`Failed to capture element screenshot: ${error}`);
      throw error;
    }

  }

  async isChecked(locator: Locator) {
    try {
      return locator.isChecked();
    }
    catch (error) {
      logger.error(`Not checked : ${error}`);
      throw error;
    }
  }
  async isClickable(locator: Locator) {
    try {
      return await locator.isEnabled()
    }
    catch (error) {
      logger.error("Failed to Check clickable")
    }
  }
  async getElements(locator: Locator) {
    return locator.innerHTML()
  }

   async getCount(locator: Locator){
    try{
      return await locator.count()
    }
    catch(error){
      logger.error("Count shuold be used for iterable objects")
    }
}
   async getValidationMessage(locator: Locator) {
    try {
        return await locator.evaluate(
            (el: HTMLInputElement) => el.validationMessage
        );
    }
    catch (error) {
        logger.error(`Failed to get validation message: ${error}`);
        throw error;
    }
}
}