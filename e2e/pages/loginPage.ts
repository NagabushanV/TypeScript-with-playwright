import { Page } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page) { }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }
// email
    async enterEmail(emailadress: string) {
        await this.page.locator("#input-email").fill(emailadress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("//input[@name='password']").fill(password);
    }
    async clickLoginBtn() {
        // await Promise.all([
        //     this.page.waitForNavigation(),
        // ])
        await this.page.locator("//input[@value='Login']").click();
    }
}