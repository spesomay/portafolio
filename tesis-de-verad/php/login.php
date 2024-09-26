<?php
// Inicia una sesión
	session_start();

	if(isset($_POST['btn_login'])){

		// captura la informacion del formulario por post
		$user = $_POST['txt_user'];
		// tomamos la contraseña y la encriptamos
		$pass = md5($_POST['txt_pass']);

		//si usuario y contraseña tienen contenido:
		if($user != "" && $pass != ""){
			//se abre el archivo en modo lectura
			$file_users = fopen("DB/usuario.csv", "r");
			//mientras no sea el fin de archivo	
			while(!feof($file_users)){
				//leo el reglon y guardo la variable
				$renglon = fgets($file_users);
				//si renglon tiene contenido
				if($renglon != ""){
					//paso el vector de renglon a la matriz de usuario
					$usuarios[] = explode("|",$renglon);
				}


			}


			foreach ($usuarios as $key => $fila) {
			
				// si el usuario esta dentro de la tabla de usuarios
				if ($user == $fila[1]) {
				
					if ($pass ==rtrim($fila[2])) {
						$_SESSION['id'] = $fila[0];
						header("Location: panel.php");
					}else{
						echo"Contraseña incorrecta";
						echo"<br><a href='index.php'>Volver</a>";
					}
				}
			}

		}else{ //si uno, o los dos, no tienen contenido
			if($user == "")//si no hay contenido en user
				echo "Debe ingresar un nombre de usuario\n";
			if($pass == "")	//si no hay contenido en pass
				echo "Debe ingresar una contraseña";
		}
	}
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="../css/styles.css">
	<title>Document</title>
</head>

<body>
	<header class="header">
        <div class="container">
            <div class="btn-menu">
                <label for="btn-menu" class="fa-solid fa-bars"></label>
            </div>
            <div class="logo">
                <h1>UrbanaGest</h1>
            </div>
            <nav class="menu">
                <a href="error.html">Tramites y servicios</a>
                <a href="error.html">Area de gestion</a>
                <a href="error.html">Atencion al cliente</a>
                <a href="error.html">Descargar boleta</a>
                <a href="../php/login.php">Iniciar sesion</a>
            </nav>
        </div>

    </header>
    <div class="capa">

    </div>
    <input type="checkbox" id="btn-menu">
    <div class="container-menu">
        <div class="cont-menu">
            <nav>
                <a href="../index.html">Inicio</a>
                <a href="error.html">Tramites y servicios</a>
                <a href="error.html">Area de gestion</a>
                <a href="error.html">Atencion al cliente</a>
                <a href="error.html">Descargar boleta</a>
            </nav>
            <label for="btn-menu" class="fa-solid fa-x">

            </label>
        </div>
    </div>
	<main class="login">
		<div class="center">
			<section class="box">
				<form action="index.php" method="POST">
					<div class="minForm2">Iniciar sesion</div>
					<div class="minForm">
						<input class="log" type="email" name="txt_user" placeholder="Gmail" required>
					</div>
					<div class="minForm">
						<input class="log" type="password" name="txt_pass" placeholder="Contraseña"
							required>
					</div>
					<div class="centBut">
						<button name="btn_login" type="submit">Iniciar sesion</button>
					</div>

				</form>
			</section>
		</div>
	</main>
</body>

</html>