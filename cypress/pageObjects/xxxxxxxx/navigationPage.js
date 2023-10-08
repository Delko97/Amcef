export default class NavigationPage {

    getDashboardButton() {
        return cy.get('#btn-dashboard');
    }

    getDistributionListButton() {
        return cy.get('#btn-distributions');
    }

    getCampaignsButton() {
        return cy.get('#btn-campaigns');
    }

    getCampaignsCreateButton() {
        return cy.get('#btn-campaigns-create');
    }

    getQuickSendButton() {
        return cy.get('#btn-quicksend');
    }

    getTrafficAccountsButton() {
        return cy.get('#btn-trafficaccounts');
    }

    getStatisticsButton() {
        return cy.get('#btn-statistics');
    }

    getMessageHistoryButton() {
        return cy.get('#btn-messages-history');
    }

    getBudgetButton() {
        return cy.get('#btn-budgets');
    }

    getCreateDistributionListButton() {
        return cy.get('#btn-distributions-create');
    }

    getTemplatesButton() {
        return cy.get('#btn-templates');
    }

    getSmsButton() {
        return cy.get('[data-mat-icon-name="sms_icon"]');
    }

    getContactButton() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    getDynamicCreateCampaignButton() {
        return cy.get('#btn-campaigns-dynamic-create');
    }

    getBlockListButton() {
        return cy.get('#btn-distributions-blocklist');
    }

    getSenderIdRegulationButton() {
        return cy.get('#btn-sender-id-registration');
    }
}
