import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import addcourse from "../../test-data/addcourse.json";

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

When('User selects the details in course hirearchy and layout', async function (this:glitchworld) {

    const config = addcourse.courseConfiguration;

    await this.addCoursePage.selectDropdown(
        config.courseLevel.index,
        config.courseLevel.value
    );

    await this.addCoursePage.selectHierarchy();
    
    const pedagogy = addcourse.courseHierarchy.pedagogy;

    for (const item of pedagogy) {
    await this.addCoursePage.selectMultiDropdown(
        item.section,
        item.values
    );
}

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