public class mapdisplay {
public static void md (){
  list <account> lstacc = new list<account>();
    list<contact>lstcon= new list <contact>();
    for(integer i = 0;i<=5;i++){
        account acc= new account();
        acc.name= 'rahul'+i;
        lstacc.add(acc);
        contact con = new contact();
        con.accountid=acc.Id;
        con.lastname = 'yadav';
        lstcon.add(con);
    }
    
      }
        }