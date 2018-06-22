$(function(){
      
	$("#menu1-detail").load("menu/menu1.html");  //
	$("#menu2-detail").load("menu/menu2.html");  //
	$("#menu3-detail").load("menu/menu3.html");  //  
	$("#menu4-detail").load("menu/menu4.html");  // 	
		
});

function clear_tblist($idname){		
	var tb = document.getElementById($idname); // Clear row
	while(tb.rows.length > 0) {
		tb.deleteRow(0);
	}
}

function employeetable() {
		
		clear_tblist("emp-list") ;
		
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
		
		var values_arr = []; 
		
		var myJsonString = JSON.stringify(values_arr);
        xmlhttp.onreadystatechange = emplt_respond;
        xmlhttp.open("POST", "connectSQL/table-emp.php", true);
        xmlhttp.send(myJsonString);  
		
		function emplt_respond() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			   var json_emp_list = JSON.parse(xmlhttp.responseText) ;		
				for(var count = 0 ; count < Object.keys(json_emp_list).length; count++) {
						var table = document.getElementById("emp-list");
						var row = table.insertRow(0);
						var cell1 = row.insertCell(0);
						cell1.innerHTML = (count+1) ;
						var cell2 = row.insertCell(1);
						cell2.innerHTML = json_emp_list[count][0];
						var cell3 = row.insertCell(2);
						cell3.innerHTML = json_emp_list[count][1] + " " + json_emp_list[count][2];
						var cell4 = row.insertCell(3);
						cell4.innerHTML = json_emp_list[count][3];
						var cell5 = row.insertCell(4);
						cell5.innerHTML = json_emp_list[count][4];	
						
						if(json_emp_list[count][5] === "salary") {
							var cell5 = row.insertCell(5);						
							cell5.innerHTML = '<button type="button" onclick="cal_salary(\''+
							json_emp_list[count][0]+'\',\''+json_emp_list[count][1]+'\',\''+json_emp_list[count][2]+'\',\''+
							json_emp_list[count][3]+'\',\''+json_emp_list[count][4]+'\',\''+json_emp_list[count][5]+'\',\''+
							json_emp_list[count][6]+'\')" class="btn btn-link" data-toggle="modal" data-target="#pay_salary">คำนวณค่าตอบแทนพนักงานประจำ</button>' ;		
							//cal_salary(json_emp_list[count][0],json_emp_list[count][1],json_emp_list[count][2],json_emp_list[count][3],json_emp_list[count][4],json_emp_list[count][5],json_emp_list[count][6]) ;
						} else {
							var cell5 = row.insertCell(5);
							cell5.innerHTML = '<button type="button" onclick="cal_compensation(\''+
							json_emp_list[count][0]+'\',\''+json_emp_list[count][1]+'\',\''+json_emp_list[count][2]+'\',\''+
							json_emp_list[count][3]+'\',\''+json_emp_list[count][4]+'\',\''+json_emp_list[count][5]+'\',\''+
							json_emp_list[count][6]+'\')" class="btn btn-link" data-toggle="modal" data-target="#pay_com">คำนวณค่าตอบแทนพนักงานชั่วคราว</button>' ;					
						}
						//console.log(json_emp_list[count][5]) ;
						//console.log(json_emp_list[count][6]) ;
				}
			}
		}		
}

function cal_salary($id_emp,$name,$surname,$Bdate,$type,$typeEng,$pay) {	
	//console.log($id_emp + $name+ $surname+$Bdate+$type+$typeEng+$pay) ;
	$(function(){
		$("#FID_label").text($id_emp);
		$("#Fsalary_label").text($pay);
		$("#FName_label").text($name+" "+$surname);  //
		$("#FType_label").text($type);  // 	
		$("#result_Fsalary").text("ค่าตอบแทน :  xx,xxx บาท");  //	
	});	
}

function cal_compensation($id_emp,$name,$surname,$Bdate,$type,$typeEng,$pay) {	
	//console.log($id_emp + $name+ $surname+$Bdate+$type+$typeEng+$pay) ;	
	$(function(){
		$("#PID_label").text($id_emp);
		$("#Pcom_label").text($pay);		
		$("#PName_label").text($name+" "+$surname);  //
		$("#PType_label").text($type);  // 	
		$("#result_Psalary").text("ค่าตอบแทน :  xx,xxx บาท");  //		
	});	
}

function empcal_table() {
		
		clear_tblist("cal-emp-list") ;
		
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
		
		var values_arr = []; 
		var myJsonString = JSON.stringify(values_arr);
        xmlhttp.onreadystatechange = emplt_respond;
        xmlhttp.open("POST", "connectSQL/table-emp-cal.php", true);
        xmlhttp.send(myJsonString);  
		
		function emplt_respond() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			   var json_emp_list = JSON.parse(xmlhttp.responseText) ;				
				for(var count = 0 ; count < Object.keys(json_emp_list).length; count++) {
						var table = document.getElementById("cal-emp-list");
						var row = table.insertRow(0);
						var cell1 = row.insertCell(0);
						cell1.innerHTML = json_emp_list[count][0];
						var cell2 = row.insertCell(1);
						cell2.innerHTML = json_emp_list[count][1];
						var cell3 = row.insertCell(2);
						cell3.innerHTML = json_emp_list[count][2] + " " + json_emp_list[count][3];
						var cell4 = row.insertCell(3);
						cell4.innerHTML = json_emp_list[count][4];	
						var cell5 = row.insertCell(4);
						cell5.innerHTML = json_emp_list[count][5];
				}
			}
		}
}
