import { Browser, BrowserContext, Locator, Logger, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';


export class muhiworld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page

}

setWorldConstructor(muhiworld)