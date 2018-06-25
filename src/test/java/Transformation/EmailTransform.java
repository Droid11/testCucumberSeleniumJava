package Transformation;

import cucumber.api.Transformer;

/**
 * Created by Robert Bicanic Bache (c)
 */
public class EmailTransform extends Transformer<String> {

    @Override
    public String transform(String username){

        return username.concat("@testautomation.com");
    }


}
