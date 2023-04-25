import homePage from '../pageobjects/home.page.js'

describe('My home page', () => {
    xit('should verify list items', async () => {
        await homePage.open()
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});

    })

    it('should verify list items', async () => {
        await homePage.open()
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize(45);

    })
    
        

});
