<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>AGI - Passer commande</title>
	<Link rel="stylesheet" type="text/css" charset="utf-8"/>
	<!-- <link rel="icon" type="image/png" href="favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
</head>

<body>

<?php
	if (isset($_POST['name'])) { $name=$_POST['name']; } 
	else { $name=' '; }
	if(isset($_POST['firstname'])) { $firstname=$_POST['firstname']; }
	else { $firstname=' '; }
	if(isset($_POST['email'])) { $email=$_POST['email']; } 
	else { $email=' '; }
	if(isset($_POST['type_doc'])) { $type_doc=$_POST['type_doc']; }
	else { $type_doc=' '; }
	if(isset($_POST['precisions'])){ $precisions=$_POST['precisions']; } 
	else { $precisions=' '; }

	if(!empty($name) && !empty($firstname) && !empty($email) && !empty($type_doc) && !empty($precisions)) {
	$destinataire='themynot07@gmail.com';
	$subject='AGI - Nouvelle commande';
	$message="Vous avez reçu une nouvelle commande de $firstname $name\r\n\r\n
	Document : $type_doc\r\n
	$precisions\r\n\r\n
	Répondez-lui à l'adresse $email";

	$message = str_replace("\n.", "\n..", $message);

	mail($destinataire , $subject , $message);
?>

<div class="merci">Merci ! Votre commande a été transférée à l'Agence Graphique.</div>

<?php
	} else {
?>

<div class="erreur">Il manque une information dans votre commande.</div>

<?php
}
?>

</body>
</html>