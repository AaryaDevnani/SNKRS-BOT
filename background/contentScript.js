console.log("Hello from content script")

function selectSize(sizeString){

    let sizeChart = document.getElementsByClassName("size-grid-button")
    
    console.log(sizeChart)
    for(let i = 0; i < sizeChart.length;i++){
        // console.log(sizeChart[i].innerText)
        let sizeText = sizeChart[i].innerText
        console.log("Click click")
        if(sizeText.includes(sizeString)){
            sizeChart[i].click()
            let buyBtn = document.getElementsByClassName("buying-tools-cta-button")[0]
            console.log(buyBtn)
            console.log(buyBtn.click())
            // buyBtn.click()
            break;
        }
    }
    // console.log(buyBtn)
    
}

var loadfunction = window.onload;
window.onload = function(event){
    //enter here the action you want to do once loaded
    selectSize("M 4.5 / W 6")
    if(loadfunction) loadfunction(event);
}

    




