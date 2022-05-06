let cookie = document.getElementById("cookie")
let score = document.getElementById("score")
let up = document.getElementById("auto")
let manup = document.getElementById("manual")
let anum = document.getElementById("aclicknum")
let mnum = document.getElementById("mclicknum")
let acostval = document.getElementById("acostval")
let mcostval = document.getElementById("mcostval")
let plus = 0
let frame = 0
let autoclick = 0
let manclick = 1
let acost = 100
let mcost = 10000

requestAnimationFrame(draw)
function draw(){
    frame ++
    if (frame > 60){
        frame = 1
        plus += autoclick
        score.innerHTML = plus
    }
    requestAnimationFrame(draw)
}

cookie.addEventListener("click", add1)
up.addEventListener("click", upgrade)
manup.addEventListener("click", manupg)

function add1(){
    plus += manclick
    score.innerHTML = plus
}


function upgrade(){
    if (plus >= acost){
    plus -= acost
    autoclick++
    acost ++
    }

    score.innerHTML = plus
    anum.innerHTML = autoclick
    acostval.innerHTML = acost
}

function manupg(){
    if (plus >= mcost){
    plus -= mcost
    manclick += 10
    mcost += 10
    }

    score.innerHTML = plus
    mnum.innerHTML = manclick
    mcostval.innerHTML = mcost

}


