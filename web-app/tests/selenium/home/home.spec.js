var Endpoints = require('../general/endpoints'),
    Config = require('../general/config'),
    Local = require('./home.constants');

describe('application', function () {

    it('should run sql', function () {
        // Given
        browser.driver.get(Endpoints.HOME);
        element(by.buttonText(Local.BUTTONS.RESET)).click();

        // When
        element(by.model(Local.APPLICATION.HOST.MODEL)).sendKeys(Local.APPLICATION.HOST.VALUE);
        element(by.model(Local.APPLICATION.DB.MODEL)).sendKeys(Local.APPLICATION.DB.VALUE);
        element(by.model(Local.APPLICATION.SQL.MODEL)).sendKeys(Local.APPLICATION.SQL.VALUE);
        element(by.buttonText(Local.BUTTONS.RUN_SQL)).click();
        browser.sleep(Config.TIMEOUT.SHORT);

        // Then
        element(by.xpath(Local.APPLICATION.RESULT.XPATH)).getText().then(function(value){
            expect(value).toBe(Local.APPLICATION.RESULT.TOTAL_COUNT);
        })
    })
});
