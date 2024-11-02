/* 
Static Method
known fact
==========
Static methods belong to the class itself , rather than to an instance of the class. 
They can be called directly on the class without creating an instance of the class.

usually most of the method we write are static methods , where we can can a method by using class.method name 

to be learned 
-------------
Static methods can access other static methods and variables directly but cannot access instance methods and variables directly.
 
Note :- here instance method means non static method and non static variable 
*/

public class understandingStaticAndNonStatic {
// Static method to calculate the square of a number
    public static Integer square(Integer num) {
        system.debug(num*num);
        return num * num;
        
    }
    
  // to call this method we have to use 
// classname.methodname ;
// understandingStaticAndNonStatic.square(6); 
// 
//   
/* Non-Static Methods
Non-static methods, also known as instance methods, belong to an instance of the class. They require you to create an instance of the class before calling them.
Non-static methods can access both static and non-static (instance) methods and variables.

*/
    
    // lets say for example 
    // 
    public class MathUtils {
    // Instance variable
    public Integer baseNumber;

    // Constructor to initialize the instance variable
    public MathUtils(Integer baseNumber) {
        this.baseNumber = baseNumber;
    }
      // instance varible ate initalized using constructor ;
        
    // Non-static method to add a number to the base number
    public Integer addToBaseNumber(Integer numb) {
        return this.baseNumber + numb;
    }
}

// Creating an instance of the class
MathUtils mathUtils = new MathUtils(10);

// Calling the non-static method
Integer result = mathUtils.addToBaseNumber(5); // result will be 15

  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}