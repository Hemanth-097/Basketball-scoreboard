let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")
let resetHomeEl = document.getElementById("home-reset-btn")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score")
let resetGuestEl = document.getElementById("guest-reset-btn")
let guestScore = 0


function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetHomeScore(){
    homeScore = 0
    homeStoreEl.textContent =0
}

function resetGuestScore(){
    guestScore = 0
    guestScoreEl.textContent=0
}