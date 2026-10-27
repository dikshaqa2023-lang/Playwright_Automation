const {test,expect} = require('@playwright/test');

test('Open Google page and check title',async({page})=>
  {

    // test code will go here
   await page.goto('https://playwright.dev/');
   await page.getByRole('link', { name: 'Get started' }).click();
  const pageTitle = await page.title()
  console.log("Page title is ",pageTitle)

  const pageUrl = page.url()
  console.log("Page Url is",pageUrl)

   await expect(page).toHaveTitle(/Google/);


}
)