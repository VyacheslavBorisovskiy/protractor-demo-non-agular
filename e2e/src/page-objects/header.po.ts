import { element } from "protractor";
import { $, by } from 'protractor';

export class HeaderPO {

    // readonly newsMenuItem = element(by.linkText('NEWS'));

    readonly newsMenuItem = element(by.xpath('/html/body/div[1]/div[5]/nav/div/div[2]/a[1]'));

    // readonly newsTitle = element(by.xpath('/html/body/div[1]/div[4]/div[3]/div[1]/section/div[1]/h2'));

    readonly newsTitle = element(by.xpath('//h2[@class="zone__title__text"]'));
    
    


}