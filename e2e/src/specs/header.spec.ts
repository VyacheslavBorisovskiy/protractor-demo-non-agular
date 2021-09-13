import { browser } from "protractor";
import { DataProvider } from "../data-provider/data-provider";
import { assertElementContainsText } from "../helpers/assertion-helper";
import { HeaderPO } from "../page-objects/header.po";

describe('Open the menu item of header', () => {
    beforeEach(function(){
            browser.get('https://www.huffpost.com/');
    });

    afterAll(function() {
        // browser.reset();
        browser.navigate().back();
    });

    const headerPage = new HeaderPO();

    it('by clicking the button', async () => {
        await headerPage.newsMenuItem.click();
        await assertElementContainsText(await headerPage.newsTitle, DataProvider.headerMenuItems.menuItem);
    })
})