package Steps;


import cucumber.api.java8.En;

/**
 * Created by Robert Bicanic Bache (c)
 */
public class Java8Test implements En {
    public Java8Test() {
        And("^I just need to see how step look for Cucumber-Java(\\d+)$", (Integer arg0) -> {

            System.out.println("The value from new step class is :" + arg0 + "\n");
        });
    }
}
