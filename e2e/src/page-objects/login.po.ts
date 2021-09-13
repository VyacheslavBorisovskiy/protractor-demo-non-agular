import { browser, by, By, element } from "protractor";
import { $ } from 'protractor';
import { BasePO } from "./base.po";

export class LoginPO extends BasePO{
	
    readonly loginButton = $('#nav__right__sign-in');
    readonly inputUserName = element(by.id('1-email'));
    // readonly inputPassword = element(by.input('password'));
    readonly inputPassword = element(by.xpath('//input[@type="password"]'));
    readonly submitButton = element(by.buttonText('Log In'));

    readonly profileImage = element(by.partialLinkText('/member'));
    readonly profileEmail = element(by.xpath('//address[@class="profile-card__email"]'));
  
// TODO: Try to not use waitForClickable    
async login(email: string, password: string):Promise<void> {
      await this.waitForClickable(this.inputUserName);
      await this.clearAndSetInputValue(this.inputUserName, email);
      await this.clearAndSetInputValue(this.inputPassword, password);
      await this.loginButton.click();
    } 
    
    async openProfile(): Promise<void> {
        // await this.waitForVisible(this.profileImage);

        await this.profileImage.click();
    }
}