<?php

	$messageTitle = 'text message';

	$sendTo = 'playnick@ukr.net';

	$sendFrom = trim($_POST['email']);

	$name = trim($_POST['name']);
	
	$textMessage = trim($_POST['message']);

	if ($sendFrom && $name && $textMessage) {
		$massage = 'Імя: $name \n Пошта: $sendFrom \n $textMessage';
		
		mail($sendTo, $messageTitle, $massage);
	}

	header('Location: /');
?>