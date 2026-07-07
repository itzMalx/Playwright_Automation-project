import {Before,After,BeforeAll,AfterAll,Status} from "@cucumber/cucumber";

import { Browser, chromium } from "playwright";

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});
