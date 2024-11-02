public with sharing class rechandler {
    
    
    /// this methos leads to recurssion 
    public static void handleupate(List<Contact> newContacts) {
          //cheak = false;
          set<id>idset = new set<id>();
       List<Contact> contList = new List<Contact>();
        for(Contact c : newContacts) {
           idset.add(c.id);
        }

        for(id i : idset){
             contList.add(new Contact(id=i, LastName = 'Cheak'));
        }
          System.debug('this is running');

        try {
            update contList; 
        } catch (DmlException e) {
            System.debug('An error has occurred: ' + e.getMessage());
        }  
    }
   
   // methods to deal with recurssion  with recussion 
  // ==> static boolean variable --> good for 200 records that is one chunk of records
  // ==> use static set  can handle any number of record  
     

   // remember this vaariable defined with in the class not in method ;

     public static boolean recusioncheak1=false;
    public static void stopRecussionUsingStaticVariable (list<contact>conlist){
        set<id>idset = new set<id>();
       
        
     
     if(!recusioncheak1){
        recusioncheak1=true;

        List<contact>  conlist1 = new List<contact>();
        for(Contact c : conlist){
            idset.add(c.id);
           
            
        }


        for(id i : idset){
            conlist1.add(new Contact(id=i, LastName = 'Cheak'));
       }
         System.debug('this is running');
        update conlist1;
     }
     

    }

    // if the records are more then 200 then we can use the following approach
     public static set<id>processedIds = new set<id>();
    public static void recusioncheakforMassRecord (map<id,contact>newmap){
        set<id>idset = new set<id>(newmap.keyset());
        system.debug(idset);
        List<contact> conList = new List<contact>();
        

         if(!processedIds.isempty()){
            system.debug(processedIds);
            idset.removeall(processedIds);
         }
         if(!idset.isempty()){
          
            for(id i : idset){
            conList.add(new Contact(id=i, LastName = 'Cheak'));
             processedIds.add(i);
        }

         }
       
        
        update conList;
    }

}