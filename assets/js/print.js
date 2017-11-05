function setString() {
    var one = "cod";
    var two = "ehave";
    var three = "nyale";
    var four = "@gm";
    var five = "ail";
    var six = ".com";
    var total = one + two + three + four + five + six;
    var element = $("#e");
    console.log(element);
    console.log(total);
    element.html(total);
    console.log(element);
}

$(document).ready(setString());
