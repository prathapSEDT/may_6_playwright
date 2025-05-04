import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    await page.goto("https://in.search.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAEFLXTXMNy_L4RQho8su68UF3O-wGaYCTJVgzxuzZ2dTJUEKqkhpdqsipe2V6Nypuyng3WvZCgjV_DVZsbeIdqMVLMzRkVsRFlhV8cIEgZu0uc6R_GYBfRbpG_QMjj3uyJuBai4Dx4ipmsN7dd9AxlleEtEas8nyrt1PCKfkObkb")
    await page.locator("//input[@id='yschsp']").fill("ipl")
    await page.waitForTimeout(1000)
    let searchResults: Array<Locator> = await page.locator("//ul[@class='sa-list']/li").all()
    for (let search of searchResults) {
        let resultText: string = await search.innerText()
        await expect(resultText.startsWith("ipl")).toEqual(true)
    }

    await page.pause()



});
