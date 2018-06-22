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

$check = file_get_contents('php://input'); //($_POST doesn't work here)
$response = json_decode($check, true); // decoding received JSON to array

$sql = "INSERT INTO `EmployeeBean`(`Employee_ID`, `firstName`, `lastName`, `birthday`, `typeName`, `salary`, `compensation`) VALUES ('".$response[0]."','".$response[1]."','".$response[2]."','".$response[3]."','".$response[5]."',0,'".$response[4]."')" ;

				if (mysqli_query($conn, $sql)) {
					echo "เพิ่มข้อมูลพนักงานเข้าฐานข้อมูลเรียบร้อยแล้ว";
				} else {
					echo "Error: " .mysqli_error($conn);
				}


$conn->close();				
?>