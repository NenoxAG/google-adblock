
chrome.storage.sync.get(['blockTop'], function(result) {
    if(result.blockTop === true)
        document.getElementById("tads")?.remove();
});

chrome.storage.sync.get(['blockBottom'], function(result) {
    if(result.blockBottom === true)
        document.getElementById("bottomads")?.remove();
});

chrome.storage.sync.get(['blockSidebar'], function(result) {
    if(result.blockSidebar === true) {
        document.getElementsByClassName("hp3sk")[1]?.classList.add("hide-opacity");
        setTimeout(function() {
            document.getElementsByClassName("hp3sk")[1]?.remove();
        }, 250);
    }
});

document.getElementsByClassName("commercial-unit-desktop-top")[0]?.remove();