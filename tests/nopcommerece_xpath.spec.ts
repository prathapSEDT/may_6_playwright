import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.locator("//input[@id='FirstName']").fill("firstname")
    await page.pause()

});
