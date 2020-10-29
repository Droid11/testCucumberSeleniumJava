package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by Robert Bicanic Bache (c)
 */
public class Hook extends BaseUtil {


    private final BaseUtil base;

    public Hook(final BaseUtil base) {

        this.base = base;
    }

    @Before
    public void InitializeTest(final Scenario scenario) {

        System.out.println("Opening the browser : Firefox");
        System.setProperty("webdriver.gecko.driver","geckodriver");
        base.Driver = new FirefoxDriver();

    }

    @After
    public void TearDownTest(final Scenario scenario) {

       if(scenario.isFailed()) {
           //Take screenshot

           System.out.println(scenario.getName());
           base.Driver.close();

        }


        System.out.println("Closing the browser : Firefox\n");

    }

}
