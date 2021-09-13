import { DataProvider } from "../data-provider/data-provider";
import { assertElementContainsText } from "../helpers/assertion-helper";
import { browser } from "protractor";
import { LoginPO } from "../page-objects/login.po";

describe('Login', () => {
    beforeEach(function(){
		browser.get('https://www.huffpost.com/');
});
	const loginPage = new LoginPO;
	it('with valid credentials', async () => {
		await loginPage.profileImage.click();
		await loginPage.login('borysovskiy@gmail.com', 'Jaguar10');
		
		await assertElementContainsText(await loginPage.profileEmail, DataProvider.account.email);
	});
});