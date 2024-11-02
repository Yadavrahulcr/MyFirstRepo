public class apiresp {
   
   
        public cls_results[] results;
        public cls_info info;
        public class cls_results {
            public String gender;	//male
            public cls_name name;
            public cls_location location;
            public String email;	//orlando.valladares@example.com
            public cls_login login;
            public cls_dob dob;
            public cls_registered registered;
            public String phone;	//(684) 056 3827
            public String cell;	//(633) 398 5584
            public cls_id id;
            public cls_picture picture;
            public String nat;	//MX
        }
        public class cls_name {
            public String title;	//Mr
            public String first;	//Orlando
            public String last;	//Valladares
        }
        public class cls_location {
            public cls_street street;
            public String city;	//Pemex (Ciudad Pemex)
            public String state;	//Tlaxcala
            public String country;	//Mexico
            public Integer postcode;	//29054
            public cls_coordinates coordinates;
            public cls_timezone timezone;
        }
        public class cls_street {
            public Integer number1;	//7790
            public String name;	//Avenida Chihuahua
        }
        public class cls_coordinates {
            public String latitude;	//28.8023
            public String longitude;	//-113.4646
        }
        public class cls_timezone {
            public String offset;	//-5:00
            public String description;	//Eastern Time (US & Canada), Bogota, Lima
        }
        public class cls_login {
            public String uuid;	//ce4c19e3-8bcd-4b0e-9abb-10b4e71995d4
            public String username;	//silverpanda183
            public String password;	//parrot
            public String salt;	//FTVZSa53
            public String md5;	//0d5222e57d44226704eacdb8c5177a4e
            public String sha1;	//068a41bee6f9d17e49a6c79e6234617e47fa3b35
            public String sha256;	//b985e1fef497e53ca0aaeb26fdb45c09aa86934b816c7d77428348efe55fb648
        }
        public class cls_dob {
            public String date1;	//1944-08-30T22:58:18.768Z
            public Integer age;	//79
        }
        public class cls_registered {
            public String date1;	//2016-11-07T06:35:42.243Z
            public Integer age;	//7
        }
        public class cls_id {
            public String name;	//NSS
            public String value;	//84 59 05 0153 4
        }
        public class cls_picture {
            public String large;	//https://randomuser.me/api/portraits/men/28.jpg
            public String medium;	//https://randomuser.me/api/portraits/med/men/28.jpg
            public String thumbnail;	//https://randomuser.me/api/portraits/thumb/men/28.jpg
        }
        public class cls_info {
            public String seed;	//23fcca9b9a2da3a4
            public Integer results;	//1
            public Integer page;	//1
            public String version;	//1.4
        }
        public static apiresp parse(String json){
            return (apiresp) System.JSON.deserialize(json, apiresp.class);
        }
    
    }