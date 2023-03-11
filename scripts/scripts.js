console.log("sup")

const buyUSD = document.getElementById("buy-usd")
const sellUSD = document.getElementById("sell-usd")
const buyCNY = document.getElementById("buy-cny")
const sellCNY = document.getElementById("sell-cny")
const buyTWD = document.getElementById("buy-twd")
const sellTWD = document.getElementById("sell-twd")
const buyHKD = document.getElementById("buy-hkd")
const sellHKD = document.getElementById("sell-hkd")
const buyMOP = document.getElementById("buy-mop")
const sellMOP = document.getElementById("sell-mop")
const buyJPY = document.getElementById("buy-jpy")
const sellJPY = document.getElementById("sell-jpy")
const buyIRR = document.getElementById("buy-irr")
const sellIRR = document.getElementById("sell-irr")
const buyINR = document.getElementById("buy-inr")
const sellINR = document.getElementById("sell-inr")
const buyKRW = document.getElementById("buy-krw")
const sellKRW = document.getElementById("sell-krw")
const buyIDR = document.getElementById("buy-idr")
const sellIDR = document.getElementById("sell-idr")

const defaultPlaceHolder = "Not Changed"

const allBUY = [buyUSD, buyCNY, buyHKD, buyINR, buyIRR, buyJPY, buyMOP, buyTWD, buyIDR, buyKRW]
const allSELL = [sellUSD, sellCNY, sellHKD, sellINR, sellIRR, sellJPY, sellMOP, sellTWD, sellIDR, sellKRW]

allBUY.forEach(element => {
    element.style.backgroundColor = "gold"
    element.innerHTML = defaultPlaceHolder
})

allSELL.forEach(element => {
    element.style.backgroundColor = "gold"
    element.innerHTML = defaultPlaceHolder
})

