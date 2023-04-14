<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once('_inc/head.php'); ?>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/js/leaderboard.js"></script>
</head>
<body onload="readfileautomatically();">
    <?php require_once('_inc/navbar.php'); ?>
    <div class="indexentirescreen" style="flex-direction: column;text-align: center;">
        <h style="text-decoration: underline;">Leaderboard</h>
        <p id="line1"></p>
        <p id="line2"></p>
        <p id="line3"></p>
        <p id="line4"></p>
        <p id="line5"></p>
    </div>
</body>
</html>