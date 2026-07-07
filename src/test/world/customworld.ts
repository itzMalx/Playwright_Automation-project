import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { PedagogyPage } from '../pages/pedagogyPage';


export class testWorld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page

    dashboardPage!: DashboardPage
    courseManagementPage!: CourseManagementPage
    pedagogyPage!: PedagogyPage 

}

setWorldConstructor(testWorld)