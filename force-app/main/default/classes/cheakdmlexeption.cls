/// let cheak mixed dml acception  lets create a contact record and update a user to cheak if it through mixed dml acception 
public with sharing class cheakdmlexeption {
    public static void dmloperation () {
        user usertodeactivate  = [select id , name, isactive  from user where username ='harharmahadev@har.comar'  limit 1 ];
        if(usertodeactivate!=null){
            usertodeactivate.isactive=false;
            update usertodeactivate;

            
        }
        creatcontat();
    }
         @future()
        public static void creatcontat(){
            contact con  = new contact();
            con.lastName = 'yadav';
            insert con;

        }

         // it gives an error mixed dml exeptation;
    }