import {test,expect} from "@playwright/test";


test("FooterAutomate",async({page})=>{


    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    const contactUs = page.locator("footer a").filter({
        hasText: "Contact Us"
    });

    await expect(contactUs).toBeVisible();
    await contactUs.click();

    await expect(page).toHaveURL(/route=information\/contact/);
});

   // let allLinks:Locator[]=await page.locator("footer a").all();
/* console.log("Total footer links are: "+allLinks.length);//16

for(let link of allLinks)
{
    console.log(await link.innerText());
    if((await link.innerText()).includes("Contact Us"))
    {
        console.log("Expected link Found!");
        //click
       await link.click();
       break;
        
    }
    
}


 */
