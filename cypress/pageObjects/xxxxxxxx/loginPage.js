export default class LoginPage{

    getLoginButton() {
        return cy.get('#btn-login');
    }

    getEmailInput() {
        return cy.get('input[name="username"]')
    }

    getPasswordInput() {
        return cy.get('input[name="password"]')
    }

    getForgotPasswordLink() {
        return cy.get('#link-text');
    }

    getErrorMessage() {
        return cy.get('.mat-error');
    }

    getLoginVerificationField() {
        return cy.get('#login-verification-code');
    }

    getNoAccountLink() {
        return cy.get('.no-account');
    }

    setCredentialsAndLogin(email = Cypress.env('loginName'), password = Cypress.env('password')) {
        this.getEmailInput()
            .should('be.visible')
            .type(email);
        this.getPasswordInput()
            .should('be.visible')
            .type(password);
        this.getLoginButton().click();
    }
}
