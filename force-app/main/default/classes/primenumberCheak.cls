public with sharing class primenumberCheak {
 
    public class PrimeNumberChecker {
        public static Boolean isPrime(Integer number) {
            if (number <= 1) {
                // Numbers less than or equal to 1 are not prime
                return false;
            }
    
            for (Integer i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0) {
                    // If the number is divisible by any number between 2 and the square root of the number, it's not prime
                    return false;
                }
            }
    
            // If no divisor is found, the number is prime
            return true;
        }
    }
    
}