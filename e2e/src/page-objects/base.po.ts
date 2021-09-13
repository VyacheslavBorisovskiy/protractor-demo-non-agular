import { browser, ElementFinder, ExpectedConditions as EC } from "protractor"

export class BasePO {

    async clearAndSetInputValue(element: ElementFinder, value: string) {
        await element.clear();
        await element.sendKeys(value);
    }
  
    async waitForVisible(element: ElementFinder, timeout?: number) {
        await browser.wait(EC.visibilityOf(element), timeout);
    }

    async waitForClickable(element: ElementFinder, timeout?: number) {
        await browser.wait(EC.elementToBeClickable(element), timeout);
    }
}