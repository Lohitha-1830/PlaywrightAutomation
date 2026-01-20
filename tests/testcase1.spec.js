import { test, expect } from '@playwright/test'

test('verify product added to cart', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const searchBox = page.locator('#twotabsearchtextbox[type="text"]');
    await searchBox.fill('mobile back stand');
    await searchBox.press('Enter');
    await page.locator('#nav-search-submit-button').click();
    await page.setDefaultTimeout(6000);
    //await page.locator('.a-size-medium.a-spacing-none.a-color-base.a-text-normal:has-text("STRIFF mobSpin 360° Rotating Metal Phone Stand")')
    // .first().locator('#a-autoid-3-announce').click();

    await expect(page.locator('//h2//span[contains(text(),"STRIFF mobSpin 360° Rotating Metal Phone Stand")]')
        .first()).toBeVisible();

    //get product text
    const productName = await page.locator('//h2//span[contains(text(),"STRIFF mobSpin 360° Rotating Metal Phone Stand")]')
        .first().textContent();
    console.log(productName);
    //click on add to cart

    await page.locator('//button[@name="submit.addToCart"]/preceding::span[contains(text(),"STRIFF mobSpin")]/following::button[@id="a-autoid-3-announce"]').click();
    //await page.locator('//h2[contains(@aria-label,"STRIFF mobSpin")]/following::div[contains(@data-atcb-uid,"atcb-B0FGQTK31D-1")]')
    //  .first().click();
    
    //verify if cart has 1 item added
    const cart = page.locator('//span[@id="nav-cart-count"]');
    await expect(cart).toBeVisible();
    
    //click on cart
    await page.locator('//span[@id="nav-cart-count"]').click();
    
    //assert product
    await expect(page.locator(`//span[contains(text(),"${productName}")]`)).toHaveText(productName);




})