<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registeration | PGGC11</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" href="img/logo.jpg">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap" rel="stylesheet">
</head>
<body class="body-bg">
    <div class="box">
        <h2>Registeration Form</h2>
        <div class="staff-login">
            <form action="" id="staff-form" method="post">
                <img src="../img/logo.jpg" alt="PGGC11 Logo">
                <input type="text" name="uname" id="uname" placeholder="Username..." autocomplete="off" required>
                <input type="password" name="pass" id="pass" placeholder="Password..." autocomplete="off" required>
                <input type="password" name="conf_pass" id="conf_pass" placeholder="Confirm Password..." autocomplete="off" required>
                <input type="email" name="email" id="email" placeholder="Email..." required>
                <a href="register.php">Create New Account</a>
                <input type="submit" value="Login">
            </form>
        </div>
    </div>
</body>
</html>