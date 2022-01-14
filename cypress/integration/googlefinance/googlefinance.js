import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {googleSearchPage} from "../pageobjects/googlePage"
import { financePage } from "../pageobjects/financePage";

let term;
Given('I open home page', () => {
  googleSearchPage.open()
})


When('I search for {string}', (term) => {
  googleSearchPage.searchFor(term)
})

Then('search page is loaded', () => {
  googleSearchPage.searchPageIsLoaded()
})

When('I search for stock {string}', (stock) => {
  financePage.searchForStock(stock)
})

Then('I verify {string} stock in the list is {string}', (numbered, text) => {
  financePage.verifyEntry(numbered,text)
})


When('I open the finance menu', () => {
  financePage.open()
  financePage.isLoaded()
})


When('I select the stock to view the summary', () => {
  financePage.loadMarketSummary()
})

Then('I verify that selected market is {string}', (market) => {
  financePage.verifyMarketInSummary(market)
})

And('I verify that graph is loaded correctly', () => {
  financePage.verifyGraphIsLoaded()
})

And('I can see the prices on mouseover', () => {
  financePage.vrifyPriceOnMouseOver()
})





 




