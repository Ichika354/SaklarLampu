function saklar() {
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2= document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")

    let  lampu1 = document.getElementById("lampu1");
    let  lampu2 = document.getElementById("lampu2");
    let  lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src = "Asets/images/on.gif"
    } else {
        lampu1.src = "Asets/images/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "Asets/images/on.gif"
    } else {
        lampu2.src = "Asets/images/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src = "Asets/images/on.gif"
    } else {
        lampu3.src = "Asets/images/off.gif"
    }
    
}









if (toggle1.checked == true) {
    lampu1.src = "assets/images/on.gif"
} else if (toggle1.checked == false) {
    lampu1.src = "assets/images/off.gif"
}
if (toggle2.checked == true) {
    lampu2.src = "assets/images/on.gif"
} else if(toggle2.checked == false){
    lampu2.src = "assets/images/off.gif"
}
if (toggle3.checked == true) {
    lampu3.src = "assets/images/on.gif"
}   if (toggle1.checked == true && toggle2.checked == true && toggle3.checked == true) {
    toggle11.checked = true;
} else if (toggle3.checked == false) {
    lampu3.src = "assets/images/off.gif"
    if (toggle1.checked == false && toggle2.checked == false && toggle3.checked == false) {
        toggle11.checked = false;
    }
}









if (toggle11.checked == true) {
    lampu1.src = "assets/images/on.gif"
    lampu2.src = "assets/images/on.gif"
    lampu3.src = "assets/images/on.gif"
    if (toggle11.checked == true) {
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
    }
} else if(toggle11.checked == false) {
    lampu1.src = "assets/images/off.gif"
    lampu2.src = "assets/images/off.gif"
    lampu3.src = "assets/images/off.gif"
    if (toggle11.checked == false) {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
    }
}
