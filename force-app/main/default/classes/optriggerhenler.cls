public with sharing class optriggerhenler {
    public static void updateoppor(list<opportunity>lstop) {
        for(opportunity op : lstop){
            if(op.amount!= null && op.amount>100000){
                op.description = 'hot opportunity';
            }
        }

    }
}