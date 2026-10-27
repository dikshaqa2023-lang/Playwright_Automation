import {test,expect} from "@playwright/test";
//import { scrollDown,scrollUp,scrollUpToElement } from "./Generics/TestUtil.js";

test("ScrollingPage",async({page})=>{

    //open application
    await page.goto("https://www.amazon.in/");

    //Returns when the required load state has been reached.
    await page.waitForLoadState('domcontentloaded');

    //scroll down
    await page.evaluate(()=>{
        //write Js commands
        window.scrollTo(0,5000);
       //window.scrollTo(0,document.body.scrollHeight);
    })

    await page.waitForTimeout(2000);

    //scroll up
    await page.evaluate(()=>{
        window.scrollTo(document.body.scrollHeight,0);
    })
        
await page.waitForTimeout(2000);

    //scroll upto element
    /* await page.getByText(/kitchen products from emerging brands/).scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
 */

});