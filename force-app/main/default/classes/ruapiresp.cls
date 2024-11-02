public class ruapiresp{
	public cls_results[] results;
	public cls_info info;
	public class cls_results {
		public String gender;	//female
		public cls_name name;
		public cls_location location;
		public String email;	//annie.lindanger@example.com
		public cls_login login;
		public cls_dob dob;
		public cls_registered registered;
		public String phone;	//51634523
		public String cell;	//95449688
		public cls_id id;
		public cls_picture picture;
		public String nat;	//NO
	}
	public class cls_name {
		public String title;	//Miss
		public String first;	//Annie
		public String last;	//Lindanger
	}
	public class cls_location {
		public cls_street street;
		public String city;	//Jørstadmoen
		public String state;	//Hedmark
		public String country;	//Norway
		public String postcode;	//9925
		public cls_coordinates coordinates;
		public cls_timezone timezone;
	}
	public class cls_street {
		public Integer number1;	//1017
		public String name;	//Nedre Ullern terrasse
	}
	public class cls_coordinates {
		public String latitude;	//45.1199
		public String longitude;	//53.3109
	}
	public class cls_timezone {
		public String offset;	//+8:00
		public String description;	//Beijing, Perth, Singapore, Hong Kong
	}
	public class cls_login {
		public String uuid;	//170d1955-f567-477d-9f76-2207071a6784
		public String username;	//happycat265
		public String password;	//jessica
		public String salt;	//uzBBEYL0
		public String md5;	//07ef3ae4588b6df8360b24ca71c89401
		public String sha1;	//ed76881b07979ce0df40e7be1444d5981ade363d
		public String sha256;	//8a86250b655cb95844acbacda6599a51321a5fde172436e0aea5e0a2af8c5650
	}
	public class cls_dob {
		public String date1;	//1947-01-06T02:40:28.825Z
		public Integer age;	//77
	}
	public class cls_registered {
		public String date1;	//2011-10-11T23:49:57.476Z
		public Integer age;	//12
	}
	class cls_id {
		public String name;	//FN
		public String value;	//06014744299
	}
	class cls_picture {
		public String large;	//https://randomuser.me/api/portraits/women/5.jpg
		public String medium;	//https://randomuser.me/api/portraits/med/women/5.jpg
		public String thumbnail;	//https://randomuser.me/api/portraits/thumb/women/5.jpg
	}
	class cls_info {
		public String seed;	//9be49f55ea7a93e6
		public Integer results;	//1
		public Integer page;	//1
		public String version;	//1.4
	}
	public static ruapiresp parse(String json){
		return (ruapiresp) System.JSON.deserialize(json, ruapiresp.class);
	}

	
}