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


$date = date('Y-m-d H-m-s');
$sql = "INSERT INTO `CalculateCompensationTransactionBean`(`calculateResult`, `datetime`, `Employee_ID`) VALUES ('".$response[0]."','".$date."','".$response[1]."')" ;

				if (mysqli_query($conn, $sql)) {
					echo "เพิ่มข้อมูลการคำนวณเงินของพนักงานเข้าฐานข้อมูลเรียบร้อยแล้ว";
				} else {
					echo "Error: " .mysqli_error($conn);
				}


$conn->close();				
?>