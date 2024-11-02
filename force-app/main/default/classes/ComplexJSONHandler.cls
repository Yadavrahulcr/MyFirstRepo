public class ComplexJSONHandler {
    public class ApiResponseWrapper {
        public ApiResponse apiResponse { get; set; }
    }

    public class ApiResponse {
        public String timestamp { get; set; }
        public Details details { get; set; }
    }

    public class Details {
        public Integer totalCount { get; set; }
        public String status { get; set; }
        public List<Item> items { get; set; }
    }

    public class Item {
        public Integer id { get; set; }
        public String name { get; set; }
        public String displayName { get; set; }
        public String currencyCode { get; set; }
        public Integer licenseeTypeId { get; set; }
        public Metadata metadata { get; set; }
    }

    public class Metadata {
        public String createdDate { get; set; }
        public String updatedDate { get; set; }
        public List<String> tags { get; set; }
    }

    public static void handleComplexJSON(String jsonString) {
        ApiResponseWrapper responseWrapper = (ApiResponseWrapper) JSON.deserialize(jsonString, ApiResponseWrapper.class);
        Map<Integer, String> idNameMap = new Map<Integer, String>();
        
        for (Item item : responseWrapper.apiResponse.details.items) {
            idNameMap.put(item.id, item.name);
        }

        // Output the map to the debug log
        System.debug(idNameMap);
    }
}