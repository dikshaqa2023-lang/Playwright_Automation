import { test, expect } from '@playwright/test';

test('RadioButton', async ({ page }) => {

    // Open URL
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html');

    // Locate the radio button
    const year3RadioButton = page.locator("//input[@id='exp-2']")

    // select radio button 
    await year3RadioButton.check()

    // put assertion for verify button is checked

    await expect(year3RadioButton).toBeChecked() // true

    await expect(year3RadioButton.isChecked()).toBeTruthy()// retrive value 


    // Wait for 5 seconds (demo purpose only)
    await page.waitForTimeout(5000)

})