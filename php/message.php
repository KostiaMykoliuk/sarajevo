<?php

	$messageTitle = 'text message';

	$sendTo = 'playnick@ukr.net';

	$sendFrom = trim($_POST['email']);

	$name = trim($_POST['name']);
	
	$textMessage = trim($_POST['massage']);

	$massage = 'Імя: $name \n Пошта: $sendFrom \n $textMessage';

	mail($sendTo, $messageTitle, $massage);
?>