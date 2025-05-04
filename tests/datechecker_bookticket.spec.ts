import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async ({ page }) => {
    let userInputDate = "30-06-2025"
    const [day, month, year] = userInputDate.split("-").map(Number);
    const userDate = new Date(year, month - 1, day)
    const monthName = userDate.toLocaleString('default', { month: 'long' })




    const date = new Date()
    const dayOfMonth = date.getDate()
    const yearFromInput = date.getFullYear()
    console.log(dayOfMonth, monthName, yearFromInput)
    let checkDate: string = ""
    const today = new Date();
    today.setHours(0, 0, 0, 0)
    userDate.setHours(0, 0, 0, 0)
    if (userDate.getTime() === today.getTime()) {
        checkDate = "Today"
    } else if (userDate.getTime() > today.getTime()) {
        checkDate = "Future"
    } else {
        throw new Error("can not book a ticket for future")
    }

    await page.goto("https://www.abhibus.com/")
    await page.locator("//h3[text()='Departure']").click()
    await page.pause()
    let monthFound: boolean = true
    if (checkDate === 'Future') {

        while (monthFound) {
            let calenderWidgetMonth = (await page.locator("//div[@class='container month light neutral text ']").innerText()).trim().replaceAll("\\n", "")
            if (calenderWidgetMonth != monthName + " " + yearFromInput) {
                await page.locator("//span[@class='calender-month-change']/i").click()
            } else {
                await page.locator(`//*[text()='${dayOfMonth}']`).click()
                break
            }
        }

    } else {

    }



});
