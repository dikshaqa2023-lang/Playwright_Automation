import { test, expect } from '@playwright/test';

test('Select multiple Selenium Commands', async ({ page }) => {

  await page.goto(
    'https://www.techlistic.com/p/selenium-practice-form.html'
  );


  const targetElement = page.locator("//b[text()='Download File:']");

// Scrolls the page until the element is visible in the viewport
await targetElement.scrollIntoViewIfNeeded();

await page.waitForTimeout(5000);

  // Locate the Selenium Commands list box
  const dropdown = page.locator('#selenium_commands');

  // Select multiple options by visible label
  await dropdown.selectOption([
    { label: 'Wait Commands' },
    { label: 'WebElement Commands' }
  ]);

  await page.waitForTimeout(5000);
  
  // Verify the selected options
  const selectedOptions = await dropdown.locator('option:checked').allTextContents();

  console.log('Selected options:', selectedOptions);

  await expect(dropdown.locator('option:checked')).toHaveCount(2);

  await expect(dropdown.locator('option:checked')).toContainText([
    'Wait Commands',
    'WebElement Commands'
  ]);
});
