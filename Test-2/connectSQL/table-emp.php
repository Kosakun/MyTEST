<?php
$servername = "localhost";
$username = "cs57660001";
$password = "57660001";
$dbname = "cs57660001";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_set_charset($conn,"utf8"); 
?>


<?php
		$sm_list = "SELECT * FROM EmployeeBean" ;
		$result = $conn->query($sm_list);
			
		$sm_list2d = [];
		
		if ($result->num_rows > 0) {		
			while($row = $result->fetch_assoc()) {
				$sm_row = [];	
				array_push($sm_row,$row["Employee_ID"],$row["firstName"],$row["lastName"],$row["birthday"],$row["typeName"]);
				
				if($row["salary"] > 0) {
				   array_push($sm_row,"salary",$row["salary"]);	
				}else {
				   array_push($sm_row,"compensation",$row["compensation"]);	
				}
				
				array_push($sm_list2d,$sm_row);
			}
		} else { 
			echo "Not Found !!!";
		}
		echo json_encode($sm_list2d) ;	

?>