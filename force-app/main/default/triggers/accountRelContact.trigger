// create a related when an a account account is created
// trigger on account
// event after insert
trigger accountRelContact on account (after insert) {
    if(trigger.isafter && trigger.isInsert){
        accountUpdateTrigg.createrelcontact(trigger.new);
    }

}