import { chromium } from '@playwright/test';
import {test, describe } from "node:test";
describe('launch Browser',() => {
// describe
    test('Open playwright', async ()=>{
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://playwright.dev/docs/intro')
        await browser.close();
    })
})