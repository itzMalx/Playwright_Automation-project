import { FilterPage } from './../pages/Filterpage';
import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from "@playwright/test";
import { glitchworld } from '../world/customworld';
import { logger } from '../../utilities/logger';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { SearchPage } from '../pages/searchPage';
import { CourseStructurePage } from '../pages/courseStructurePage';
import { SeriveModelPage } from '../pages/serviceModelPage';
import { DynamicFieldPage } from '../pages/dynamicFieldPage';
import { CourseCategoryPage } from '../pages/courseCategoryPage';
import { AddClientPage } from '../pages/addClientModalPage';
import { AddCoursePage } from '../pages/addCoursePage';
import { AddModelPage } from '../pages/addModelServicePage';
import { ModelSearchPage } from '../pages/modelsSearchpage';
import { PedagogyPage } from '../pages/pedagogyPage';

setDefaultTimeout(90 * 1000)


setDefaultTimeout(90 * 1000)

let browser: Browser;

BeforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    logger.info("Browser Launched");
});
Before(async function (this: glitchworld, scenario) {

    this.browser = browser;
    this.context = await browser.newContext({ acceptDownloads: true });
    this.page = await this.context.newPage();
    this.login = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page)
    this.courseManagementPage = new CourseManagementPage(this.page)

    const loginTags = ["@Validlogin","@Invalidlogin"];
    this.tag = scenario.pickle.tags.find(tag => loginTags.includes(tag.name))?.name ?? "";
    this.pedagogyPage = new PedagogyPage(this.page)
    this.courseStructurePage = new CourseStructurePage(this.page)
    this.searchPage = new SearchPage(this.page)
    this.addCoursePage = new AddCoursePage(this.page)
    this.servicePage = new SeriveModelPage(this.page)
    this.filterpage= new FilterPage(this.page)
    this.dynamicFieldPage = new DynamicFieldPage(this.page)
    this.courseCategoryPage = new CourseCategoryPage(this.page)
    this.addmodel = new AddModelPage(this.page)
    this.modelSearchPage = new ModelSearchPage(this.page)
    this.pedagogyPage = new PedagogyPage(this.page)
    this.filterpage= new FilterPage(this.page)
    this.dynamicFieldPage=new DynamicFieldPage(this.page)
    this.courseCategoryPage=new CourseCategoryPage(this.page)
    
    this.addClientPage = new AddClientPage(this.page)

});
After(async function (this: glitchworld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        if (this.page && !this.page.isClosed()) {
            const path = `reports/screenshots/${scenario.pickle.name}-${Date.now()}.png`;
            await this.page.screenshot({ path });
        }
        logger.error(`Scenario Failed: ${scenario.pickle.name}`);
    }
    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
});

AfterAll(async () => {
    logger.info("Browser Closed");
    await browser.close();
});