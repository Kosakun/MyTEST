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
		$sm_list = "SELECT EmployeeBean.*,CalculateCompensationTransactionBean.* 
		FROM EmployeeBean,CalculateCompensationTransactionBean 
		WHERE EmployeeBean.Employee_ID = CalculateCompensationTransactionBean.Employee_ID" ;
		
		$result = $conn->query($sm_list);
		
			
		$sm_list2d = [];
		
		if ($result->num_rows > 0) {		
			while($row = $result->fetch_assoc()) {
				$sm_row = [];	
				array_push($sm_row,$row["ID"],$row["Employee_ID"],$row["firstName"],$row["lastName"],$row["calculateResult"],$row["datetime"]);
				array_push($sm_list2d,$sm_row);
			}
		} else { 
			echo "Not Found !!!";
		}
		echo json_encode($sm_list2d) ;	

?>