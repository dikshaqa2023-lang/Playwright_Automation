import { test, expect } from '@playwright/test';

test('Demo', async ({ page }) => {

    // Open URL
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html');

    // Locate the first name input box
    const firstNameInput = page.locator("//input[@name='firstname']");

    // Verify that the input box is visible
    await expect(firstNameInput).toBeVisible();

    // Verify that the input box is empty
    await expect(firstNameInput).toBeEmpty();

    // Verify that the input box is enabled
    await expect(firstNameInput).toBeEnabled();

    // Enter the first name
    await firstNameInput.fill('Deeksha');

    // Verify that the entered value is correct
    await expect(firstNameInput).toHaveValue('Deeksha');

    // Wait for 5 seconds (demo purpose only)
    await page.waitForTimeout(5000);

});