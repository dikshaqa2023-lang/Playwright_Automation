import { test, expect } from '@playwright/test';

test('DialogHandling', async ({ page }) => {

  // 1. Open the website
  await page.goto('https://practice.expandtesting.com/js-dialogs');

  // 2. Register the alert handler
  page.once('dialog', async (dialog) => {
    console.log('Dialog type:', dialog.type());
    console.log('Alert message:', dialog.message());

    expect(dialog.type()).toBe('alert');

    // Click OK on the alert
    await dialog.accept();
  });

  // 3. Click the alert button
  await page.locator('#js-alert').click();

  // 4. Verify the page remains open
  await expect(page).toHaveURL(
    'https://practice.expandtesting.com/js-dialogs');

    await page.waitForTimeout(5000);
  

});


// Click the button that triggers the alert
  //await page.locator("//button[@id='js-alert']").click()
  
   