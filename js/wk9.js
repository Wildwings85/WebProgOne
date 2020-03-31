//display time
function load_data() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("est").innerHTML = "<b>" + days[d.getDay()] + "</b> || " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "<br>" + checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    document.getElementById("utc").innerHTML = "<b>" + days[d.getUTCDay()] + "</b> || " + months[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear() + "<br>" + checkTime(d.getUTCHours()) + ":" + checkTime(d.getUTCMinutes()) + ":" + checkTime(d.getUTCSeconds());
    //refresh
    setTimeout(function () { load_data() }, 100);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//elapsed time
function elapsedTime() {
    var startDate = new Date("Dec 1, 2019 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = now - startDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("e1").innerHTML = days + " d " + hours + " h "
            + minutes + " m " + seconds + " s ";
    }, 1000);
}
function elapsedTime2() {
    var startDate = new Date("Jan 20, 2020 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = now - startDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("e2").innerHTML = days + " d " + hours + " h "
            + minutes + " m " + seconds + " s ";
    }, 1000);
}
//countdown
function countDown() {
    var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("c1").innerHTML = days + " d " + hours + " h "
            + minutes + " m " + seconds + " s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("c1").innerHTML = "EXPIRED";
        }
    }, 1000);
}
//toggle hidden elements
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };
}
function myFunction2() {
    var x = document.getElementById("output");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };
}
function myFunction4() {
    var x = document.getElementById("output2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };
}
//loop 
function myFunction3() {
    var five = ["HANDS - Wash them often", "ELBOW - Cough into it", "FACE - Don't touch it", "SPACE - Keep safe distance", "HOME - Stay if you can"];
    var text = "";
    var i;
    for (i = 0; i < five.length; i++) {
        text += five[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
//random
var quotes = [
	"It is only in our darkest hours that we may discover the true strength of the brilliant light within ourselves that can never, ever, be dimmed. – Doe Zantamata",
    "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today. – Thich Nhat Hanh",
    "I will love the light for it shows me the way, yet I will endure the darkness for it shows me the stars. – Og Mandino",
    "Have great hopes and dare to go all out for them. Have great dreams and dare to live them. Have tremendous expectations and believe in them. – Norman Vincent Peale",
    "The gem cannot be polished without friction, nor man perfected without trials. – Chinese Proverb",
    "Every adversity, every failure and every heartache carries with it the seed of an equivalent or a greater benefit. – Napoleon Hill",
    "I ask not for a lighter burden, but for broader shoulders. – Jewish Proverb",
    "Tough times never last, but tough people do. – Robert H Schuller",
    "Never give in. Never, never, never. – Winston Churchill",
    "Prosperity is not without many fears and disasters; and adversity is not without comforts and hopes. – Francis Bacon",
    "The greater the difficulty, the more glory in surmounting it. Skillful pilots gain their reputation from storms and tempests. – Epicetus",
]
function getRnd() {
	var getRndInteger = Math.floor(Math.random() * (quotes.length));
	document.getElementById('random').innerHTML = quotes[getRndInteger];
}
