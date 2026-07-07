import {Before,After,BeforeAll,AfterAll,Status} from '@cucumber/cucumber';
import {Browser, chromium} from "@playwright/test";
import { testWorld } from '../world/customworld';
import {logger} from '../../utilities/logger';




let browser:Browser;
BeforeAll(async()=>{
    
   browser = await chromium.launch({
    headless: true
  });
    logger.info("Browser Launched");
});
Before(async function (this:testWorld,scenario) {
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    
   
});
After(async function (this:testWorld,scenario) {
    if(scenario.result?.status== Status.FAILED){
        const path=`reports/screenshots/${scenario.pickle.name}${Date.now()}.png`;
        await this.page.screenshot({path});
       logger.error(`Scenario Failed: ${scenario.pickle.name}`);
       logger.error(`Screenshot Saved:${path}`);
}
    else{
       logger.info(`Scenario Passed:${scenario.pickle.name}`);
    }
     await this.page.close();
    await this.context.close();
})
AfterAll(async () => {
     logger.info("Browser Closed");
    await browser.close();
});