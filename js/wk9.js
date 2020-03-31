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
