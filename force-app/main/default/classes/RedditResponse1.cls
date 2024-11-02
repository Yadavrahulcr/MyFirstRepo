public class RedditResponse1 {
  
	@AuraEnabled
	public Post data;

	public class Post {
        @AuraEnabled
        public List<Children> children;

	}

	public class Data {
        @AuraEnabled
        public String author;
        @AuraEnabled
        public String title;
        @AuraEnabled
		public String url;
	}

	public class Children {
        
		public Data data;
	}
	
	


	
	
	public static RedditResponse1 parse(String json) {
		return (RedditResponse1) System.JSON.deserialize(json, RedditResponse1.class);
	}
}