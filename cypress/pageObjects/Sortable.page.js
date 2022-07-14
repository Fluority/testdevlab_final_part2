import BasePage from "../pageObjects/Base.page.js";
 
class SortablePage extends BasePage {

    static get numbersOrder() {
        return cy.get('#demo-tabpane-list');
    }

    static get number() {
        return cy.get('div[class="list-group-item list-group-item-action"]');
    }

}

export default SortablePage;