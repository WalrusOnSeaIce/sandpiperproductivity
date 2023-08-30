function printChecksums() {
    let checksum1 = document.getElementById("input1").value;
    let checksum2 = document.getElementById("input2").value;
    conv1 = checksum1.toLowerCase();
    conv2 = checksum2.toLowerCase();
    document.getElementById("printArea").innerHTML = "The checksum creators gave you was: " + (conv1);
    document.getElementById("printArea2").innerHTML = "The checksum you got after the file check was: " + (conv2);
    if ((conv1) == (conv2)) {
        document.getElementById("printArea3").innerHTML = "Hooray! The file has not been damaged.";
    }
    else {
        document.getElementById("printArea3").innerHTML = "The file has been damaged during downloading or transmission. Try downloading it again.";
    }
}
function openMenu() {
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById("sidebar").style.width = "100%";
}
function closeMenu() {
    document.getElementById("sidebar").style.height = "0";
    document.getElementById("sidebar").style.width = "0";
}
