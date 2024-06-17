import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { siteUrl, validFormData } from '../common_step_definitions/constants';

Given('I am on the main page', () => {
  cy.visit(siteUrl);
});

When('I fill the form with valid data and submit', () => {
  cy.get('#name').type(validFormData.name);
  cy.get('#email').type(validFormData.email);
  cy.get('#phone').type(validFormData.phone);
  cy.get('#subject').type(validFormData.subject);
  cy.get('#description').type(validFormData.description);
  cy.get('#submitMessage').click();
});

Then('I should see a success message', () => {
  cy.get('.alert-success').should('contain', 'Message Sent Successfully!');
});

When('I fill the form with invalid email and submit', () => {
  cy.get('#name').type(validFormData.name);
  cy.get('#email').type('invalid-email');
  cy.get('#phone').type(validFormData.phone);
  cy.get('#subject').type(validFormData.subject);
  cy.get('#description').type(validFormData.description);
  cy.get('#submitMessage').click();
});

Then('I should see an error message', () => {
  cy.get('.alert-danger').should('contain', 'Invalid email address!');
});
