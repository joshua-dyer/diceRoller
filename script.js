
let d6;
let d8;
let d10;
let d20;

document.getElementById("rollD6Button").onclick = function(){

    d6 = (Math.floor((Math.random()) *6) + 1);

    document.getElementById("resultLabelD6").innerHTML += " " + d6;
}

document.getElementById("rollD8Button").onclick = function(){

    d8 = (Math.floor((Math.random()) *8) + 1);

    document.getElementById("resultLabelD8").innerHTML = d8;
}

document.getElementById("rollD10Button").onclick = function(){

    d10 = (Math.floor((Math.random()) *10) + 1);

    document.getElementById("resultLabelD10").innerHTML = d10;
}

document.getElementById("rollD20Button").onclick = function(){

    d20 = (Math.floor((Math.random()) *20) + 1);

    document.getElementById("resultLabelD20").innerHTML = d20;
}
