import { test, expect } from '@playwright/test';

test('KeyBoardAction', async ({ page }) => {

    // Open URL
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    // Press A key 
    await page.keyboard.press('A')

    // press Enter key
    //await page.keyboard.press('Enter')

    // press control key
    //await page.keyboard.press('Control')


    // Verify result 
    await expect (page.locator('#result').toHaveText('You entered: A'))
    //await expect (page.locator('#result').toHaveText('You entered: Enter'))
    //await expect (page.locator('#result').toHaveText('You entered: Control'))



    // wait for 3 sec
    await page.waitForTimeout(3000)


})

// Keyboard Action Copy Past

test ('KeyBoardActionCpoyPast', async ({ page }) => {

    // Open URL
    await page.goto('https://the-internet.herokuapp.com/key_presses');
})