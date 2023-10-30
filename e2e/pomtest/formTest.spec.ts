import { test, expect, Page } from '@playwright/test';

import From from "../pages/formPage";

test("From test", async ({ page }) =>{
    const from = new From(page);

    const appUrl = "https://demoqa.com/automation-practice-form";
    await from.navigate(appUrl);
    await from.enterFirstName("Nagabushan");
    await from.enterlastName("V");
    expect(page.url()).toBe(appUrl);
// pomtest
});