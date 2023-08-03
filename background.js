chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.msg === "orderData") {
        console.log(request);
        sendResponse({
            status: "Ok",
            title: request.data.title,
            description: request.data.description
        });
    }
});