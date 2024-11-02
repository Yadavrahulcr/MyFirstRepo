public class MyApexClass {
    public class MyResult {
        @InvocableVariable(label='Result Value 1' description='First result value')
        public String value1;

        @InvocableVariable(label='Result Value 2' description='Second result value')
        public String value2;
    }

    @InvocableMethod(label='Get Data' description='Fetch data from Apex')
    public static List<MyResult> getData(List<String> inputParameters) {
        // Your Apex logic to fetch and process data goes here
        List<MyResult> result = new List<MyResult>();
        MyResult resultItem = new MyResult();
        // Assume you have fetched data and want to return it
        resultItem.value1 = inputParameters.get(0);
        resultItem.value2 = 'this is still to be explaines';
        result.add(resultItem);
        return result;
    }
}