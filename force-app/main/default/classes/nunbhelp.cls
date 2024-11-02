public class nunbhelp {
    public static void countWords(String input){
           /*  for(integer i=1; i<=5; i++){
        for(integer j=1;j<=i; j++){
            system.debug(j);
        }
                 system.debug('----');
    }*/
        
        
       /* for(integer i=1;i<=6;i++){
            for(integer j=6;j>=i;j--){
                system.debug(j);
            }
            system.debug('------');
        }*/
        
        // enhanced for loop use to loop through collection variables ;
          Map<String, Integer> wordCountMap = new Map<String, Integer>();
        
        // Split the input string into words
        List<String> words = input.split(' ');
        
        // Count occurrences of each word
        for (String word : words) {
            word = word.toLowerCase(); // Convert to lowercase to handle case-insensitivity
            if (wordCountMap.containsKey(word)) {
                wordCountMap.put(word, wordCountMap.get(word) + 1);
            } else {
                wordCountMap.put(word, 1);
            }
        }
        
            for (String word : wordCountMap.keySet()) {
    System.debug('Word: ' + word + ', Count: ' + wordCountMap.get(word));
}
        }
    }