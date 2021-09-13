import { $, by } from 'protractor';
import { browser, element } from "protractor";
import { BasePO } from "./base.po";

export class MenuPO extends BasePO{
    
    readonly hamburgerMenu = element(by.id('hamburger'));
    // readonly hamburgerMenu = element(by.xpath('//button[@class="hamburger"]')); // an alternative

    readonly menuItem = element(by.xpath('//a[@href="https://www.huffpost.com/news/politics"]'));
    // readonly menuItem = element(by.xpath('/html/body/div[1]/div[1]/div/div/div[2]/div[2]/a[1]')); // an alternative
    
    readonly closeMenuButton = element(by.xpath('//button[@aria-label="Close Menu"]'));
    

    // async clickHamburgerMenu() {
    //     await this.waitForClickable(this.hamburgerMenu, 20000);
    // }
    
}