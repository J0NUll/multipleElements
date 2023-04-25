import elements from '../pageobjects/elements.page.js'

describe('Heroku Checkbox Page', () => {
    it('To check if Option 1 is selected', async () => {
        await elements.open()

        // await browser.pause (3000)
        // await (elements).addButton.click()
        // await (elements).addButton.click()
        // await (elements).addButton.click()
        // await (elements).addButton.click()
        // await (elements).addButton.click()
        // await browser.pause (2000)
        // await (elements).dlteButton.click()
        // await (elements).dlteButton.click()
        for (let i=0;i<3;i++){
            await elements.addButton.click()
        }

            await browser.pause(3000)
            console.log(await elements.btnNumber)
            await expect(elements.btnNumber).toBeElementsArrayOfSize(4);
            
        
    })

    
});
