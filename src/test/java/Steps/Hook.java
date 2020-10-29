<<<<<<< HEAD
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
=======
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


    private BaseUtil base;
    public Hook(BaseUtil base) {

        this.base = base;
    }

    @Before
    public void InitializeTest(Scenario scenario){

        System.out.println("Opening the browser : Firefox");
        System.setProperty("webdriver.gecko.driver", "<write path to where your geckodriver is here>");
        base.Driver = new FirefoxDriver();

    }

    @After
    public void TearDownTest(Scenario scenario){

       if(scenario.isFailed()) {
           //Take screenshot

           System.out.println(scenario.getName());
           base.Driver.close();

        }


        System.out.println("Closing the browser : Firefox\n");

    }

}
>>>>>>> 554cbf39e2b7dcd8d7f8b4d533ebc638ae9733d9
