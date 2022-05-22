document.write("<h1>" + "Signal color" + "                 " + "Message" + "</h1>")
var signal = prompt("Please enter traffic signal light Hint! (red, yellow & green")

if(signal === "red"){
    document.write("<h1 style=color:red>" + "Red" + " " + "-" + " " + "Vehicles must stop" + "</h1>" + "<br/>");
    alert("Vehicles must stop");
}
else if(signal === "yellow"){
    document.write("<h1 style=color:yellow>" + "Yellow" + " " + "-" + " " + "Vehicles should get ready to move" + "</h1>");
    alert("Vehicles should get ready to move");
}
else if(signal === "green"){
    document.write("<h1 style=color:green>" + "Green" + " " + "-" + " " + "Vehicles can move now" + "</h1>");
    alert("Vehicles can move now");
}
else{
    alert("Please enter correct traffic signal light Hint! (red, yellow & green");
};
