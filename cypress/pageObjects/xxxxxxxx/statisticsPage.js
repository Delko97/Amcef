export default class StatisticsPage {

    getHelpWizardIcon() {
        return cy.get('.m-l-5');
    }

    getExportAsExcelButton() {
        return cy.get("#st-btn-excel");
    }

    getTimeRangeInput() {
        return cy.get('#st-date')
    }

    getTodayCalendarButton() {
        return cy.get('.ranges :nth-child(1) > button');
    }

    getLast3Months() {
        return cy.get('.ranges :nth-child(8) > button');
    }

    getCalendarButton() {
        return cy.get('#st-date')
    }

    getFooterCells() {
        return cy.get('.mat-footer-row .mat-footer-cell');
    }

    getTotalValueOfSent() {
        return cy.get('.cdk-column-messageCount > span');
    }

    getTotalValueOfTotalAmount() {
        return cy.get('.mat-footer-row > .cdk-column-costs');
    }

    getTimeRangeItems() {
        return cy.get('.ranges .ng-star-inserted');
    }

    getGroupByButton() {
        return cy.get('#btn-group-by');
    }

    getColumnOptionsCheckboxes() {
        return cy.get('[type="checkbox"]');
    }

    getColumnOptionsDoneButton() {
        return cy.get('#btn-done');
    }

    getCampaignNameItems() {
        return cy.get('.mat-table tr > td.cdk-column-campaignName');
    }

    getPaginationItems() {
        return cy.get('.mat-paginator-range-actions .ng-star-inserted:not([aria-label])');
    }

    getTotalAmountLabel() {
        return cy.get('#label-total-amount');
    }

    getHeaderTitle() {
        return cy.get('#header-page-title', {timeout: 10000});
    }

    getTable() {
        return cy.get('.mat-table');
    }

    getColumnOptionDoneButton() {
        return cy.get('#btn-done');
    }

    getMonthLabel() {
        return cy.get('#label-month');
    }

    getDayLabel() {
        return cy.get('#label-day');
    }

    getAccountLabel() {
        return cy.get('#label-account');
    }

    getCountryLabel() {
        return cy.get('#label-country');
    }

    getPriceLabel() {
        return cy.get('#label-price');
    }

    getShowEntriesButton() {
        return cy.get('.mat-form-field-infix .mat-select');
    }

    getHundredItemsPerPage() {
        return cy.get('#option-per-100');
    }

    getColumnOptionLabels() {
        return cy.get('.mat-checkbox-label');
    }

    getTimeRangeApplyButton() {
        return cy.get('.btn');
    }

    getGroupByCheckboxes() {
        return cy.get('.mat-checkbox-input');
    }

    selectMaxResultsPerPage() {
        this.getShowEntriesButton().click();
        this.getHundredItemsPerPage().click();
    }
}
