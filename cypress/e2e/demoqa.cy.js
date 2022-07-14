// Part 2
// 1. Scenario ( https://demoqa.com/automation-practice-form ) Forms - Practice
// 2. Scenario ( https://demoqa.com/sortable ) Interactions - Sortable
// Author: Liene Neimane

import BasePage from "../pageObjects/Base.page.js";
import PracticeFormPage from "../pageObjects/PracticeForm.page.js";
import SortablePage from "../pageObjects/Sortable.page.js";

describe('Final task part 2', () => {

  // Scenario 1
  it.only('Forms - Practice forms', () => {
    BasePage.visitForm();
    PracticeFormPage.firstName.type("Liene");
    PracticeFormPage.lastName.type("Neimane");
    PracticeFormPage.email.type("liene@gmail.com");
    PracticeFormPage.genderFemale.click();
    PracticeFormPage.number.type("1234554321");
    PracticeFormPage.dateOfBirth.click();
    PracticeFormPage.setYear.select("1984");
    PracticeFormPage.setMonth.select("February");
    PracticeFormPage.setDay("29");
    PracticeFormPage.subjectsInput.type("math");
    PracticeFormPage.subjectsMath.click();
    PracticeFormPage.hobbiesSports.click();
    PracticeFormPage.hobbiesMusic.click();
    PracticeFormPage.currentAddress.type("Maizes iela 3");
    // Without an ad on bottom, it works
    PracticeFormPage.stateInput.click();
    PracticeFormPage.stateHaryana.click();
    PracticeFormPage.cityInput.click();
    PracticeFormPage.cityKarnal.click();
    PracticeFormPage.submit.click({force:true});
    PracticeFormPage.submitVali.should("contain","Liene Neimane")
      .and("contain","liene@gmail.com")
      .and("contain","Female")
      .and("contain","1234554321")
      .and("contain","29 February,1984")
      .and("contain","Maths")
      .and("contain","Sports, Music")
      .and("contain","Maizes iela 3")
      .and("contain","Haryana Karnal");
  });

  // Scenario 2
  it('Interactions - Sortable', () => {
    BasePage.visitSortable();
    SortablePage.numbersOrder.should("have.text","OneTwoThreeFourFiveSix");
    SortablePage.number.contains("Two")
      .trigger('mousedown')
      .trigger('mousemove', {pageY:100, force: true})
      .trigger('mouseup', {force: true});
    SortablePage.number.contains("Three")
      .trigger('mousedown')
      .trigger('mousemove', {pageY:100, force: true})
      .trigger('mouseup', {force: true});
    SortablePage.number.contains("Four")
      .trigger('mousedown')
      .trigger('mousemove', {pageY:100, force: true})
      .trigger('mouseup', {force: true});
    SortablePage.number.contains("Five")
      .trigger('mousedown')
      .trigger('mousemove', {pageY:100, force: true})
      .trigger('mouseup', {force: true});
    SortablePage.number.contains("Six")
      .trigger('mousedown')
      .trigger('mousemove', {pageY:100, force: true})
      .trigger('mouseup', {force: true});
    SortablePage.numbersOrder.should("have.text","SixFiveFourThreeTwoOne");
  });

})