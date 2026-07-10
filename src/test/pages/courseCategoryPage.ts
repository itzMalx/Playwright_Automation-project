import { AddCoursePage } from './addCoursePage';
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basepage';

export class CourseCategoryPage extends BasePage {
     private readonly addcategorybtn:Locator;
     private readonly categoryname:Locator;
     private readonly coursename:Locator;
     private readonly categorydec:Locator;
     private readonly createcategorybtn:Locator;

     constructor (page:Page){
        super(page);
        this.addcategorybtn=this.page.getByRole("button", { name: "Add Category" });
        this.categoryname=this.page.getByPlaceholder('Enter category name');
        this.coursename=this.page.getByPlaceholder('Type course name and press Enter...');
        this.categorydec=this.page.getByPlaceholder('Enter category description');
        this.createcategorybtn=this.page.getByRole("button", { name: "Create Category" });
     }

     
}