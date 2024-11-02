public class countword {
    public static void keycount(string input){
        list <string> strin = input.split(' ');
        map<string,integer> strNcount = new map<string,integer>();
        for(string st : strin){
            // lets convets all the instring in lowet case
            st.toLowerCase();
            // now we need a collection data of all the incoming string 
            // lets create a map to string and integer
            if(strNcount.containskey(st)){
                strNcount.put(st,strNcount.get(st)+1);
            }
            else{
                strNcount.put(st,1);
            }
         
        }   
           
        for(string s : strNcount.keyset()){
            system.debug('the string  '+s+'  has been repeated for  '+strNcount.get(s) + '  times'  );
        }
    }
}