function setString() {
    var one = "cod";
    var two = "ehave";
    var three = "nyale";
    var four = "@gm";
    var five = "ail";
    var six = ".com";
    var total = one + two + three + four + five + six;
    var elements = $(".e");
    console.log(elements);
    console.log(total);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = total;
    }
    console.log(elements);
}

$(document).ready(setString());
