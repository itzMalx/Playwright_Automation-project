import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { CourseStructurePage } from '../pages/courseStructurePage';
import { SearchPage } from '../pages/searchPage';  
import {SeriveModelPage} from '../pages/serviceModelPage'
import { AddCoursePage } from '../pages/addCoursePage';
import { DynamicFieldPage } from '../pages/dynamicFieldPage';
import {CourseCategoryPage} from '../pages/courseCategoryPage';
import { AddModelPage } from '../pages/addModelServicePage';
import { ModelSearchPage } from '../pages/modelsSearchpage';
import { PedagogyPage } from '../pages/pedagogyPage';


export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page
    login!: LoginPage
    tag!: string;
    // downloadPath!: string;
    // downloadName!: string;

    dashboardPage!: DashboardPage
    courseManagementPage!: CourseManagementPage
    courseStructurePage!: CourseStructurePage
    searchPage!: SearchPage
    servicePage!:SeriveModelPage
    addCoursePage! : AddCoursePage
    addmodel!:AddModelPage
    modelSearchPage!:ModelSearchPage
    dynamicFieldPage!:DynamicFieldPage
    courseCategoryPage!:CourseCategoryPage
    pedagogyPage!:PedagogyPage


}

setWorldConstructor(glitchworld)