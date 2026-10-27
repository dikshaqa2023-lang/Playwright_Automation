
import { test, expect } from '@playwright/test';

test('Locators',async({page})=> {

    await page.goto('https://www.saucedemo.com/');

    //Locate id web element & enter user id - Used ID Property
//   await page.locator('id=user-name').fill('standard_user')

//Locate id web element & enter user id - Used by css selector

   await page.locator('#user-name').fill('standard_user');


    //Locate password web element and fill password - by using css selector
    await page.locator('#password').fill('secret_sauce');

    //Locate login button and perform click action- by using xpath
    //await page.locator("//input[@id='login-button']").click()

    await page.click("//input[@id='login-button']");

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/); // verify url
    await expect(page.locator('.title')) .toHaveText('Products'); // verify text

    const productElement = page.locator('.title')
    await expect(productElement).toBeVisible() //verify web element visibilty


})