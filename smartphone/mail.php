<?php
if($_POST){
	$to = 'dafapunkv@gmail.com';
	$subject = $_POST['subject'];
	$from_name = $_POST['name'];
	$from_email = $_POST['email'];
	$message = $_POST['message'];
	$header = "From: NaCloud - $from_name <$from_email>";
	mail($to, $subject, $message, $header);
	
	header("Location: /index.php");
	}
?>
         
                    