// import createNewElement from "../utils";
// import axios from '../node_modules/axios/dist/axios';

const orderIdInput = document.getElementsByName("orderId")[0];
const orderValueInput = document.getElementsByName("orderValue")[0];
const paymentTypeInput = document.getElementsByName("paymentType")[0];
const vehicleTypeInput = document.getElementsByName("vehicleType")[0];
const orderForm = document.getElementById("form_container");

const renderData = () => {
    chrome.storage.local.get(['orderId', 'orderValue', 'paymentType', 'vehicleType'], function (data) {
        const { orderId, orderValue, paymentType, vehicleType } = data;

        orderIdInput.value = orderId;
        orderValueInput.value = orderValue;
        paymentTypeInput.value = paymentType;
        vehicleTypeInput.value = vehicleType;
    });
}

renderData();

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // axios.post()

    console.log({
        orderId: orderIdInput.value,
        orderValue: orderValueInput.value,
        paymentType: paymentTypeInput.value,
        vehicleType: vehicleTypeInput.value,
    });
})