const searchBox = '#L2AGLb'


class GoogleSearchPage {

    open() {
        cy.visit("/")
        cy.viewport('macbook-15')
    }



    searchPageIsLoaded() {
        cy.get('div:contains(tesla)')
            .should('have.length.greaterThan', 3)
            .then(($list) => {
                expect($list.length).to.be.above(3)
            })
    }


    searchFor(term) {
        cy.wrap(term).as('term')
        cy.get(searchBox).click();
        cy.get('input[name="q"]').as('search')
        cy.get('@search').type(term + '{enter}')
    }


}


export const googleSearchPage = new GoogleSearchPage();