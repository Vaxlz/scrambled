<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once('_inc/head.php'); ?>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/js/hardmode.js">
        window.setInterval(timer, 1000);
    </script>
</head>
<body onload="randomizeWord()">
    <?php require_once('_inc/navbar.php'); ?>
    <div class="gameentirescreen">
        <div class="gamediv">
            <h style="font-size: 50px;" id="text">-</h>
            <h id="timer">60</h>
            <h id="crackstext">Cracks: 0</h>
            <br>
            <div id="buttons">
                <button id="button1" style="font-size: 55px;" onclick="buttonClick(1)">e</button>
                <button id="button2" style="font-size: 55px;" onclick="buttonClick(2)">e</button>
                <button id="button3" style="font-size: 55px;" onclick="buttonClick(3)">e</button>
                <button id="button4" style="font-size: 55px;" onclick="buttonClick(4)">e</button>
                <button id="button5" style="font-size: 55px;" onclick="buttonClick(5)">e</button>
                <button id="button6" style="font-size: 55px;" onclick="buttonClick(6)">e</button>
                <button id="button7" style="font-size: 55px;" onclick="buttonClick(7)">e</button>
                <button id="button8" style="font-size: 55px;" onclick="buttonClick(8)">e</button>
            </div>
            <br>
            <div id="fix" style="display: none;">
                <button id="fix1">0</button>
                <button id="fix2">0</button>
                <button id="fix3">0</button>
                <button id="fix4">0</button>
                <button id="fix5">0</button>
                <button id="fix6">0</button>
                <button id="fix7">0</button>
                <button id="fix8">0</button>
            </div>
            <br>
            <button id="submitButton" onclick="submitWord()">Submit</button>
            <br>
            <button id="resetButton" onclick="reset()">Reset</button>
        </div>
    </div>
</body>
</html>