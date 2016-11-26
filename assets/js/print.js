function setString() {
    var one = "cod";
    var two = "ehave";
    var three = "n";
    var four = "@yal";
    var five = "e.ed";
    var six = "u";
    var total = one + two + three + four + five + six;
    var element = $("#e");
    console.log(element);
    console.log(total);
    element.html(total);
    console.log(element);
}

$(document).ready(setString());
