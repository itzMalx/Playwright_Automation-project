import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basepage';

export class DynamicFieldPage extends BasePage {
    private readonly dynamicfield:Locator;
    private readonly clientmodel:Locator;
    private readonly coursecategory:Locator;
    private readonly pedagogy:Locator;
    constructor (page:Page){
        super(page);
        this.dynamicfield= this.page.locator("//div[@title='Dynamic Field Settings']");
        this.clientmodel = this.page.locator('//button[text()="Client Modal"]');
        this.coursecategory=this.page.locator('//button[text()="Course Category"]');
        this.pedagogy=this.page.locator('//button[text()="Pedagogy"]');

    }

    async clickDynamicfield(){
        await this.click(this.dynamicfield);
    }
    async clickClientmodel(){
        await this.click(this.clientmodel);
    }
    async clickCouresecategory(){
        await this.click(this.coursecategory);
    }
    async clickPedagogy(){
        await this.click(this.pedagogy);
    }

}
