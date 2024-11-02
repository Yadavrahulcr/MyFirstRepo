public class PrimeNumberChecker {
public static Boolean isPrimecheak(Integer num) {
    boolean isprime=true;
      if (num <= 1) {
           isprime=false;
           system.debug(isprime+' this is not a prime number');    
               return isprime;
      }
     for (Integer i = 2; i <= Math.sqrt(num); i++) {
             if (math.mod(num,i) == 0) {
                 isprime=false;
           system.debug(isprime+' this is not a prime number');    
               return isprime;
                }
        }
      return isprime;
 
    }
}