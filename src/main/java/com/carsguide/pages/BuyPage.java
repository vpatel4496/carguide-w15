package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuyPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuyPage.class.getName());

    public BuyPage(){
        PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement hoverMouseOnBuyPlusSell;

    @CacheLookup
    @FindBy(linkText = "Search Cars")
    WebElement searchCars;

    @CacheLookup
    @FindBy(xpath = "//div[@class='heading main-heading item-ad-wrapper ']/h1")
    WebElement newAndUsedCarSearch;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeOfCar;

    @CacheLookup
    @FindBy(id = "models")
    WebElement modelOfCar;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement price;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCar;

    @CacheLookup
    @FindBy(xpath = "//input[@id='uhf-make']")
    WebElement makeText;



    public void hoverMouse(){
        log.info("Hover mouse: " + hoverMouseOnBuyPlusSell.getText());
        mouseHoverToElement(hoverMouseOnBuyPlusSell);
    }

    public void clickOnSearchCars(){
        log.info("Click On: " + searchCars.getText());
        clickOnElement(searchCars);
    }

    public void selectMakeOfCarFromVisibleText(String make){
        log.info("Select make: " + makeOfCar.getText());
        selectByVisibleTextFromDropDown(makeOfCar,make);
    }

    public void selectModelOfCarFromVisibleText(String model){
        log.info("Select model: " + modelOfCar.getText());
        selectByValueFromDropDown(modelOfCar,model);
    }
    public void selectLocationOfCarFromVisibleText(String pickUpPoint){
        log.info("Select Location: " + location.getText());
        selectByVisibleTextFromDropDown(location,pickUpPoint);
    }
    public void selectPriceOfCarFromVisibleText(String dollars){
        log.info("Select price: " + price.getText());
        selectByVisibleTextFromDropDown(price,dollars);
    }
    public void clickOnFindMyNewCar(){
        log.info("Click On: " + findMyNextCar.getText());
        clickOnElement(findMyNextCar);
    }
    public String verifyMakeText(String sms){
        log.info("Verify: " + makeText.getText());
        return getTextFromElement(makeText);
    }

    }

