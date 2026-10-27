import { test, expect } from '@playwright/test';

test('CheckBox', async ({ page }) => {

    // Open URL
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html')

    // select individual check box

    await page.locator("//input[@value='Manual Tester']").click()

    // verify result

   // await expect(page.locator("//input[@value='Manual Tester']").ToHaveText('Mahual Tester'));
// List of label names for tracking/logging

  const professions = ['Manual Tester', 'Automation Tester'];
 
  for (let i = 0; i < professions.length; i++) {
    const checkbox = page.locator("//input[@name='profession']").nth(i);
   
    await checkbox.check();
   
    // Verify it is checked
    await expect(checkbox).toBeChecked();
  }
 
  await page.waitForTimeout(5000);

})