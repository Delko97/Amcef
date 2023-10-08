import LoginPage from "../../pageObjects/xxxxxxxx/loginPage";

context('Login test', {tags: ['@smoke', '@positive']}, () => {
    const loginPage = new LoginPage();

    it('Login and logout test', () => {
        cy.login();
        cy.logout();
    });

    //#5563
    describe('Switch access to page and login ', () => {
        it('Login with access set to false', () => {
            cy.allowPortalAccess(false, Cypress.env('defaultUserID'));
            cy.visit(Cypress.config().baseUrl);
            loginPage.setCredentialsAndLogin();
            cy.fixture('/translations.json').then(data => {
                loginPage.getErrorMessage(0).should('have.text', data.portalAccessDisabled);
            })
        })
        after('Allow portal access', () => {
            cy.allowPortalAccess(true, Cypress.env('defaultUserID'));
        });
    });
});
