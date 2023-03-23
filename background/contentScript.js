console.log("Hello from content script");

function selectSize(sizeString) {
  let sizeChart = document.getElementsByClassName("size-grid-button");
  Array.from(sizeChart).forEach(size => {
    if (size.innerText.includes(sizeString)) {
        size.click()
        let buyBtn = document.getElementsByClassName("buying-tools-cta-button")[0];
        buyBtn.click();
    }
  })
}

let loadfunction = window.onload;
window.onload = function (event) {
  selectSize("M 8.5");
  if (loadfunction) loadfunction(event);
};
