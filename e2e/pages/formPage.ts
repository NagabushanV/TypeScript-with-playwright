import { Page } from "@playwright/test";
// import{page} from "@playwright/test";

export default class From {
    static navigate(appUrl: string) {
        throw new Error('Method not implemented.');
    }
    page: Page;
    firstName = "#firstName";
    lastName = "#lastName";

    constructor(page: Page) {
        this.page = page;
    }
    async navigate(url: string) {
        await this.page.goto(url);
    }
    async enterFirstName(fname: string) {
        await this.page.locator(this.firstName).type(fname);
    }
    async enterlastName(lname: string) {
        await this.page.locator(this.lastName).type(lname);
        // code
    }
}