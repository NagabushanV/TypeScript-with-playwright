import { Page } from "@playwright/test";
export default class HomePage{
    // clickOnHomeMenu() {
    //     throw new Error('Method not implemented.');
    // }

    constructor(public page: Page) {

    }
    async clickOnHomeMenu() {
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.click("(//span[contains(text(),'special')]/../..)[2]")
    }


}