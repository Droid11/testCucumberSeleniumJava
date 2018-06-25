package Steps;

import Base.BaseUtil;
import Pages.LoginPage;
import Transformation.EmailTransform;
import Transformation.SaleryCountTransform;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Robert Bicanic Bache (c)
 */
public class LoginStep extends BaseUtil {

    private BaseUtil base;

    public LoginStep(BaseUtil base) {
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        base.Driver.get("http://www.executeautomation.com//demosite//Login.html");
    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {

        LoginPage page = new LoginPage(base.Driver);
        base.Driver.findElement(By.name("Login")).submit();
        Thread.sleep(1000);
        /* page.ClickLogin(); */
    }

    @Then("^I should see the user form page$")
    public void iShouldSeeTheUserFormPage() throws Throwable {


       base.Driver.close();

    }
    @And("^I enter the following for Login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {

        // Create a ArrayLIST
        List<User> users = new ArrayList<User>();
        // Store all users
        for (User user : users = table.asList(User.class)) {
            
        }

        LoginPage page = new LoginPage(base.Driver);


        for (User user : users) {

            page.Login(user.username, user.password);
        }
    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String username, String password) throws Throwable {

        System.out.println("UserName is : " + username);
        System.out.println("Password is : " + password);
    }

    @And("^I enter the users email address as Email:([^\"]*)$")
    public void iEnterTheUsersEmailAddressAsEmailAdmin(@Transform(EmailTransform.class) String email) throws Throwable {

        System.out.println("The Email Address is : " + email);

    }

    @And("^I verify the count of my salary digits for NOK (\\d+)$")
    public void iVerifyTheCountOfMySaleryDigitsForNOK(@Transform(SaleryCountTransform.class) int salery) throws Throwable {

        System.out.println("\n" +
                "My salery digits count is :" + salery + "\n");

    }

    @Given("^I navigate to log in page and it do not respond$")
    public void iNavigateToLogInPageAndItDoNotRespond() throws Throwable {

        base.Driver.get("");
    }

    public class User {

        public User(String userName, String passWord) {
            setUsername(userName);
            password = passWord;
        }

        private String username;
        public String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }
    }
}
