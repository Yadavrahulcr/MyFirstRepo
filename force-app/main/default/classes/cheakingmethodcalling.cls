public class cheakingmethodcalling {
    public static string method1(integer num1,integer num2){
        string result ;
        if(num1==num2){
           result = 'true';
        }
            
        else{
                result = 'false';
        }
        system.debug(result);
       return result; 
        
    }
    
    
    public static void resultcheak(){
        
        if(cheakingmethodcalling.method1(1,1)=='true'){
            system.debug('wecan');
        }
        
        
    }
    

}