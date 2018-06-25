package Transformation;

import cucumber.api.Transformer;

/**
 * Created by Robert Bicanic Bache (c)
 */
public class    SaleryCountTransform extends Transformer<Integer> {

    @Override
    public Integer transform(String salery){

        return salery.length();
    }


}
