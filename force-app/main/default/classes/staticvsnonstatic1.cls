public class staticvsnonstatic1 {
    // Static variable
    public static Integer staticVar = 10;
      integer chvarable1 = 20;
    // Instance variable
    public Integer instanceVar = 20;

    // Static method
    public static  Integer getStaticVar() {
        // Can access static variable directly
       return staticVar;
   //  return chvarable1;
    }
    
     //  note static method can execcss only static variables  

    // Static method trying to access instance variable (this will cause an error)
    public static string  getInstanceVar() {
        // This will cause a compile-time error because static methods cannot access instance variables directly
   //   return this.instanceVar;          --------------------------------------------------------> uncomment this line to see the error 
        return 'this is cheak static and non static';
        // Error
        // This cannot be referenced in a static context;
        // 
    }

}