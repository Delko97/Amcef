import 'cypress-file-upload';
import 'cypress-localstorage-commands';
import 'cypress-iframe';
import 'cypress-mailhog';
import LoginPage from "../pageObjects/xxxxxxxx/loginPage";
import NavigationPage from "../pageObjects/xxxxxxxx/navigationPage";
import DashboardPage from "../pageObjects/xxxxxxxx/dashboardPage";

const localisations = [];

const localisationUrls = [
    {
        'locale': 'en',
        'url': Cypress.config().baseUrl + '/assets/i18n/en-US.json'
    },
    {
        'locale': 'ru',
        'url': Cypress.config().baseUrl + '/assets/i18n/ru-RU.json'
    }];

Cypress.Commands.add('getLocalisations', () => {
    localisationUrls.forEach(localisation => {
        cy.request({
            url: localisation.url,
            timeout: 10000
        }).then(data => {
            localisations.push({
                locale: localisation.locale,
                translations: data.body
            });
        });
    });
});

Cypress.Commands.add('T', (keys, language = 'en') => {

    let value = localisations.find(localisation => localisation.locale === language).translations;
    keys.split('.').forEach(key => {
        value = value[key];
    });
    if (value)
        return cy.wrap(value);
    else
        return cy.wrap("Ooops, seems like path to value is wrong or doesn't exist..");
});

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});

Cypress.Commands.add('createRequest', (data, status = true) => {
    cy.request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        body: data.body,
        failOnStatusCode: status
    });
});

Cypress.Commands.add('login', (loginName = Cypress.env('loginName'), password = Cypress.env('password')) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('xxxxxxxx') + '/api/v1/authentication/login',
        body: {
            Email: loginName,
            Password: password,
            Username: loginName,
        }
    })
        .its('body')
        .then(body => {
            cy.setLocalStorage("refreshToken", body.value.refreshToken);
            cy.setLocalStorage("token", body.value.token);
            cy.setLocalStorage("userGuid", body.value.userId);
            let trafficAccountId = [];

            body.value.trafficAccounts.forEach((item) => {
                trafficAccountId.push(item.id);
            });
            cy.setLocalStorage("trafficAccountIds", JSON.stringify(trafficAccountId));
        })
    cy.visit('/');
});


Cypress.Commands.add('logout', () => {
    const loginPage = new LoginPage();
    const navigationPage = new NavigationPage();
    const dashboardPage = new DashboardPage();
    navigationPage.getDashboardButton().click();
    dashboardPage.getInitialsButton()
        .should('be.visible')
        .click();
    dashboardPage.getLogoutButton().click();
    loginPage.getLoginButton().should('be.visible');
});

Cypress.Commands.add('query', (query, db = Cypress.env("db")) => {
    return cy.task('queryTestDb', {query, db});
});
