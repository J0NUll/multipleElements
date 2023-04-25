import Page from './page.js';

class homePage extends Page {

    get listExamples() {
        return $$('ul li');
    }

open() {
        return super.open('');
    }
}

export default new homePage();