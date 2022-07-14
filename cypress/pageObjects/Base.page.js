class BasePage {

    static visitForm() {
        cy.visit("https://demoqa.com/automation-practice-form");
    }

    static visitSortable() {
        cy.visit("https://demoqa.com/sortable");
    }

}
export default BasePage;