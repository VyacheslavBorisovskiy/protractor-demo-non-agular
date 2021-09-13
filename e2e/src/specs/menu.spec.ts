import { browser } from "protractor";
import { DataProvider } from "../data-provider/data-provider";
import { assertElementContainsText } from "../helpers/assertion-helper";
import { MenuPO } from "../page-objects/menu.po"

describe('Open the menu', () => {
    beforeEach(function(){
            browser.get('https://www.huffpost.com/');
    });

    afterAll(function() {
        // browser.reset();
        menuPage.closeMenuButton.click();
    });

    const menuPage = new MenuPO;

    it('by clicking the button', async () => {
        await menuPage.hamburgerMenu.click();
        await assertElementContainsText(await menuPage.menuItem, DataProvider.hamburgerMenuItems.menuItem);
    })
})