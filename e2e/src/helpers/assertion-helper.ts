import { browser, WebElement, ExpectedConditions as EC } from "protractor"

export async function assertElementContainsText(element: WebElement, text: string) {
    const elementText = await element.getText();
    expect(elementText.toLowerCase()).toContain(text.toLowerCase());
}