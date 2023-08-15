// import createNewElement from "../utils";
// import axios from '../node_modules/axios/dist/axios';

const orderIdInput = document.getElementsByName("orderId")[0];
const orderValueInput = document.getElementsByName("orderValue")[0];
const paymentTypeInput = document.getElementsByName("paymentType")[0];
const vehicleTypeInput = document.getElementsByName("vehicleType")[0];
const orderForm = document.getElementById("form_container");
const tokenSectionElement = document.getElementById("token");

const renderTokenSection = () => {
    chrome.storage.local.get(['auth'], function (data) {
        const { auth } = data;
        if (!auth) {
            tokenSectionElement.innerHTML = `<a href="https://zonepanel.dev.beepbeep.live/auth/login" target="_blank">GET AUTH TOKEN</a>`;
        } else {
            tokenSectionElement.innerText = auth;
        }
    });
}



const renderData = () => {
    chrome.storage.local.get(['orderId', 'orderValue', 'paymentType', 'vehicleType'], function (data) {
        const { orderId, orderValue, paymentType, vehicleType } = data;

        orderIdInput.value = orderId || "";
        orderValueInput.value = orderValue || 0;
        paymentTypeInput.value = paymentType || "Paid";
        vehicleTypeInput.value = vehicleType || "Car";
    });
}

// orderForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log({
//         orderId: orderIdInput.value,
//         orderValue: orderValueInput.value,
//         paymentType: paymentTypeInput.value,
//         vehicleType: vehicleTypeInput.value,
//     });
// })


renderTokenSection();
renderData();