import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginpage';


export class glitchworld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page
    login!:LoginPage
    tag!: string;

}

setWorldConstructor(glitchworld)