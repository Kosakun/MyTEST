import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class T2 {
		
	 	 /******************
		 *  
		 *   แบบทดสอบข้อที่ 1 
		 *   โจทย์ - การจัดระเบียบเพื่อการวิเคราะห์ข้อมูล กรุณาวิเคราะห์วิธีการเพื่อแยกแยะข้อมูลที่อยู่ ตำบล
         *   อำเภอ จังหวัด และรหัสไปรษณีย์ ออกจากกลุ่มประโยคข้อความ
		 *   
		 * 
		 * ****************/
	public static void main(String[] args) throws UnsupportedEncodingException {

		Scanner cin = new Scanner(System.in,"UTF-8") ;

		System.out.println("Input ที่อยู่ (หมายเลขที่อยู่ - ตำบล - อำเภอ - จังหวัด - รหัสไปรษณีย์ - เบอร์โทร )") ;
		System.out.print(">> ") ;
		String Word = cin.nextLine() ;
		
		/*********************************************************************************/ // ใช้ UTF-8
		byte[] array = Word.getBytes("UTF-8");
		String s = new String(array, Charset.forName("UTF-8"));
		
		/*********************************************************************************/ // เอาแบ่งเว้นวรรคกับคำที่ไม่ต้องการออก
		String[] splitword = Word.split("([ ]+)|(จังหวัด)|(ตำบล)|(อำเภอ)|(อ\\.)|(ต\\.)|(จ\\.)") ;	
		
		String New_Word = "" ;
		for(String split :splitword) {
			New_Word += " " + split ;
		}
		
		splitword = New_Word.split("") ; // แปลงเป็น Array

		for(String split :splitword) {
			System.out.print(split) ;
		}System.out.println() ;

		System.out.println(New_Word) ;
		
		String Ad1 = "" ;
		String Ad2 = "" ;
		
		String Ad3 = "" ;
		String Ad4 = "" ;
		String Ad5 = "" ;
		String Ad6 = "" ;
		
		String Ad7 = "" ;
		
		int _ifCheck = 0 ;	
		for(int i= 0 ;  i < splitword.length ;i++) {
			
			/*************************************************************/ // ค้นหาบ้านหมายเลขที่อยู่บ้าน
			if(_ifCheck == 0 && splitword[i].matches("[0-9]")) {
				_ifCheck = 1 ; // เริ่มค้นหาจาก หมายเลขที่อยู่บ้าน ก่อน
			}
			
			if(_ifCheck == 1) {
				if(!splitword[i].equals(" ")) {
					Ad1 += splitword[i] ;
				}
				else {
					_ifCheck = 2 ;
				}
			}
			
			/*************************************************************/ // ค้นหา หมู่ที่ ? 
			if(_ifCheck == 2 && splitword[i].matches("[ก-๙0-9\\.]")) {
				_ifCheck = 3 ; 
			}
			
			if(_ifCheck ==3) {
				if(!splitword[i].equals(" ")) {
					Ad2 += splitword[i] ;
				}
				else {
					_ifCheck = 4 ;
				}				
			}
			
			/*************************************************************/ // ค้นหาตำบล
			if(_ifCheck == 4 && splitword[i].matches("[ก-๙A-Za-z]")) {
				_ifCheck = 5 ; 
			}
			
			if(_ifCheck ==5) {
				if(!splitword[i].equals(" ")) {
					Ad3 += splitword[i] ;
				}
				else {
					_ifCheck = 6 ;
				}				
			}
			
			/*************************************************************/ // ค้นหาอำเภอ 		
			if(_ifCheck == 6 && splitword[i].matches("[ก-๙A-Za-z]")) {
				_ifCheck = 7 ; 
			}
			
			if(_ifCheck ==7) {
				if(!splitword[i].equals(" ")) {
					Ad4 += splitword[i] ;
				}
				else {
					_ifCheck = 8 ;
				}				
			}			

			/*************************************************************/ // ค้นหาอำเภอ 	
			if(_ifCheck == 8 && splitword[i].matches("[ก-๙A-Za-z]")) {
				_ifCheck = 9 ; 
			}
			
			if(_ifCheck ==9) {
				if(!splitword[i].equals(" ") && !splitword[i].matches("[0-9]")) {
					Ad5 += splitword[i] ;
				}
				else {
					_ifCheck = 10 ;
				}				
			}
			
			/*************************************************************/ // ค้นหาอำเภอ 	
			if(_ifCheck == 10 && splitword[i].matches("[0-9]")) {
				_ifCheck = 11 ; 
			}
			
			if(_ifCheck ==11) {
				if(!splitword[i].equals(" ")) {
					Ad6 += splitword[i] ;
				}
				else {
					_ifCheck = 12 ;
				}				
			}
			
			/*************************************************************/ // ค้นหาเบอร์โทร
			if(_ifCheck == 12 && splitword[i].matches("[0-9]")) {
				_ifCheck = 13 ; 
			}
			
			if(_ifCheck ==13) {
				if(!splitword[i].equals(" ")) {
					Ad7 += splitword[i] ;
				}			
			}				
		}
		
		System.out.println("=============================") ;
		System.out.println("บ้านเลขที่ :" + Ad1 + " " + Ad2) ;
		System.out.println("ตำบล :" +Ad3) ;
		System.out.println("อำเภอ :" +Ad4) ;
		System.out.println("จังหวัด :" +Ad5) ;
		System.out.println("รหัสไปรษณีย์ :" +Ad6) ;
		System.out.println("เบอร์โทร :" +Ad7) ;
		
	}

}
