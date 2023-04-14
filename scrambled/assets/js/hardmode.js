var words = ['children','possible','although','national','business','question','interest','together','position','problems','language','evidence','required','students','probably']
let answer = null;
let word = null;
var hardCracks = 0;
var time = 60;

function randomizeWord() {
    var originalWord = words[Math.floor(Math.random() * words.length)];
    var scrambledWord = originalWord.split('').sort(function(){return 0.5-Math.random()}).join('');
    if(scrambledWord == originalWord) {
        randomizeWord();
    } else {
        document.getElementById("button1").innerHTML = scrambledWord.charAt(0);
        document.getElementById("button2").innerHTML = scrambledWord.charAt(1);
        document.getElementById("button3").innerHTML = scrambledWord.charAt(2);
        document.getElementById("button4").innerHTML = scrambledWord.charAt(3);
        document.getElementById("button5").innerHTML = scrambledWord.charAt(4);
        document.getElementById("button6").innerHTML = scrambledWord.charAt(5);
        document.getElementById("button7").innerHTML = scrambledWord.charAt(6);
        document.getElementById("button8").innerHTML = scrambledWord.charAt(7);
        word = originalWord;
    }
}

function submitWord() {
    if(document.getElementById("text").innerHTML == word) {
        hardCracks = hardCracks + +1;
        document.getElementById("crackstext").innerHTML = "Cracks: " + hardCracks;
        playCrack();
        setTimeout(uncorrect, 1000)
        randomizeWord();
        reset();
    } else {
        alert("Not scrambled correctly!");
    }
}

function buttonClick(x) {
    if(x == 1 && document.getElementById("fix1").innerHTML == "0") {
        document.getElementById("button1").style.backgroundColor = "red";
        document.getElementById("fix1").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button1").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button1").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 2 && document.getElementById("fix2").innerHTML == "0") {
        document.getElementById("button2").style.backgroundColor = "red";
        document.getElementById("fix2").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button2").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button2").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 3 && document.getElementById("fix3").innerHTML == "0") {
        document.getElementById("button3").style.backgroundColor = "red";
        document.getElementById("fix3").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button3").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button3").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 4 && document.getElementById("fix4").innerHTML == "0") {
        document.getElementById("button4").style.backgroundColor = "red";
        document.getElementById("fix4").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button4").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button4").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 5 && document.getElementById("fix5").innerHTML == "0") {
        document.getElementById("button5").style.backgroundColor = "red";
        document.getElementById("fix5").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button5").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button5").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 6 && document.getElementById("fix6").innerHTML == "0") {
        document.getElementById("button6").style.backgroundColor = "red";
        document.getElementById("fix6").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button6").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button6").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 7 && document.getElementById("fix7").innerHTML == "0") {
        document.getElementById("button7").style.backgroundColor = "red";
        document.getElementById("fix7").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button7").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button7").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else if(x == 8 && document.getElementById("fix8").innerHTML == "0") {
        document.getElementById("button8").style.backgroundColor = "red";
        document.getElementById("fix8").innerHTML = "1";
        if(answer == null) {
            answer = document.getElementById("button8").innerHTML;
            document.getElementById("text").innerHTML = answer;
        } else {
            answer = answer + document.getElementById("button8").innerHTML;
            document.getElementById("text").innerHTML = answer;
        }
    } else {
        console.log('pass');
    }
}

function reset() {
    document.getElementById("text").innerHTML = "-";
    answer = null;
    document.getElementById("button1").style.backgroundColor = "#ffb300";
    document.getElementById("button2").style.backgroundColor = "#ffb300";
    document.getElementById("button3").style.backgroundColor = "#ffb300";
    document.getElementById("button4").style.backgroundColor = "#ffb300";
    document.getElementById("button5").style.backgroundColor = "#ffb300";
    document.getElementById("button6").style.backgroundColor = "#ffb300";
    document.getElementById("button7").style.backgroundColor = "#ffb300";
    document.getElementById("button8").style.backgroundColor = "#ffb300";
    document.getElementById("fix1").innerHTML = "0";
    document.getElementById("fix2").innerHTML = "0";
    document.getElementById("fix3").innerHTML = "0";
    document.getElementById("fix4").innerHTML = "0";
    document.getElementById("fix5").innerHTML = "0";
    document.getElementById("fix6").innerHTML = "0";
    document.getElementById("fix7").innerHTML = "0";
    document.getElementById("fix8").innerHTML = "0";
}

function uncorrect() {
    document.getElementById("button1").style.backgroundColor = "#ffb300";
    document.getElementById("button2").style.backgroundColor = "#ffb300";
    document.getElementById("button3").style.backgroundColor = "#ffb300";
    document.getElementById("button4").style.backgroundColor = "#ffb300";
    document.getElementById("button5").style.backgroundColor = "#ffb300";
    document.getElementById("button6").style.backgroundColor = "#ffb300";
    document.getElementById("button7").style.backgroundColor = "#ffb300";
    document.getElementById("button8").style.backgroundColor = "#ffb300";
}

function playCrack() {
    const audio = new Audio()
    audio.src = "assets/audio/Crack.mp3"
    audio.play()
}


setInterval(function() {
    if(time > 0) {
        time = time - 1;
        document.getElementById("timer").innerHTML = time;
    } else if(time <= 0) {
        document.getElementById("text").innerHTML = "Game over!";
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("resetButton").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("button1").style.display = "none";
        document.getElementById("button2").style.display = "none";
        document.getElementById("button3").style.display = "none";
        document.getElementById("button4").style.display = "none";
        document.getElementById("button5").style.display = "none";
        document.getElementById("button6").style.display = "none";
        document.getElementById("button7").style.display = "none";
        document.getElementById("button8").style.display = "none";
    }
}, 1000);