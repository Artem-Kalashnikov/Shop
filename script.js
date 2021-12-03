function DOMLoaded () {
    const switchBtns = document.querySelectorAll('[data-switch-btn]')

    for (const switchBtn of switchBtns) {
        switchBtn.addEventListener('click', () => {
            const [basketBlock, orderBlock] = document.querySelectorAll('[data-switch-block]');
            
            if (!basketBlock || !orderBlock) throw new Error("Basket or order block is undefined");
            
            if (switchBtn.dataset.switchBtn === "basket") {
                orderBlock.style.display = "none";
                basketBlock.style.display = "block";
            }
            
            if (switchBtn.dataset.switchBtn === "order") {
                basketBlock.style.display = "none";
                orderBlock.style.display = "block";
            }
        })
    }

}

document.addEventListener('DOMContentLoaded', DOMLoaded)