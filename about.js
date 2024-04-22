// READ MORE 

const parentContainer = document.querySelector(".read--more")

parentContainer.addEventListener("click", event =>{
    const current = event.target
    const isReadMoreBtn = current.className.includes("read-more-btn")
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");
 
    current.textContent = current.textContent.includes("Show Less") ?
     "Show More..." : "Show Less..."
})

const parentWrapper = document.querySelector(".text")

parentWrapper.addEventListener("click", event =>{
    const current = event.target
    const isReadMoreBtn = current.className.includes("read-more-btn")
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");
 
    current.textContent = current.textContent.includes("Show Less") ?
     "Read More..." : "Show Less..."
})
