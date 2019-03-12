let img = document.querySelector("#img");

let onejump =
    document.querySelector("#onejump");
onejump.addEventListener("click",startJump);

function startJump(){
    img.classList.toggle("onejump")
    console.log(img)
}


let jumping =
    document.querySelector("#jumping");
jumping.addEventListener("click",startJumping);

function startJumping(){
    img.classList.toggle("jumping")
    console.log(img)
}

let moveit =
    document.querySelector("#moveit");
moveit.addEventListener("click",startMoveit);

function startMoveit(){
    img.classList.toggle("moveit")
    img.classList.remove("moveto30")
    img.classList.remove("movefrom30")
    console.log(img)
}

let moveto30 =
    document.querySelector("#moveto30");
moveto30.addEventListener("click",startMoveto30);

function startMoveto30(){
    img.classList.toggle("moveto30")
    console.log(img)
}

let movefrom30 =
    document.querySelector("#movefrom30");
movefrom30.addEventListener("click",startMovefrom30);

function startMovefrom30(){
    img.classList.toggle("movefrom30")
    console.log(img)
}

let fade =
    document.querySelector("#fade");
fade.addEventListener("click",startFade);

function startFade(){
    img.classList.toggle("fade")
    console.log(img)
}

let glow =
    document.querySelector("#glow");
glow.addEventListener("click",startGlow);

function startGlow(){
    img.classList.toggle("glow")
    console.log(img)
}

let shot =
    document.querySelector("#shot");
shot.addEventListener("click",startShot);

function startShot(){
    img.classList.toggle("shot")
    console.log(img)
}

let shake =
    document.querySelector("#shake");
shake.addEventListener("click",startShake);

function startShake(){
    img.classList.toggle("shake")
    console.log(img)
}

let grow =
    document.querySelector("#grow");
grow.addEventListener("click",startGrow);

function startGrow(){
    img.classList.toggle("grow")
    console.log(img)
}
