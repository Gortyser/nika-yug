<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$comment = $_POST['comment'];
	$subject = "Заявка";
	$to = 'gortyser@gmail.com';
	$body = "Имя: $name \n\nEmail: $email \n\nТелефон: $phone \n\nКомментарий: $comment \n\nТема: $subject";
	$headers = "From: 'Nika' <info@nika-yug.ru>";
	$result = mail($to, $subject, $body, $headers);
?>