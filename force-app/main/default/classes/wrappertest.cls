public class wrappertest {
    public String id { get; set; }
    public String name { get; set; }
    public ProductData data { get; set; }

    public class ProductData {
        public String color { get; set; }
        public String capacity { get; set; }
        public Double price { get; set; }
        public String generation { get; set; }
        public Integer year { get; set; }
        public String cpuModel { get; set; }
        public String hardDiskSize { get; set; }
        public String strapColour { get; set; }
        public String caseSize { get; set; }
        public String description { get; set; }
        public Double screenSize { get; set; }
    }

    // Method to parse JSON string into list of ProductWrapper
    public static List<wrappertest> parse(String jsonString) {
        return (List<wrappertest>) JSON.deserialize(jsonString, List<wrappertest>.class);
    }
}