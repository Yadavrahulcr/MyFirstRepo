trigger amirgrib on account (before insert) {
   if(trigger.isbefore && trigger.isInsert){
    accountUpdateTrigg.amirgarib(trigger.new);
   }
}