import elements from '../pageobjects/elements.page.js'

describe('Heroku Checkbox Page', () => {
    xit('To check if Option 1 is selected', async () => {
        await elements.open()

        for (let i=0;i<3;i++){
            await elements.addButton.click()
        }

            await browser.pause(3000)
            console.log(await elements.btnNumber)
            await expect(elements.btnNumber).toBeElementsArrayOfSize(4);
            
            for (let i=0;i<3;i++){
                await elements.addButton.click()
            }


    })

    

    
});
