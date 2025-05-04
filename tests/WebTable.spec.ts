import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    await page.goto("https://www.iplt20.com/points-table/men")
    let rows: Array<Locator> = await page.locator("//tbody[@id='pointsdata']/tr").all()
    for (let r = 1; r < rows.length; r++) {
        let tdXpath = `//tbody[@id='pointsdata']/tr[${r}]/td`
        let cols: Array<Locator> = await page.locator(tdXpath).all()
        for (let c = 1; c < cols.length; c++) {
            let data = `//tbody[@id='pointsdata']/tr[${r}]/td[${c}]`
            let celldata = await page.locator(data).innerText()
            console.log(celldata)
        }
        console.log("=======================")

    }



});
