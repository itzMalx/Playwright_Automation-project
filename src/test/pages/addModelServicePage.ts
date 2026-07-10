import { BasePage } from "./basepage";

export class AddModelPage extends BasePage {

    readonly clicktoview = this.page.getByText('2 Click to view');
    readonly addmodel = this.page.getByRole('button', { name: 'Add Model' });
    readonly modelname = this.page.getByRole('textbox', { name: "e.g., 'Frontend Development'" });
    readonly description = this.page.getByRole('textbox', { name: 'Describe the model...' });
    readonly createmodel = this.page.getByRole('button', { name: 'Create Modal' });
    readonly checkdata = this.page.getByText('Automation Testing').nth(1);

    

    async enterclicktoview() {
        await this.click(this.clicktoview);
    }

    async clickaddtomod() {
        await this.click(this.addmodel);
    }

    async entermodelname(modname: string) {
        await this.fill(this.modelname, modname);
    }

    async entermoddesc(moddes: string) {
        await this.fill(this.description, moddes);
    }

    async clickcreatemod() {
        await this.click(this.createmodel);
    }

    async checkstored() {
        return await this.getText(this.checkdata);
    }
}