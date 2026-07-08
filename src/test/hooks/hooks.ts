import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from "@playwright/test";
import { glitchworld } from '../world/customworld';
import { logger } from '../../utilities/logger';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardPage';
import { CourseManagementPage } from '../pages/courseManagementPage';
import { PedagogyPage } from '../pages/pedagogyPage';
import { SeriveModelPage } from '../pages/serviceModelPage';

let browser: Browser;
setDefaultTimeout(90 * 1000)
BeforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    logger.info("Browser Launched");
});
Before(async function (this: glitchworld, scenario) {
    const loginTags = ["@Validlogin", "@Invalidpassword", "@Invalidcredentials", "@Unregisteredemail"];
    this.tag = scenario.pickle.tags.find(tag => loginTags.includes(tag.name))?.name ?? "";
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.login = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page)
    this.courseManagementPage = new CourseManagementPage(this.page)
    this.pedagogyPage = new PedagogyPage(this.page)
    this.servicePage = new SeriveModelPage(this.page)

    console.log("Page closed:", this.page.isClosed());
    console.log("Current URL:", this.page.url());

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