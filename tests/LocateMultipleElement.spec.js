import { test, expect } from '@playwright/test';

// Open URL
test('Locators',async({page})=> {

 await page.goto('https://www.saucedemo.com/');

   // Enter username 
   await page.locator('#user-name').fill('standard_user');


    // Enter Password
      await page.locator('#password').fill('secret_sauce');

    //Locate login button and perform click action- by using xpath
    //await page.locator("//input[@id='login-button']").click()

    await page.click("//input[@id='login-button']");

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/); // verify url
    
    // Find list of all products

    const productName = await page.$$('.inventory_item_name')

    // count products and print
    console.log('Total no. of products:' ,productName.length)

    // long through each element and print the product name
    for(const product of productName)
    {
        const name = await product.textContent() // each element is an elementhanble
        console.log(name)
    }

})