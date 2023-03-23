console.log("Hello from content script")

function selectSize(sizeString){

    let sizeChart = document.getElementsByClassName("size-grid-button")
    let buyBtn = document.getElementsByClassName("buying-tools-cta-button")[0]
    console.log(sizeChart)
    for(let i = 0; i < sizeChart.length;i++){
        // console.log(sizeChart[i].innerText)
        let sizeText = sizeChart[i].innerText
        if(sizeText.includes(sizeString)){
            console.log("Click click")
            sizeChart[i].click()
        }
    }
    console.log(buyBtn)
    buyBtn.click()
}
selectSize("M 4 / W 5.5")
    




