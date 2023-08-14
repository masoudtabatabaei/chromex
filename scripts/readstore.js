(() => {
    console.log("readstore.js loaded");
    let auth = localStorage.getItem("zonepanel_access_token");
    if (auth) {
        chrome.storage.local.set({ auth });
    }

    window.addEventListener("storage", () => {
        console.log(auth);
        if (!auth) {
            console.log("-- Please login first ---");
        } else {
            console.log("-- Auth token already exist --");
            chrome.storage.local.set({ auth });
        }
    });
})();

// (async () => {
//     let auth = localStorage.getItem("zonepanel_access_token");
//     console.log(auth);
//     chrome.runtime.sendMessage({ type: "SET_AUTH", auth }, function (response) {
//         console.log(response.message);
//     });
// })();