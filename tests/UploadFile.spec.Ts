import { test, expect } from '@playwright/test';

test('Upload a file', async ({ page }) => {
    await page.goto(
        'https://www.techlistic.com/p/selenium-practice-form.html'
    );

    // Locate the file input
    const upload = page.locator("input[type='file']");

    // Upload a file
    await upload.setInputFiles('C:\Users\HP\Desktop\AA.pdf');

    // Verify the file is selected
    await expect(upload).toHaveValue(/AA\.pdf/);
});