import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';
import { log } from 'console';

test('has title', async ({ page }) => {

    const webUtil = new WebLib(page)
    await webUtil.launchBrowser()
    let userName: Locator = await page.getByRole('textbox', { name: 'Username' })
    let passWord: Locator = await page.getByRole('textbox', { name: 'Password' })
    let login: Locator = await page.getByRole('button', { name: 'Login' })

    await webUtil.fillData(userName, "Admin")
    await webUtil.fillData(passWord, "admin123")
    await webUtil.clickElement(login)
    // await page.getByRole('textbox', { name: 'Username' }).clear()
    // await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    // await page.getByRole('textbox', { name: 'Password' }).clear()
    // await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    // await page.getByRole('button', { name: 'Login' }).click()
    await page.pause()
});
