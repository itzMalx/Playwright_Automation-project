import {Locator,Page} from 'playwright';

export class BasePage {

   readonly page : Page

   constructor(page : Page){
      this.page=page
   }

   async click(locator:Locator){
      await (locator).click();
   }
   async fill(locator:Locator,value:string){
      await locator.fill(value);
   }
   async clear(locator:Locator){
      await locator.clear();
   }
   async getText(locator:Locator){
      return await locator.textContent();
   }
   async jsclick(locator: Locator) {
        await locator.evaluate((element) => {
            (element as HTMLElement).click();
        });
    }

    async hover(locator:Locator){
      await locator.hover();
    }
    async dblclick(locator:Locator){
      await locator.dblclick();
    }
    async rightclick(locator:Locator){
      await locator.click({button:'right'})
    }
    async leftClick(locator:Locator){
      await locator.click({button:'left'})
    }
    async pressKey(locator:Locator,key:string){
      await locator.press(key)
    }
    async getInnerText(locator:Locator){
      return await locator.innerText();
    }
    async getInputValue(locator:Locator){
      return await locator.inputValue();
    }
    async isEnabled(locator:Locator){
     return await locator.isEnabled();
    }
    async isDisableyed(locator:Locator){
      return await locator.isDisabled();
    }
    async isVisible(locator:Locator){
      return await locator.isVisible();
    }

    async scrollIntoView(locator:Locator){
      await locator.scrollIntoViewIfNeeded();
    }
    async waitForElement(locator:Locator){
      await locator.waitFor({state:'visible'})
    }
    async uploadFile(locator:Locator,filePath:string){
      await locator.setInputFiles(filePath);
    }
    async getAttribute(locator:Locator,attribute:string){
      await locator.getAttribute(attribute);
    }
    async allTextContents(locator:Locator){
      return await locator.allTextContents();
    }
    async selectOption(locator:Locator,value:string){
      return await locator.selectOption(value);
    }
    async ElementScreenshot(locator:Locator,photopath:string){
      return await locator.screenshot({path:photopath});
    }
    async isClickable(locator : Locator){
      return await locator.isEnabled()
    }

}
