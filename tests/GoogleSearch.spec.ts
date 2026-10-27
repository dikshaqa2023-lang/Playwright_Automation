import { test, expect } from "@playwright/test";

test("Handle Google search suggestions", async ({ page }) => {

    // Open Google
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    // Enter search keyword
    await page.locator('textarea[name="q"]').fill("Playwright");

    await page.waitForTimeout(2000);

    // Locate search suggestions
    const suggestions = page.locator("ul[role='listbox'] [role='option']");

    // Wait for the first suggestion
    await expect(suggestions.first()).toBeVisible();

    // Get all suggestion texts
    const allOptions: string[] = await suggestions.allInnerTexts();

    console.log("Total options are: " + allOptions.length);

    // Print all suggestions
    for (const option of allOptions) {
        console.log(option);
    }
});
