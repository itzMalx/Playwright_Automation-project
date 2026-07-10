import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { PedagogyPage } from '../pages/pedagogyPage';
import { SearchPage } from '../pages/searchPage';  
import {SeriveModelPage} from '../pages/serviceModelPage'
import { AddCoursePage } from '../pages/addCoursePage';
import { AddModelPage } from '../pages/addModelServicePage';
import { ModelSearchPage } from '../pages/modelsSearchpage';


export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page
    tag!: string;
    
    
    login!: LoginPage//muhi
    dashboardPage!: DashboardPage
    courseManagementPage!: CourseManagementPage
    pedagogyPage!: PedagogyPage
    searchPage!: SearchPage
    servicePage!:SeriveModelPage//muhi
    addCoursePage! : AddCoursePage
    addmodel!:AddModelPage//muhi
    modelSearchPage!:ModelSearchPage


}

setWorldConstructor(glitchworld)