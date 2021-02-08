<?php  

	$email = trim($_POST['email']);

	$mysql = new mysqli('localhost','root','','sarajevo');

	if (!$mysql) {
		exit("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO Students (name, lastname, email) VALUES ('Test', 'Testing', 'Testing@tesing.com')";

	if (mysqli_query($mysql, $sql)) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($mysql);
	}
      
    $mysql->close();
?>