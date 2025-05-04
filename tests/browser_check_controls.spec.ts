import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=/")
    let currencySelector = await page.getByLabel('Currency selector')
    await currencySelector.selectOption("Euro")
    let allLinks: Array<Locator> = await page.locator("//strong[text()='Information']/parent::div/following-sibling::ul//a").all()
    for (let link of allLinks) {
        let linkText: string | null = await link.textContent()
        await link.click()
        await page.waitForTimeout(35000)
        await page.goBack()
    }

    await page.pause()
});
