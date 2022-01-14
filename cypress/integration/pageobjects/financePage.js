class FinancePage {

    open() {

        cy.get('.GOE98c').click()
        cy.get('a:contains(Finance):eq(0)').click()
        this.getIframeBody().find('button[aria-label="OK, Got it"]')
        cy.should('have.text', 'OK, Got it').click()
    }

    getIframeBody = () => {
        return this.gteIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    gteIframeDocument() {
        return cy
            .get('iframe')
            .its('0.contentDocument').should('exist')
    }

    isLoaded() {
        cy.title().should('include', 'Finance')
    }

    searchForStock(stock) {
        cy.get('.M52nVb .d1dlne .Ax4B8').type(stock)
    }

    verifyEntry(numbered, stockText) {
        cy.get('.mLoZRc > div > div > div[role="option"]').as('stocklist')

        if (numbered == 'first') {
            cy.get('@stocklist').first().as('indice')
        } else if(numbered == 'second') {
            cy.get('@stocklist').second().as('indice')
        }
        cy.get('@indice').should('contains.text', stockText)

    }

    loadMarketSummary(){
        cy.get('@indice')
        .click()
    }

    verifyMarketInSummary(market){
        cy.get('.PdOqHc').should('contains.text', market)
        cy.get('.ushogf').trigger('mouseover')
    }


    verifyGraphIsLoaded(){
        cy.get('.ushogf').should('be.visible')
    }

    vrifyPriceOnMouseOver(){
        cy.get('.ushogf').trigger('mouseover')
        cy.get('.hSGhwc').should('be.visible')
        cy.scrollTo(0, 0)
        cy.get('div > p.hSGhwc-SeJRAd').should('contains.text', '$1,0')
    }


}

export const financePage = new FinancePage();