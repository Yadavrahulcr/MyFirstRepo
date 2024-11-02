trigger RECUSEIONCHEAK on contact  (after update) {
 
 if(trigger.isAfter && trigger.isUpdate){
   
     
        //rechandler.handleupate(trigger.new);

       // rechandler.stopRecussionUsingStaticVariable(trigger.new);
    rechandler.recusioncheakforMassRecord(trigger.newMap);
     }
   
   
 }

 

