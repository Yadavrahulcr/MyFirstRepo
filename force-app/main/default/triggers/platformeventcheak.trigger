trigger platformeventcheak on critical_event__e (after insert) {
for(critical_event__e ce : trigger.new){
	   Account acc = new account();
	   acc.rating = 'cold';
	   acc.id = ce.recordId__c;
	   update acc;
	}
}