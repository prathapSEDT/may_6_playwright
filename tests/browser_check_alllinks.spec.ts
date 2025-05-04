import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    let allLinks: Array<Locator> = await page.locator("//div[@id='nav-xshop']/ul//a").all()
    for (let link of allLinks) {
        if (await link.isVisible()) {
            let linkText: string | null = await link.textContent()
            let currentPageURl = await page.url()
            console.log(currentPageURl)
            await link.click()
            let nextPageURl = await page.url()
            console.log(currentPageURl)
            await page.waitForTimeout(35)
            await page.goBack()
        }

    }

    await page.pause()
});
