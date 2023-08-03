import { createNewElement, fetchData } from "./utils.js";

const renderOrderCards = async () => {
    const items = await fetchData("data.json");
    items.forEach(item => {
        let element = document.createElement("div");
        element.classList.add("card_item");

        let orderIdElm = createNewElement("h4", { elementClass: ["orderId"], elementText: item.orderId });
        let orderValueElm = createNewElement("p", { elementClass: ["info", "orderValue"], elementText: item.orderValue });
        let paymentTypeElm = createNewElement("p", { elementClass: ["info", "paymentType"], elementText: item.paymentType });
        let vehicleTypeElm = createNewElement("p", { elementClass: ["info", "vehicleType"], elementText: item.vehicleType });

        element.append(orderIdElm, orderValueElm, paymentTypeElm, vehicleTypeElm);

        const mainContent = document.getElementById("cards");
        mainContent.appendChild(element);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    renderOrderCards();
});