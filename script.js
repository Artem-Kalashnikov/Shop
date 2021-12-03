function DOMLoaded () {
    const switchBtns = document.querySelectorAll('[data-switch-btn]')

    if (switchBtns.length) {
        for (const switchBtn of switchBtns) {
            switchBtn.addEventListener('click', () => {
                const [basketBlock, orderBlock] = document.querySelectorAll('[data-switch-block]');

                if (!basketBlock || !orderBlock) throw new Error("Basket or order block is undefined");

                if (switchBtn.dataset.data-switch-btn === "basket") {
                    basketBlock.classList.remove("hide");
                    orderBlock.classList.add("hide")
                }

                if (switchBtn.dataset.data-switch-btn === "order") {
                    orderBlock.classList.remove("hide")
                    basketBlock.classList.add("hide");
                }
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', DOMLoaded)
