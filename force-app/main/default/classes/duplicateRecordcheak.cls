public class duplicateRecordcheak{
    public static void RepCounter(string inputString){
        Map<string,integer>repmap= new map<string,integer>();
        list<string>words= inputString.split(' ');
        for(string s : words){
            s.tolowerCase();
            if(repmap.containsKey(s)){
                repmap.put(s,repmap.get(s)+1);
            }
            else
            {
                repmap.put(s,1);
            }
            
        }
        if(repmap.size()>0){
            for(string st : repmap.keyset()){
            system.debug('the number of repetation of word  '+ st + '  is'+ repmap.get(st));    
            }
            
        }
        
    }
    
}