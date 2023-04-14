function readfileautomatically() {
    var client = new XMLHttpRequest();
    client.open('GET', 'leaderboard.txt');
    client.onreadystatechange = function()
    {
        if( client.responseText != '' )
        {
            var txt = client.responseText.split("\n");
            document.getElementById("line1").innerHTML = txt[0];
            document.getElementById("line2").innerHTML = txt[1];
            document.getElementById("line3").innerHTML = txt[2];
            document.getElementById("line4").innerHTML = txt[3];
            document.getElementById("line5").innerHTML = txt[4];
        }
    }
    client.send();
}