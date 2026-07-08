import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { PedagogyPage } from '../pages/pedagogyPage';
import { SearchPage } from '../pages/searchPage';  
import {SeriveModelPage} from '../pages/serviceModelPage'

export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page
    login!: LoginPage
    tag!: string;
    

    dashboardPage!: DashboardPage
    courseManagementPage!: CourseManagementPage
    pedagogyPage!: PedagogyPage
    searchPage!: SearchPage
    servicePage!:SeriveModelPage
}

setWorldConstructor(glitchworld)