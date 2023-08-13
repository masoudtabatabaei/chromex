const handleAddInfoBtns = () => {
    let items = document.querySelectorAll(".card_item");
    console.log("items --> ", items);
    items.forEach(item => {
        let addBtnElement = item.getElementsByClassName("add_info")[0];
        if (!addBtnElement) {
            const btn = document.createElement("button");
            btn.classList.add("add_info");
            btn.textContent = "Add Info";

            btn.addEventListener("click", () => {
                let parent = btn.parentElement;
                const orderId = parent.querySelector(".orderId").textContent;
                const orderValue = +parent.querySelector(".orderValue").textContent;
                const paymentType = parent.querySelector(".paymentType").textContent;
                const vehicleType = parent.querySelector(".vehicleType").textContent;

                console.log({ orderId, orderValue, paymentType, vehicleType });

                (async () => {
                    chrome.storage.local.set({ orderId, orderValue, paymentType, vehicleType });
                })();
            });

            item.appendChild(btn);
        }
    });
}

window.addEventListener("load", () => {
    console.log("-- Loaded content.js--");
    setInterval(() => {
        handleAddInfoBtns();
    }, 3000);
});