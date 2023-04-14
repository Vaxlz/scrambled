var easyWords = ['yeah', 'okay', 'huge', 'tube', 'tint', 'type', 'book', 'bake', 'four', 'bath', 'able', 'city', 'cook', 'done', 'fall', 'feel', 'fire', 'help', 'hope', 'kiss']
var mediumWords = ['people','before','around','little','should','moment','almost','really','family','always','father','mother','friend','school','inside','number','office']
var hardWords = ['children','possible','although','national','business','question','interest','together','position','problems','language','evidence','required','students','probably']

function updateList() {
    document.getElementById("easyList").innerHTML = "Easy: " + easyWords;
    document.getElementById("mediumList").innerHTML = "Medium: " + mediumWords;
    document.getElementById("hardList").innerHTML = "Hard: " + hardWords;
}