import { Locator, Page } from "playwright";
import configData from '../../appconfig/app-config.json'
import { expect } from "playwright/test";
export default class WebLib {
    page: Page
    constructor(page: Page) {
        this.page = page
    }
    /*
    @methodname:launchBrowser
    @purpose:
    */
    async launchBrowser(): Promise<boolean> {
        let env: any = configData.env//qa,uat,statging
        let envDetails: any = configData[env]
        let weburl: any = envDetails['web_url']
        try {
            await this.page.goto(weburl)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async elementIsExist(webElement: Locator): Promise<boolean> {
        try {
            return await webElement.isVisible()
        } catch (error) {
            return false
        }
    }

    async elementNotExist(webElement: Locator): Promise<boolean> {
        try {
            return await webElement.isHidden()
        } catch (error) {
            return false
        }
    }

    async waitForWebElement(webElement: Locator, time: number = 350000): Promise<boolean> {
        try {
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForLoadState("load")
            await this.page.waitForLoadState("networkidle")
            await expect(webElement).toBeVisible({ timeout: time })
            return true
        } catch (error) {
            return false
        }
    }

    async fillData(webElement: Locator, inputData: string): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            let status: boolean = await this.waitForWebElement(webElement)
            if (status) {
                await webElement.clear()
                await webElement.fill(inputData)
                actionStatus = true
            }
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }

    async clickElement(webElement: Locator): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            let status: boolean = await this.waitForWebElement(webElement)
            if (status) {
                await webElement.click()
                actionStatus = true
            }
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }

    async forceClickElement(webElement: Locator): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            let status: boolean = await this.waitForWebElement(webElement)
            if (status) {
                await webElement.clear()
                await webElement.click({ force: true })
                actionStatus = true
            }
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }

    async dbClickonELement(webElement: Locator): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            let status: boolean = await this.waitForWebElement(webElement)
            if (status) {
                await webElement.clear()
                await webElement.dblclick({ force: true })
                actionStatus = true
            }
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }

    async radioOrCheckBoxSelected(webElement: Locator): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            let status: boolean = await webElement.isChecked()
            return status
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }

    async selectRadioOrCheckBox(webElement: Locator): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            await webElement.check()
            return true
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }


    async selectDropDownOption(webElement: Locator,optionName:string): Promise<boolean> {
        let actionStatus: boolean = false
        try {
            await webElement.selectOption(optionName)
            return true
        } catch (error) {
            actionStatus = false
        }
        return actionStatus
    }



}