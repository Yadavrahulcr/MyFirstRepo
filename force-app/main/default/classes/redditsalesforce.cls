public class redditsalesforce {

    public post data;
    	
    public class post {
		
		public List<Children> children;
		
	}
	
    public class Children {
	
		public Data data;
	}



	public class Data {
	
		public String author;
		public String permalink;
        public String url;
		
	}

	public static Redditsalesforce parse(String json) {
		return (Redditsalesforce) System.JSON.deserialize(json, Redditsalesforce.class);
	}
}