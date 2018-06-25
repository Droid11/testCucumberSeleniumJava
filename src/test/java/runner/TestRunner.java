package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by Robert Bicanic Bache (c)
 */

// @RunWith(Cucumber.class) -- Junit
@CucumberOptions(features = {"src/test/java/Features"}, format = {"json:target/cucumber.json","html:target/site/cucumber-pretty"}, glue = "Steps")

public class TestRunner extends AbstractTestNGCucumberTests {


}
