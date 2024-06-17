import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { adminUrl, adminLogin, adminPassword, roomDetails } from '../common_step_definitions/constants';

Given('I am logged in as an admin', () => {
  cy.visit(adminUrl);
  cy.get('input[name="username"]').type(adminLogin);
  cy.get('input[name="password"]').type(adminPassword);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/admin');
});

When('I add a new room with valid details', () => {
  cy.get('a[href="#/admin/rooms"]').click();
  cy.get('input[name="roomNumber"]').type(roomDetails.number);
  cy.get('input[name="type"]').type(roomDetails.type);
  if (roomDetails.accessible) {
    cy.get('input[name="accessible"]').check();
  }
  cy.get('input[name="roomPrice"]').type(roomDetails.price);
  cy.get('textarea[name="features"]').type(roomDetails.features);
  cy.get('input[name="image"]').type(roomDetails.imageUrl);
  cy.get('button').contains('Create').click();
});

Then('I should see the new room listed on the main page', () => {
  cy.get('.room').should('contain', roomDetails.number)
                 .and('contain', roomDetails.type)
                 .and('contain', roomDetails.price);
});
