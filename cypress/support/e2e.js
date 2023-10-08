import './commands';
require('cypress-grep')();

const env = Cypress.env('env') || 'qa';

export default env;

afterEach(() => {
    cy.clearLocalStorage();
});
