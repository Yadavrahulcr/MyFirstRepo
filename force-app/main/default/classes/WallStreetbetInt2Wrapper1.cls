public class WallStreetbetInt2Wrapper1 {
    
     public String kind;
    public Data_R data;
    
    public class Images {
        public Source source;
        public List<Source> resolutions;
        public Media_embed variants;
        public String id;
    }
    public class Data_S {
    }
    public class Preview {
        public List<Images> images;
        public Boolean enabled;
    }
    public class Data {
        public Preview preview;
    }
    public class Data_T {
    }
    public class Media_embed {
    }
    public class Children {
		public String kind;
		public Data data;
	}
    public class Data_R {
        public List<Children> children;
        public Object before;
    }
    public class Images_Z {
        public Source source;
        public List<Source> resolutions;
        public Variants variants;
        public String id;
    }
    public class Source {
        public String url;
        public Integer width;
        public Integer height;
    }
    public class Obfuscated {
        public Source source;
        public List<Source> resolutions;
    }
    
    public class Variants {
        public Obfuscated obfuscated;
        public Obfuscated nsfw;
    }
    public class Link_flair_richtext {
        public String e;
        public String t;
    }
    public class Data_Y {
    }
    public class Preview_Z {
        public List<Images_Z> images;
        public Boolean enabled;
    }
    public class Data_Z {
        
    }
    public static WallStreetbetInt2Wrapper1 parse(String json) {
        return (WallStreetbetInt2Wrapper1) System.JSON.deserialize(json, WallStreetbetInt2Wrapper1.class);
    }

    
}