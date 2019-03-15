const img = document.querySelector("#img");
let currentAnimation = "";

function startAnimation(kindOfAnimation){
    if (currentAnimation == kindOfAnimation) {
        img.classList.toggle(kindOfAnimation);
        console.log(img)
    } else {
        img.setAttribute("class", "img")
        img.classList.toggle(kindOfAnimation);
        currentAnimation = kindOfAnimation;
        console.log("Current animation is: " + currentAnimation)
        console.log(img)
    }
}

let onejump =
    document.querySelector("#onejump");

onejump.addEventListener("click", function () {
    startAnimation("onejump")
})



let jumping =
    document.querySelector("#jumping");

jumping.addEventListener("click", function () {
    startAnimation("jumping")
})

let moveit =
    document.querySelector("#moveit");

moveit.addEventListener("click", function () {
    startAnimation("moveit")
})

let moveto30 =
    document.querySelector("#moveto30");

moveto30.addEventListener("click", function () {
    startAnimation("moveto30")
})

let movefrom30 =
    document.querySelector("#movefrom30");

movefrom30.addEventListener("click", function () {
    startAnimation("movefrom30")
})

let fade =
    document.querySelector("#fade");

fade.addEventListener("click", function () {
    startAnimation("fade")
})

let glow =
    document.querySelector("#glow");

glow.addEventListener("click", function () {
    startAnimation("glow")
})

let shot =
    document.querySelector("#shot");

shot.addEventListener("click", function () {
    startAnimation("shot")
})

let shake =
    document.querySelector("#shake");

shake.addEventListener("click", function () {
    startAnimation("shake")
})

let grow =
    document.querySelector("#grow");

grow.addEventListener("click", function () {
    startAnimation("grow")
})

let stop =
    document.querySelector("#stop");
stop.addEventListener("click", stopall);

function stopall(){
    img.className=" ";
    console.log(img);
}
