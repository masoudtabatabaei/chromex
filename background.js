// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.type === "SET_AUTH") {
//         console.log("AUTH in bg:", request.auth);
//         sendResponse({
//             message: "Auth received by background.js",
//         });
//     }
// });

// const getCurrentTabInfo = () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
//         if (tabs && tabs.length > 0) {
//             let currentTab = tabs[0];
//             console.log("Current Tab Info:", currentTab);
//             // chrome.runtime.sendMessage({ action: "from_content_script", data: "Masoud" }, function (response) {
//             //     // Handle response from service worker if needed
//             //     console.log("Response from content.js:", response);
//             // });
//             let response = await chrome.runtime.sendMessage({ action: "open_dialog_box", data: "Masoud" });
//             console.log(response);
//         }
//     });
// }

chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        console.log(activeTab);

        let zonePanelUrl = "https://zonepanel.dev.beepbeep.live";
        if (activeTab?.pendingUrl?.indexOf(zonePanelUrl) !== -1 || activeTab?.url?.indexOf(zonePanelUrl) !== -1) {
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                files: ["scripts/readstore.js"]
            }).then(() => console.log("script injected"));
        }

        // chrome.tabs.sendMessage(activeTab.id, { msg: "I am from background.js" }, function (response) {
        //     console.log(activeTab.url, response);
        // });
    })
})