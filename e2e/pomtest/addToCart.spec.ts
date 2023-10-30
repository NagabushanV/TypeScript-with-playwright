import { test, expect } from '@playwright/test';
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from '../pages/HomePage';
// import SpecialHotPage from "../pages/SpecialHotPage"
import HomeProductPage from '../pages/homeProductPage';

const email = "nagabushanv11@gmail.com";
const password = "Naga@1999";
test.describe("Page object test demo", async()=>{


test("Register test_01", async ({ page, baseURL }) =>{
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Nagabushan");
    await register.enterLastName("Vv")
    await register.enterEmail(email);
    await register.enterTelephone("1234567890");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    expect(register.isSubscribeChecked())
    await register.clickTermandCondition();
    await register.clickContinueToRegister();

})

test("Login test_02", async ({ page, baseURL })=>{
    const login = new LoginPage(page)
    await page.goto(`${baseURL}route=account/login`)
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
})
// 
test("add to cart", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const product = new HomeProductPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.login(email, password);
    await homePage.clickOnHomeMenu();
    await product.selectProducts();
    await product.addFirstProductToTheCart();
    const isCartVisible = await product.isToastVisible();
    expect(isCartVisible).toBeVisible();


 })

})