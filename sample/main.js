import { createNewElement, fetchData } from "./utils.js";

const createCard = (item) => {
    let element = document.createElement("div");
    element.classList.add("card_item");

    let orderIdElm = createNewElement("h4", { elementClass: ["orderId"], elementText: item.orderId });
    let orderValueElm = createNewElement("p", { elementClass: ["info", "orderValue"], elementText: item.orderValue });
    let paymentTypeElm = createNewElement("p", { elementClass: ["info", "paymentType"], elementText: item.paymentType });
    let vehicleTypeElm = createNewElement("p", { elementClass: ["info", "vehicleType"], elementText: item.vehicleType });

    element.append(orderIdElm, orderValueElm, paymentTypeElm, vehicleTypeElm);

    const mainContent = document.getElementById("cards");
    mainContent.appendChild(element);
}

const renderOrderCards = async () => {
    const items = await fetchData("data.json");
    items.forEach(item => {
        createCard(item);
    });
    console.log("--- rendered cards ---");
}

const addNewOrder = () => {
    let addNewOrder = document.getElementById("add_new_order");
    addNewOrder.addEventListener("click", () => {
        let orderId = Math.floor(Math.random() * (100 - 0 + 1) + 0);
        let paymentRandom = ["Cash", "Paid"][Math.floor(Math.random() * 2)];
        let vehicleRandom = ["Bike", "Car"][Math.floor(Math.random() * 2)];
        createCard({
            id: orderId,
            orderId: `Order ${orderId}`,
            orderValue: (Math.random() * (0.999 - 0.001) + 0.001).toFixed(3),
            paymentType: paymentRandom,
            vehicleType: vehicleRandom
        });
    })
}

window.addEventListener("DOMContentLoaded", () => {
    renderOrderCards();
    addNewOrder();
});