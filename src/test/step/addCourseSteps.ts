import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import addcourse from "../../test-data/addcourse.json";
import { expect } from "@playwright/test";

When('User selects valid course configuration details', async function (this:glitchworld) {
    await this.addCoursePage.clickAddCourse();
    const config = addcourse.courseConfiguration;

    await this.addCoursePage.selectDropdown(config.client.index, config.client.value);
    await this.addCoursePage.selectDropdown(config.serviceType.index, config.serviceType.value);
    await this.addCoursePage.selectDropdown(config.serviceModel.index, config.serviceModel.value);
    await this.addCoursePage.selectDropdown(config.courseCategory.index, config.courseCategory.value);
    await this.addCoursePage.selectDropdown(config.courseName.index, config.courseName.value);
});

When('User clicks the Next button', async function (this:glitchworld) {

    await this.addCoursePage.clickNext();
});

    When('User selects the details in course hirearchy and layout', async function (this: glitchworld) {

    const config = addcourse.courseConfiguration;

    await this.addCoursePage.selectDropdown(
        config.courseLevel.index,
        config.courseLevel.value
    );

    await this.addCoursePage.selectHierarchy();

    const pedagogy = addcourse.courseHierarchy.pedagogy;

    await this.addCoursePage.selectMultiDropdown(
        pedagogy.iDo.index,
        pedagogy.iDo.value
    );

    await this.addCoursePage.selectMultiDropdown(
        pedagogy.weDo.index,
        pedagogy.weDo.value
    );

    await this.addCoursePage.selectMultiDropdown(
        pedagogy.youDo.index,
        pedagogy.youDo.value
    );
    await this.addCoursePage.selectSkills();

    for (const index of addcourse.courseHierarchy.resources) {
        await this.addCoursePage.enableResource(index);
    }

});
   




When('User clicks Preview and Create', async function (this:glitchworld) {

    await this.addCoursePage.clickPreviewAndCreate();
});

When('User saves the course layout', async function (this:glitchworld) {

    await this.addCoursePage.clickSaveCourseLayout();
});

Then('The course should be created successfully', async function (this:glitchworld) {

    await this.addCoursePage.verifyCourseCreatedSuccessfully();

    await this.addCoursePage.clickLater();
});


When('User selects valid course configuration details without selecting client', async function () {
  await this.addCoursePage.clickAddCourse();
    const config = addcourse.courseConfiguration;

    await this.addCoursePage.selectDropdown(config.serviceType.index, config.serviceType.value);
    await this.addCoursePage.selectDropdown(config.serviceModel.index, config.serviceModel.value);
    await this.addCoursePage.selectDropdown(config.courseCategory.index, config.courseCategory.value);
    await this.addCoursePage.selectDropdown(config.courseName.index, config.courseName.value);
});

Then('User should get error message', async function () {
    const actual = await this.addCoursePage.getClienterrmsg();
    expect(actual).toContain("Please select a client");
});