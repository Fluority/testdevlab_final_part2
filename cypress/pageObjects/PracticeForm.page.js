import BasePage from "../pageObjects/Base.page.js";
 
class PracticeFormPage extends BasePage {

    static get firstName() {
        return cy.get('#firstName');
    }

    static get lastName() {
        return cy.get('#lastName');
    }

    static get email() {
        return cy.get('#userEmail');
    }

    static get genderFemale() {
        return cy.get('label[for="gender-radio-2"]');
    }

    static get number() {
        return cy.get('#userNumber');
    }

    static get dateOfBirth() {
        return cy.get('#dateOfBirthInput');
    }

    static get setYear() {
        return cy.get('select[class="react-datepicker__year-select"]');
    }

    static get setMonth() {
        return cy.get('select[class="react-datepicker__month-select"]');
    }

    static get setDay() {
        return cy.get('div[aria-label="Choose Wednesday, February 29th, 1984"]');
    }

    static get subjectsInput() {
        return cy.get('#subjectsInput');
    }

    static get subjectsMath() {
        return cy.get('#react-select-2-option-0');
    }

    static get hobbiesSports() {
        return cy.get('label[for="hobbies-checkbox-1"]');
    }

    static get hobbiesMusic() {
        return cy.get('label[for="hobbies-checkbox-3"]');
    }

    static get currentAddress() {
        return cy.get('#currentAddress');
    }

    static get stateInput() {
        return cy.get('#state');
    }

    static get stateHaryana() {
        return cy.get('#react-select-3-option-2');
    }

    static get cityInput() {
        return cy.get('#city');
    }

    static get cityKarnal() {
        return cy.get('#react-select-4-option-0');
    }

    static get submit() {
        return cy.get('#submit');
    }

    static get submitVali() {
        return cy.get('tbody');
    }
}

export default PracticeFormPage;