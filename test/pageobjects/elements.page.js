import Page from './page.js';


class elements extends Page {
    



    get addButton () {
        return $('//*[@id="content"]/div/button');
    }

    get dlteButton () {
        return $('//*[@id="elements"]/button[1]')
    }



    get btnNumber() {
        return $$('div button')

    }
    


    open () {
        return super.open('add_remove_elements/');
    }
}

export default new elements();
