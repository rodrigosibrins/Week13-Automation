describe("Get wikipedia page via google", () => {
    beforeAll('open browser', () => {
        return browser.url('https://www.google.com/');
    });
    it('from google to wikipedia', () => {
        let inputSelector = $('//input[@class="gLFyf gsfi"]');
        let wikiLink = $('//h3[@class="LC20lb DKV0Md"]');
        inputSelector.setValue('wikipedia');
        inputSelector.keys('Enter');
        wikiLink.click();
        browser.pause(3000);
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre');
    });
});