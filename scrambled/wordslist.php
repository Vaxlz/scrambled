<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once('_inc/head.php'); ?>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/js/wordlist.js">
    </script>
</head>
<body onload="updateList()">
    <?php require_once('_inc/navbar.php'); ?>
    <div class="indexentirescreen">
        <div style="font-size: 25px;">
            <center>
            <h>Words List</h>
            <br>
            <p id="easyList">Easy: Yeah, Okay, Huge, Tube, Tint, Type</p>
            <p id="mediumList">Medium: Office, Should, People, Before, During, Little</p>
            <p id="hardList">Hard: Children, American, Possible, Although, National, Business</p>
            </center>
        </div>
    </div>
</body>
</html>