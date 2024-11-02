trigger countContactOnAccount on Account (After Update) {
   
   

   if(trigger.isAfter && trigger.isUpdate ){
      HelperCls.doOp(trigger.new,trigger.oldmap);
      
   }
  
}
