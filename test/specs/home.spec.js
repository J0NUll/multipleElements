import homePage from '../pageobjects/home.page.js'

describe('My home page', () => {
    xit('should verify list items', async () => {
        await homePage.open()
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});

    })

   
        

});
