Feature: 
As a user 
I want to be able to see stock summary of a selected stock
So that I can get the necessary details of the stock

  
  @focus
  Scenario: I want to verify that finance summary page is loaded correctly for the selected stock
  1) Verify that stock search is working as expected - should return list of results 
  1) I should be able to verify that right market is selected and shown in the summary page 
  2) I want to verify that graph is loaded correctly & shows prices on mouseover 

    Given I open home page
    When I search for "tesla"
    Then search page is loaded
    When I open the finance menu
    And I search for stock "Tesla"
    Then I verify "first" stock in the list is "Tesla IncTSLA : NASDAQ"
    When I select the stock to view the summary
    Then I verify that selected market is "NASDAQ"
    And I verify that graph is loaded correctly
    And I can see the prices on mouseover 





