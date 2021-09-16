import { browser } from "protractor"
import {Workbook, Row, Cell, Worksheet} from 'exceljs';


describe('Reading', function(){
    let rawdata;
    beforeEach(function(){
        browser.get('https://www.huffpost.com/');
        
});

    it('a JSON file', function(){
        browser.manage().timeouts().implicitlyWait(30000);
        const fs = require('fs');

        rawdata = fs.readFileSync('./data-provider/demo-response.json');

        // console.log(rawdata);
    })

    it('Writing to Excel', function(){
        // browser.manage().timeouts().implicitlyWait(30000);
        var wb = new Workbook();
        var worksheet = wb.addWorksheet('Demo Sheet');
        browser.getTitle().then(function(title){
            worksheet.getRow(1).getCell(1).value = title;
        });
        wb.xlsx.writeFile('./data-provider/demo-write.xlsx');

        // wb.xlsx.readFile("./data-provider/demo-write.xlsx").then(function(){
        // let sheet:Worksheet = wb.getWorksheet("Sheet1");
        
        // sheet.getRow(1).getCell(2).value = 'hey';

        });

    });
});