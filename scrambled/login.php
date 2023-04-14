<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once('_inc/head.php'); ?>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body onload="randomizeWord()">
    <?php require_once('_inc/navbar.php'); ?>
    <div class="gameentirescreen">
        <div class="logindiv">
            <form action="loginProcess.php" method="post">
                <h style="font-size: 50px;" id="text">Log In</h>
                <br>
                <input type="username" class="form-control" name="username" placeholder="Username" required="required">
                <br>
                <input type="password" class="form-control" name="pass" placeholder="Password" required="required">
                <br>
                <button type="submit" name="save" class="btn btn-success btn-lg btn-block">Login</button>
            </form>
        </div>
    </div>
</body>
</html>