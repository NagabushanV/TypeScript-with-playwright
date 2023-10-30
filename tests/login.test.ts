import { chromium } from '@playwright/test';
import test, { describe } from "node:test";
describe('launch Browser',() => {

    test('open Letcode', async ()=>{
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://Letcode.in/');
        await page.click("text=Log in");
        await page.fill("input[name='email']", 'koushik350@gmail.com');
        await page.fill("input[name='password']",'pass123$');
        await page.click("button:text('LOGIN')")
        await page.click('')
        await browser.close()
    })
})