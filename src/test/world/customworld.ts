import { FilterPage } from './../pages/Filterpage';
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
import { AddClientPage } from '../pages/addClientModalPage';
import { PedagogyPage } from '../pages/pedagogyPage';


export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page
    tag!: string;
    downloadPath!: string;
    downloadName!: string;
    login!:LoginPage
    dashboardPage!: DashboardPage
    courseManagementPage!: CourseManagementPage
    courseStructurePage!: CourseStructurePage
    searchPage!: SearchPage
    servicePage!:SeriveModelPage//muhi
    addCoursePage! : AddCoursePage
    addmodel!:AddModelPage//muhi
    modelSearchPage!:ModelSearchPage
    filterpage!: FilterPage;
    pedagogyPage!:PedagogyPage
    addClientPage!:AddClientPage
    dynamicFieldPage!: DynamicFieldPage;
    courseCategoryPage!: CourseCategoryPage;
    


}

setWorldConstructor(glitchworld)