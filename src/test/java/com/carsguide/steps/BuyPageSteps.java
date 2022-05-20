package com.carsguide.steps;

import com.carsguide.pages.BuyPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuyPageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I hover mouse on buy \\+ sell tab$")
    public void iHoverMouseOnBuySellTab() {
        new BuyPage().hoverMouse();
    }

    @And("^I click search cars link$")
    public void iClickSearchCarsLink() {
        new BuyPage().clickOnSearchCars();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
    new BuyPage().selectMakeOfCarFromVisibleText(make);


    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new BuyPage().selectModelOfCarFromVisibleText(model);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String pickUpPoint)  {
        new BuyPage().selectLocationOfCarFromVisibleText(pickUpPoint);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String dollars)  {
        new BuyPage().selectPriceOfCarFromVisibleText(dollars);

    }

    @And("^I click on find my next car tab$")
    public void iClickOnFindMyNextCarTab() {
        new BuyPage().clickOnFindMyNewCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String sms)  {
        new BuyPage().verifyMakeText(sms);


    }
}
