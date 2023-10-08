import NavigationPage from "../../pageObjects/xxxxxxxx/navigationPage";
import StatisticsPage from "../../pageObjects/xxxxxxxx/statisticsPage";

context('Statistics', {tags: '@positive'}, () => {
    const navigationPage = new NavigationPage();
    const statisticsPage = new StatisticsPage();

    //#5744
    it('Send quick message, check statistics and download excel file', {tags: '@smoke'}, () => {
        cy.login();
        navigationPage.getStatisticsButton().click();

        statisticsPage.getCalendarButton().click();
        statisticsPage.getTodayCalendarButton().click();
        statisticsPage.getExportAsExcelButton().click();
        cy.readFile("cypress/downloads/Statistics.xlsx").should('contain', 'Content_Type');
        cy.parseXlsx('cypress/downloads/Statistics.xlsx').then(
            jsonData => {
                jsonData = jsonData[jsonData.length - 1].data;
                const footer = jsonData[jsonData.length - 1];
                statisticsPage.getFooterCells().then(cells => {
                    let index = 0;
                    for (const cell of cells) {
                        if (footer[index] == null) {
                            footer[index] = '';
                        }
                        if (typeof footer[index] === 'number') {
                            footer[index] = +parseFloat(footer[index]).toFixed(2);
                        }
                        assert.equal(cell.innerText, footer[index]);
                        index++;
                    }
                })
            }
        );
    });

    it('Check that values are sorted.', {tags: '@smoke'}, () => {
        cy.login();
        navigationPage.getStatisticsButton().click();

        statisticsPage.getHeaderTitle().should('be.visible');
        statisticsPage.getCalendarButton().click();
        statisticsPage.getLast3Months().click();
        statisticsPage.getGroupByButton().click();
        selectAllColumnOptions();
        statisticsPage.getColumnOptionDoneButton().click();
        statisticsPage.getColumnOptionDoneButton().should('not.exist');
        checkSorting(statisticsPage.getMonthLabel());
        checkSorting(statisticsPage.getDayLabel());
        checkSorting(statisticsPage.getAccountLabel());
        checkSorting(statisticsPage.getCountryLabel());
        checkSorting(statisticsPage.getPriceLabel());
        checkSorting(statisticsPage.getTotalAmountLabel());
    });

    const selectAllColumnOptions = () => {
        statisticsPage.getGroupByCheckboxes()
            .each(($checkbox) => {
                cy.wrap($checkbox)
                    .check({force: true})
                    .should('be.checked');
            });
    };
    
    const checkSorting = (label) => {
        label.click();
        statisticsPage.getTable()
            .find('[aria-sort="ascending"]')
            .should('be.visible');
        label.click();
        statisticsPage.getTable()
            .find('[aria-sort="descending"]')
            .should('be.visible');
    }
})
